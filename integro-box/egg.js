(()=>{var Bl=0,Io=1,zl=2;var Po=1,$r=2,pn=3,Rn=0,Ft=1,mn=2,Dn=0,oi=1,Lo=2,Do=3,Uo=4,kl=5,qn=100,Vl=101,Hl=102,Gl=103,Wl=104,Xl=200,ql=201,$l=202,Yl=203,Mr=204,Sr=205,Zl=206,Jl=207,Kl=208,jl=209,Ql=210,ec=211,tc=212,nc=213,ic=214,Yr=0,Zr=1,Jr=2,li=3,Kr=4,jr=5,Qr=6,ea=7,No=0,sc=1,rc=2,Un=0,ac=1,oc=2,lc=3,ks=4,cc=5,hc=6,uc=7;var Fo=300,fi=301,pi=302,ta=303,na=304,Vs=306,br=1e3,Wn=1001,Er=1002,Zt=1003,dc=1004;var Hs=1005;var nn=1006,ia=1007;var Kn=1008;var an=1009,Oo=1010,Bo=1011,es=1012,sa=1013,jn=1014,gn=1015,ts=1016,ra=1017,aa=1018,ns=1020,zo=35902,ko=35899,Vo=1021,Ho=1022,Kt=1023,Vi=1026,is=1027,Go=1028,oa=1029,Wo=1030,la=1031;var ca=1033,Gs=33776,Ws=33777,Xs=33778,qs=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,xa=37808,_a=37809,va=37810,ya=37811,Ma=37812,Sa=37813,ba=37814,Ea=37815,Ta=37816,wa=37817,Aa=37818,Ca=37819,Ra=37820,Ia=37821,Pa=36492,La=36494,Da=36495,Ua=36283,Na=36284,Fa=36285,Oa=36286;var ys=2300,Tr=2301,yr=2302,bo=2400,Eo=2401,To=2402;var fc=3200,pc=3201;var Xo=0,mc=1,Nn="",St="srgb",ci="srgb-linear",Ms="linear",it="srgb";var ai=7680;var wo=519,gc=512,xc=513,_c=514,qo=515,vc=516,yc=517,Mc=518,Sc=519,wr=35044;var $o="300 es",tn=2e3,Ss=2001;var In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,Ar=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function ja(i,e,t){return(1-t)*i+t*e}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3];if(l===0){e[t+0]=c,e[t+1]=a,e[t+2]=h,e[t+3]=u;return}if(l===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=S;return}if(u!==S||c!==f||a!==p||h!==x){let m=1-l,d=c*f+a*p+h*x+u*S,P=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){let N=Math.sqrt(w),C=Math.atan2(N,d*P);m=Math.sin(m*C)/N,l=Math.sin(l*C)/N}let E=l*P;if(c=c*m+f*E,a=a*m+p*E,h=h*m+x*E,u=u*m+S*E,m===1-l){let N=1/Math.sqrt(c*c+a*a+h*h+u*u);c*=N,a*=N,h*=N,u*=N}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=l*x+h*u+c*p-a*f,e[t+1]=c*x+h*f+a*u-l*p,e[t+2]=a*x+h*p+l*f-c*u,e[t+3]=h*x-l*u-c*f-a*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(s/2),u=l(r/2),f=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u+f*p*x;break;case"YZX":this._x=f*h*u+a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u-f*p*x;break;case"XZY":this._x=f*h*u-a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],u=t[10],f=n+l+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-a)*p,this._z=(o-s)*p}else if(n>l&&n>u){let p=2*Math.sqrt(1+n-l-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+a)/p}else if(l>u){let p=2*Math.sqrt(1+l-n-u);this._w=(r-a)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-l);this._w=(o-s)/p,this._x=(r+a)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-s*l,this._w=o*h-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,l=o*e._w+n*e._x+s*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-l*l;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let a=Math.sqrt(c),h=Math.atan2(a,l),u=Math.sin((1-t)*h)/a,f=Math.sin(t*h)/a;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),h=2*(l*t-r*s),u=2*(r*n-o*t);return this.x=t+c*a+o*u-l*h,this.y=n+c*h+l*a-r*u,this.z=s+c*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new X,xl=new Pn,qe=class i{constructor(e,t,n,s,r,o,l,c,a){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],S=s[0],m=s[3],d=s[6],P=s[1],w=s[4],E=s[7],N=s[2],C=s[5],O=s[8];return r[0]=o*S+l*P+c*N,r[3]=o*m+l*w+c*C,r[6]=o*d+l*E+c*O,r[1]=a*S+h*P+u*N,r[4]=a*m+h*w+u*C,r[7]=a*d+h*E+u*O,r[2]=f*S+p*P+x*N,r[5]=f*m+p*w+x*C,r[8]=f*d+p*E+x*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=h*o-l*a,f=l*c-h*r,p=a*r-o*c,x=t*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=u*S,e[1]=(s*a-h*n)*S,e[2]=(l*n-s*o)*S,e[3]=f*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-l*t)*S,e[6]=p*S,e[7]=(n*c-a*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eo=new qe;function Yo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bc(){let i=bs("canvas");return i.style.display="block",i}var _l={};function Hi(i){i in _l||(_l[i]=!0,console.warn(i))}function Ec(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var vl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){let i={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?Ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ci]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:vl,fromXYZ:yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:it,toXYZ:vl,fromXYZ:yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var tt=hh();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,Cr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=bs("canvas")),Ei.width=e.width,Ei.height=e.height;let s=Ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uh=0,Gi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dh=0,no=new X,zt=class i extends In{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=nn,o=Kn,l=Kt,c=an,a=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Xn(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Fo;zt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],h=c[4],u=c[8],f=c[1],p=c[5],x=c[9],S=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(x+m)<.1&&Math.abs(a+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(a+1)/2,E=(p+1)/2,N=(d+1)/2,C=(h+f)/4,O=(u+S)/4,H=(x+m)/4;return w>E&&w>N?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=O/n):E>N?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=H/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=O/r,s=H/r),this.set(n,s,r,t),this}let P=Math.sqrt((m-x)*(m-x)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(P)<.001&&(P=1),this.x=(m-x)/P,this.y=(u-S)/P,this.z=(f-h)/P,this.w=Math.acos((a+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rr=class extends In{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new zt(s);this.textures=[];let o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Rr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Es=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ir=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(r,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),er.subVectors(this.max,fs),Ti.subVectors(e.a,fs),wi.subVectors(e.b,fs),Ai.subVectors(e.c,fs),Bn.subVectors(wi,Ti),zn.subVectors(Ai,wi),ni.subVectors(Ti,Ai);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!io(t,Ti,wi,Ai,er)||(t=[1,0,0,0,1,0,0,0,1],!io(t,Ti,wi,Ai,er))?!1:(tr.crossVectors(Bn,zn),t=[tr.x,tr.y,tr.z],io(t,Ti,wi,Ai,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new X,new X,new X,new X,new X,new X,new X,new X],jt=new X,Qs=new $n,Ti=new X,wi=new X,Ai=new X,Bn=new X,zn=new X,ni=new X,fs=new X,er=new X,tr=new X,ii=new X;function io(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ii.fromArray(i,r);let l=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=e.dot(ii),a=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var fh=new $n,ps=new X,so=new X,Wi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);let t=ps.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(so)),this.expandByPoint(ps.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new X,ro=new X,nr=new X,kn=new X,ao=new X,ir=new X,oo=new X,Pr=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ro.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ro);let r=e.distanceTo(t)*.5,o=-this.direction.dot(nr),l=kn.dot(this.direction),c=-kn.dot(nr),a=kn.lengthSq(),h=Math.abs(1-o*o),u,f,p,x;if(h>0)if(u=o*c-l,f=o*l-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let S=1/h;u*=S,f*=S,p=u*(u+o*f+2*l)+f*(o*u+f+2*c)+a}else f=r,u=Math.max(0,-(o*f+l)),p=-u*u+f*(f+2*c)+a;else f=-r,u=Math.max(0,-(o*f+l)),p=-u*u+f*(f+2*c)+a;else f<=-x?(u=Math.max(0,-(-o*r+l)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+a):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+a):(u=Math.max(0,-(o*r+l)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+a);else f=o>0?-r:r,u=Math.max(0,-(o*f+l)),p=-u*u+f*(f+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ro).addScaledVector(nr,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return a>=0?(n=(e.min.x-f.x)*a,s=(e.max.x-f.x)*a):(n=(e.max.x-f.x)*a,s=(e.min.x-f.x)*a),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(l=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(l=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){ao.subVectors(t,e),ir.subVectors(n,e),oo.crossVectors(ao,ir);let o=this.direction.dot(oo),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;kn.subVectors(this.origin,e);let c=l*this.direction.dot(ir.crossVectors(kn,ir));if(c<0)return null;let a=l*this.direction.dot(ao.cross(kn));if(a<0||c+a>o)return null;let h=-l*kn.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(e,t,n,s,r,o,l,c,a,h,u,f,p,x,S,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,h,u,f,p,x,S,m)}set(e,t,n,s,r,o,l,c,a,h,u,f,p,x,S,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=l,d[13]=c,d[2]=a,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ci.setFromMatrixColumn(e,0).length(),r=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,x=l*h,S=l*u;t[0]=c*h,t[4]=-c*u,t[8]=a,t[1]=p+x*a,t[5]=f-S*a,t[9]=-l*c,t[2]=S-f*a,t[6]=x+p*a,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,x=a*h,S=a*u;t[0]=f+S*l,t[4]=x*l-p,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-l,t[2]=p*l-x,t[6]=S+f*l,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,x=a*h,S=a*u;t[0]=f-S*l,t[4]=-o*u,t[8]=x+p*l,t[1]=p+x*l,t[5]=o*h,t[9]=S-f*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,x=l*h,S=l*u;t[0]=c*h,t[4]=x*a-p,t[8]=f*a+S,t[1]=c*u,t[5]=S*a+f,t[9]=p*a-x,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*a,x=l*c,S=l*a;t[0]=c*h,t[4]=S-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=p*u+x,t[10]=f-S*u}else if(e.order==="XZY"){let f=o*c,p=o*a,x=l*c,S=l*a;t[0]=c*h,t[4]=-u,t[8]=a*h,t[1]=f*u+S,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=l*h,t[10]=S*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ph,e,mh)}lookAt(e,t,n){let s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Vn.crossVectors(n,Gt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Vn.crossVectors(n,Gt)),Vn.normalize(),sr.crossVectors(Gt,Vn),s[0]=Vn.x,s[4]=sr.x,s[8]=Gt.x,s[1]=Vn.y,s[5]=sr.y,s[9]=Gt.y,s[2]=Vn.z,s[6]=sr.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],S=n[6],m=n[10],d=n[14],P=n[3],w=n[7],E=n[11],N=n[15],C=s[0],O=s[4],H=s[8],M=s[12],y=s[1],B=s[5],$=s[9],ee=s[13],j=s[2],se=s[6],ne=s[10],me=s[14],K=s[3],ge=s[7],ve=s[11],Re=s[15];return r[0]=o*C+l*y+c*j+a*K,r[4]=o*O+l*B+c*se+a*ge,r[8]=o*H+l*$+c*ne+a*ve,r[12]=o*M+l*ee+c*me+a*Re,r[1]=h*C+u*y+f*j+p*K,r[5]=h*O+u*B+f*se+p*ge,r[9]=h*H+u*$+f*ne+p*ve,r[13]=h*M+u*ee+f*me+p*Re,r[2]=x*C+S*y+m*j+d*K,r[6]=x*O+S*B+m*se+d*ge,r[10]=x*H+S*$+m*ne+d*ve,r[14]=x*M+S*ee+m*me+d*Re,r[3]=P*C+w*y+E*j+N*K,r[7]=P*O+w*B+E*se+N*ge,r[11]=P*H+w*$+E*ne+N*ve,r[15]=P*M+w*ee+E*me+N*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],S=e[7],m=e[11],d=e[15];return x*(+r*c*u-s*a*u-r*l*f+n*a*f+s*l*p-n*c*p)+S*(+t*c*p-t*a*f+r*o*f-s*o*p+s*a*h-r*c*h)+m*(+t*a*u-t*l*p-r*o*u+n*o*p+r*l*h-n*a*h)+d*(-s*l*h-t*c*u+t*l*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],S=e[13],m=e[14],d=e[15],P=u*m*a-S*f*a+S*c*p-l*m*p-u*c*d+l*f*d,w=x*f*a-h*m*a-x*c*p+o*m*p+h*c*d-o*f*d,E=h*S*a-x*u*a+x*l*p-o*S*p-h*l*d+o*u*d,N=x*u*c-h*S*c-x*l*f+o*S*f+h*l*m-o*u*m,C=t*P+n*w+s*E+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=P*O,e[1]=(S*f*r-u*m*r-S*s*p+n*m*p+u*s*d-n*f*d)*O,e[2]=(l*m*r-S*c*r+S*s*a-n*m*a-l*s*d+n*c*d)*O,e[3]=(u*c*r-l*f*r-u*s*a+n*f*a+l*s*p-n*c*p)*O,e[4]=w*O,e[5]=(h*m*r-x*f*r+x*s*p-t*m*p-h*s*d+t*f*d)*O,e[6]=(x*c*r-o*m*r-x*s*a+t*m*a+o*s*d-t*c*d)*O,e[7]=(o*f*r-h*c*r+h*s*a-t*f*a-o*s*p+t*c*p)*O,e[8]=E*O,e[9]=(x*u*r-h*S*r-x*n*p+t*S*p+h*n*d-t*u*d)*O,e[10]=(o*S*r-x*l*r+x*n*a-t*S*a-o*n*d+t*l*d)*O,e[11]=(h*l*r-o*u*r-h*n*a+t*u*a+o*n*p-t*l*p)*O,e[12]=N*O,e[13]=(h*S*s-x*u*s+x*n*f-t*S*f-h*n*m+t*u*m)*O,e[14]=(x*l*s-o*S*s-x*n*c+t*S*c+o*n*m-t*l*m)*O,e[15]=(o*u*s-h*l*s+h*n*c-t*u*c-o*n*f+t*l*f)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+n,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,u=l+l,f=r*a,p=r*h,x=r*u,S=o*h,m=o*u,d=l*u,P=c*a,w=c*h,E=c*u,N=n.x,C=n.y,O=n.z;return s[0]=(1-(S+d))*N,s[1]=(p+E)*N,s[2]=(x-w)*N,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(f+d))*C,s[6]=(m+P)*C,s[7]=0,s[8]=(x+w)*O,s[9]=(m-P)*O,s[10]=(1-(f+S))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),l=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);let a=1/r,h=1/o,u=1/l;return Qt.elements[0]*=a,Qt.elements[1]*=a,Qt.elements[2]*=a,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,o,l=tn,c=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,S;if(c)x=r/(o-r),S=o*r/(o-r);else if(l===tn)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(l===Ss)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=x,a[14]=S,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=tn,c=!1){let a=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),x,S;if(c)x=1/(o-r),S=o/(o-r);else if(l===tn)x=-2/(o-r),S=-(o+r)/(o-r);else if(l===Ss)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=p,a[2]=0,a[6]=0,a[10]=x,a[14]=S,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ci=new X,Qt=new xt,ph=new X(0,0,0),mh=new X(1,1,1),Vn=new X,sr=new X,Gt=new X,Ml=new xt,Sl=new Pn,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gh=0,bl=new X,Ri=new Pn,bn=new xt,rr=new X,ms=new X,xh=new X,_h=new Pn,El=new X(1,0,0),Tl=new X(0,1,0),wl=new X(0,0,1),Al={type:"added"},vh={type:"removed"},Ii={type:"childadded",child:null},lo={type:"childremoved",child:null},Ct=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new X,t=new sn,n=new Pn,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new qe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ms,rr,this.up):bn.lookAt(rr,ms,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vh),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,_h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let u=c[a];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new X(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new X,En=new X,co=new X,Tn=new X,Pi=new X,Li=new X,Cl=new X,ho=new X,uo=new X,fo=new X,po=new pt,mo=new pt,go=new pt,wn=class i{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),En.subVectors(n,t),co.subVectors(e,t);let o=en.dot(en),l=en.dot(En),c=en.dot(co),a=En.dot(En),h=En.dot(co),u=o*a-l*l;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(a*c-l*h)*f,x=(o*h-l*c)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(l,Tn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,n),go.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(po,r.x),o.addScaledVector(mo,r.y),o.addScaledVector(go,r.z),o}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),En.subVectors(e,t),en.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),En.subVectors(this.a,this.b),en.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;Pi.subVectors(s,n),Li.subVectors(r,n),ho.subVectors(e,n);let c=Pi.dot(ho),a=Li.dot(ho);if(c<=0&&a<=0)return t.copy(n);uo.subVectors(e,s);let h=Pi.dot(uo),u=Li.dot(uo);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*a;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Pi,o);fo.subVectors(e,r);let p=Pi.dot(fo),x=Li.dot(fo);if(x>=0&&p<=x)return t.copy(r);let S=p*a-c*x;if(S<=0&&a>=0&&x<=0)return l=a/(a-x),t.copy(n).addScaledVector(Li,l);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Cl.subVectors(r,s),l=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(Cl,l);let d=1/(m+S+f);return o=S*d,l=f*d,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ch(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xo(o,r,e+1/3),this.g=xo(o,r,e),this.b=xo(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return tt.workingToColorSpace(Pt.copy(this),e),Math.round(et(Pt.r*255,0,255))*65536+Math.round(et(Pt.g*255,0,255))*256+Math.round(et(Pt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Pt.copy(this),t);let n=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let u=o-l;switch(a=h<=.5?u/(o+l):u/(2-o-l),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=St){tt.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,s=Pt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(ar);let n=ja(Hn.h,ar.h,t),s=ja(Hn.s,ar.s,t),r=ja(Hn.l,ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Ye;Ye.NAMES=Tc;var yh=0,Ln=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=oi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hi=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new X,or=new $e,Mh=0,Bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wr,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wr&&(e.usage=this.usage),e}};var ws=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sh=0,Yt=new xt,_o=new Ct,Di=new X,Wt=new $n,gs=new $n,wt=new X,Jt=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yo(e)?As:ws)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];gs.setFromBufferAttribute(l),this.morphTargetsRelative?(wt.addVectors(Wt.min,gs.min),Wt.expandByPoint(wt),wt.addVectors(Wt.max,gs.max),Wt.expandByPoint(wt)):(Wt.expandByPoint(gs.min),Wt.expandByPoint(gs.max))}Wt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)wt.fromBufferAttribute(l,a),c&&(Di.fromBufferAttribute(e,a),wt.add(Di)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),l=[],c=[];for(let H=0;H<n.count;H++)l[H]=new X,c[H]=new X;let a=new X,h=new X,u=new X,f=new $e,p=new $e,x=new $e,S=new X,m=new X;function d(H,M,y){a.fromBufferAttribute(n,H),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,H),p.fromBufferAttribute(r,M),x.fromBufferAttribute(r,y),h.sub(a),u.sub(a),p.sub(f),x.sub(f);let B=1/(p.x*x.y-x.x*p.y);isFinite(B)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(B),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(B),l[H].add(S),l[M].add(S),l[y].add(S),c[H].add(m),c[M].add(m),c[y].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let H=0,M=P.length;H<M;++H){let y=P[H],B=y.start,$=y.count;for(let ee=B,j=B+$;ee<j;ee+=3)d(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let w=new X,E=new X,N=new X,C=new X;function O(H){N.fromBufferAttribute(s,H),C.copy(N);let M=l[H];w.copy(M),w.sub(N.multiplyScalar(N.dot(M))).normalize(),E.crossVectors(C,M);let B=E.dot(c[H])<0?-1:1;o.setXYZW(H,w.x,w.y,w.z,B)}for(let H=0,M=P.length;H<M;++H){let y=P[H],B=y.start,$=y.count;for(let ee=B,j=B+$;ee<j;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new X,r=new X,o=new X,l=new X,c=new X,a=new X,h=new X,u=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),l.add(h),c.add(h),a.add(h),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,a.x,a.y,a.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,u=l.normalized,f=new a.constructor(c.length*h),p=0,x=0;for(let S=0,m=c.length;S<m;S++){l.isInterleavedBufferAttribute?p=c[S]*l.data.stride+l.offset:p=c[S]*h;for(let d=0;d<h;d++)f[x++]=a[p++]}return new Bt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,u=a.length;h<u;h++){let f=a[h],p=e(f,n);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let u=0,f=a.length;u<f;u++){let p=a[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=new xt,si=new Pr,lr=new Wi,Il=new X,cr=new X,hr=new X,ur=new X,vo=new X,dr=new X,Pl=new X,fr=new X,Nt=class extends Ct{constructor(e=new Jt,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){dr.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],u=r[c];h!==0&&(vo.fromBufferAttribute(u,e),o?dr.addScaledVector(vo,h):dr.addScaledVector(vo.sub(t),h))}t.add(dr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(lr.containsPoint(si.origin)===!1&&(si.intersectSphere(lr,Il)===null||si.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Rl.copy(r).invert(),si.copy(e.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){let m=f[x],d=o[m.materialIndex],P=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=P,N=w;E<N;E+=3){let C=l.getX(E),O=l.getX(E+1),H=l.getX(E+2);s=pr(this,d,e,n,a,h,u,C,O,H),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,d=S;m<d;m+=3){let P=l.getX(m),w=l.getX(m+1),E=l.getX(m+2);s=pr(this,o,e,n,a,h,u,P,w,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){let m=f[x],d=o[m.materialIndex],P=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=P,N=w;E<N;E+=3){let C=E,O=E+1,H=E+2;s=pr(this,d,e,n,a,h,u,C,O,H),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=x,d=S;m<d;m+=3){let P=m,w=m+1,E=m+2;s=pr(this,o,e,n,a,h,u,P,w,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function bh(i,e,t,n,s,r,o,l){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===Rn,l),c===null)return null;fr.copy(l),fr.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(fr);return a<t.near||a>t.far?null:{distance:a,point:fr.clone(),object:i}}function pr(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,cr),i.getVertexPosition(c,hr),i.getVertexPosition(a,ur);let h=bh(i,e,t,n,cr,hr,ur,Pl);if(h){let u=new X;wn.getBarycoord(Pl,cr,hr,ur,u),s&&(h.uv=wn.getInterpolatedAttribute(s,l,c,a,u,new $e)),r&&(h.uv1=wn.getInterpolatedAttribute(r,l,c,a,u,new $e)),o&&(h.normal=wn.getInterpolatedAttribute(o,l,c,a,u,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:l,b:c,c:a,normal:new X,materialIndex:0};wn.getNormal(cr,hr,ur,f.normal),h.face=f,h.barycoord=u}return h}var Yn=class i extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function x(S,m,d,P,w,E,N,C,O,H,M){let y=E/O,B=N/H,$=E/2,ee=N/2,j=C/2,se=O+1,ne=H+1,me=0,K=0,ge=new X;for(let ve=0;ve<ne;ve++){let Re=ve*B-ee;for(let Ve=0;Ve<se;Ve++){let Xe=Ve*y-$;ge[S]=Xe*P,ge[m]=Re*w,ge[d]=j,a.push(ge.x,ge.y,ge.z),ge[S]=0,ge[m]=0,ge[d]=C>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Ve/O),u.push(1-ve/H),me+=1}}for(let ve=0;ve<H;ve++)for(let Re=0;Re<O;Re++){let Ve=f+Re+se*ve,Xe=f+Re+se*(ve+1),Ke=f+(Re+1)+se*(ve+1),je=f+(Re+1)+se*ve;c.push(Ve,Xe,je),c.push(Xe,Ke,je),K+=6}l.addGroup(p,K,M),p+=K,f+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=mi(i[t]);for(let s in n)e[s]=n[s]}return e}function Eh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var wc={clone:mi,merge:Lt},Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Cs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new X,Ll=new $e,Dl=new $e,At=class extends Cs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Ll,Dl),t.subVectors(Dl,Ll)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Ni=1,Lr=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Ui,Ni,e,t);s.layers=this.layers,this.add(s);let r=new At(Ui,Ni,e,t);r.layers=this.layers,this.add(r);let o=new At(Ui,Ni,e,t);o.layers=this.layers,this.add(o);let l=new At(Ui,Ni,e,t);l.layers=this.layers,this.add(l);let c=new At(Ui,Ni,e,t);c.layers=this.layers,this.add(c);let a=new At(Ui,Ni,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,a),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Rs=class extends zt{constructor(e=[],t=fi,n,s,r,o,l,c,a,h){super(e,t,n,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dr=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Nt(s,r),l=t.minFilter;return t.minFilter===Kn&&(t.minFilter=nn),new Lr(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},An=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ah={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),d=this._getHandJoint(a,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;a.inputState.pinching&&f>p+x?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&f<=p-x&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ah)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Is=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wr,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new X,Ps=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fi,xs=new X,Oi=new X,Bi=new X,zi=new $e,_s=new $e,Ac=new xt,mr=new X,vs=new X,gr=new X,Ul=new $e,yo=new $e,Nl=new $e,$i=class extends Ct{constructor(e=new ui){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new Jt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ur(t,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Ps(n,3,0,!1)),Fi.setAttribute("uv",new Ps(n,2,3,!1))}this.geometry=Fi,this.material=e,this.center=new $e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Ac.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;xr(mr.set(-.5,-.5,0),Bi,o,Oi,s,r),xr(vs.set(.5,-.5,0),Bi,o,Oi,s,r),xr(gr.set(.5,.5,0),Bi,o,Oi,s,r),Ul.set(0,0),yo.set(1,0),Nl.set(1,1);let l=e.ray.intersectTriangle(mr,vs,gr,!1,xs);if(l===null&&(xr(vs.set(-.5,.5,0),Bi,o,Oi,s,r),yo.set(0,1),l=e.ray.intersectTriangle(mr,gr,vs,!1,xs),l===null))return;let c=e.ray.origin.distanceTo(xs);c<e.near||c>e.far||t.push({distance:c,point:xs.clone(),uv:wn.getInterpolation(xs,mr,vs,gr,Ul,yo,Nl,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xr(i,e,t,n,s,r){zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*zi.x-s*zi.y,_s.y=s*zi.x+r*zi.y):_s.copy(zi),i.copy(e),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(Ac)}var Mo=new X,Ch=new X,Rh=new qe,un=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Mo.subVectors(n,t).cross(Ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rh.getNormalMatrix(e),s=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Wi,Ih=new $e(.5,.5),_r=new X,Yi=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],u=r[5],f=r[6],p=r[7],x=r[8],S=r[9],m=r[10],d=r[11],P=r[12],w=r[13],E=r[14],N=r[15];if(s[0].setComponents(a-o,p-h,d-x,N-P).normalize(),s[1].setComponents(a+o,p+h,d+x,N+P).normalize(),s[2].setComponents(a+l,p+u,d+S,N+w).normalize(),s[3].setComponents(a-l,p-u,d-S,N-w).normalize(),n)s[4].setComponents(c,f,m,E).normalize(),s[5].setComponents(a-c,p-f,d-m,N-E).normalize();else if(s[4].setComponents(a-c,p-f,d-m,N-E).normalize(),t===tn)s[5].setComponents(a+c,p+f,d+m,N+E).normalize();else if(t===Ss)s[5].setComponents(c,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);let t=Ih.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zi=class extends zt{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ls=class extends zt{constructor(e,t,n=jn,s,r,o,l=Zt,c=Zt,a,h=Vi,u=1){if(h!==Vi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,l,c,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ds=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Us=class i extends Jt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,S=[],m=n/2,d=0;P(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(p,2));function P(){let E=new X,N=new X,C=0,O=(t-e)/n;for(let H=0;H<=r;H++){let M=[],y=H/r,B=y*(t-e)+e;for(let $=0;$<=s;$++){let ee=$/s,j=ee*c+l,se=Math.sin(j),ne=Math.cos(j);N.x=B*se,N.y=-y*n+m,N.z=B*ne,u.push(N.x,N.y,N.z),E.set(se,O,ne).normalize(),f.push(E.x,E.y,E.z),p.push(ee,1-y),M.push(x++)}S.push(M)}for(let H=0;H<s;H++)for(let M=0;M<r;M++){let y=S[M][H],B=S[M+1][H],$=S[M+1][H+1],ee=S[M][H+1];(e>0||M!==0)&&(h.push(y,B,ee),C+=3),(t>0||M!==r-1)&&(h.push(B,$,ee),C+=3)}a.addGroup(d,C,0),d+=C}function w(E){let N=x,C=new $e,O=new X,H=0,M=E===!0?e:t,y=E===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),x++;let B=x;for(let $=0;$<=s;$++){let j=$/s*c+l,se=Math.cos(j),ne=Math.sin(j);O.x=M*ne,O.y=m*y,O.z=M*se,u.push(O.x,O.y,O.z),f.push(0,y,0),C.x=se*.5+.5,C.y=ne*.5*y+.5,p.push(C.x,C.y),x++}for(let $=0;$<s;$++){let ee=N+$,j=B+$;E===!0?h.push(j,j+1,ee):h.push(j+1,j,ee),H+=3}a.addGroup(d,H,E===!0?1:2),d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ns=class i extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,h=c+1,u=e/l,f=t/c,p=[],x=[],S=[],m=[];for(let d=0;d<h;d++){let P=d*f-o;for(let w=0;w<a;w++){let E=w*u-r;x.push(E,-P,0),S.push(0,0,1),m.push(w/l),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let P=0;P<l;P++){let w=P+a*d,E=P+a*(d+1),N=P+1+a*(d+1),C=P+1+a*d;p.push(w,E,C),p.push(E,N,C)}this.setIndex(p),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(S,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ji=class i extends Jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],u=new X,f=new X,p=[],x=[],S=[],m=[];for(let d=0;d<=n;d++){let P=[],w=d/n,E=0;d===0&&o===0?E=.5/t:d===n&&c===Math.PI&&(E=-.5/t);for(let N=0;N<=t;N++){let C=N/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+w*l),u.y=e*Math.cos(o+w*l),u.z=e*Math.sin(s+C*r)*Math.sin(o+w*l),x.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),m.push(C+E,1-w),P.push(a++)}h.push(P)}for(let d=0;d<n;d++)for(let P=0;P<t;P++){let w=h[d][P+1],E=h[d][P],N=h[d+1][P],C=h[d+1][P+1];(d!==0||o>0)&&p.push(w,E,C),(d!==n-1||c<Math.PI)&&p.push(E,N,C)}this.setIndex(p),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(S,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ki=class i extends Jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],l=[],c=[],a=[],h=new X,u=new X,f=new X;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let S=x/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(S),u.y=(e+t*Math.cos(m))*Math.sin(S),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),a.push(x/s),a.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let S=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,d=(s+1)*(p-1)+x,P=(s+1)*p+x;o.push(S,m,P),o.push(m,d,P)}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Fs=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Nr=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fr=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ph(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Or=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bo,endingEnd:bo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Eo:r=e,l=2*t-n;break;case To:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eo:o=e,c=2*n-t;break;case To:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),S=x*x,m=S*x,d=-f*m+2*f*S-f*x,P=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*x+1,w=(-1-p)*m+(1.5+p)*S+.5*x,E=p*m-p*S;for(let N=0;N!==l;++N)r[N]=d*o[h+N]+P*o[a+N]+w*o[c+N]+E*o[u+N];return r}},Br=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==l;++f)r[f]=o[a+f]*u+o[c+f]*h;return r}},zr=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Br(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Or(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case yr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return yr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&Ph(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yr,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(s)c=!0;else{let u=l*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let S=t[u+x];if(S!==t[f+x]||S!==t[p+x]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let u=l*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xt.prototype.ValueTypeName="";Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=Tr;var Zn=class extends Xt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=ys;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};kr.prototype.ValueTypeName="color";var Vr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Vr.prototype.ValueTypeName="number";var Hr=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let h=a+l;a!==h;a+=4)Pn.slerpFlat(r,0,o,a-l,o,a,c);return r}},Os=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hr(this.times,this.values,this.getValueSize(),e)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Xt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=ys;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Gr.prototype.ValueTypeName="vector";var Wr=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=a.length;u<f;u+=2){let p=a[u],x=a[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Cc=new Wr,Xr=class{constructor(e){this.manager=e!==void 0?e:Cc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ji=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},So=new xt,Fl=new X,Ol=new X,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ol),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var zs=class extends Cs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Co=class extends Ao{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Co}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qr=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jo="\\[\\]\\.:\\/",Lh=new RegExp("["+Jo+"]","g"),Ko="[^"+Jo+"]",Dh="[^"+Jo.replace("\\.","")+"]",Uh=/((?:WC+[\/:])*)/.source.replace("WC",Ko),Nh=/(WCOD+)?/.source.replace("WCOD",Dh),Fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),Oh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),Bh=new RegExp("^"+Uh+Nh+Fh+Oh+"$"),zh=["material","materials","bones","map"],Ro=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lh,"")}static parseTrackName(e){let t=Bh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Ro;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _m=new Float32Array(1);function jo(i,e,t,n){let s=kh(n);switch(t){case Vo:return i*e;case Go:return i*e/s.components*s.byteLength;case oa:return i*e/s.components*s.byteLength;case Wo:return i*e*2/s.components*s.byteLength;case la:return i*e*2/s.components*s.byteLength;case Ho:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case ca:return i*e*4/s.components*s.byteLength;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(e,8)/4;case ha:case da:return Math.max(i,8)*Math.max(e,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case La:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ua:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kh(i){switch(i){case an:case Oo:return{byteLength:1,components:1};case es:case Bo:case ts:return{byteLength:2,components:1};case ra:case aa:return{byteLength:2,components:4};case jn:case sa:case gn:return{byteLength:4,components:1};case zo:case ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function jc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hh(i){let e=new WeakMap;function t(l,c){let a=l.array,h=l.usage,u=a.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,a,h),l.onUploadCallback();let p;if(a instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)p=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)p=i.SHORT;else if(a instanceof Uint32Array)p=i.UNSIGNED_INT;else if(a instanceof Int32Array)p=i.INT;else if(a instanceof Int8Array)p=i.BYTE;else if(a instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:p,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,a){let h=c.array,u=c.updateRanges;if(i.bindBuffer(a,l),u.length===0)i.bufferSubData(a,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){let x=u[f],S=u[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,u[f]=S)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){let S=u[p];i.bufferSubData(a,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
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
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
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
#endif`,jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nu=`#ifdef USE_IRIDESCENCE
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
#endif`,iu=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,du=`#define PI 3.141592653589793
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
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pu=`vec3 transformedNormal = objectNormal;
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
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
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
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
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
#endif`,Vu=`struct PhysicalMaterial {
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
}`,Hu=`
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ju=`#if defined( USE_POINTS_UV )
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
#endif`,Qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
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
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ad=`float getShadowMask() {
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
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`uniform float scale;
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
}`,tf=`uniform vec3 diffuse;
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
}`,nf=`#include <common>
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#define LAMBERT
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
}`,af=`#define LAMBERT
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
}`,of=`#define MATCAP
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
}`,lf=`#define MATCAP
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
}`,cf=`#define NORMAL
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
}`,hf=`#define NORMAL
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
}`,uf=`#define PHONG
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
}`,df=`#define PHONG
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
}`,ff=`#define STANDARD
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
}`,pf=`#define STANDARD
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
}`,mf=`#define TOON
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
}`,gf=`#define TOON
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
}`,xf=`uniform float size;
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
}`,_f=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,yf=`uniform vec3 color;
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
}`,Mf=`uniform float rotation;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Gh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:$h,alphatest_pars_fragment:Yh,aomap_fragment:Zh,aomap_pars_fragment:Jh,batching_pars_vertex:Kh,batching_vertex:jh,begin_vertex:Qh,beginnormal_vertex:eu,bsdfs:tu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:su,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:au,clipping_planes_vertex:ou,color_fragment:lu,color_pars_fragment:cu,color_pars_vertex:hu,color_vertex:uu,common:du,cube_uv_reflection_fragment:fu,defaultnormal_vertex:pu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:xu,emissivemap_pars_fragment:_u,colorspace_fragment:vu,colorspace_pars_fragment:yu,envmap_fragment:Mu,envmap_common_pars_fragment:Su,envmap_pars_fragment:bu,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Nu,envmap_vertex:Tu,fog_vertex:wu,fog_pars_vertex:Au,fog_fragment:Cu,fog_pars_fragment:Ru,gradientmap_pars_fragment:Iu,lightmap_pars_fragment:Pu,lights_lambert_fragment:Lu,lights_lambert_pars_fragment:Du,lights_pars_begin:Uu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:zu,lights_physical_fragment:ku,lights_physical_pars_fragment:Vu,lights_fragment_begin:Hu,lights_fragment_maps:Gu,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Yu,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Ku,map_particle_pars_fragment:ju,metalnessmap_fragment:Qu,metalnessmap_pars_fragment:ed,morphinstance_vertex:td,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:sd,morphtarget_vertex:rd,normal_fragment_begin:ad,normal_fragment_maps:od,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:hd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:xd,premultiplied_alpha_fragment:_d,project_vertex:vd,dithering_fragment:yd,dithering_pars_fragment:Md,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Td,shadowmap_vertex:wd,shadowmask_pars_fragment:Ad,skinbase_vertex:Cd,skinning_pars_vertex:Rd,skinning_vertex:Id,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Ud,tonemapping_pars_fragment:Nd,transmission_fragment:Fd,transmission_pars_fragment:Od,uv_pars_fragment:Bd,uv_pars_vertex:zd,uv_vertex:kd,worldpos_vertex:Vd,background_vert:Hd,background_frag:Gd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:$d,depth_vert:Yd,depth_frag:Zd,distanceRGBA_vert:Jd,distanceRGBA_frag:Kd,equirect_vert:jd,equirect_frag:Qd,linedashed_vert:ef,linedashed_frag:tf,meshbasic_vert:nf,meshbasic_frag:sf,meshlambert_vert:rf,meshlambert_frag:af,meshmatcap_vert:of,meshmatcap_frag:lf,meshnormal_vert:cf,meshnormal_frag:hf,meshphong_vert:uf,meshphong_frag:df,meshphysical_vert:ff,meshphysical_frag:pf,meshtoon_vert:mf,meshtoon_frag:gf,points_vert:xf,points_frag:_f,shadow_vert:vf,shadow_frag:yf,sprite_vert:Mf,sprite_frag:Sf},Me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},xn={basic:{uniforms:Lt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Lt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Lt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Lt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Lt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Lt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Lt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Lt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Lt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Lt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Lt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Lt([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Lt([Me.lights,Me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};xn.physical={uniforms:Lt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Ba={r:0,b:0,g:0},gi=new sn,bf=new xt;function Ef(i,e,t,n,s,r,o){let l=new Ye(0),c=r===!0?0:1,a,h,u=null,f=0,p=null;function x(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function S(w){let E=!1,N=x(w);N===null?d(l,c):N&&N.isColor&&(d(N,1),E=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,E){let N=x(E);N&&(N.isCubeTexture||N.mapping===Vs)?(h===void 0&&(h=new Nt(new Yn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:mi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(E.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bf.makeRotationFromEuler(gi)),h.material.toneMapped=tt.getTransfer(N.colorSpace)!==it,(u!==N||f!==N.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=N,f=N.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(a===void 0&&(a=new Nt(new Ns(2,2),new rn({name:"BackgroundMaterial",uniforms:mi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(a)),a.material.uniforms.t2D.value=N,a.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,a.material.toneMapped=tt.getTransfer(N.colorSpace)!==it,N.matrixAutoUpdate===!0&&N.updateMatrix(),a.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||f!==N.version||p!==i.toneMapping)&&(a.material.needsUpdate=!0,u=N,f=N.version,p=i.toneMapping),a.layers.enableAll(),w.unshift(a,a.geometry,a.material,0,0,null))}function d(w,E){w.getRGB(Ba,Zo(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,E,o)}function P(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,E=1){l.set(w),c=E,d(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(l,c)},render:S,addToRenderList:m,dispose:P}}function Tf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function l(y,B,$,ee,j){let se=!1,ne=u(ee,$,B);r!==ne&&(r=ne,a(r.object)),se=p(y,ee,$,j),se&&x(y,ee,$,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,E(y,B,$,ee),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function a(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,B,$){let ee=$.wireframe===!0,j=n[y.id];j===void 0&&(j={},n[y.id]=j);let se=j[B.id];se===void 0&&(se={},j[B.id]=se);let ne=se[ee];return ne===void 0&&(ne=f(c()),se[ee]=ne),ne}function f(y){let B=[],$=[],ee=[];for(let j=0;j<t;j++)B[j]=0,$[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:ee,object:y,attributes:{},index:null}}function p(y,B,$,ee){let j=r.attributes,se=B.attributes,ne=0,me=$.getAttributes();for(let K in me)if(me[K].location>=0){let ve=j[K],Re=se[K];if(Re===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),ve===void 0||ve.attribute!==Re||Re&&ve.data!==Re.data)return!0;ne++}return r.attributesNum!==ne||r.index!==ee}function x(y,B,$,ee){let j={},se=B.attributes,ne=0,me=$.getAttributes();for(let K in me)if(me[K].location>=0){let ve=se[K];ve===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));let Re={};Re.attribute=ve,ve&&ve.data&&(Re.data=ve.data),j[K]=Re,ne++}r.attributes=j,r.attributesNum=ne,r.index=ee}function S(){let y=r.newAttributes;for(let B=0,$=y.length;B<$;B++)y[B]=0}function m(y){d(y,0)}function d(y,B){let $=r.newAttributes,ee=r.enabledAttributes,j=r.attributeDivisors;$[y]=1,ee[y]===0&&(i.enableVertexAttribArray(y),ee[y]=1),j[y]!==B&&(i.vertexAttribDivisor(y,B),j[y]=B)}function P(){let y=r.newAttributes,B=r.enabledAttributes;for(let $=0,ee=B.length;$<ee;$++)B[$]!==y[$]&&(i.disableVertexAttribArray($),B[$]=0)}function w(y,B,$,ee,j,se,ne){ne===!0?i.vertexAttribIPointer(y,B,$,j,se):i.vertexAttribPointer(y,B,$,ee,j,se)}function E(y,B,$,ee){S();let j=ee.attributes,se=$.getAttributes(),ne=B.defaultAttributeValues;for(let me in se){let K=se[me];if(K.location>=0){let ge=j[me];if(ge===void 0&&(me==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),me==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){let ve=ge.normalized,Re=ge.itemSize,Ve=e.get(ge);if(Ve===void 0)continue;let Xe=Ve.buffer,Ke=Ve.type,je=Ve.bytesPerElement,te=Ke===i.INT||Ke===i.UNSIGNED_INT||ge.gpuType===sa;if(ge.isInterleavedBufferAttribute){let ae=ge.data,Ae=ae.stride,Oe=ge.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<K.locationSize;Ie++)d(K.location+Ie,ae.meshPerAttribute);y.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<K.locationSize;Ie++)m(K.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ie=0;Ie<K.locationSize;Ie++)w(K.location+Ie,Re/K.locationSize,Ke,ve,Ae*je,(Oe+Re/K.locationSize*Ie)*je,te)}else{if(ge.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)d(K.location+ae,ge.meshPerAttribute);y.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ae=0;ae<K.locationSize;ae++)w(K.location+ae,Re/K.locationSize,Ke,ve,Re*je,Re/K.locationSize*ae*je,te)}}else if(ne!==void 0){let ve=ne[me];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(K.location,ve);break;case 3:i.vertexAttrib3fv(K.location,ve);break;case 4:i.vertexAttrib4fv(K.location,ve);break;default:i.vertexAttrib1fv(K.location,ve)}}}}P()}function N(){H();for(let y in n){let B=n[y];for(let $ in B){let ee=B[$];for(let j in ee)h(ee[j].object),delete ee[j];delete B[$]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let B=n[y.id];for(let $ in B){let ee=B[$];for(let j in ee)h(ee[j].object),delete ee[j];delete B[$]}delete n[y.id]}function O(y){for(let B in n){let $=n[B];if($[y.id]===void 0)continue;let ee=$[y.id];for(let j in ee)h(ee[j].object),delete ee[j];delete $[y.id]}}function H(){M(),o=!0,r!==s&&(r=s,a(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:H,resetDefaultState:M,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:m,disableUnusedAttributes:P}}function wf(i,e,t){let n;function s(a){n=a}function r(a,h){i.drawArrays(n,a,h),t.update(h,n,1)}function o(a,h,u){u!==0&&(i.drawArraysInstanced(n,a,h,u),t.update(h,n,u))}function l(a,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function c(a,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<a.length;x++)o(a[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,a,0,h,0,f,0,u);let x=0;for(let S=0;S<u;S++)x+=h[S]*f[S];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Af(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==Kt&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){let H=O===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==an&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==gn&&!H)}function c(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=c(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:P,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:N,maxSamples:C}}function Cf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new un,l=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):a();else{let P=r?0:n,w=P*4,E=d.clippingState||null;c.value=E,E=h(x,f,w,p);for(let N=0;N!==w;++N)E[N]=t[N];d.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let S=u!==null?u.length:0,m=null;if(S!==0){if(m=c.value,x!==!0||m===null){let d=p+S*4,P=f.matrixWorldInverse;l.getNormalMatrix(P),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,E=p;w!==S;++w,E+=4)o.copy(u[w]).applyMatrix4(P,l),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Rf(i){let e=new WeakMap;function t(o,l){return l===ta?o.mapping=fi:l===na&&(o.mapping=pi),o}function n(o){if(o&&o.isTexture){let l=o.mapping;if(l===ta||l===na)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let a=new Dr(c.height);return a.fromEquirectangularTexture(i,o),e.set(o,a),o.addEventListener("dispose",s),t(a.texture,o.mapping)}else return null}}return o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rs=4,Rc=[.125,.215,.35,.446,.526,.582],vi=20,Qo=new zs,Ic=new Ye,el=null,tl=0,nl=0,il=!1,_i=(1+Math.sqrt(5))/2,ss=1/_i,Pc=[new X(-_i,ss,0),new X(_i,ss,0),new X(-ss,0,_i),new X(ss,0,_i),new X(0,_i,-ss),new X(0,_i,ss),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],If=new X,Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=If}=r;el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ts,format:Kt,colorSpace:ci,depthBuffer:!1},s=Lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pf(r)),this._blurMaterial=Lf(r,e,t)}return s}_compileMaterial(e){let t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,s,r){let c=new At(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ic),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let S=new hi({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new Nt(new Yn,S),d=!1,P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,d=!0):(S.color.copy(Ic),d=!0);for(let w=0;w<6;w++){let E=w%3;E===0?(c.up.set(0,a[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):E===1?(c.up.set(0,0,a[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,a[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let N=this._cubeSize;za(s,E*N,w>2?N:0,N,N),u.setRenderTarget(s),d&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=P}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fi||e.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Pc[(s-r-1)%Pc.length];this._blur(e,r-1,r,o,l)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,l){let c=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Nt(this._lodPlanes[s],a),f=a.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),S=r/x,m=isFinite(r)?1+Math.floor(h*S):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let d=[],P=0;for(let O=0;O<vi;++O){let H=O/S,M=Math.exp(-H*H/2);d.push(M),O===0?P+=M:O<m&&(P+=2*M)}for(let O=0;O<d.length;O++)d[O]=d[O]/P;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);let{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;let E=this._sizeLods[s],N=3*E*(s>w-rs?s-w+rs:0),C=4*(this._cubeSize-E);za(t,N,C,3*E,2*E),c.setRenderTarget(t),c.render(u,Qo)}};function Pf(i){let e=[],t=[],n=[],s=i,r=i-rs+1+Rc.length;for(let o=0;o<r;o++){let l=Math.pow(2,s);t.push(l);let c=1/l;o>i-rs?c=Rc[o-i+rs-1]:o===0&&(c=0),n.push(c);let a=1/(l-2),h=-a,u=1+a,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,S=3,m=2,d=1,P=new Float32Array(S*x*p),w=new Float32Array(m*x*p),E=new Float32Array(d*x*p);for(let C=0;C<p;C++){let O=C%3*2/3-1,H=C>2?0:-1,M=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];P.set(M,S*x*C),w.set(f,m*x*C);let y=[C,C,C,C,C,C];E.set(y,d*x*C)}let N=new Jt;N.setAttribute("position",new Bt(P,S)),N.setAttribute("uv",new Bt(w,m)),N.setAttribute("faceIndex",new Bt(E,d)),e.push(N),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lc(i,e,t){let n=new fn(i,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lf(i,e,t){let n=new Float32Array(vi),s=new X(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Uc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function Df(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){let c=l.mapping,a=c===ta||c===na,h=c===fi||c===pi;if(a||h){let u=e.get(l),f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return t===null&&(t=new Va(i)),u=a?t.fromEquirectangular(l,u):t.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,e.set(l,u),u.texture;if(u!==void 0)return u.texture;{let p=l.image;return a&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Va(i)),u=a?t.fromEquirectangular(l):t.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,e.set(l,u),l.addEventListener("dispose",r),u.texture):null}}}return l}function s(l){let c=0,a=6;for(let h=0;h<a;h++)l[h]!==void 0&&c++;return c===a}function r(l){let c=l.target;c.removeEventListener("dispose",r);let a=e.get(c);a!==void 0&&(e.delete(c),a.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Uf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nf(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function a(u){let f=[],p=u.index,x=u.attributes.position,S=0;if(p!==null){let P=p.array;S=p.version;for(let w=0,E=P.length;w<E;w+=3){let N=P[w+0],C=P[w+1],O=P[w+2];f.push(N,C,C,O,O,N)}}else if(x!==void 0){let P=x.array;S=x.version;for(let w=0,E=P.length/3-1;w<E;w+=3){let N=w+0,C=w+1,O=w+2;f.push(N,C,C,O,O,N)}}else return;let m=new(Yo(f)?As:ws)(f,1);m.version=S;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&a(u)}else a(u);return r.get(u)}return{get:l,update:c,getWireframeAttribute:h}}function Ff(i,e,t){let n;function s(f){n=f}let r,o;function l(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function a(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,S){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)a(f[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,S,0,x);let d=0;for(let P=0;P<x;P++)d+=p[P]*S[P];t.update(d,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Of(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bf(i,e,t){let n=new WeakMap,s=new pt;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(l);if(f===void 0||f.count!==u){let M=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],P=l.morphAttributes.color||[],w=0;p===!0&&(w=1),x===!0&&(w=2),S===!0&&(w=3);let E=l.attributes.position.count*w,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let C=new Float32Array(E*N*4*u),O=new Es(C,E,N,u);O.type=gn,O.needsUpdate=!0;let H=w*4;for(let y=0;y<u;y++){let B=m[y],$=d[y],ee=P[y],j=E*N*4*y;for(let se=0;se<B.count;se++){let ne=se*H;p===!0&&(s.fromBufferAttribute(B,se),C[j+ne+0]=s.x,C[j+ne+1]=s.y,C[j+ne+2]=s.z,C[j+ne+3]=0),x===!0&&(s.fromBufferAttribute($,se),C[j+ne+4]=s.x,C[j+ne+5]=s.y,C[j+ne+6]=s.z,C[j+ne+7]=0),S===!0&&(s.fromBufferAttribute(ee,se),C[j+ne+8]=s.x,C[j+ne+9]=s.y,C[j+ne+10]=s.z,C[j+ne+11]=ee.itemSize===4?s.w:1)}}f={count:u,texture:O,size:new $e(E,N)},n.set(l,f),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<a.length;S++)p+=a[S];let x=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zf(i,e,t,n){let s=new WeakMap;function r(c){let a=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==a&&(e.update(u),s.set(u,a)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==a&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,a))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==a&&(f.update(),s.set(f,a))}return u}function o(){s=new WeakMap}function l(c){let a=c.target;a.removeEventListener("dispose",l),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:r,dispose:o}}var Qc=new zt,Nc=new Ls(1,1),eh=new Es,th=new Ir,nh=new Rs,Fc=[],Oc=[],Bc=new Float32Array(16),zc=new Float32Array(9),kc=new Float32Array(4);function os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=Oc[e];t===void 0&&(t=new Int32Array(e),Oc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Hf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Gf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Wf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),Tt(t,n)}}function Xf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),Tt(t,n)}}function qf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),Tt(t,n)}}function $f(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Kf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function tp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=qo,r=Nc):r=Qc,t.setTexture2D(e||r,s)}function np(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||th,s)}function ip(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nh,s)}function sp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||eh,s)}function rp(i){switch(i){case 5126:return kf;case 35664:return Vf;case 35665:return Hf;case 35666:return Gf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return $f;case 35667:case 35671:return Yf;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return Kf;case 36294:return jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}function ap(i,e){i.uniform1fv(this.addr,e)}function op(i,e){let t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function lp(i,e){let t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function cp(i,e){let t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function hp(i,e){let t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function up(i,e){let t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dp(i,e){let t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fp(i,e){i.uniform1iv(this.addr,e)}function pp(i,e){i.uniform2iv(this.addr,e)}function mp(i,e){i.uniform3iv(this.addr,e)}function gp(i,e){i.uniform4iv(this.addr,e)}function xp(i,e){i.uniform1uiv(this.addr,e)}function _p(i,e){i.uniform2uiv(this.addr,e)}function vp(i,e){i.uniform3uiv(this.addr,e)}function yp(i,e){i.uniform4uiv(this.addr,e)}function Mp(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qc,r[o])}function Sp(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||th,r[o])}function bp(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nh,r[o])}function Ep(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||eh,r[o])}function Tp(i){switch(i){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return xp;case 36294:return _p;case 36295:return vp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Ep}}var rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rp(t.type)}},al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function Vc(i,e){i.seq.push(e),i.map[e.id]=e}function wp(i,e,t){let n=i.name,s=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),o=sl.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){Vc(t,a===void 0?new rl(l,i,e):new al(l,i,e));break}else{let u=t.map[l];u===void 0&&(u=new ol(l),Vc(t,u)),t=u}}}var as=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ap=37297,Cp=0;function Rp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var Gc=new qe;function Ip(i){tt._getMatrix(Gc,tt.workingColorSpace,i);let e=`mat3( ${Gc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ms:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rp(i.getShaderSource(e),l)}else return r}function Pp(i,e){let t=Ip(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lp(i,e){let t;switch(e){case ac:t="Linear";break;case oc:t="Reinhard";break;case lc:t="Cineon";break;case ks:t="ACESFilmic";break;case hc:t="AgX";break;case uc:t="Neutral";break;case cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ka=new X;function Dp(){tt.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Up(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Np(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function $s(i){return i!==""}function Xc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(Op,zp)}var Bp=new Map;function zp(i,e){let t=Ze[e];if(t===void 0){let n=Bp.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}var kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(kp,Vp)}function Vp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Hp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$r?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case sc:e="ENVMAP_BLENDING_MIX";break;case rc:e="ENVMAP_BLENDING_ADD";break}return e}function qp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $p(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=Hp(t),a=Gp(t),h=Wp(t),u=Xp(t),f=qp(t),p=Up(t),x=Np(r),S=s.createProgram(),m,d,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),d.length>0&&(d+=`
`)):(m=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Un?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),Dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=ll(o),o=Xc(o,t),o=qc(o,t),l=ll(l),l=Xc(l,t),l=qc(l,t),o=$c(o),l=$c(l),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=P+m+o,E=P+d+l,N=Hc(s,s.VERTEX_SHADER,w),C=Hc(s,s.FRAGMENT_SHADER,E);s.attachShader(S,N),s.attachShader(S,C),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function O(B){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(S)||"",ee=s.getShaderInfoLog(N)||"",j=s.getShaderInfoLog(C)||"",se=$.trim(),ne=ee.trim(),me=j.trim(),K=!0,ge=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,N,C);else{let ve=Wc(s,N,"vertex"),Re=Wc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+se+`
`+ve+`
`+Re)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ne===""||me==="")&&(ge=!1);ge&&(B.diagnostics={runnable:K,programLog:se,vertexShader:{log:ne,prefix:m},fragmentShader:{log:me,prefix:d}})}s.deleteShader(N),s.deleteShader(C),H=new as(s,S),M=Fp(s,S)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(S,Ap)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=C,this}var Yp=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hl(e),t.set(e,n)),n}},hl=class{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}};function Zp(i,e,t,n,s,r,o){let l=new Ts,c=new cl,a=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return a.add(M),M===0?"uv":`uv${M}`}function m(M,y,B,$,ee){let j=$.fog,se=ee.geometry,ne=M.isMeshStandardMaterial?$.environment:null,me=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),K=me&&me.mapping===Vs?me.image.height:null,ge=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ve=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Re=ve!==void 0?ve.length:0,Ve=0;se.morphAttributes.position!==void 0&&(Ve=1),se.morphAttributes.normal!==void 0&&(Ve=2),se.morphAttributes.color!==void 0&&(Ve=3);let Xe,Ke,je,te;if(ge){let V=xn[ge];Xe=V.vertexShader,Ke=V.fragmentShader}else Xe=M.vertexShader,Ke=M.fragmentShader,c.update(M),je=c.getVertexShaderID(M),te=c.getFragmentShaderID(M);let ae=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Oe=ee.isInstancedMesh===!0,Ie=ee.isBatchedMesh===!0,Je=!!M.map,lt=!!M.matcap,R=!!me,st=!!M.aoMap,F=!!M.lightMap,U=!!M.bumpMap,T=!!M.normalMap,L=!!M.displacementMap,Q=!!M.emissiveMap,k=!!M.metalnessMap,re=!!M.roughnessMap,Le=M.anisotropy>0,b=M.clearcoat>0,g=M.dispersion>0,D=M.iridescence>0,Y=M.sheen>0,A=M.transmission>0,I=Le&&!!M.anisotropyMap,ie=b&&!!M.clearcoatMap,oe=b&&!!M.clearcoatNormalMap,_e=b&&!!M.clearcoatRoughnessMap,we=D&&!!M.iridescenceMap,ce=D&&!!M.iridescenceThicknessMap,Se=Y&&!!M.sheenColorMap,De=Y&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ye=!!M.specularColorMap,He=!!M.specularIntensityMap,z=A&&!!M.transmissionMap,pe=A&&!!M.thicknessMap,xe=!!M.gradientMap,Te=!!M.alphaMap,de=M.alphaTest>0,v=!!M.alphaHash,q=!!M.extensions,le=Un;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(le=i.toneMapping);let he={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Ke,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&ee._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ee.instanceColor!==null,instancingMorph:Oe&&ee.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ci,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:lt,envMap:R,envMapMode:R&&me.mapping,envMapCubeUVHeight:K,aoMap:st,lightMap:F,bumpMap:U,normalMap:T,displacementMap:f&&L,emissiveMap:Q,normalMapObjectSpace:T&&M.normalMapType===mc,normalMapTangentSpace:T&&M.normalMapType===Xo,metalnessMap:k,roughnessMap:re,anisotropy:Le,anisotropyMap:I,clearcoat:b,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:g,iridescence:D,iridescenceMap:we,iridescenceThicknessMap:ce,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:ye,specularIntensityMap:He,transmission:A,transmissionMap:z,thicknessMap:pe,gradientMap:xe,opaque:M.transparent===!1&&M.blending===oi&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:de,alphaHash:v,combine:M.combine,mapUv:Je&&S(M.map.channel),aoMapUv:st&&S(M.aoMap.channel),lightMapUv:F&&S(M.lightMap.channel),bumpMapUv:U&&S(M.bumpMap.channel),normalMapUv:T&&S(M.normalMap.channel),displacementMapUv:L&&S(M.displacementMap.channel),emissiveMapUv:Q&&S(M.emissiveMap.channel),metalnessMapUv:k&&S(M.metalnessMap.channel),roughnessMapUv:re&&S(M.roughnessMap.channel),anisotropyMapUv:I&&S(M.anisotropyMap.channel),clearcoatMapUv:ie&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&S(M.sheenRoughnessMap.channel),specularMapUv:Ce&&S(M.specularMap.channel),specularColorMapUv:ye&&S(M.specularColorMap.channel),specularIntensityMapUv:He&&S(M.specularIntensityMap.channel),transmissionMapUv:z&&S(M.transmissionMap.channel),thicknessMapUv:pe&&S(M.thicknessMap.channel),alphaMapUv:Te&&S(M.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(T||Le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!se.attributes.uv&&(Je||Te),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:Q&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:q&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&M.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=a.has(1),he.vertexUv2s=a.has(2),he.vertexUv3s=a.has(3),a.clear(),he}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let B in M.defines)y.push(B),y.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(P(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function P(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){l.disableAll(),y.supportsVertexTextures&&l.enable(0),y.instancing&&l.enable(1),y.instancingColor&&l.enable(2),y.instancingMorph&&l.enable(3),y.matcap&&l.enable(4),y.envMap&&l.enable(5),y.normalMapObjectSpace&&l.enable(6),y.normalMapTangentSpace&&l.enable(7),y.clearcoat&&l.enable(8),y.iridescence&&l.enable(9),y.alphaTest&&l.enable(10),y.vertexColors&&l.enable(11),y.vertexAlphas&&l.enable(12),y.vertexUv1s&&l.enable(13),y.vertexUv2s&&l.enable(14),y.vertexUv3s&&l.enable(15),y.vertexTangents&&l.enable(16),y.anisotropy&&l.enable(17),y.alphaHash&&l.enable(18),y.batching&&l.enable(19),y.dispersion&&l.enable(20),y.batchingColor&&l.enable(21),y.gradientMap&&l.enable(22),M.push(l.mask),l.disableAll(),y.fog&&l.enable(0),y.useFog&&l.enable(1),y.flatShading&&l.enable(2),y.logarithmicDepthBuffer&&l.enable(3),y.reversedDepthBuffer&&l.enable(4),y.skinning&&l.enable(5),y.morphTargets&&l.enable(6),y.morphNormals&&l.enable(7),y.morphColors&&l.enable(8),y.premultipliedAlpha&&l.enable(9),y.shadowMapEnabled&&l.enable(10),y.doubleSided&&l.enable(11),y.flipSided&&l.enable(12),y.useDepthPacking&&l.enable(13),y.dithering&&l.enable(14),y.transmission&&l.enable(15),y.sheen&&l.enable(16),y.opaque&&l.enable(17),y.pointsUvs&&l.enable(18),y.decodeVideoTexture&&l.enable(19),y.decodeVideoTextureEmissive&&l.enable(20),y.alphaToCoverage&&l.enable(21),M.push(l.mask)}function E(M){let y=x[M.type],B;if(y){let $=xn[y];B=wc.clone($.uniforms)}else B=M.uniforms;return B}function N(M,y){let B;for(let $=0,ee=h.length;$<ee;$++){let j=h[$];if(j.cacheKey===y){B=j,++B.usedTimes;break}}return B===void 0&&(B=new $p(i,y,M,r),h.push(B)),B}function C(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function O(M){c.remove(M)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:N,releaseProgram:C,releaseShaderCache:O,programs:h,dispose:H}}function Jp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,x,S,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:S,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=S,d.group=m),e++,d}function l(u,f,p,x,S,m){let d=o(u,f,p,x,S,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,x,S,m){let d=o(u,f,p,x,S,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function a(u,f){t.length>1&&t.sort(u||Kp),n.length>1&&n.sort(f||Zc),s.length>1&&s.sort(f||Zc)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:a}}function jp(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jc,i.set(n,[o])):s>=r.length?(o=new Jc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ye};break;case"SpotLight":t={position:new X,direction:new X,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function em(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tm=0;function nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function im(i){let e=new Qp,t=em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new X);let s=new X,r=new xt,o=new xt;function l(a){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,x=0,S=0,m=0,d=0,P=0,w=0,E=0,N=0,C=0,O=0;a.sort(nm);for(let M=0,y=a.length;M<y;M++){let B=a[M],$=B.color,ee=B.intensity,j=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=$.r*ee,u+=$.g*ee,f+=$.b*ee;else if(B.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(B.sh.coefficients[ne],ee);O++}else if(B.isDirectionalLight){let ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let me=B.shadow,K=t.get(B);K.shadowIntensity=me.intensity,K.shadowBias=me.bias,K.shadowNormalBias=me.normalBias,K.shadowRadius=me.radius,K.shadowMapSize=me.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=B.shadow.matrix,P++}n.directional[p]=ne,p++}else if(B.isSpotLight){let ne=e.get(B);ne.position.setFromMatrixPosition(B.matrixWorld),ne.color.copy($).multiplyScalar(ee),ne.distance=j,ne.coneCos=Math.cos(B.angle),ne.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ne.decay=B.decay,n.spot[S]=ne;let me=B.shadow;if(B.map&&(n.spotLightMap[N]=B.map,N++,me.updateMatrices(B),B.castShadow&&C++),n.spotLightMatrix[S]=me.matrix,B.castShadow){let K=t.get(B);K.shadowIntensity=me.intensity,K.shadowBias=me.bias,K.shadowNormalBias=me.normalBias,K.shadowRadius=me.radius,K.shadowMapSize=me.mapSize,n.spotShadow[S]=K,n.spotShadowMap[S]=se,E++}S++}else if(B.isRectAreaLight){let ne=e.get(B);ne.color.copy($).multiplyScalar(ee),ne.halfWidth.set(B.width*.5,0,0),ne.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=ne,m++}else if(B.isPointLight){let ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),ne.distance=B.distance,ne.decay=B.decay,B.castShadow){let me=B.shadow,K=t.get(B);K.shadowIntensity=me.intensity,K.shadowBias=me.bias,K.shadowNormalBias=me.normalBias,K.shadowRadius=me.radius,K.shadowMapSize=me.mapSize,K.shadowCameraNear=me.camera.near,K.shadowCameraFar=me.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=se,n.pointShadowMatrix[x]=B.shadow.matrix,w++}n.point[x]=ne,x++}else if(B.isHemisphereLight){let ne=e.get(B);ne.skyColor.copy(B.color).multiplyScalar(ee),ne.groundColor.copy(B.groundColor).multiplyScalar(ee),n.hemi[d]=ne,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let H=n.hash;(H.directionalLength!==p||H.pointLength!==x||H.spotLength!==S||H.rectAreaLength!==m||H.hemiLength!==d||H.numDirectionalShadows!==P||H.numPointShadows!==w||H.numSpotShadows!==E||H.numSpotMaps!==N||H.numLightProbes!==O)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=O,H.directionalLength=p,H.pointLength=x,H.spotLength=S,H.rectAreaLength=m,H.hemiLength=d,H.numDirectionalShadows=P,H.numPointShadows=w,H.numSpotShadows=E,H.numSpotMaps=N,H.numLightProbes=O,n.version=tm++)}function c(a,h){let u=0,f=0,p=0,x=0,S=0,m=h.matrixWorldInverse;for(let d=0,P=a.length;d<P;d++){let w=a[d];if(w.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(w.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let E=n.hemi[S];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:l,setupView:c,state:n}}function Kc(i){let e=new im(i),t=[],n=[];function s(h){a.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}let a={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:a,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function sm(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Kc(i),e.set(s,[l])):r>=o.length?(l=new Kc(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
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
}`;function om(i,e,t){let n=new Yi,s=new $e,r=new $e,o=new pt,l=new Nr({depthPacking:pc}),c=new Fr,a={},h=t.maxTextureSize,u={[Rn]:Ft,[Ft]:Rn,[mn]:mn},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:rm,fragmentShader:am}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new Jt;x.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Nt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let d=this.type;this.render=function(C,O,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Dn),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let ee=d!==pn&&this.type===pn,j=d===pn&&this.type!==pn;for(let se=0,ne=C.length;se<ne;se++){let me=C[se],K=me.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ge=K.getFrameExtents();if(s.multiply(ge),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,K.mapSize.y=r.y)),K.map===null||ee===!0||j===!0){let Re=this.type!==pn?{minFilter:Zt,magFilter:Zt}:{};K.map!==null&&K.map.dispose(),K.map=new fn(s.x,s.y,Re),K.map.texture.name=me.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let ve=K.getViewportCount();for(let Re=0;Re<ve;Re++){let Ve=K.getViewport(Re);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),$.viewport(o),K.updateMatrices(me,Re),n=K.getFrustum(),E(O,H,K.camera,me,this.type)}K.isPointLightShadow!==!0&&this.type===pn&&P(K,H),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,B)};function P(C,O){let H=e.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(O,null,H,f,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(O,null,H,p,S,null)}function w(C,O,H,M){let y=null,B=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)y=B;else if(y=H.isPointLight===!0?c:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let $=y.uuid,ee=O.uuid,j=a[$];j===void 0&&(j={},a[$]=j);let se=j[ee];se===void 0&&(se=y.clone(),j[ee]=se,O.addEventListener("dispose",N)),y=se}if(y.visible=O.visible,y.wireframe=O.wireframe,M===pn?y.side=O.shadowSide!==null?O.shadowSide:O.side:y.side=O.shadowSide!==null?O.shadowSide:u[O.side],y.alphaMap=O.alphaMap,y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,y.map=O.map,y.clipShadows=O.clipShadows,y.clippingPlanes=O.clippingPlanes,y.clipIntersection=O.clipIntersection,y.displacementMap=O.displacementMap,y.displacementScale=O.displacementScale,y.displacementBias=O.displacementBias,y.wireframeLinewidth=O.wireframeLinewidth,y.linewidth=O.linewidth,H.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let $=i.properties.get(y);$.light=H}return y}function E(C,O,H,M,y){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);let ee=e.update(C),j=C.material;if(Array.isArray(j)){let se=ee.groups;for(let ne=0,me=se.length;ne<me;ne++){let K=se[ne],ge=j[K.materialIndex];if(ge&&ge.visible){let ve=w(C,ge,M,y);C.onBeforeShadow(i,C,O,H,ee,ve,K),i.renderBufferDirect(H,null,ee,ve,C,K),C.onAfterShadow(i,C,O,H,ee,ve,K)}}}else if(j.visible){let se=w(C,j,M,y);C.onBeforeShadow(i,C,O,H,ee,se,null),i.renderBufferDirect(H,null,ee,se,C,null),C.onAfterShadow(i,C,O,H,ee,se,null)}}let $=C.children;for(let ee=0,j=$.length;ee<j;ee++)E($[ee],O,H,M,y)}function N(C){C.target.removeEventListener("dispose",N);for(let H in a){let M=a[H],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var lm={[Yr]:Zr,[Jr]:Qr,[Kr]:ea,[li]:jr,[Zr]:Yr,[Qr]:Jr,[ea]:Kr,[jr]:li};function cm(i,e){function t(){let z=!1,pe=new pt,xe=null,Te=new pt(0,0,0,0);return{setMask:function(de){xe!==de&&!z&&(i.colorMask(de,de,de,de),xe=de)},setLocked:function(de){z=de},setClear:function(de,v,q,le,he){he===!0&&(de*=le,v*=le,q*=le),pe.set(de,v,q,le),Te.equals(pe)===!1&&(i.clearColor(de,v,q,le),Te.copy(pe))},reset:function(){z=!1,xe=null,Te.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,xe=null,Te=null,de=null;return{setReversed:function(v){if(pe!==v){let q=e.get("EXT_clip_control");v?q.clipControlEXT(q.LOWER_LEFT_EXT,q.ZERO_TO_ONE_EXT):q.clipControlEXT(q.LOWER_LEFT_EXT,q.NEGATIVE_ONE_TO_ONE_EXT),pe=v;let le=de;de=null,this.setClear(le)}},getReversed:function(){return pe},setTest:function(v){v?ae(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(v){xe!==v&&!z&&(i.depthMask(v),xe=v)},setFunc:function(v){if(pe&&(v=lm[v]),Te!==v){switch(v){case Yr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case li:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=v}},setLocked:function(v){z=v},setClear:function(v){de!==v&&(pe&&(v=1-v),i.clearDepth(v),de=v)},reset:function(){z=!1,xe=null,Te=null,de=null,pe=!1}}}function s(){let z=!1,pe=null,xe=null,Te=null,de=null,v=null,q=null,le=null,he=null;return{setTest:function(V){z||(V?ae(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(V){pe!==V&&!z&&(i.stencilMask(V),pe=V)},setFunc:function(V,ue,Ge){(xe!==V||Te!==ue||de!==Ge)&&(i.stencilFunc(V,ue,Ge),xe=V,Te=ue,de=Ge)},setOp:function(V,ue,Ge){(v!==V||q!==ue||le!==Ge)&&(i.stencilOp(V,ue,Ge),v=V,q=ue,le=Ge)},setLocked:function(V){z=V},setClear:function(V){he!==V&&(i.clearStencil(V),he=V)},reset:function(){z=!1,pe=null,xe=null,Te=null,de=null,v=null,q=null,le=null,he=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,h={},u={},f=new WeakMap,p=[],x=null,S=!1,m=null,d=null,P=null,w=null,E=null,N=null,C=null,O=new Ye(0,0,0),H=0,M=!1,y=null,B=null,$=null,ee=null,j=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,me=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(K)[1]),ne=me>=1):K.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ne=me>=2);let ge=null,ve={},Re=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Xe=new pt().fromArray(Re),Ke=new pt().fromArray(Ve);function je(z,pe,xe,Te){let de=new Uint8Array(4),v=i.createTexture();i.bindTexture(z,v),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let q=0;q<xe;q++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(pe+q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return v}let te={};te[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ae(i.DEPTH_TEST),o.setFunc(li),U(!1),T(Io),ae(i.CULL_FACE),st(Dn);function ae(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Ae(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Oe(z,pe){return u[z]!==pe?(i.bindFramebuffer(z,pe),u[z]=pe,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ie(z,pe){let xe=p,Te=!1;if(z){xe=f.get(pe),xe===void 0&&(xe=[],f.set(pe,xe));let de=z.textures;if(xe.length!==de.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let v=0,q=de.length;v<q;v++)xe[v]=i.COLOR_ATTACHMENT0+v;xe.length=de.length,Te=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Te=!0);Te&&i.drawBuffers(xe)}function Je(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let lt={[qn]:i.FUNC_ADD,[Vl]:i.FUNC_SUBTRACT,[Hl]:i.FUNC_REVERSE_SUBTRACT};lt[Gl]=i.MIN,lt[Wl]=i.MAX;let R={[Xl]:i.ZERO,[ql]:i.ONE,[$l]:i.SRC_COLOR,[Mr]:i.SRC_ALPHA,[Ql]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[Zl]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[jl]:i.ONE_MINUS_DST_COLOR,[Jl]:i.ONE_MINUS_DST_ALPHA,[ec]:i.CONSTANT_COLOR,[tc]:i.ONE_MINUS_CONSTANT_COLOR,[nc]:i.CONSTANT_ALPHA,[ic]:i.ONE_MINUS_CONSTANT_ALPHA};function st(z,pe,xe,Te,de,v,q,le,he,V){if(z===Dn){S===!0&&(Ae(i.BLEND),S=!1);return}if(S===!1&&(ae(i.BLEND),S=!0),z!==kl){if(z!==m||V!==M){if((d!==qn||E!==qn)&&(i.blendEquation(i.FUNC_ADD),d=qn,E=qn),V)switch(z){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Do:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}P=null,w=null,N=null,C=null,O.set(0,0,0),H=0,m=z,M=V}return}de=de||pe,v=v||xe,q=q||Te,(pe!==d||de!==E)&&(i.blendEquationSeparate(lt[pe],lt[de]),d=pe,E=de),(xe!==P||Te!==w||v!==N||q!==C)&&(i.blendFuncSeparate(R[xe],R[Te],R[v],R[q]),P=xe,w=Te,N=v,C=q),(le.equals(O)===!1||he!==H)&&(i.blendColor(le.r,le.g,le.b,he),O.copy(le),H=he),m=z,M=!1}function F(z,pe){z.side===mn?Ae(i.CULL_FACE):ae(i.CULL_FACE);let xe=z.side===Ft;pe&&(xe=!xe),U(xe),z.blending===oi&&z.transparent===!1?st(Dn):st(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Te=z.stencilWrite;l.setTest(Te),Te&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Q(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function U(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function T(z){z!==Bl?(ae(i.CULL_FACE),z!==B&&(z===Io?i.cullFace(i.BACK):z===zl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),B=z}function L(z){z!==$&&(ne&&i.lineWidth(z),$=z)}function Q(z,pe,xe){z?(ae(i.POLYGON_OFFSET_FILL),(ee!==pe||j!==xe)&&(i.polygonOffset(pe,xe),ee=pe,j=xe)):Ae(i.POLYGON_OFFSET_FILL)}function k(z){z?ae(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function re(z){z===void 0&&(z=i.TEXTURE0+se-1),ge!==z&&(i.activeTexture(z),ge=z)}function Le(z,pe,xe){xe===void 0&&(ge===null?xe=i.TEXTURE0+se-1:xe=ge);let Te=ve[xe];Te===void 0&&(Te={type:void 0,texture:void 0},ve[xe]=Te),(Te.type!==z||Te.texture!==pe)&&(ge!==xe&&(i.activeTexture(xe),ge=xe),i.bindTexture(z,pe||te[z]),Te.type=z,Te.texture=pe)}function b(){let z=ve[ge];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function A(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(z){Xe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Xe.copy(z))}function De(z){Ke.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ke.copy(z))}function Ce(z,pe){let xe=a.get(pe);xe===void 0&&(xe=new WeakMap,a.set(pe,xe));let Te=xe.get(z);Te===void 0&&(Te=i.getUniformBlockIndex(pe,z.name),xe.set(z,Te))}function ye(z,pe){let Te=a.get(pe).get(z);c.get(pe)!==Te&&(i.uniformBlockBinding(pe,Te,z.__bindingPointIndex),c.set(pe,Te))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,ve={},u={},f=new WeakMap,p=[],x=null,S=!1,m=null,d=null,P=null,w=null,E=null,N=null,C=null,O=new Ye(0,0,0),H=0,M=!1,y=null,B=null,$=null,ee=null,j=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:ae,disable:Ae,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Je,setBlending:st,setMaterial:F,setFlipSided:U,setCullFace:T,setLineWidth:L,setPolygonOffset:Q,setScissorTest:k,activeTexture:re,bindTexture:Le,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:we,texImage3D:ce,updateUBOMapping:Ce,uniformBlockBinding:ye,texStorage2D:oe,texStorage3D:_e,texSubImage2D:Y,texSubImage3D:A,compressedTexSubImage2D:I,compressedTexSubImage3D:ie,scissor:Se,viewport:De,reset:He}}function hm(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new $e,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,g){return p?new OffscreenCanvas(b,g):bs("canvas")}function S(b,g,D){let Y=1,A=Le(b);if((A.width>D||A.height>D)&&(Y=D/Math.max(A.width,A.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let I=Math.floor(Y*A.width),ie=Math.floor(Y*A.height);u===void 0&&(u=x(I,ie));let oe=g?x(I,ie):u;return oe.width=I,oe.height=ie,oe.getContext("2d").drawImage(b,0,0,I,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+I+"x"+ie+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function P(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,g,D,Y,A=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let I=g;if(g===i.RED&&(D===i.FLOAT&&(I=i.R32F),D===i.HALF_FLOAT&&(I=i.R16F),D===i.UNSIGNED_BYTE&&(I=i.R8)),g===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(I=i.R8UI),D===i.UNSIGNED_SHORT&&(I=i.R16UI),D===i.UNSIGNED_INT&&(I=i.R32UI),D===i.BYTE&&(I=i.R8I),D===i.SHORT&&(I=i.R16I),D===i.INT&&(I=i.R32I)),g===i.RG&&(D===i.FLOAT&&(I=i.RG32F),D===i.HALF_FLOAT&&(I=i.RG16F),D===i.UNSIGNED_BYTE&&(I=i.RG8)),g===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(I=i.RG8UI),D===i.UNSIGNED_SHORT&&(I=i.RG16UI),D===i.UNSIGNED_INT&&(I=i.RG32UI),D===i.BYTE&&(I=i.RG8I),D===i.SHORT&&(I=i.RG16I),D===i.INT&&(I=i.RG32I)),g===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(I=i.RGB8UI),D===i.UNSIGNED_SHORT&&(I=i.RGB16UI),D===i.UNSIGNED_INT&&(I=i.RGB32UI),D===i.BYTE&&(I=i.RGB8I),D===i.SHORT&&(I=i.RGB16I),D===i.INT&&(I=i.RGB32I)),g===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),D===i.UNSIGNED_INT&&(I=i.RGBA32UI),D===i.BYTE&&(I=i.RGBA8I),D===i.SHORT&&(I=i.RGBA16I),D===i.INT&&(I=i.RGBA32I)),g===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(I=i.R11F_G11F_B10F)),g===i.RGBA){let ie=A?Ms:tt.getTransfer(Y);D===i.FLOAT&&(I=i.RGBA32F),D===i.HALF_FLOAT&&(I=i.RGBA16F),D===i.UNSIGNED_BYTE&&(I=ie===it?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function E(b,g){let D;return b?g===null||g===jn||g===ns?D=i.DEPTH24_STENCIL8:g===gn?D=i.DEPTH32F_STENCIL8:g===es&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===jn||g===ns?D=i.DEPTH_COMPONENT24:g===gn?D=i.DEPTH_COMPONENT32F:g===es&&(D=i.DEPTH_COMPONENT16),D}function N(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Zt&&b.minFilter!==nn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function C(b){let g=b.target;g.removeEventListener("dispose",C),H(g),g.isVideoTexture&&h.delete(g)}function O(b){let g=b.target;g.removeEventListener("dispose",O),y(g)}function H(b){let g=n.get(b);if(g.__webglInit===void 0)return;let D=b.source,Y=f.get(D);if(Y){let A=Y[g.__cacheKey];A.usedTimes--,A.usedTimes===0&&M(b),Object.keys(Y).length===0&&f.delete(D)}n.remove(b)}function M(b){let g=n.get(b);i.deleteTexture(g.__webglTexture);let D=b.source,Y=f.get(D);delete Y[g.__cacheKey],o.memory.textures--}function y(b){let g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let A=0;A<g.__webglFramebuffer[Y].length;A++)i.deleteFramebuffer(g.__webglFramebuffer[Y][A]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let D=b.textures;for(let Y=0,A=D.length;Y<A;Y++){let I=n.get(D[Y]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(D[Y])}n.remove(b)}let B=0;function $(){B=0}function ee(){let b=B;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),B+=1,b}function j(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function se(b,g){let D=n.get(b);if(b.isVideoTexture&&k(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,b,g);return}}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+g)}function ne(b,g){let D=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){te(D,b,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+g)}function me(b,g){let D=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){te(D,b,g);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+g)}function K(b,g){let D=n.get(b);if(b.version>0&&D.__version!==b.version){ae(D,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+g)}let ge={[br]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},ve={[Zt]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Re={[gc]:i.NEVER,[Sc]:i.ALWAYS,[xc]:i.LESS,[qo]:i.LEQUAL,[_c]:i.EQUAL,[Mc]:i.GEQUAL,[vc]:i.GREATER,[yc]:i.NOTEQUAL};function Ve(b,g){if(g.type===gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===nn||g.magFilter===ia||g.magFilter===Hs||g.magFilter===Kn||g.minFilter===nn||g.minFilter===ia||g.minFilter===Hs||g.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ge[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ge[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ge[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ve[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Zt||g.minFilter!==Hs&&g.minFilter!==Kn||g.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Xe(b,g){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",C));let Y=g.source,A=f.get(Y);A===void 0&&(A={},f.set(Y,A));let I=j(g);if(I!==b.__cacheKey){A[I]===void 0&&(A[I]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),A[I].usedTimes++;let ie=A[b.__cacheKey];ie!==void 0&&(A[b.__cacheKey].usedTimes--,ie.usedTimes===0&&M(g)),b.__cacheKey=I,b.__webglTexture=A[I].texture}return D}function Ke(b,g,D){return Math.floor(Math.floor(b/D)/g)}function je(b,g,D,Y){let I=b.updateRanges;if(I.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,D,Y,g.data);else{I.sort((ce,Se)=>ce.start-Se.start);let ie=0;for(let ce=1;ce<I.length;ce++){let Se=I[ie],De=I[ce],Ce=Se.start+Se.count,ye=Ke(De.start,g.width,4),He=Ke(Se.start,g.width,4);De.start<=Ce+1&&ye===He&&Ke(De.start+De.count-1,g.width,4)===ye?Se.count=Math.max(Se.count,De.start+De.count-Se.start):(++ie,I[ie]=De)}I.length=ie+1;let oe=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ce=0,Se=I.length;ce<Se;ce++){let De=I[ce],Ce=Math.floor(De.start/4),ye=Math.ceil(De.count/4),He=Ce%g.width,z=Math.floor(Ce/g.width),pe=ye,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,He,z,pe,xe,D,Y,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function te(b,g,D){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);let A=Xe(b,g),I=g.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+D);let ie=n.get(I);if(I.version!==ie.__version||A===!0){t.activeTexture(i.TEXTURE0+D);let oe=tt.getPrimaries(tt.workingColorSpace),_e=g.colorSpace===Nn?null:tt.getPrimaries(g.colorSpace),we=g.colorSpace===Nn||oe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ce=S(g.image,!1,s.maxTextureSize);ce=re(g,ce);let Se=r.convert(g.format,g.colorSpace),De=r.convert(g.type),Ce=w(g.internalFormat,Se,De,g.colorSpace,g.isVideoTexture);Ve(Y,g);let ye,He=g.mipmaps,z=g.isVideoTexture!==!0,pe=ie.__version===void 0||A===!0,xe=I.dataReady,Te=N(g,ce);if(g.isDepthTexture)Ce=E(g.format===is,g.type),pe&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ce,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ce.width,ce.height,0,Se,De,null));else if(g.isDataTexture)if(He.length>0){z&&pe&&t.texStorage2D(i.TEXTURE_2D,Te,Ce,He[0].width,He[0].height);for(let de=0,v=He.length;de<v;de++)ye=He[de],z?xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,Se,De,ye.data):t.texImage2D(i.TEXTURE_2D,de,Ce,ye.width,ye.height,0,Se,De,ye.data);g.generateMipmaps=!1}else z?(pe&&t.texStorage2D(i.TEXTURE_2D,Te,Ce,ce.width,ce.height),xe&&je(g,ce,Se,De)):t.texImage2D(i.TEXTURE_2D,0,Ce,ce.width,ce.height,0,Se,De,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ce,He[0].width,He[0].height,ce.depth);for(let de=0,v=He.length;de<v;de++)if(ye=He[de],g.format!==Kt)if(Se!==null)if(z){if(xe)if(g.layerUpdates.size>0){let q=jo(ye.width,ye.height,g.format,g.type);for(let le of g.layerUpdates){let he=ye.data.subarray(le*q/ye.data.BYTES_PER_ELEMENT,(le+1)*q/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,le,ye.width,ye.height,1,Se,he)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,ce.depth,Se,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ce,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,ce.depth,Se,De,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ce,ye.width,ye.height,ce.depth,0,Se,De,ye.data)}else{z&&pe&&t.texStorage2D(i.TEXTURE_2D,Te,Ce,He[0].width,He[0].height);for(let de=0,v=He.length;de<v;de++)ye=He[de],g.format!==Kt?Se!==null?z?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,Se,De,ye.data):t.texImage2D(i.TEXTURE_2D,de,Ce,ye.width,ye.height,0,Se,De,ye.data)}else if(g.isDataArrayTexture)if(z){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ce,ce.width,ce.height,ce.depth),xe)if(g.layerUpdates.size>0){let de=jo(ce.width,ce.height,g.format,g.type);for(let v of g.layerUpdates){let q=ce.data.subarray(v*de/ce.data.BYTES_PER_ELEMENT,(v+1)*de/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,v,ce.width,ce.height,1,Se,De,q)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,De,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ce.width,ce.height,ce.depth,0,Se,De,ce.data);else if(g.isData3DTexture)z?(pe&&t.texStorage3D(i.TEXTURE_3D,Te,Ce,ce.width,ce.height,ce.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,De,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ce.width,ce.height,ce.depth,0,Se,De,ce.data);else if(g.isFramebufferTexture){if(pe)if(z)t.texStorage2D(i.TEXTURE_2D,Te,Ce,ce.width,ce.height);else{let de=ce.width,v=ce.height;for(let q=0;q<Te;q++)t.texImage2D(i.TEXTURE_2D,q,Ce,de,v,0,Se,De,null),de>>=1,v>>=1}}else if(He.length>0){if(z&&pe){let de=Le(He[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ce,de.width,de.height)}for(let de=0,v=He.length;de<v;de++)ye=He[de],z?xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se,De,ye):t.texImage2D(i.TEXTURE_2D,de,Ce,Se,De,ye);g.generateMipmaps=!1}else if(z){if(pe){let de=Le(ce);t.texStorage2D(i.TEXTURE_2D,Te,Ce,de.width,de.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,De,ce)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Se,De,ce);m(g)&&d(Y),ie.__version=I.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ae(b,g,D){if(g.image.length!==6)return;let Y=Xe(b,g),A=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+D);let I=n.get(A);if(A.version!==I.__version||Y===!0){t.activeTexture(i.TEXTURE0+D);let ie=tt.getPrimaries(tt.workingColorSpace),oe=g.colorSpace===Nn?null:tt.getPrimaries(g.colorSpace),_e=g.colorSpace===Nn||ie===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let we=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let v=0;v<6;v++)!we&&!ce?Se[v]=S(g.image[v],!0,s.maxCubemapSize):Se[v]=ce?g.image[v].image:g.image[v],Se[v]=re(g,Se[v]);let De=Se[0],Ce=r.convert(g.format,g.colorSpace),ye=r.convert(g.type),He=w(g.internalFormat,Ce,ye,g.colorSpace),z=g.isVideoTexture!==!0,pe=I.__version===void 0||Y===!0,xe=A.dataReady,Te=N(g,De);Ve(i.TEXTURE_CUBE_MAP,g);let de;if(we){z&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,He,De.width,De.height);for(let v=0;v<6;v++){de=Se[v].mipmaps;for(let q=0;q<de.length;q++){let le=de[q];g.format!==Kt?Ce!==null?z?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q,0,0,le.width,le.height,Ce,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q,He,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q,0,0,le.width,le.height,Ce,ye,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q,He,le.width,le.height,0,Ce,ye,le.data)}}}else{if(de=g.mipmaps,z&&pe){de.length>0&&Te++;let v=Le(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,He,v.width,v.height)}for(let v=0;v<6;v++)if(ce){z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,Se[v].width,Se[v].height,Ce,ye,Se[v].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,He,Se[v].width,Se[v].height,0,Ce,ye,Se[v].data);for(let q=0;q<de.length;q++){let he=de[q].image[v].image;z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q+1,0,0,he.width,he.height,Ce,ye,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q+1,He,he.width,he.height,0,Ce,ye,he.data)}}else{z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,Ce,ye,Se[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,He,Ce,ye,Se[v]);for(let q=0;q<de.length;q++){let le=de[q];z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q+1,0,0,Ce,ye,le.image[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,q+1,He,Ce,ye,le.image[v])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),I.__version=A.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Ae(b,g,D,Y,A,I){let ie=r.convert(D.format,D.colorSpace),oe=r.convert(D.type),_e=w(D.internalFormat,ie,oe,D.colorSpace),we=n.get(g),ce=n.get(D);if(ce.__renderTarget=g,!we.__hasExternalTextures){let Se=Math.max(1,g.width>>I),De=Math.max(1,g.height>>I);A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?t.texImage3D(A,I,_e,Se,De,g.depth,0,ie,oe,null):t.texImage2D(A,I,_e,Se,De,0,ie,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Q(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,A,ce.__webglTexture,0,L(g)):(A===i.TEXTURE_2D||A>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,A,ce.__webglTexture,I),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(b,g,D){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){let Y=g.depthTexture,A=Y&&Y.isDepthTexture?Y.type:null,I=E(g.stencilBuffer,A),ie=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=L(g);Q(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,I,g.width,g.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,I,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,I,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,b)}else{let Y=g.textures;for(let A=0;A<Y.length;A++){let I=Y[A],ie=r.convert(I.format,I.colorSpace),oe=r.convert(I.type),_e=w(I.internalFormat,ie,oe,I.colorSpace),we=L(g);D&&Q(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,_e,g.width,g.height):Q(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,_e,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_e,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);let A=Y.__webglTexture,I=L(g);if(g.depthTexture.format===Vi)Q(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,A,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,A,0);else if(g.depthTexture.format===is)Q(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,A,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,A,0);else throw new Error("Unknown depthTexture format")}function Je(b){let g=n.get(b),D=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){let A=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",A)};Y.addEventListener("dispose",A),g.__depthDisposeCallback=A}g.__boundDepthTexture=Y}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");let Y=b.texture.mipmaps;Y&&Y.length>0?Ie(g.__webglFramebuffer[0],b):Ie(g.__webglFramebuffer,b)}else if(D){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[Y],b,!1);else{let A=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,I)}}else{let Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,b,!1);else{let A=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,I)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(b,g,D){let Y=n.get(b);g!==void 0&&Ae(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Je(b)}function R(b){let g=b.texture,D=n.get(b),Y=n.get(g);b.addEventListener("dispose",O);let A=b.textures,I=b.isWebGLCubeRenderTarget===!0,ie=A.length>1;if(ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,o.memory.textures++),I){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let _e=0;_e<g.mipmaps.length;_e++)D.__webglFramebuffer[oe][_e]=i.createFramebuffer()}else D.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)D.__webglFramebuffer[oe]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(ie)for(let oe=0,_e=A.length;oe<_e;oe++){let we=n.get(A[oe]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Q(b)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<A.length;oe++){let _e=A[oe];D.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);let we=r.convert(_e.format,_e.colorSpace),ce=r.convert(_e.type),Se=w(_e.internalFormat,we,ce,_e.colorSpace,b.isXRRenderTarget===!0),De=L(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)Ae(D.__webglFramebuffer[oe][_e],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e);else Ae(D.__webglFramebuffer[oe],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let oe=0,_e=A.length;oe<_e;oe++){let we=A[oe],ce=n.get(we),Se=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ce.__webglTexture),Ve(Se,we),Ae(D.__webglFramebuffer,b,we,i.COLOR_ATTACHMENT0+oe,Se,0),m(we)&&d(Se)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Ve(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)Ae(D.__webglFramebuffer[_e],b,g,i.COLOR_ATTACHMENT0,oe,_e);else Ae(D.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),t.unbindTexture()}b.depthBuffer&&Je(b)}function st(b){let g=b.textures;for(let D=0,Y=g.length;D<Y;D++){let A=g[D];if(m(A)){let I=P(b),ie=n.get(A).__webglTexture;t.bindTexture(I,ie),d(I),t.unbindTexture()}}}let F=[],U=[];function T(b){if(b.samples>0){if(Q(b)===!1){let g=b.textures,D=b.width,Y=b.height,A=i.COLOR_BUFFER_BIT,I=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(b),oe=g.length>1;if(oe)for(let we=0;we<g.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);let _e=b.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let we=0;we<g.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(A|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(A|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);let ce=n.get(g[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,D,Y,0,0,D,Y,A,i.NEAREST),c===!0&&(F.length=0,U.length=0,F.push(i.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(F.push(I),U.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<g.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);let ce=n.get(g[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function L(b){return Math.min(s.maxSamples,b.samples)}function Q(b){let g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function k(b){let g=o.render.frame;h.get(b)!==g&&(h.set(b,g),b.update())}function re(b,g){let D=b.colorSpace,Y=b.format,A=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==ci&&D!==Nn&&(tt.getTransfer(D)===it?(Y!==Kt||A!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function Le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(a.width=b.naturalWidth||b.width,a.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(a.width=b.displayWidth,a.height=b.displayHeight):(a.width=b.width,a.height=b.height),a}this.allocateTextureUnit=ee,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=ne,this.setTexture3D=me,this.setTextureCube=K,this.rebindTextures=lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Q}function um(i,e){function t(n,s=Nn){let r,o=tt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ko)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oo)return i.BYTE;if(n===Bo)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Vo)return i.ALPHA;if(n===Ho)return i.RGB;if(n===Kt)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Go)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Wo)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===qs)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===_a||n===va||n===ya||n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ca||n===Ra||n===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===La||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
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

}`,ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:dm,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends In{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,u=null,f=null,p=null,x=null,S=typeof XRWebGLBinding<"u",m=new ul,d={},P=t.getContextAttributes(),w=null,E=null,N=[],C=[],O=new $e,H=null,M=new At;M.viewport=new pt;let y=new At;y.viewport=new pt;let B=[M,y],$=new qr,ee=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=N[te];return ae===void 0&&(ae=new Xi,N[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=N[te];return ae===void 0&&(ae=new Xi,N[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=N[te];return ae===void 0&&(ae=new Xi,N[te]=ae),ae.getHandSpace()};function se(te){let ae=C.indexOf(te.inputSource);if(ae===-1)return;let Ae=N[ae];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,a||o),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",me);for(let te=0;te<N.length;te++){let ae=C[te];ae!==null&&(C[te]=null,N[te].disconnect(ae))}ee=null,j=null,m.reset();for(let te in d)delete d[te];e.setRenderTarget(w),p=null,f=null,u=null,s=null,E=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(te){a=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",me),P.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(O),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Oe=null,Ie=null;P.depth&&(Ie=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=P.stencil?is:Vi,Oe=P.stencil?ns:jn);let Je={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new fn(f.textureWidth,f.textureHeight,{format:Kt,type:an,depthTexture:new Ls(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Ae={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new fn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(te){for(let ae=0;ae<te.removed.length;ae++){let Ae=te.removed[ae],Oe=C.indexOf(Ae);Oe>=0&&(C[Oe]=null,N[Oe].disconnect(Ae))}for(let ae=0;ae<te.added.length;ae++){let Ae=te.added[ae],Oe=C.indexOf(Ae);if(Oe===-1){for(let Je=0;Je<N.length;Je++)if(Je>=C.length){C.push(Ae),Oe=Je;break}else if(C[Je]===null){C[Je]=Ae,Oe=Je;break}if(Oe===-1)break}let Ie=N[Oe];Ie&&Ie.connect(Ae)}}let K=new X,ge=new X;function ve(te,ae,Ae){K.setFromMatrixPosition(ae.matrixWorld),ge.setFromMatrixPosition(Ae.matrixWorld);let Oe=K.distanceTo(ge),Ie=ae.projectionMatrix.elements,Je=Ae.projectionMatrix.elements,lt=Ie[14]/(Ie[10]-1),R=Ie[14]/(Ie[10]+1),st=(Ie[9]+1)/Ie[5],F=(Ie[9]-1)/Ie[5],U=(Ie[8]-1)/Ie[0],T=(Je[8]+1)/Je[0],L=lt*U,Q=lt*T,k=Oe/(-U+T),re=k*-U;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(re),te.translateZ(k),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ie[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Le=lt+k,b=R+k,g=L-re,D=Q+(Oe-re),Y=st*R/b*Le,A=F*R/b*Le;te.projectionMatrix.makePerspective(g,D,Y,A,Le,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Re(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ae=te.near,Ae=te.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),$.near=y.near=M.near=ae,$.far=y.far=M.far=Ae,(ee!==$.near||j!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),ee=$.near,j=$.far),$.layers.mask=te.layers.mask|6,M.layers.mask=$.layers.mask&3,y.layers.mask=$.layers.mask&5;let Oe=te.parent,Ie=$.cameras;Re($,Oe);for(let Je=0;Je<Ie.length;Je++)Re(Ie[Je],Oe);Ie.length===2?ve($,M,y):$.projectionMatrix.copy(M.projectionMatrix),Ve(te,$,Oe)};function Ve(te,ae,Ae){Ae===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ar*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(te){return d[te]};let Xe=null;function Ke(te,ae){if(h=ae.getViewerPose(a||o),x=ae,h!==null){let Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Oe=!1;Ae.length!==$.cameras.length&&($.cameras.length=0,Oe=!0);for(let R=0;R<Ae.length;R++){let st=Ae[R],F=null;if(p!==null)F=p.getViewport(st);else{let T=u.getViewSubImage(f,st);F=T.viewport,R===0&&(e.setRenderTargetTextures(E,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(E))}let U=B[R];U===void 0&&(U=new At,U.layers.enable(R),U.viewport=new pt,B[R]=U),U.matrix.fromArray(st.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(st.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(F.x,F.y,F.width,F.height),R===0&&($.matrix.copy(U.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Oe===!0&&$.cameras.push(U)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let R=u.getDepthInformation(Ae[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Ie&&Ie.includes("camera-access")&&S){e.state.unbindTexture(),u=n.getBinding();for(let R=0;R<Ae.length;R++){let st=Ae[R].camera;if(st){let F=d[st];F||(F=new Ds,d[st]=F);let U=u.getCameraImage(st);F.sourceTexture=U}}}}for(let Ae=0;Ae<N.length;Ae++){let Oe=C[Ae],Ie=N[Ae];Oe!==null&&Ie!==void 0&&Ie.update(Oe,ae,a||o)}Xe&&Xe(te,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}let je=new jc;je.setAnimationLoop(Ke),this.setAnimationLoop=function(te){Xe=te},this.dispose=function(){}}},xi=new sn,pm=new xt;function mm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,P,w,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?c(m,d,P,w):d.isSpriteMaterial?a(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ft&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ft&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let P=e.get(d),w=P.envMap,E=P.envMapRotation;w&&(m.envMap.value=w,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(pm.makeRotationFromEuler(xi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,P,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*P,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,P){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){let P=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gm(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(P,w){let E=w.program;n.uniformBlockBinding(P,E)}function a(P,w){let E=s[P.id];E===void 0&&(x(P),E=h(P),s[P.id]=E,P.addEventListener("dispose",m));let N=w.program;n.updateUBOMapping(P,N);let C=e.render.frame;r[P.id]!==C&&(f(P),r[P.id]=C)}function h(P){let w=u();P.__bindingPointIndex=w;let E=i.createBuffer(),N=P.__size,C=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,N,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function u(){for(let P=0;P<l;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(P){let w=s[P.id],E=P.uniforms,N=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,O=E.length;C<O;C++){let H=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,y=H.length;M<y;M++){let B=H[M];if(p(B,C,M,N)===!0){let $=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value],j=0;for(let se=0;se<ee.length;se++){let ne=ee[se],me=S(ne);typeof ne=="number"||typeof ne=="boolean"?(B.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,$+j,B.__data)):ne.isMatrix3?(B.__data[0]=ne.elements[0],B.__data[1]=ne.elements[1],B.__data[2]=ne.elements[2],B.__data[3]=0,B.__data[4]=ne.elements[3],B.__data[5]=ne.elements[4],B.__data[6]=ne.elements[5],B.__data[7]=0,B.__data[8]=ne.elements[6],B.__data[9]=ne.elements[7],B.__data[10]=ne.elements[8],B.__data[11]=0):(ne.toArray(B.__data,j),j+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(P,w,E,N){let C=P.value,O=w+"_"+E;if(N[O]===void 0)return typeof C=="number"||typeof C=="boolean"?N[O]=C:N[O]=C.clone(),!0;{let H=N[O];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return N[O]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function x(P){let w=P.uniforms,E=0,N=16;for(let O=0,H=w.length;O<H;O++){let M=Array.isArray(w[O])?w[O]:[w[O]];for(let y=0,B=M.length;y<B;y++){let $=M[y],ee=Array.isArray($.value)?$.value:[$.value];for(let j=0,se=ee.length;j<se;j++){let ne=ee[j],me=S(ne),K=E%N,ge=K%me.boundary,ve=K+ge;E+=ge,ve!==0&&N-ve<me.storage&&(E+=N-ve),$.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=me.storage}}}let C=E%N;return C>0&&(E+=N-C),P.__size=E,P.__cache={},this}function S(P){let w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function m(P){let w=P.target;w.removeEventListener("dispose",m);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let P in s)i.deleteBuffer(s[P]);o=[],s={},r={}}return{bind:c,update:a,dispose:d}}var Ys=class{constructor(e={}){let{canvas:t=bc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),S=new Int32Array(4),m=null,d=null,P=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,N=!1;this._outputColorSpace=St;let C=0,O=0,H=null,M=-1,y=null,B=new pt,$=new pt,ee=null,j=new Ye(0),se=0,ne=t.width,me=t.height,K=1,ge=null,ve=null,Re=new pt(0,0,ne,me),Ve=new pt(0,0,ne,me),Xe=!1,Ke=new Yi,je=!1,te=!1,ae=new xt,Ae=new X,Oe=new pt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function lt(){return H===null?K:1}let R=n;function st(_,G){return t.getContext(_,G)}try{let _={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",de,!1),R===null){let G="webgl2";if(R=st(G,_),R===null)throw st(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let F,U,T,L,Q,k,re,Le,b,g,D,Y,A,I,ie,oe,_e,we,ce,Se,De,Ce,ye,He;function z(){F=new Uf(R),F.init(),Ce=new um(R,F),U=new Af(R,F,e,Ce),T=new cm(R,F),U.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),L=new Of(R),Q=new Jp,k=new hm(R,F,T,Q,U,Ce,L),re=new Rf(E),Le=new Df(E),b=new Hh(R),ye=new Tf(R,b),g=new Nf(R,b,L,ye),D=new zf(R,g,b,L),ce=new Bf(R,U,k),oe=new Cf(Q),Y=new Zp(E,re,Le,F,U,ye,oe),A=new mm(E,Q),I=new jp,ie=new sm(F),we=new Ef(E,re,Le,T,D,p,c),_e=new om(E,D,U),He=new gm(R,L,U,T),Se=new wf(R,F,L),De=new Ff(R,F,L),L.programs=Y.programs,E.capabilities=U,E.extensions=F,E.properties=Q,E.renderLists=I,E.shadowMap=_e,E.state=T,E.info=L}z();let pe=new dl(E,R);this.xr=pe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let _=F.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=F.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(_){_!==void 0&&(K=_,this.setSize(ne,me,!1))},this.getSize=function(_){return _.set(ne,me)},this.setSize=function(_,G,Z=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=_,me=G,t.width=Math.floor(_*K),t.height=Math.floor(G*K),Z===!0&&(t.style.width=_+"px",t.style.height=G+"px"),this.setViewport(0,0,_,G)},this.getDrawingBufferSize=function(_){return _.set(ne*K,me*K).floor()},this.setDrawingBufferSize=function(_,G,Z){ne=_,me=G,K=Z,t.width=Math.floor(_*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,_,G)},this.getCurrentViewport=function(_){return _.copy(B)},this.getViewport=function(_){return _.copy(Re)},this.setViewport=function(_,G,Z,J){_.isVector4?Re.set(_.x,_.y,_.z,_.w):Re.set(_,G,Z,J),T.viewport(B.copy(Re).multiplyScalar(K).round())},this.getScissor=function(_){return _.copy(Ve)},this.setScissor=function(_,G,Z,J){_.isVector4?Ve.set(_.x,_.y,_.z,_.w):Ve.set(_,G,Z,J),T.scissor($.copy(Ve).multiplyScalar(K).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(_){T.setScissorTest(Xe=_)},this.setOpaqueSort=function(_){ge=_},this.setTransparentSort=function(_){ve=_},this.getClearColor=function(_){return _.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(_=!0,G=!0,Z=!0){let J=0;if(_){let W=!1;if(H!==null){let fe=H.texture.format;W=fe===ca||fe===la||fe===oa}if(W){let fe=H.texture.type,be=fe===an||fe===jn||fe===es||fe===ns||fe===ra||fe===aa,Ue=we.getClearColor(),Pe=we.getClearAlpha(),ze=Ue.r,ke=Ue.g,Fe=Ue.b;be?(x[0]=ze,x[1]=ke,x[2]=Fe,x[3]=Pe,R.clearBufferuiv(R.COLOR,0,x)):(S[0]=ze,S[1]=ke,S[2]=Fe,S[3]=Pe,R.clearBufferiv(R.COLOR,0,S))}else J|=R.COLOR_BUFFER_BIT}G&&(J|=R.DEPTH_BUFFER_BIT),Z&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",de,!1),we.dispose(),I.dispose(),ie.dispose(),Q.dispose(),re.dispose(),Le.dispose(),D.dispose(),ye.dispose(),He.dispose(),Y.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ge),pe.removeEventListener("sessionend",ut),Mt.stop()};function xe(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let _=L.autoReset,G=_e.enabled,Z=_e.autoUpdate,J=_e.needsUpdate,W=_e.type;z(),L.autoReset=_,_e.enabled=G,_e.autoUpdate=Z,_e.needsUpdate=J,_e.type=W}function de(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function v(_){let G=_.target;G.removeEventListener("dispose",v),q(G)}function q(_){le(_),Q.remove(_)}function le(_){let G=Q.get(_).programs;G!==void 0&&(G.forEach(function(Z){Y.releaseProgram(Z)}),_.isShaderMaterial&&Y.releaseShaderCache(_))}this.renderBufferDirect=function(_,G,Z,J,W,fe){G===null&&(G=Ie);let be=W.isMesh&&W.matrixWorld.determinant()<0,Ue=Ya(_,G,Z,J,W);T.setMaterial(J,be);let Pe=Z.index,ze=1;if(J.wireframe===!0){if(Pe=g.getWireframeAttribute(Z),Pe===void 0)return;ze=2}let ke=Z.drawRange,Fe=Z.attributes.position,Qe=ke.start*ze,rt=(ke.start+ke.count)*ze;fe!==null&&(Qe=Math.max(Qe,fe.start*ze),rt=Math.min(rt,(fe.start+fe.count)*ze)),Pe!==null?(Qe=Math.max(Qe,0),rt=Math.min(rt,Pe.count)):Fe!=null&&(Qe=Math.max(Qe,0),rt=Math.min(rt,Fe.count));let gt=rt-Qe;if(gt<0||gt===1/0)return;ye.setup(W,J,Ue,Z,Pe);let ct,ot=Se;if(Pe!==null&&(ct=b.get(Pe),ot=De,ot.setIndex(ct)),W.isMesh)J.wireframe===!0?(T.setLineWidth(J.wireframeLinewidth*lt()),ot.setMode(R.LINES)):ot.setMode(R.TRIANGLES);else if(W.isLine){let Be=J.linewidth;Be===void 0&&(Be=1),T.setLineWidth(Be*lt()),W.isLineSegments?ot.setMode(R.LINES):W.isLineLoop?ot.setMode(R.LINE_LOOP):ot.setMode(R.LINE_STRIP)}else W.isPoints?ot.setMode(R.POINTS):W.isSprite&&ot.setMode(R.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Be=W._multiDrawStarts,dt=W._multiDrawCounts,nt=W._multiDrawCount,Vt=Pe?b.get(Pe).bytesPerElement:1,bi=Q.get(J).currentProgram.getUniforms();for(let Ht=0;Ht<nt;Ht++)bi.setValue(R,"_gl_DrawID",Ht),ot.render(Be[Ht]/Vt,dt[Ht])}else if(W.isInstancedMesh)ot.renderInstances(Qe,gt,W.count);else if(Z.isInstancedBufferGeometry){let Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,dt=Math.min(Z.instanceCount,Be);ot.renderInstances(Qe,gt,dt)}else ot.render(Qe,gt)};function he(_,G,Z){_.transparent===!0&&_.side===mn&&_.forceSinglePass===!1?(_.side=Ft,_.needsUpdate=!0,ei(_,G,Z),_.side=Rn,_.needsUpdate=!0,ei(_,G,Z),_.side=mn):ei(_,G,Z)}this.compile=function(_,G,Z=null){Z===null&&(Z=_),d=ie.get(Z),d.init(G),w.push(d),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),_!==Z&&_.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();let J=new Set;return _.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let fe=W.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){let Ue=fe[be];he(Ue,Z,W),J.add(Ue)}else he(fe,Z,W),J.add(fe)}),d=w.pop(),J},this.compileAsync=function(_,G,Z=null){let J=this.compile(_,G,Z);return new Promise(W=>{function fe(){if(J.forEach(function(be){Q.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){W(_);return}setTimeout(fe,10)}F.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let V=null;function ue(_){V&&V(_)}function Ge(){Mt.stop()}function ut(){Mt.start()}let Mt=new jc;Mt.setAnimationLoop(ue),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(_){V=_,pe.setAnimationLoop(_),_===null?Mt.stop():Mt.start()},pe.addEventListener("sessionstart",Ge),pe.addEventListener("sessionend",ut),this.render=function(_,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,G,H),d=ie.get(_,w.length),d.init(G),w.push(d),ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ke.setFromProjectionMatrix(ae,tn,G.reversedDepth),te=this.localClippingEnabled,je=oe.init(this.clippingPlanes,te),m=I.get(_,P.length),m.init(),P.push(m),pe.enabled===!0&&pe.isPresenting===!0){let fe=E.xr.getDepthSensingMesh();fe!==null&&mt(fe,G,-1/0,E.sortObjects)}mt(_,G,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ge,ve),Je=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Je&&we.addToRenderList(m,_),this.info.render.frame++,je===!0&&oe.beginShadows();let Z=d.state.shadowsArray;_e.render(Z,_,G),je===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,W=m.transmissive;if(d.setupLights(),G.isArrayCamera){let fe=G.cameras;if(W.length>0)for(let be=0,Ue=fe.length;be<Ue;be++){let Pe=fe[be];Zs(J,W,_,Pe)}Je&&we.render(_);for(let be=0,Ue=fe.length;be<Ue;be++){let Pe=fe[be];_t(m,_,Pe,Pe.viewport)}}else W.length>0&&Zs(J,W,_,G),Je&&we.render(_),_t(m,_,G);H!==null&&O===0&&(k.updateMultisampleRenderTarget(H),k.updateRenderTargetMipmap(H)),_.isScene===!0&&_.onAfterRender(E,_,G),ye.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(d=w[w.length-1],je===!0&&oe.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,P.pop(),P.length>0?m=P[P.length-1]:m=null};function mt(_,G,Z,J){if(_.visible===!1)return;if(_.layers.test(G.layers)){if(_.isGroup)Z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(G);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ke.intersectsSprite(_)){J&&Oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae);let be=D.update(_),Ue=_.material;Ue.visible&&m.push(_,be,Ue,Z,Oe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ke.intersectsObject(_))){let be=D.update(_),Ue=_.material;if(J&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Oe.copy(_.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(_.matrixWorld).applyMatrix4(ae)),Array.isArray(Ue)){let Pe=be.groups;for(let ze=0,ke=Pe.length;ze<ke;ze++){let Fe=Pe[ze],Qe=Ue[Fe.materialIndex];Qe&&Qe.visible&&m.push(_,be,Qe,Z,Oe.z,Fe)}}else Ue.visible&&m.push(_,be,Ue,Z,Oe.z,null)}}let fe=_.children;for(let be=0,Ue=fe.length;be<Ue;be++)mt(fe[be],G,Z,J)}function _t(_,G,Z,J){let W=_.opaque,fe=_.transmissive,be=_.transparent;d.setupLightsView(Z),je===!0&&oe.setGlobalState(E.clippingPlanes,Z),J&&T.viewport(B.copy(J)),W.length>0&&Si(W,G,Z),fe.length>0&&Si(fe,G,Z),be.length>0&&Si(be,G,Z),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Zs(_,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new fn(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?ts:an,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let fe=d.state.transmissionRenderTarget[J.id],be=J.viewport||B;fe.setSize(be.z*E.transmissionResolutionScale,be.w*E.transmissionResolutionScale);let Ue=E.getRenderTarget(),Pe=E.getActiveCubeFace(),ze=E.getActiveMipmapLevel();E.setRenderTarget(fe),E.getClearColor(j),se=E.getClearAlpha(),se<1&&E.setClearColor(16777215,.5),E.clear(),Je&&we.render(Z);let ke=E.toneMapping;E.toneMapping=Un;let Fe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),je===!0&&oe.setGlobalState(E.clippingPlanes,J),Si(_,Z,J),k.updateMultisampleRenderTarget(fe),k.updateRenderTargetMipmap(fe),F.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let rt=0,gt=G.length;rt<gt;rt++){let ct=G[rt],ot=ct.object,Be=ct.geometry,dt=ct.material,nt=ct.group;if(dt.side===mn&&ot.layers.test(J.layers)){let Vt=dt.side;dt.side=Ft,dt.needsUpdate=!0,us(ot,Z,J,Be,dt,nt),dt.side=Vt,dt.needsUpdate=!0,Qe=!0}}Qe===!0&&(k.updateMultisampleRenderTarget(fe),k.updateRenderTargetMipmap(fe))}E.setRenderTarget(Ue,Pe,ze),E.setClearColor(j,se),Fe!==void 0&&(J.viewport=Fe),E.toneMapping=ke}function Si(_,G,Z){let J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,fe=_.length;W<fe;W++){let be=_[W],Ue=be.object,Pe=be.geometry,ze=be.group,ke=be.material;ke.allowOverride===!0&&J!==null&&(ke=J),Ue.layers.test(Z.layers)&&us(Ue,G,Z,Pe,ke,ze)}}function us(_,G,Z,J,W,fe){_.onBeforeRender(E,G,Z,J,W,fe),_.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),W.onBeforeRender(E,G,Z,J,_,fe),W.transparent===!0&&W.side===mn&&W.forceSinglePass===!1?(W.side=Ft,W.needsUpdate=!0,E.renderBufferDirect(Z,G,J,W,_,fe),W.side=Rn,W.needsUpdate=!0,E.renderBufferDirect(Z,G,J,W,_,fe),W.side=mn):E.renderBufferDirect(Z,G,J,W,_,fe),_.onAfterRender(E,G,Z,J,W,fe)}function ei(_,G,Z){G.isScene!==!0&&(G=Ie);let J=Q.get(_),W=d.state.lights,fe=d.state.shadowsArray,be=W.state.version,Ue=Y.getParameters(_,W.state,fe,G,Z),Pe=Y.getProgramCacheKey(Ue),ze=J.programs;J.environment=_.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(_.isMeshStandardMaterial?Le:re).get(_.envMap||J.environment),J.envMapRotation=J.environment!==null&&_.envMap===null?G.environmentRotation:_.envMapRotation,ze===void 0&&(_.addEventListener("dispose",v),ze=new Map,J.programs=ze);let ke=ze.get(Pe);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===be)return Ks(_,Ue),ke}else Ue.uniforms=Y.getUniforms(_),_.onBeforeCompile(Ue,E),ke=Y.acquireProgram(Ue,Pe),ze.set(Pe,ke),J.uniforms=Ue.uniforms;let Fe=J.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),Ks(_,Ue),J.needsLights=js(_),J.lightsStateVersion=be,J.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMap.value=W.state.directionalShadowMap,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotShadowMap.value=W.state.spotShadowMap,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMap.value=W.state.pointShadowMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function Js(_){if(_.uniformsList===null){let G=_.currentProgram.getUniforms();_.uniformsList=as.seqWithValue(G.seq,_.uniforms)}return _.uniformsList}function Ks(_,G){let Z=Q.get(_);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Ya(_,G,Z,J,W){G.isScene!==!0&&(G=Ie),k.resetTextureUnits();let fe=G.fog,be=J.isMeshStandardMaterial?G.environment:null,Ue=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ci,Pe=(J.isMeshStandardMaterial?Le:re).get(J.envMap||be),ze=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Fe=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,rt=!!Z.morphAttributes.color,gt=Un;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(gt=E.toneMapping);let ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=ct!==void 0?ct.length:0,Be=Q.get(J),dt=d.state.lights;if(je===!0&&(te===!0||_!==y)){let Dt=_===y&&J.id===M;oe.setState(J,_,Dt)}let nt=!1;J.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==dt.state.version||Be.outputColorSpace!==Ue||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==Pe||J.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==oe.numPlanes||Be.numIntersection!==oe.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==ke||Be.morphTargets!==Fe||Be.morphNormals!==Qe||Be.morphColors!==rt||Be.toneMapping!==gt||Be.morphTargetsCount!==ot)&&(nt=!0):(nt=!0,Be.__version=J.version);let Vt=Be.currentProgram;nt===!0&&(Vt=ei(J,G,W));let bi=!1,Ht=!1,ds=!1,ft=Vt.getUniforms(),qt=Be.uniforms;if(T.useProgram(Vt.program)&&(bi=!0,Ht=!0,ds=!0),J.id!==M&&(M=J.id,Ht=!0),bi||y!==_){T.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ft.setValue(R,"projectionMatrix",_.projectionMatrix),ft.setValue(R,"viewMatrix",_.matrixWorldInverse);let Ot=ft.map.cameraPosition;Ot!==void 0&&Ot.setValue(R,Ae.setFromMatrixPosition(_.matrixWorld)),U.logarithmicDepthBuffer&&ft.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ft.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),y!==_&&(y=_,Ht=!0,ds=!0)}if(W.isSkinnedMesh){ft.setOptional(R,W,"bindMatrix"),ft.setOptional(R,W,"bindMatrixInverse");let Dt=W.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(R,"boneTexture",Dt.boneTexture,k))}W.isBatchedMesh&&(ft.setOptional(R,W,"batchingTexture"),ft.setValue(R,"batchingTexture",W._matricesTexture,k),ft.setOptional(R,W,"batchingIdTexture"),ft.setValue(R,"batchingIdTexture",W._indirectTexture,k),ft.setOptional(R,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(R,"batchingColorTexture",W._colorsTexture,k));let $t=Z.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ce.update(W,Z,Vt),(Ht||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,ft.setValue(R,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(qt.envMap.value=Pe,qt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(qt.envMapIntensity.value=G.environmentIntensity),Ht&&(ft.setValue(R,"toneMappingExposure",E.toneMappingExposure),Be.needsLights&&Za(qt,ds),fe&&J.fog===!0&&A.refreshFogUniforms(qt,fe),A.refreshMaterialUniforms(qt,J,K,me,d.state.transmissionRenderTarget[_.id]),as.upload(R,Js(Be),qt,k)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(as.upload(R,Js(Be),qt,k),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ft.setValue(R,"center",W.center),ft.setValue(R,"modelViewMatrix",W.modelViewMatrix),ft.setValue(R,"normalMatrix",W.normalMatrix),ft.setValue(R,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Dt=J.uniformsGroups;for(let Ot=0,Ja=Dt.length;Ot<Ja;Ot++){let ti=Dt[Ot];He.update(ti,Vt),He.bind(ti,Vt)}}return Vt}function Za(_,G){_.ambientLightColor.needsUpdate=G,_.lightProbe.needsUpdate=G,_.directionalLights.needsUpdate=G,_.directionalLightShadows.needsUpdate=G,_.pointLights.needsUpdate=G,_.pointLightShadows.needsUpdate=G,_.spotLights.needsUpdate=G,_.spotLightShadows.needsUpdate=G,_.rectAreaLights.needsUpdate=G,_.hemisphereLights.needsUpdate=G}function js(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(_,G,Z){let J=Q.get(_);J.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(_.texture).__webglTexture=G,Q.get(_.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,G){let Z=Q.get(_);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};let We=R.createFramebuffer();this.setRenderTarget=function(_,G=0,Z=0){H=_,C=G,O=Z;let J=!0,W=null,fe=!1,be=!1;if(_){let Pe=Q.get(_);if(Pe.__useDefaultFramebuffer!==void 0)T.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)k.setupRenderTarget(_);else if(Pe.__hasExternalTextures)k.rebindTextures(_,Q.get(_.texture).__webglTexture,Q.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Fe=_.depthTexture;if(Pe.__boundDepthTexture!==Fe){if(Fe!==null&&Q.has(Fe)&&(_.width!==Fe.image.width||_.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(_)}}let ze=_.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);let ke=Q.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?W=ke[G][Z]:W=ke[G],fe=!0):_.samples>0&&k.useMultisampledRTT(_)===!1?W=Q.get(_).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[Z]:W=ke,B.copy(_.viewport),$.copy(_.scissor),ee=_.scissorTest}else B.copy(Re).multiplyScalar(K).floor(),$.copy(Ve).multiplyScalar(K).floor(),ee=Xe;if(Z!==0&&(W=We),T.bindFramebuffer(R.FRAMEBUFFER,W)&&J&&T.drawBuffers(_,W),T.viewport(B),T.scissor($),T.setScissorTest(ee),fe){let Pe=Q.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,Z)}else if(be){let Pe=G;for(let ze=0;ze<_.textures.length;ze++){let ke=Q.get(_.textures[ze]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ze,ke.__webglTexture,Z,Pe)}}else if(_!==null&&Z!==0){let Pe=Q.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pe.__webglTexture,Z)}M=-1},this.readRenderTargetPixels=function(_,G,Z,J,W,fe,be,Ue=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Q.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){T.bindFramebuffer(R.FRAMEBUFFER,Pe);try{let ze=_.textures[Ue],ke=ze.format,Fe=ze.type;if(!U.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=_.width-J&&Z>=0&&Z<=_.height-W&&(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ue),R.readPixels(G,Z,J,W,Ce.convert(ke),Ce.convert(Fe),fe))}finally{let ze=H!==null?Q.get(H).__webglFramebuffer:null;T.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(_,G,Z,J,W,fe,be,Ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Q.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(G>=0&&G<=_.width-J&&Z>=0&&Z<=_.height-W){T.bindFramebuffer(R.FRAMEBUFFER,Pe);let ze=_.textures[Ue],ke=ze.format,Fe=ze.type;if(!U.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.bufferData(R.PIXEL_PACK_BUFFER,fe.byteLength,R.STREAM_READ),_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ue),R.readPixels(G,Z,J,W,Ce.convert(ke),Ce.convert(Fe),0);let rt=H!==null?Q.get(H).__webglFramebuffer:null;T.bindFramebuffer(R.FRAMEBUFFER,rt);let gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ec(R,gt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,fe),R.deleteBuffer(Qe),R.deleteSync(gt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,G=null,Z=0){let J=Math.pow(2,-Z),W=Math.floor(_.image.width*J),fe=Math.floor(_.image.height*J),be=G!==null?G.x:0,Ue=G!==null?G.y:0;k.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,be,Ue,W,fe),T.unbindTexture()};let hn=R.createFramebuffer(),yn=R.createFramebuffer();this.copyTextureToTexture=function(_,G,Z=null,J=null,W=0,fe=null){fe===null&&(W!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=W,W=0):fe=0);let be,Ue,Pe,ze,ke,Fe,Qe,rt,gt,ct=_.isCompressedTexture?_.mipmaps[fe]:_.image;if(Z!==null)be=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,ke=Z.min.y,Fe=Z.isBox3?Z.min.z:0;else{let $t=Math.pow(2,-W);be=Math.floor(ct.width*$t),Ue=Math.floor(ct.height*$t),_.isDataArrayTexture?Pe=ct.depth:_.isData3DTexture?Pe=Math.floor(ct.depth*$t):Pe=1,ze=0,ke=0,Fe=0}J!==null?(Qe=J.x,rt=J.y,gt=J.z):(Qe=0,rt=0,gt=0);let ot=Ce.convert(G.format),Be=Ce.convert(G.type),dt;G.isData3DTexture?(k.setTexture3D(G,0),dt=R.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),dt=R.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);let nt=R.getParameter(R.UNPACK_ROW_LENGTH),Vt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bi=R.getParameter(R.UNPACK_SKIP_PIXELS),Ht=R.getParameter(R.UNPACK_SKIP_ROWS),ds=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fe);let ft=_.isDataArrayTexture||_.isData3DTexture,qt=G.isDataArrayTexture||G.isData3DTexture;if(_.isDepthTexture){let $t=Q.get(_),Dt=Q.get(G),Ot=Q.get($t.__renderTarget),Ja=Q.get(Dt.__renderTarget);T.bindFramebuffer(R.READ_FRAMEBUFFER,Ot.__webglFramebuffer),T.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let ti=0;ti<Pe;ti++)ft&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Q.get(_).__webglTexture,W,Fe+ti),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,fe,gt+ti)),R.blitFramebuffer(ze,ke,be,Ue,Qe,rt,be,Ue,R.DEPTH_BUFFER_BIT,R.NEAREST);T.bindFramebuffer(R.READ_FRAMEBUFFER,null),T.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(W!==0||_.isRenderTargetTexture||Q.has(_)){let $t=Q.get(_),Dt=Q.get(G);T.bindFramebuffer(R.READ_FRAMEBUFFER,hn),T.bindFramebuffer(R.DRAW_FRAMEBUFFER,yn);for(let Ot=0;Ot<Pe;Ot++)ft?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,W,Fe+Ot):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,W),qt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,fe,gt+Ot):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dt.__webglTexture,fe),W!==0?R.blitFramebuffer(ze,ke,be,Ue,Qe,rt,be,Ue,R.COLOR_BUFFER_BIT,R.NEAREST):qt?R.copyTexSubImage3D(dt,fe,Qe,rt,gt+Ot,ze,ke,be,Ue):R.copyTexSubImage2D(dt,fe,Qe,rt,ze,ke,be,Ue);T.bindFramebuffer(R.READ_FRAMEBUFFER,null),T.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qt?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(dt,fe,Qe,rt,gt,be,Ue,Pe,ot,Be,ct.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(dt,fe,Qe,rt,gt,be,Ue,Pe,ot,ct.data):R.texSubImage3D(dt,fe,Qe,rt,gt,be,Ue,Pe,ot,Be,ct):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,fe,Qe,rt,be,Ue,ot,Be,ct.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,fe,Qe,rt,ct.width,ct.height,ot,ct.data):R.texSubImage2D(R.TEXTURE_2D,fe,Qe,rt,be,Ue,ot,Be,ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Vt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ds),fe===0&&G.generateMipmaps&&R.generateMipmap(dt),T.unbindTexture()},this.initRenderTarget=function(_){Q.get(_).__webglFramebuffer===void 0&&k.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?k.setTextureCube(_,0):_.isData3DTexture?k.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?k.setTexture2DArray(_,0):k.setTexture2D(_,0),T.unbindTexture()},this.resetState=function(){C=0,O=0,H=null,T.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Ne=[{name:"Campos do Sol",short:"Sol",creature:"Pintinho Pipoca",value:80,color:16239189,ground:6072679,path:14665623,sky:11067373,kind:"chick"},{name:"Dunas Douradas",short:"Dunas",creature:"Raposa de Areia",value:140,color:16163924,ground:14262362,path:15978380,sky:16176812,kind:"fox"},{name:"Bosque Encantado",short:"Bosque",creature:"Cervinho Folha",value:230,color:9096067,ground:3767916,path:11380108,sky:10142154,kind:"deer"},{name:"Reino de Gelo",short:"Gelo",creature:"Pingui de Gelo",value:360,color:8509420,ground:13495281,path:9553371,sky:13232891,kind:"penguin"},{name:"Vale Vulc\xE2nico",short:"Vulc\xE3o",creature:"Drag\xE3o Brasa",value:550,color:15890772,ground:5589083,path:7824246,sky:7689058,kind:"dragon"},{name:"Caverna de Cristal",short:"Cristal",creature:"Tartaruga Cristal",value:850,color:11969011,ground:7632040,path:11839441,sky:7634862,kind:"turtle"},{name:"Ilhas C\xF3smicas",short:"Cosmos",creature:"Gato Estelar",value:1300,color:12884981,ground:4146541,path:7960243,sky:2699606,kind:"cat"},{name:"Recife de Coral",short:"Coral",creature:"Axolote P\xE9rola",value:1900,color:16748986,ground:2400186,path:15192996,sky:9560045,kind:"axolotl"},{name:"Vale dos Doces",short:"Doces",creature:"Coelho Caramelo",value:2700,color:16297102,ground:11969500,path:16766653,sky:16240612,kind:"rabbit"},{name:"Floresta de Bambu",short:"Bambu",creature:"Panda Jade",value:3700,color:6865562,ground:3904109,path:12958598,sky:12773588,kind:"panda"},{name:"Cidade das Engrenagens",short:"Rob\xF4s",creature:"Rob\xF4 Fa\xEDsca",value:5e3,color:16761943,ground:4479355,path:8820914,sky:9549791,kind:"robot"},{name:"Templo das Nuvens",short:"Nuvens",creature:"Grifo Aurora",value:6800,color:14070527,ground:10732778,path:16180925,sky:13359866,kind:"griffin"}],Qn=600,Rt=48,cn={x:-5,z:14},vn={x:5,z:14},_n=Ne.map((i,e)=>({x:e%2?-3.2:3.2,z:-(e*Rt+25)})),ls=i=>(7.7+i*1.1)*2,Ga=Ne.flatMap((i,e)=>[{x:-2.3,z:-(e*Rt+11),r:.72,h:.65,world:e},{x:2.15,z:-(e*Rt+37),r:.78,h:.72,world:e},...e>=7?Array.from({length:3},(t,n)=>({x:[0,-3.1,3.1][n],z:-(e*Rt+17+n*8),r:.65,h:.8+n*.08,world:e})):[]]),yi={boots:{name:"T\xEAnis velozes",icon:"\u{1F45F}",desc:"+0,8 de velocidade por n\xEDvel.",max:10,base:80},energy:{name:"Mais f\xF4lego",icon:"\u{1F4A8}",desc:"+30 de energia para disparar.",max:5,base:90},pen:{name:"Curral maior",icon:"\u{1F3E1}",desc:"+2 espa\xE7os para ovos e criaturas.",max:10,base:150},incubator:{name:"Ninho aquecido",icon:"\u{1F95A}",desc:"O ovo choca 1,5 s mais r\xE1pido.",max:3,base:100},gloves:{name:"Luvas de transporte",icon:"\u{1F9E4}",desc:"Corra 4% mais r\xE1pido carregando o ovo, por n\xEDvel.",max:4,base:180},springs:{name:"Molas de salto",icon:"\u{1F998}",desc:"Pule mais alto para superar obst\xE1culos.",max:3,base:120},hydration:{name:"Garrafa esportiva",icon:"\u{1F4A7}",desc:"+6 de f\xF4lego recuperado por segundo, por n\xEDvel.",max:4,base:160},coach:{name:"Esteira profissional",icon:"\u{1F3C3}",desc:"Ganhe 25% mais treino por segundo, por n\xEDvel.",max:4,base:200},charm:{name:"Medalha do criador",icon:"\u{1F3C5}",desc:"Receba 10% a mais por criatura vendida, por n\xEDvel.",max:3,base:300},turbo:{name:"Impulso turbo",icon:"\u{1F680}",desc:"Dispare 10% mais r\xE1pido, por n\xEDvel.",max:3,base:220}},cs={shield:{name:"Escudo bolha",icon:"\u{1F6E1}\uFE0F",price:60,max:5,desc:"Protege de uma captura. Ativa sozinho quando o dono encosta."},juice:{name:"Suco de energia",icon:"\u{1F9C3}",price:35,max:5,desc:"Recupera todo o f\xF4lego. Toque em Suco durante a corrida."}},yt={common:{name:"Comum",mult:1,color:16773585},rare:{name:"Raro",mult:3,color:7921151},epic:{name:"\xC9pico",mult:5,color:13476095},legendary:{name:"Lend\xE1rio",mult:8,color:16765788},secret:{name:"Secreto",mult:12,color:15963343}},sh=(i,e)=>e===0?"common":e===1?"rare":i>=6?"legendary":"epic",ln={crown:{name:"Coroa dourada",slot:"head",price:240,desc:"Uma coroa com pedras coloridas."},headphones:{name:"Fones neon",slot:"head",price:120,desc:"Fones azuis para seu corredor."},halo:{name:"Halo estelar",slot:"head",price:550,desc:"Um anel luminoso sobre a cabe\xE7a."},goggles:{name:"\xD3culos de aviador",slot:"face",price:160,desc:"Lentes turquesa e arma\xE7\xE3o dourada."},wings:{name:"Asas de cristal",slot:"back",price:420,desc:"Asas lil\xE1s para enfeitar o personagem."},cape:{name:"Capa de her\xF3i",slot:"back",price:200,desc:"Uma capa vermelha para a aventura."}},On={normal:{name:"Natural",mult:1,color:null},gold:{name:"Dourado",mult:1.5,color:16764006},rainbow:{name:"Arco-\xEDris",mult:2,color:9369055},cosmic:{name:"C\xF3smico",mult:3,color:11439103}},Mi={meadow:{name:"Prado",price:0,color:9750141,roof:7824561},candy:{name:"Doceria",price:600,color:15839692,roof:8244431},space:{name:"Observat\xF3rio",price:1200,color:7833016,roof:14527231},bamboo:{name:"Jardim de bambu",price:800,color:7780741,roof:14531176}},pl=["Troncos girat\xF3rios","Rajada de areia","Esporos do bosque","Piso escorregadio","Jatos de lava","Pulso de cristal","Baixa gravidade","Correnteza do recife","Po\xE7as de caramelo","Bambu m\xF3vel","Prensa mec\xE2nica","Vento das nuvens"],qa=[{id:"first",name:"Primeira entrega",key:"delivered",target:1,reward:100},{id:"five",name:"Mensageiro dos ovos",key:"delivered",target:5,reward:350},{id:"explorer",name:"Seis mundos",key:"visited",target:6,reward:600},{id:"collector",name:"Seis esp\xE9cies",key:"seen",target:6,reward:1e3},{id:"trainer",name:"Atleta n\xEDvel 50",key:"training",target:50,reward:700},{id:"rare",name:"Criador de raridades",key:"rareHatched",target:5,reward:800},{id:"income",name:"Curral produtivo",key:"incomeEarned",target:500,reward:400},{id:"clean",name:"Fuga impec\xE1vel",key:"cleanRuns",target:3,reward:500},{id:"worlds",name:"Grande explorador",key:"visited",target:12,reward:2e3},{id:"secret",name:"Segredo revelado",key:"secretHatched",target:1,reward:1500}],Wa=i=>On[i]?i:"normal",rh=i=>["speed","energy","value"][i%3],$a=i=>i?{speed:"Velocidade +5%",energy:"Recupera\xE7\xE3o de f\xF4lego +8/s",value:"Vendas +10%"}[rh(i.world)]:"Escolha uma criatura no curral.",Xa=i=>yt[i]?i:"common",Fn=(i,e,t)=>Math.max(e,Math.min(t,i)),kt=(i,e,t)=>Number.isFinite(i)?Fn(i,e,t):e,on=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function ml(){return{version:4,rng:Math.floor(Math.random()*2147483646)+1,nestState:null,companionId:null,decorations:["meadow"],decoration:"meadow",incomePending:0,incomeEarned:0,rareHatched:0,secretHatched:0,cleanRuns:0,claimed:[],album:[],daily:{day:"",delivered:0,claimed:!1},accessories:[],equipped:{},coins:0,training:0,trainXP:0,upgrades:Object.fromEntries(Object.keys(yi).map(i=>[i,0])),supplies:{shield:0,juice:0},creatures:[],eggs:[],seen:Array(Ne.length).fill(!1),visited:Array(Ne.length).fill(!1),delivered:0,caught:0,nextId:1}}function xm(i){let e=ml();if(!i||![1,2,3,4].includes(i.version))return e;e.accessories=Object.keys(ln).filter(t=>i.accessories?.includes(t));for(let t of e.accessories)i.equipped?.[ln[t].slot]===t&&(e.equipped[ln[t].slot]=t);e.coins=Math.floor(kt(i.coins,0,1e9)),e.training=Math.floor(kt(i.training,0,Qn)),e.trainXP=kt(i.trainXP,0,8+e.training*1.5);for(let[t,n]of Object.entries(yi))e.upgrades[t]=Math.floor(kt(i.upgrades?.[t],0,n.max));for(let[t,n]of Object.entries(cs))e.supplies[t]=Math.floor(kt(i.supplies?.[t],0,n.max));e.seen=e.seen.map((t,n)=>i.seen?.[n]===!0),e.visited=e.visited.map((t,n)=>i.visited?.[n]===!0),e.delivered=Math.floor(kt(i.delivered,0,1e6)),e.caught=Math.floor(kt(i.caught,0,1e6));for(let t of Array.isArray(i.creatures)?i.creatures:[])Number.isInteger(t.world)&&t.world>=0&&t.world<Ne.length&&e.creatures.length<3+e.upgrades.pen*2&&e.creatures.push({id:e.nextId++,world:t.world,rarity:Xa(t.rarity),mutation:Wa(t.mutation),incomeProgress:kt(t.incomeProgress,0,1e9),uid:typeof t.uid=="string"&&/^[a-zA-Z0-9_-]{1,80}$/.test(t.uid)?t.uid:"pet-"+Date.now().toString(36)+"-"+e.nextId});for(let t of Array.isArray(i.eggs)?i.eggs:[])Number.isInteger(t.world)&&t.world>=0&&t.world<Ne.length&&e.creatures.length+e.eggs.length<3+e.upgrades.pen*2&&e.eggs.push({id:e.nextId++,world:t.world,rarity:Xa(t.rarity),mutation:Wa(t.mutation),remaining:kt(t.remaining,0,8)});e.companionId=e.creatures.find(t=>t.uid===i.companionId)?.uid||null,e.decorations=Object.keys(Mi).filter(t=>t==="meadow"||i.decorations?.includes(t)),e.decoration=e.decorations.includes(i.decoration)?i.decoration:"meadow",e.rng=Math.floor(kt(i.rng||e.rng,1,4294967295)),e.nestState=Array.isArray(i.nestState)?i.nestState:null;for(let t of["incomePending","incomeEarned","rareHatched","secretHatched","cleanRuns"])e[t]=kt(i[t],0,1e9);e.claimed=qa.filter(t=>i.claimed?.includes(t.id)).map(t=>t.id),e.album=Array.isArray(i.album)?[...new Set(i.album.filter(t=>/^\d{1,2}:(common|rare|epic|legendary|secret):(normal|gold|rainbow|cosmic)$/.test(t)))].slice(0,240):[];for(let t of e.creatures){let n=t.world+":"+t.rarity+":"+t.mutation;e.album.includes(n)||e.album.push(n)}return i.daily&&/^\d{4}-\d{2}-\d{2}$/.test(i.daily.day)&&(e.daily={day:i.daily.day,delivered:kt(i.daily.delivered,0,1e4),claimed:i.daily.claimed===!0}),e}var hs=class{constructor(e){this.save=xm(e),this.player={x:0,z:15,y:0,vy:0},this.time=0,this.incomeClock=0,this.carrying=null,this.carriedEgg=null,this.mode="run",this.energy=this.maxEnergy(),this.moving=0,this.sprinting=!1,this.events=[],this.hazardCooldown=0,this.slowUntil=0,this.runClean=!0,this.nestEggs=Ne.map((t,n)=>Array.from({length:3},(s,r)=>{let o=this.save.nestState?.[n]?.[r];return o?{slot:r,rarity:Xa(o.rarity),mutation:Wa(o.mutation),availableAt:kt(o.cooldown,0,240),refreshAt:kt(o.refresh,1,240)}:this.rollEgg(n,r)})),this.captureNests(),this.guardians=_n.map(t=>({x:t.x,z:t.z-2.5,state:"idle",grace:0})),this.hitCooldown=0,this.save.visited[0]=!0}get availableAt(){return this.nestEggs.map(e=>Math.min(...e.map(t=>t.availableAt)))}availableEggs(e){return this.nestEggs[e].filter(t=>t.availableAt<=this.time)}recommendedTraining(e){let t=.92+this.save.upgrades.gloves*.04;return Math.max(0,Math.ceil((ls(e)*1.1/(t*(this.power()==="speed"?1.05:1))-9-this.save.upgrades.boots*.8)/.35))}trainingAdvice(e){let t=this.recommendedTraining(e);return{level:t,remaining:Math.max(0,t-this.save.training),ready:this.save.training>=t}}speed(){return this.raceMode?22:(9+this.save.training*.35+this.save.upgrades.boots*.8)*(this.power()==="speed"?1.05:1)}maxEnergy(){return 100+this.save.upgrades.energy*30}capacity(){return 3+this.save.upgrades.pen*2}trainTarget(){return 8+this.save.training*1.5}hatchTime(){return 8-this.save.upgrades.incubator*1.5}zone(){return Fn(Math.floor(-this.player.z/Rt),0,Ne.length-1)}inBase(){return this.player.z>3}price(e){let t=yi[e];return t?Math.round(t.base*(this.save.upgrades[e]+1)**1.5):1/0}emit(e,t,n){this.events.push({type:e,text:t,world:n})}drainEvents(){return this.events.splice(0)}jump(){return this.mode==="run"&&this.player.y===0?(this.player.vy=7.6+(this.raceMode?0:this.save.upgrades.springs*.7),!0):!1}interaction(){if(this.raceMode)return{type:"walk",label:"Siga o ninho da corrida"};if(this.mode==="train")return{type:"stop",label:"Sair da esteira"};if(this.carrying!==null)return on(this.player,cn)<3.1?{type:"deposit",label:"Guardar ovo"}:{type:"return",label:"Leve ao curral"};if(on(this.player,vn)<2.5)return{type:"train",label:"Treinar na esteira"};if(on(this.player,cn)<3.1)return{type:"corral",label:"Abrir curral"};for(let e=0;e<Ne.length;e++)if(on(this.player,_n[e])<2.6)return this.availableAt[e]<=this.time?{type:"nest",label:`Escolher ovo \xB7 ${this.availableEggs(e).length}`,world:e}:{type:"wait",label:`Novo ovo em ${Math.ceil(this.availableAt[e]-this.time)} s`};return{type:"walk",label:"Aproxime-se do ovo"}}interact(){let e=this.interaction();if(e.type==="stop")return this.mode="run",this.player.z=16.2,this.emit("stop","Treino conclu\xEDdo. Sua velocidade est\xE1 maior!"),e.type;if(e.type==="train")return this.save.training>=Qn?(this.emit("notice","Voc\xEA j\xE1 atingiu o n\xEDvel m\xE1ximo de treino!"),!1):(this.mode="train",this.player.x=vn.x,this.player.z=vn.z,this.player.y=0,this.player.vy=0,this.emit("train","Treinando! A cada barra completa, sua velocidade aumenta."),e.type);if(e.type==="deposit"){if(this.save.creatures.length+this.save.eggs.length>=this.capacity())return this.emit("notice","Curral cheio! Venda uma criatura ou compre mais espa\xE7os."),!1;let t=this.carrying;return this.save.eggs.push({id:this.save.nextId++,world:t,rarity:this.carriedEgg.rarity,mutation:this.carriedEgg.mutation,remaining:this.hatchTime()}),this.save.delivered++,this.refreshDay(),this.save.daily.delivered++,this.runClean&&this.save.cleanRuns++,this.nestEggs[t][this.carriedEgg.slot].availableAt=this.time+18,this.carrying=null,this.carriedEgg=null,this.guardians[t].state="return",this.emit("deposit","O ovo chegou ao curral! J\xE1 est\xE1 chocando.",t),e.type}return["corral","nest"].includes(e.type)?e.type:!1}steal(e){let t=this.interaction();if(t.type!=="nest"||!Number.isInteger(e))return!1;let n=this.nestEggs[t.world]?.[e];if(!n||n.availableAt>this.time)return!1;this.carrying=t.world,this.runClean=!0,this.carriedEgg={world:t.world,slot:e,rarity:n.rarity,mutation:n.mutation},n.availableAt=1/0;let s=this.guardians[t.world];return s.state="chase",s.grace=1.1,this.emit("grab",`Ovo ${yt[n.rarity].name.toLowerCase()}! Corra para o curral!`,t.world),!0}saleValue(e,t="common",n="normal"){return Math.round(Ne[e].value*yt[Xa(t)].mult*On[Wa(n)].mult*(1+this.save.upgrades.charm*.1+(this.power()==="value"?.1:0)))}equip(e){let t=ln[e];return!t||!this.save.accessories.includes(e)?!1:(this.save.equipped[t.slot]===e?delete this.save.equipped[t.slot]:this.save.equipped[t.slot]=e,this.emit("upgrade",this.save.equipped[t.slot]===e?`${t.name} equipado!`:`${t.name} guardado.`),!0)}useJuice(){return this.mode!=="run"||this.save.supplies.juice<1||this.energy>=this.maxEnergy()-1?!1:(this.save.supplies.juice--,this.energy=this.maxEnergy(),this.emit("juice","Suco usado! Seu f\xF4lego est\xE1 completo."),!0)}sell(e){if(!this.inBase())return!1;let t=this.save.creatures.findIndex(r=>r.id===e);if(t<0)return!1;let n=this.saleValue(this.save.creatures[t].world,this.save.creatures[t].rarity,this.save.creatures[t].mutation),[s]=this.save.creatures.splice(t,1);return this.save.incomePending+=s.incomeProgress||0,this.collectIncome(),this.save.companionId===s.uid&&(this.save.companionId=null),this.save.coins+=n,this.emit("sold",`${Ne[s.world].creature}: +${n} integros!`,s.world),!0}buy(e){if(Mi[e]){let n=Mi[e];if(!this.inBase())return!1;if(!this.save.decorations.includes(e)){if(this.save.coins<n.price)return!1;this.save.coins-=n.price,this.save.decorations.push(e)}return this.save.decoration=e,this.emit("upgrade","Curral decorado: "+n.name),!0}if(ln[e]){let n=ln[e];return!this.inBase()||this.save.accessories.includes(e)||this.save.coins<n.price?!1:(this.save.coins-=n.price,this.save.accessories.push(e),this.equip(e),!0)}if(cs[e]){let n=cs[e];return!this.inBase()||this.save.coins<n.price||this.save.supplies[e]>=n.max?!1:(this.save.coins-=n.price,this.save.supplies[e]++,this.emit("upgrade",`${n.name} comprado!`),!0)}let t=yi[e];return!t||!this.inBase()||this.save.upgrades[e]>=t.max||this.save.coins<this.price(e)?!1:(this.save.coins-=this.price(e),this.save.upgrades[e]++,this.energy=this.maxEnergy(),this.emit("upgrade",`${t.name}: melhoria comprada!`),!0)}catchEgg(e){if(this.runClean=!1,this.save.supplies.shield>0){this.save.supplies.shield--,this.guardians[e].grace=3,this.energy=this.maxEnergy(),this.emit("shield","Escudo ativado! Voc\xEA tem 3 segundos para abrir dist\xE2ncia.",e);return}this.nestEggs[e][this.carriedEgg.slot].availableAt=this.time+5,this.carrying=null,this.carriedEgg=null,this.guardians[e].state="return",this.save.caught++,Object.assign(this.player,{x:0,z:15,y:0,vy:0}),this.energy=this.maxEnergy(),this.emit("caught","O dono recuperou o ovo! Treine ou melhore seus t\xEAnis e tente de novo.",e)}collide(e,t=.35,n=!1){for(let s of Ga){if(!n&&e.y>s.h)continue;let r=e.x-s.x,o=e.z-s.z,l=Math.hypot(r,o),c=t+s.r;l<c&&(e.x=s.x+(l?r/l:1)*c,e.z=s.z+(l?o/l:0)*c,!n&&this.hitCooldown<=0&&(this.runClean=!1,this.emit("obstacle","Pule ou contorne os obst\xE1culos!"),this.hitCooldown=2))}}moveGuardian(e,t,n,s){let r=t.x-e.x,o=t.z-e.z,l=Math.hypot(r,o);if(l<.12)return;r/=l,o/=l;for(let a of Ga){let h=e.x-a.x,u=e.z-a.z,f=Math.hypot(h,u);f<a.r+1.5&&f>.01&&(r+=h/f*(a.r+1.5-f)*1.2,o+=u/f*(a.r+1.5-f)*1.2)}let c=Math.hypot(r,o)||1;e.x+=r/c*Math.min(n*s,l),e.z+=o/c*Math.min(n*s,l),this.collide(e,.43,!0)}update(e,t={}){e=Fn(e,0,.05),this.time+=e,this.refreshDay(),this.hazardCooldown=Math.max(0,this.hazardCooldown-e);for(let c=0;c<this.nestEggs.length;c++)for(let a=0;a<3;a++){let h=this.nestEggs[c][a];h.availableAt<=this.time&&h.refreshAt<=this.time&&(this.nestEggs[c][a]=this.rollEgg(c,a))}this.updateIncome(e),this.captureNests(),this.hitCooldown-=e;for(let c of this.save.eggs)c.remaining-=e;let n=this.save.eggs.filter(c=>c.remaining<=0);this.save.eggs=this.save.eggs.filter(c=>c.remaining>0);for(let c of n){let a={id:c.id,uid:"pet-"+Date.now().toString(36)+"-"+this.random().toString(36).slice(2,10),world:c.world,rarity:c.rarity,mutation:c.mutation||"normal"};this.save.creatures.push(a),c.rarity!=="common"&&this.save.rareHatched++,c.rarity==="secret"&&this.save.secretHatched++;let h=a.world+":"+a.rarity+":"+a.mutation;this.save.album.includes(h)||this.save.album.push(h),this.save.seen[c.world]=!0,this.emit("hatch",`${Ne[c.world].creature} nasceu! Vale ${this.saleValue(c.world,c.rarity,c.mutation)} integros (${yt[c.rarity].name}).`,c.world)}if(this.mode==="train"){this.moving=1,this.sprinting=!1,this.save.trainXP+=e*(1+this.save.upgrades.coach*.25),this.energy=Math.min(this.maxEnergy(),this.energy+e*20),this.save.trainXP>=this.trainTarget()&&(this.save.trainXP-=this.trainTarget(),this.save.training++,this.emit("level",`Treino n\xEDvel ${this.save.training}! Velocidade: ${this.speed().toFixed(2).replace(".",",")}.`),this.save.training>=Qn&&(this.save.trainXP=0,this.mode="run",this.player.z=16.2));return}let s=t.x||0,r=t.z||0,o=Math.hypot(s,r);o>1&&(s/=o,r/=o),this.moving=Math.min(1,o),this.sprinting=!!t.sprint&&this.energy>1&&this.moving>0,this.energy=Fn(this.energy+e*(this.sprinting?-32:18+this.save.upgrades.hydration*6+(this.power()==="energy"?8:0)),0,this.maxEnergy());let l=this.raceMode?22:this.speed()*(this.time<this.slowUntil?.65:1)*(this.carrying===null?1:.92+this.save.upgrades.gloves*.04)*(this.sprinting?1.55+this.save.upgrades.turbo*.1:1);this.player.x=Fn(this.player.x+s*l*e,-9,9),this.player.z=Fn(this.player.z+r*l*e,-Rt*Ne.length+.8,25),(this.player.vy||this.player.y)&&(this.player.vy-=(this.zone()===6?13:22)*e,this.player.y+=this.player.vy*e,this.player.y<0&&(this.player.y=0,this.player.vy=0)),this.collide(this.player),this.save.visited[this.zone()]=!0,this.updateHazard();for(let c=0;c<Ne.length;c++){let a=this.guardians[c],h={x:_n[c].x,z:_n[c].z-2.5};if(this.carrying===c){if(a.grace=Math.max(0,a.grace-e),this.inBase())a.state="waiting",this.moveGuardian(a,{x:Fn(this.player.x,-4,4),z:1.5},ls(c),e);else if(a.state="chase",a.grace||this.moveGuardian(a,this.guardianTarget(c,t),ls(c)*(this.guardianBurst(c)?1.18:1),e),!a.grace&&on(a,this.player)<.94&&this.player.y<.65){this.catchEgg(c);break}}else a.state!=="idle"&&(this.moveGuardian(a,h,12,e),on(a,h)<.15&&(a.state="idle"))}}random(){return this.save.rng=Math.imul(this.save.rng,1664525)+1013904223>>>0,this.save.rng/4294967296}rollEgg(e,t){let n=this.random(),s=this.random(),r=e===0&&t===0||n<.46?"common":n<.75?"rare":n<.92||e<6?"epic":n<.988?"legendary":"secret";return{slot:t,rarity:r,mutation:s<.72?"normal":s<.91?"gold":s<.985?"rainbow":"cosmic",availableAt:this.time,refreshAt:this.time+180+this.random()*60}}captureNests(){this.save.nestState=this.nestEggs.map(e=>e.map(t=>({rarity:t.rarity,mutation:t.mutation,cooldown:Number.isFinite(t.availableAt)?Math.max(0,t.availableAt-this.time):18,refresh:Math.max(1,t.refreshAt-this.time)})))}refreshDay(){let e=new Date().toISOString().slice(0,10);this.save.daily.day!==e&&(this.save.daily={day:e,delivered:0,claimed:!1})}companion(){return this.save.creatures.find(e=>e.uid===this.save.companionId)||null}power(){let e=this.companion();return e?rh(e.world):null}equipPet(e){return!this.inBase()||!this.save.creatures.some(t=>t.uid===e)?!1:(this.save.companionId=this.save.companionId===e?null:e,this.emit("upgrade",this.save.companionId?"Companheiro pronto! "+$a(this.companion()):"Companheiro voltou ao curral."),!0)}creatureIncomeRate(e){return Ne[e.world].value*yt[e.rarity].mult*On[e.mutation||"normal"].mult/1200}incomeRate(){return this.save.creatures.reduce((e,t)=>e+this.creatureIncomeRate(t),0)}creditIncome(e,t){return e=Math.min(Math.floor(e),1e9-this.save.coins),e<=0?0:(this.save.coins+=e,this.save.incomeEarned+=e,this.events.push({type:"income",amount:e,uid:t?.uid,world:t?.world}),e)}collectIncome(){let e=this.creditIncome(Math.floor(this.save.incomePending+1e-9));return this.save.incomePending=Math.max(0,this.save.incomePending-e),e||!1}updateIncome(e){if(this.collectIncome(),this.save.incomePending>0&&this.save.incomePending<1&&this.save.creatures.length){let t=this.save.creatures[0];t.incomeProgress=(t.incomeProgress||0)+this.save.incomePending,this.save.incomePending=0}for(let t of this.save.creatures)t.incomeProgress=(t.incomeProgress||0)+this.creatureIncomeRate(t)*e;if(this.incomeClock+=e,!(this.incomeClock<3-1e-9)){this.incomeClock=Math.max(0,this.incomeClock-3);for(let t of this.save.creatures){let n=this.creditIncome(Math.floor(t.incomeProgress+1e-9),t);t.incomeProgress=Math.max(0,t.incomeProgress-n)}}}missionProgress(e){let t=this.save[e.key];return Math.min(e.target,Array.isArray(t)?t.filter(Boolean).length:t||0)}claimMission(e){let t=qa.find(n=>n.id===e);return!t||this.save.claimed.includes(e)||this.missionProgress(t)<t.target?!1:(this.save.claimed.push(e),this.save.coins+=t.reward,this.emit("upgrade","Conquista: "+t.name+" \xB7 +"+t.reward+" integros"),!0)}claimDaily(){return this.refreshDay(),this.save.daily.claimed||this.save.daily.delivered<3?!1:(this.save.daily.claimed=!0,this.save.coins+=200,this.emit("upgrade","Expedi\xE7\xE3o do dia: +200 integros!"),!0)}hazard(e=this.zone()){let t=-(e*Rt+19),n=(this.time+e*.63)%6;return{x:Math.sin(this.time*(e===10?1.6:.8)+e)*3.8,z:t,r:e===4?1.5:1.1,active:n>2&&n<4.6,warning:n>1.2&&n<=2,name:pl[e]}}guardianTarget(e,t){let n=this.player;return e%3===1?{x:Fn(n.x+(t.x||0)*2,-8,8),z:n.z+(t.z||0)*2}:e%3===2?{x:n.x+Math.sin(this.time*2+e)*1.2,z:n.z}:n}guardianBurst(e){return e>=3&&(this.time+e)%8>6.8}updateHazard(){if(this.inBase()||this.hazardCooldown>0)return;let e=this.zone(),t=this.hazard(e);t.active&&on(this.player,t)<t.r+.3&&this.player.y<.8&&(this.hazardCooldown=3,this.runClean=!1,this.energy=Math.max(0,this.energy-12),this.slowUntil=this.time+(e===8?2:e===3?1.6:1),[1,7,11].includes(e)&&(this.player.x=Fn(this.player.x+(e%2?1:-1)*2,-8,8)),e===4&&(this.energy=Math.max(0,this.energy-12)),this.emit("obstacle",t.name+"! Pule ou desvie da \xE1rea marcada."))}snapshot(){return this.captureNests(),{incomeRate:this.incomeRate(),hazard:this.hazard(),player:{...this.player},zone:this.zone(),speed:this.speed(),energy:this.energy,capacity:this.capacity(),carrying:this.carrying,carriedEgg:this.carriedEgg?{...this.carriedEgg}:null,nestEggs:this.nestEggs.map(e=>e.map(t=>({...t,available:t.availableAt<=this.time}))),mode:this.mode,time:this.time,interaction:this.interaction(),guardians:this.guardians.map((e,t)=>({...e,speed:ls(t)})),availableAt:[...this.availableAt],trainingAdvice:Ne.map((e,t)=>this.trainingAdvice(t)),...JSON.parse(JSON.stringify(this.save))}}};function ah(i){let e=new Map,t=new Map,n=[],s=(F,U=!1)=>{let T=F+":"+U;return e.has(T)||e.set(T,new Fs({color:F,roughness:.78,flatShading:!0,emissive:U?F:0,emissiveIntensity:U?.35:0})),e.get(T)},r=(F,U)=>(t.has(F)||t.set(F,U()),t.get(F)),o=(F,U=0,T=0,L=0)=>{let Q=new An;return Q.position.set(U,T,L),F.add(Q),Q},l=(F,U,T,L=0,Q=0,k=0,re=!1)=>{let Le=new Nt(U,s(T,re));return Le.position.set(L,Q,k),Le.receiveShadow=!0,F.add(Le),Le},c=(F,U,T,L,Q,k=0,re=0,Le=0)=>l(F,r(`b${U},${T},${L}`,()=>new Yn(U,T,L)),Q,k,re,Le),a=(F,U,T,L=0,Q=0,k=0,re=1,Le=1,b=1)=>{let g=l(F,r("s"+U,()=>new Ji(U,12,8)),T,L,Q,k);return g.scale.set(re,Le,b),g},h=(F,U,T,L,Q,k=0,re=0,Le=0,b=12)=>l(F,r(`c${U},${T},${L},${b}`,()=>new Us(U,T,L,b)),Q,k,re,Le),u=(F,U,T,L,Q=0,k=0,re=0)=>l(F,r(`t${U},${T}`,()=>new Ki(U,T,6,24)),L,Q,k,re),f=(F,U,T,L,Q)=>{let k=new X(...U),re=new X(...T).sub(k),Le=h(F,L,L,re.length(),Q,...k.addScaledVector(re,.5).toArray());return Le.quaternion.setFromUnitVectors(new X(0,1,0),re.normalize()),Le},p=(F,U,T,L,Q,k=3,re="#233d46",Le="#fff6d9")=>{let b=document.createElement("canvas");b.width=512,b.height=128;let g=b.getContext("2d");g.fillStyle=Le,g.beginPath(),g.roundRect(4,4,504,120,22),g.fill(),g.fillStyle=re,g.font="bold 40px Arial",g.textAlign="center",g.textBaseline="middle",g.fillText(U,256,66,480);let D=new Zi(b);D.colorSpace=St;let Y=new $i(new ui({map:D,depthWrite:!1}));return Y.position.set(T,L,Q),Y.scale.set(k,k/4,1),F.add(Y),n.push(Y),Y};function x(F){let U=document.createElement("canvas");U.width=640,U.height=288;let T=new Zi(U);T.colorSpace=St;let L=new $i(new ui({map:T,depthWrite:!1}));return L.position.set(0,2.4,0),L.scale.set(4.2,1.89,1),F.add(L),{canvas:U,texture:T,sprite:L}}function S(F,U){let T=B[F].plaque,L=T.canvas.getContext("2d");L.clearRect(0,0,640,288),L.fillStyle=U.ready?"#daf3cf":"#fff1c8",L.beginPath(),L.roundRect(5,5,630,278,28),L.fill(),L.strokeStyle=U.ready?"#4b8c55":"#b48135",L.lineWidth=8,L.stroke(),L.textAlign="center",L.textBaseline="middle",L.fillStyle="#345047",L.font="bold 30px Arial",L.fillText("TREINO RECOMENDADO",320,52),L.font="bold 54px Arial",L.fillText("N\xCDVEL "+U.level,320,115),L.font="bold 34px Arial",L.fillText(U.ready?"Voc\xEA j\xE1 tem esse treino!":"Faltam "+U.remaining+" n\xEDveis",320,178),L.fillStyle="#876323",L.font="bold 24px Arial",L.fillText("3 OVOS \xB7 RARIDADES E MUTA\xC7\xD5ES",320,240),T.texture.needsUpdate=!0,T.sprite.userData.advice={...U}}function m(F,U,T=1,L="common"){let Q=o(F);Q.scale.setScalar(T),a(Q,.42,yt[L].color,0,.5,0,1,1.35,1);for(let[k,re,Le]of[[.25,.63,.28],[-.19,.34,.32],[.05,.9,.18],[.3,.33,-.2]])a(Q,.075,U,k,re,Le,1,1.2,.4);if(L!=="common"){u(Q,.44,.025,yt[L].color,0,.06,0).rotation.x=Math.PI/2;for(let k=0;k<yt[L].mult-1;k++){let re=k*2.4;h(Q,0,.06,.15,16773296,Math.sin(re)*.47,.75+k%2*.2,Math.cos(re)*.47,4)}}return Q}function d(F,U,T,L=1,Q="common"){let k=o(F);k.scale.setScalar(L);let re=[],Le=2505291,b=16771258,g=-.35,D=.92;if(U==="chick"){a(k,.43,T,0,.51,0,1,1.1,.9),a(k,.31,T,0,1,-.07),h(k,0,.13,.24,15697476,0,.94,-.43,4).rotation.x=-Math.PI/2;for(let A of[-.16,.16])c(k,.18,.09,.3,15697476,A,.06,-.06);for(let A of[-.42,.42]){let I=a(k,.22,T,A,.61,0,.45,1.15,.9);re.push(I)}for(let A=0;A<3;A++)a(k,.095,15231840,(A-1)*.09,1.28,-.05);D=1.06,g=-.35}else if(U==="fox"||U==="cat"){a(k,.36,T,0,.47,.06,1,1.1,1.35),a(k,.34,T,0,.95,-.18,1.08,.92,.95),a(k,.19,b,0,.83,-.43,1,.65,.7),a(k,.065,Le,0,.9,-.55);for(let I of[-.24,.24]){let ie=h(k,0,.16,.4,T,I,1.31,-.16,4);ie.rotation.z=I<0?.18:-.18,a(k,.07,16036809,I,1.35,-.28,1,1.8,.3)}for(let I of[-.21,.21]){let ie=c(k,.16,.28,.23,T,I,.16,-.12);re.push(ie)}let A=o(k,0,.4,.47);if(a(A,.2,T,0,.22,.24,1,1.2,2.1),a(A,.14,b,0,.32,.52,1,1,1.3),A.rotation.x=-.3,re.push(A),D=1,g=-.48,U==="cat"){u(k,.2,.025,16176247,0,1.7,-.16).rotation.x=Math.PI/2;for(let I of[-.44,.44]){let ie=a(k,.27,9018337,I,.72,.1,.45,.6,1.5);ie.rotation.z=I,re.push(ie)}}}else if(U==="deer"){a(k,.38,T,0,.55,.06,.8,1,1.4),a(k,.26,12574109,0,1.06,-.23,.9,1.1,1),a(k,.14,b,0,.99,-.48),a(k,.045,Le,0,1.04,-.6);for(let A of[-.22,.22])a(k,.16,T,A,1.18,-.24,1.5,.5,.65),f(k,[A*.6,1.25,-.2],[A,1.67,-.2],.038,12358234),f(k,[A*.85,1.47,-.2],[A*1.7,1.56,-.2],.026,12358234);for(let A of[-.19,.19])for(let I of[-.24,.29]){let ie=h(k,.055,.055,.37,7506774,A,.2,I);re.push(ie)}for(let A of[-.16,.16])a(k,.048,b,A,.65,-.29);D=1.12,g=-.46}else if(U==="penguin"){a(k,.44,3299975,0,.61,0,1,1.4,.85),a(k,.32,16119271,0,.55,-.19,1,1.5,.6),a(k,.3,3299975,0,1.1,-.06),h(k,0,.12,.22,15908181,0,1,-.4,4).rotation.x=-Math.PI/2;for(let A of[-.42,.42]){let I=a(k,.21,T,A,.65,0,.45,1.8,.8);I.rotation.z=A*.7,re.push(I)}for(let A of[-.2,.2])a(k,.16,15908181,A,.07,-.13,1,.35,1.4);u(k,.32,.065,T,0,.89,-.04).rotation.x=Math.PI/2,D=1.13,g=-.34}else if(U==="dragon"){a(k,.42,T,0,.52,.07,1,1.1,1.2),a(k,.31,T,0,1.06,-.23),a(k,.21,15972966,0,.94,-.48,1,.7,1);for(let A of[-.2,.2])h(k,0,.075,.27,b,A,1.41,-.1,5);for(let A of[-.56,.56]){let I=o(k,A,.92,.12);h(I,0,.35,.62,10967922,0,0,0,3).rotation.z=A>0?-1.1:1.1,re.push(I)}for(let A=0;A<4;A++)h(k,0,.11,.18,16438365,0,.93-A*.13,.24+A*.18,4);for(let A of[-.24,.24]){let I=c(k,.19,.25,.31,T,A,.13,-.1);re.push(I)}a(k,.18,T,0,.28,.6,1,.7,2.1),D=1.13,g=-.5}else if(U==="turtle"){a(k,.52,6980258,0,.49,.1,1,.7,1.2);for(let A=0;A<5;A++){let I=A*1.256;h(k,0,.18,.42,T,Math.sin(I)*.3,.8,Math.cos(I)*.34+.1,5)}a(k,.24,9029305,0,.4,-.56);for(let A of[-.42,.42])for(let I of[-.23,.39]){let ie=a(k,.15,9029305,A,.12,I,1,.55,1.25);re.push(ie)}D=.47,g=-.77}else if(U==="axolotl"){a(k,.36,T,0,.38,.12,1,.7,1.6),a(k,.34,16765666,0,.7,-.24,1.25,.8,1);for(let A of[-.38,.38])for(let I=0;I<3;I++)f(k,[A*.75,.7,-.2],[A*1.5,.55+I*.18,-.17],.05,T),a(k,.08,T,A*1.5,.55+I*.18,-.17);for(let A of[-.3,.3])for(let I of[-.1,.4]){let ie=a(k,.14,T,A,.13,I,1,.5,1.3);re.push(ie)}a(k,.18,T,0,.32,.67,.35,1,1.8),D=.73,g=-.54}else if(U==="rabbit"){a(k,.37,T,0,.44,.04,1,1.2,1),a(k,.32,16770256,0,.99,-.13);for(let A of[-.16,.16])a(k,.16,T,A,1.47,-.08,.7,2.1,.7),a(k,.08,16161978,A,1.5,-.17,.6,2.2,.4);for(let A of[-.24,.24]){let I=a(k,.2,T,A,.12,-.1,.8,.6,1.5);re.push(I)}a(k,.18,16775146,0,.45,.44),a(k,.06,14582162,0,.91,-.43),D=1.04,g=-.41}else if(U==="panda"){a(k,.46,15922141,0,.52,0,1,1.12,1),a(k,.36,15922141,0,1.07,-.12,1.12,.96,1);for(let A of[-.31,.31])a(k,.15,2575947,A,1.31,-.1);for(let A of[-.15,.15])a(k,.12,2575947,A,1.08,-.42,1,1.2,.3);for(let A of[-.37,.37]){let I=a(k,.19,2575947,A,.58,0,.75,1.5,.8);re.push(I)}for(let A of[-.23,.23])a(k,.18,2575947,A,.13,-.05);u(k,.33,.065,T,0,.81,-.02).rotation.x=Math.PI/2,a(k,.06,2575947,0,.96,-.47),D=1.1,g=-.46}else if(U==="robot"){c(k,.66,.6,.46,8366791,0,.65,0),c(k,.66,.46,.48,T,0,1.22,-.06),c(k,.5,.25,.03,2704991,0,1.25,-.31),c(k,.28,.23,.04,T,0,.69,-.25),f(k,[0,1.45,0],[0,1.68,0],.035,8366791),a(k,.09,10876879,0,1.7,0);for(let A of[-.45,.45]){let I=c(k,.17,.46,.21,T,A,.64,0);re.push(I)}for(let A of[-.2,.2]){let I=c(k,.2,.35,.28,4217725,A,.19,0);re.push(I)}D=1.25,g=-.33}else if(U==="griffin"){a(k,.4,T,0,.52,.09,1,1.1,1.2),a(k,.32,16774357,0,1.08,-.17),h(k,0,.12,.3,16038756,0,1,-.54,4).rotation.x=-Math.PI/2;for(let A of[-.58,.58]){let I=o(k,A,.85,.1);for(let ie=0;ie<3;ie++)a(I,.22,ie%2?T:16774357,Math.sign(A)*ie*.13,ie*.13,ie*.12,.5,1.6,1);re.push(I)}for(let A of[-.23,.23]){let I=c(k,.2,.22,.3,16038756,A,.12,-.12);re.push(I)}h(k,0,.2,.3,16038756,0,1.46,-.1,5),D=1.15,g=-.45}Q!=="common"&&(u(k,.55,.035,yt[Q].color,0,.055,0).rotation.x=Math.PI/2);let Y=U==="turtle"?.1:.12;for(let A of[-Y,Y])a(k,.065,16777215,A,D,g),a(k,.035,Le,A,D,g-.055),a(k,.012,16777215,A-.01,D+.015,g-.084);return k.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),{g:k,limbs:re,kind:U}}function P(F,U){let T=o(F);if(U==="crown"){h(T,.34,.34,.16,15910483,0,.1,0,10);for(let L=0;L<7;L++){let Q=L*Math.PI*2/7;h(T,0,.09,.28,16767336,Math.sin(Q)*.29,.3,Math.cos(Q)*.29,4),a(T,.055,L%2?7724525:15759772,Math.sin(Q)*.33,.12,Math.cos(Q)*.33)}}if(U==="halo"){u(T,.4,.06,16768889,0,.16,0).rotation.x=Math.PI/2;for(let L of[-.5,.5])h(T,0,.06,.17,16774330,L,.2,0,4)}if(U==="headphones"){u(T,.33,.045,3560884,0,0,0);for(let L of[-.32,.32])c(T,.12,.3,.23,6480616,L,-.03,0),c(T,.13,.2,.15,8483822,L*1.15,-.03,0)}if(U==="goggles"){for(let L of[-.15,.15])u(T,.125,.035,16764004,L,0,0),a(T,.1,6807528,L,0,-.01,1,1,.25);c(T,.08,.04,.07,16764004,0,0,0)}if(U==="wings")for(let L of[-1,1])for(let Q=0;Q<4;Q++){let k=a(T,.19,Q%2?10149870:13214971,L*(.26+Q*.17),.25+Q*.09,.08+Q*.05,.7,2.3,.4);k.rotation.z=-L*(.4+Q*.08)}if(U==="cape"){let L=h(T,.26,.6,1,14636152,0,-.2,.1,4);L.scale.z=.19,c(T,.5,.08,.17,16766832,0,.35,0)}return T}function w(F,U){F.wear.clear();for(let T of Object.values(U)){let L=P(F.wear,T);T==="crown"&&L.position.set(0,1.35,0),T==="halo"&&L.position.set(0,1.6,0),T==="headphones"&&L.position.set(0,1.08,0),T==="goggles"&&L.position.set(0,1.05,-.3),T==="wings"&&L.position.set(0,.6,.3),T==="cape"&&L.position.set(0,.55,.36)}F.hat.visible=!["crown","halo"].includes(U.head)}function E(F,U){if(ln[U]){let re=o(F),Le=P(re,U);return Le.position.y=U==="cape"?.8:.6,re}let T=o(F),L=5610951,Q=15843169,k=16773330;if(U==="boots"||U==="springs")for(let re of[-.28,.28]){c(T,.36,.22,.7,U==="boots"?L:9861582,re,.35,-.1),c(T,.33,.3,.36,U==="boots"?7915215:12821745,re,.55,.1),c(T,.38,.08,.74,k,re,.21,-.1);for(let Le=0;Le<3;Le++)c(T,.25,.025,.04,k,re,.48,-.32+Le*.09);if(U==="springs")for(let Le=0;Le<3;Le++)u(T,.13,.025,Q,re,.06+Le*.055,0).rotation.x=Math.PI/2}if((U==="energy"||U==="hydration"||U==="juice")&&(h(T,.25,.28,.8,U==="juice"?16099675:L,0,.5,0),h(T,.14,.14,.2,k,0,.99,0),h(T,.19,.19,.12,5334158,0,1.13,0),c(T,.36,.26,.055,k,0,.6,-.25),U==="juice"?a(T,.1,15898692,0,.6,-.3):c(T,.08,.19,.05,L,0,.6,-.29)),U==="pen"){c(T,1.2,.09,1,10012531,0,.06,0);for(let re of[-.52,.52])for(let Le of[-.4,0,.4])c(T,.08,.55,.08,k,re,.33,Le),c(T,.06,.06,.8,k,re,.42,0);m(T,Q,.6)}if(U==="incubator"){h(T,.53,.6,.15,11569751,0,.1,0),u(T,.43,.08,Q,0,.23,0).rotation.x=Math.PI/2,m(T,15505259,.75);for(let re of[-.55,.55])f(T,[re,.1,0],[re,1.05,0],.04,L);c(T,1.2,.14,.5,15303283,0,1.1,0)}if(U==="gloves")for(let re of[-.26,.26])a(T,.23,15906415,re,.5,0,.9,1.2,.55),c(T,.32,.2,.24,L,re,.24,0),a(T,.12,15906415,re+Math.sign(re)*.2,.48,0,.75,1.3,.9);if(U==="coach"){c(T,1,.17,1.4,L,0,.12,0),c(T,.75,.04,1.1,3426142,0,.23,0);for(let re=0;re<5;re++)c(T,.7,.01,.03,11192271,0,.26,-.4+re*.2);for(let re of[-.44,.44])f(T,[re,.2,-.4],[re,1,-.5],.04,k);c(T,1,.23,.14,6600369,0,1,-.5)}if(U==="charm"){u(T,.31,.05,L,0,.95,0);let re=h(T,.3,.3,.12,Q,0,.42,0);re.rotation.x=Math.PI/2;let Le=h(T,0,.17,.08,k,0,.43,-.08,5);Le.rotation.x=-Math.PI/2}if(U==="turbo"){h(T,.18,.23,.8,15777377,0,.7,0),h(T,0,.18,.32,14579833,0,1.26,0);for(let re of[-.25,.25])c(T,.18,.35,.2,L,re,.43,0);h(T,.15,0,.35,15569252,0,.14,0),a(T,.1,L,0,.86,-.18)}if(U==="shield"){let re=a(T,.48,L,0,.67,0,1,1.25,.22);u(T,.42,.045,k,0,.67,-.04).scale.y=1.2,c(T,.08,.43,.07,Q,0,.67,-.13),c(T,.3,.08,.07,Q,0,.67,-.13)}return T}function N(F){let U=o(F),T=o(U,0,.62,0),L=[],Q=[];c(T,.62,.67,.38,2469802,0,.35,0),c(T,.4,.45,.13,16034132,0,.38,.27),a(T,.28,15777163,0,1.01,-.02,.95,1.08,.9);let k=o(T);c(k,.56,.18,.46,7035595,0,1.25,0),c(k,.53,.055,.24,7035595,0,1.2,-.31);for(let b of[-.1,.1])a(T,.029,2570576,b,1.05,-.27),a(T,.009,16777215,b-.008,1.06,-.295);for(let b of[-.17,.17]){let g=o(T,b,0,0);c(g,.23,.5,.23,3361650,0,-.25,0),c(g,.25,.13,.39,16771499,0,-.55,-.055),L.push(g)}for(let b of[-.41,.41]){let g=o(T,b,.68,0);c(g,.18,.35,.2,2469802,0,-.14,0),a(g,.105,15777163,0,-.36,0),Q.push(g)}let re=o(U,0,1.04,-.57);U.traverse(b=>{b.isMesh&&(b.castShadow=!0)});let Le=o(T);return{g:U,hips:T,legs:L,arms:Q,carry:re,wear:Le,hat:k}}function C(F,U,T,L=0,Q=1){let k=o(F,U,0,T);if(k.scale.setScalar(Q),h(k,.15,.22,1.5,9727820,0,.75,0,7),L===3)for(let re=0;re<3;re++)h(k,0,1.05-re*.21,1.4,[11654875,15070957,16252152][re],0,1.65+re*.55,0,7);else a(k,1.03,L===2?6454466:4100700,0,2,0,1,1,.9),a(k,.73,L===2?8958608:7386716,.51,2.35,.1),a(k,.65,L===2?10266329:7780711,-.5,2.05,-.1)}function O(F,U,T,L,Q=2){let k=o(F,U,0,T);h(k,0,.53,Q,L,0,Q/2,0,5);let re=h(k,0,.29,Q*.7,L,.43,Q*.33,.2,5);return re.rotation.z=-.35,k}let H=o(i),M=o(H),y=[],B=[],$=[],ee=[];c(M,28,.7,30,7648127,0,-.43,12),c(M,10,.04,30,14994592,0,-.025,12),c(M,28,.3,1,5867873,0,-.22,27);let j=o(M,cn.x,0,cn.z),se=c(j,7,.08,7.8,9750141,0,.02,0);for(let F of[-3.5,3.5])for(let U=-3.5;U<4;U+=1.4)c(j,.13,.9,.13,16048051,F,.5,U),c(j,.1,.13,1.45,16048051,F,.72,U+.5),c(j,.1,.13,1.45,16048051,F,.33,U+.5);for(let F=-3.5;F<4;F+=1.4)c(j,.13,.9,.13,16048051,F,.5,3.8),c(j,1.4,.12,.12,16048051,F+.5,.72,3.8);for(let F of[-2.8,2.8])c(j,.18,2.9,.18,11701600,F,1.45,2.5);let ne=h(j,0,4.5,1.2,7824561,0,3.2,2.5,4);ne.rotation.y=Math.PI/4,ne.scale.z=.48,p(j,"SEU CURRAL",0,2.1,-3.7,3.7);let me=o(j),K=o(j),ge=o(M,vn.x,0,vn.z);c(ge,2.1,.28,3.3,3233139,0,.15,0),c(ge,1.68,.07,2.9,3358805,0,.33,0);let ve=[];for(let F=0;F<9;F++)ve.push(c(ge,1.6,.016,.055,7047576,0,.374,-1.3+F*.32));for(let F of[-.95,.95])f(ge,[F,.35,-1],[F,1.8,-1.2],.065,10864330),f(ge,[F,1.8,-1.2],[F,1.25,.9],.045,10864330);c(ge,1.95,.37,.28,3324338,0,1.8,-1.25),c(ge,.75,.17,.03,10808757,0,1.82,-1.42),p(ge,"ESTEIRA",0,2.8,0,3);let Re=o(M,7,0,21);c(Re,2.8,1.25,1.6,15052645,0,.67,0),c(Re,3.2,.16,2,16309936,0,1.34,0);for(let F of[-1.4,1.4])c(Re,.12,2.6,.12,5471379,F,1.5,0);c(Re,3.4,.2,2,3781804,0,2.7,0),p(Re,"MELHORIAS",0,3.25,0,3);for(let F of[-9.8,10.5])C(M,F,8,0,1.4),C(M,F,23,0,1.15);p(M,"BASE SEGURA",0,3.7,4,4.3),c(M,23,.06,.32,13169563,0,.025,3);for(let F=0;F<Ne.length;F++){let U=Ne[F],T=-(F*Rt+Rt/2),L=o(H);y.push(L),c(L,28,.8,Rt,U.ground,0,-.46,T),c(L,9.5,.06,Rt,U.path,0,-.03,T);for(let D of[-5.1,5.1])c(L,.2,.08,Rt,U.color,D,.03,T);for(let D=0;D<6;D++)c(L,.1,.01,1.7,16772554,0,.013,-F*Rt-D*8-3);let Q=o(L,0,0,-F*Rt);for(let D of[-6,6])c(Q,.42,4.3,.48,U.color,D,2.15,0),c(Q,.7,.2,.75,16378298,D,4.35,0);c(Q,12.6,.38,.48,U.color,0,4.6,0),p(Q,`${F+1} \xB7 ${U.name.toUpperCase()}`,0,5.25,0,6.3);for(let D=0;D<10;D++){let Y=D%2?1:-1,A=Y*(7+D%3*2),I=-F*Rt-5-D*4.1;if(F===0){C(L,A,I,0,.8+D%3*.22);for(let ie=0;ie<3;ie++)h(L,.03,.03,.55,5410126,A+.4*ie,.25,I+1),a(L,.15,16042588,A+.4*ie,.55,I+1,1,.65,1)}if(F===1&&(D%3===0?h(L,0,2.4,3.5,15119733,A,1.7,I,4).rotation.y=Math.PI/4:(h(L,.22,.26,2.2,7055212,A,1.05,I,7),f(L,[A,.8,I],[A+Y*.65,.8,I],.15,7055212),h(L,.15,.15,.85,7055212,A+Y*.65,1.2,I,7))),F===2){C(L,A,I,2,1);let ie=o(L,A-Y*1,0,I+1.4);h(ie,.16,.21,.85,15454134,0,.4,0),a(ie,.68,D%2?10256603:15306921,0,1,0,1,.47,1);for(let oe of[-.2,.2])a(ie,.1,16772304,oe,1.28,.18,1,.3,1)}if(F===3&&(C(L,A,I,3,1),D%2&&O(L,A-Y,I+1.7,8967914,1.6),a(L,.75,16251632,A+Y,.3,I-1,1,.5,1.3)),F===4&&(h(L,0,2,3.5,4669011,A,1.4,I,5),h(L,.4,.56,.12,16755799,A,3.1,I,8),c(L,1.3,.02,3.2,15891267,A-Y,.01,I+1),O(L,A-Y*1.5,I-1,12411489,.8)),F===5&&(O(L,A,I,D%2?11507182:7524321,2.4+D%3*.5),D%3===0&&l(L,r("crystalArch",()=>new Ki(3.1,.36,6,20,Math.PI)),5988494,0,0,I).scale.set(2.3,1.8,1)),F===6){O(L,A,I,9080267,1.2);let ie=a(L,.42,D%2?15251951:9358300,A,3+D%3,I);if(ee.push({mesh:ie,y:ie.position.y,phase:D}),D%3===0){let oe=a(L,1.1,10259424,A+Y*2,5.5,I);u(L,1.6,.055,15978889,A+Y*2,5.5,I).rotation.x=1,ee.push({mesh:oe,y:5.5,phase:D})}}if(F===7){c(L,5,.04,3,6870231,A,-.005,I);for(let oe=0;oe<3;oe++){let _e=.8+oe*.5;f(L,[A+oe*.32,0,I],[A+oe*.32,_e,I],.12,oe%2?16756104:16095426),f(L,[A+oe*.32,_e*.6,I],[A+oe*.32+.4,_e*.9,I+.1],.09,16095426)}let ie=a(L,.22,16775143,A-Y*.8,.3,I+.9);D%2===0&&(u(L,1.05,.13,15905225,A,1.1,I).rotation.y=.4)}if(F===8){h(L,.09,.09,2.6,16774881,A,1.3,I);let ie=a(L,.65,D%2?15760045:8641486,A,2.6,I,1,1,.4);u(L,.42,.08,16772550,A,2.6,I-.28),D%3===0&&(c(L,1.9,1.4,1.6,12814180,A+Y*1.2,.7,I+1.4),c(L,2.1,.28,1.8,16769003,A+Y*1.2,1.55,I+1.4))}if(F===9){for(let ie=0;ie<3;ie++){let oe=A+(ie-1)*.5,_e=3.4+D%3*.5;h(L,.1,.15,_e,8047993,oe,_e/2,I+ie*.25,7);for(let we=.6;we<_e;we+=.7)u(L,.12,.025,14020275,oe,we,I+ie*.25).rotation.x=Math.PI/2,a(L,.35,2852191,oe+Y*.22,we+.2,I+ie*.25,.9,.18,.6)}D%3===0&&(c(L,1.8,.32,1.8,6847856,A,.16,I+1.5),h(L,0,1,.6,12602709,A,1.6,I+1.5,4),c(L,.5,1.1,.5,16770725,A,.8,I+1.5))}if(F===10){let ie=2+D%3*1.5;c(L,2,ie,2,4614284,A,ie/2,I);for(let _e=0;_e<3;_e++)c(L,.28,.28,.03,9172959,A+(_e-1)*.5,ie*.65,I-1.02);let oe=o(L,A,2.1,I+1.6);u(oe,.65,.16,15910507);for(let _e=0;_e<8;_e++){let we=_e*Math.PI/4,ce=c(oe,.24,.35,.2,15910507,Math.sin(we)*.83,Math.cos(we)*.83,0);ce.rotation.z=-we}ee.push({mesh:oe,y:oe.position.y,phase:D,spin:!0})}if(F===11){for(let ie=0;ie<3;ie++)a(L,1.3,16053759,A+(ie-1)*.7,.5,I,1,.45,1);if(h(L,.3,.4,3.4,16773848,A,1.7,I,10),c(L,1.1,.23,1.1,15186537,A,3.5,I),D%2===0){u(L,1.1,.1,14068991,A,4.4,I);let ie=a(L,.22,16765553,A,4.4,I);ee.push({mesh:ie,y:4.4,phase:D})}}}let k=_n[F],re=o(L,k.x,0,k.z);h(re,1.55,1.7,.2,10123090,0,.1,0);for(let D=0;D<3;D++)u(re,1.45-D*.12,.065,14926459,0,.22+D*.035,0).rotation.x=Math.PI/2;let Le=Array.from({length:3},(D,Y)=>{let A=m(re,U.color,.8,sh(F,Y));return A.position.set((Y-1)*.85,.2,Y===1?.42:0),A}),b=x(re);B.push({g:re,eggs:Le,plaque:b});let g=d(L,U.kind,U.color,1.65);g.g.position.set(k.x,0,k.z-2.5),p(g.g,"DONO DO OVO",0,2.9,0,2.6),$.push(g)}for(let F of Ga){let U=y[F.world];if(F.world===0||F.world===2){let T=h(U,.4,.4,1.55,10253394,F.x,.37,F.z,8);T.rotation.z=Math.PI/2}else if(F.world===1)c(U,1.35,F.h,1.1,12292190,F.x,F.h/2,F.z);else if(F.world===3)O(U,F.x,F.z,11724011,F.h);else if(F.world===4)h(U,.35,.8,F.h,9591137,F.x,F.h/2,F.z,6);else if(F.world===8)h(U,.55,.66,F.h,16230326,F.x,F.h/2,F.z),u(U,.5,.09,16773332,F.x,F.h,F.z).rotation.x=Math.PI/2;else if(F.world===9){let T=h(U,.32,.32,1.4,7584881,F.x,.32,F.z,7);T.rotation.z=Math.PI/2}else F.world===10?c(U,1.2,F.h,1.2,14595688,F.x,F.h/2,F.z):O(U,F.x,F.z,Ne[F.world].color,F.h)}let Ve=o(y[Ne.length-1],0,0,-Rt*Ne.length+1);c(Ve,18,.45,1,6908570,0,.2,0),p(Ve,"12 MUNDOS \xB7 VOLTE AO CURRAL",0,3,0,7);let Xe=N(H),Ke=new Nt(new Ji(1.15,20,12),new hi({color:8843007,transparent:!0,opacity:.25,depthWrite:!1}));Ke.position.y=1,Ke.visible=!1,Xe.g.add(Ke);let je=o(H),te=Array.from({length:24},()=>{let F=a(je,.09,16769443);return F.visible=!1,{mesh:F,life:0,v:new X}}),ae=0;function Ae(F,U){for(let T=0;T<16;T++){let L=te[ae++%te.length];L.mesh.material=s(U),L.mesh.position.copy(F),L.mesh.visible=!0,L.life=.6+Math.random()*.4,L.v.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3)}}function Oe(F,U){for(let T of ee)T.spin?T.mesh.rotation.z=U*.7+T.phase:T.mesh.position.y=T.y+Math.sin(U*1.5+T.phase)*.3;for(let T of te)T.life>0&&(T.life-=F,T.mesh.visible=T.life>0,T.v.y-=7*F,T.mesh.position.addScaledVector(T.v,F),T.mesh.scale.setScalar(Math.max(.1,T.life)));for(let T=0;T<ve.length;T++)ve[T].position.z=-1.4+(U*2+T*.32)%2.8}function Ie(F,U,T=0){for(let L=0;L<F.limbs.length;L++){let Q=F.limbs[L];Q.rotation.x=Math.sin(U*9+L*Math.PI)*(.13+T*.25)}F.g.position.y=Math.sin(U*(T?10:2))*(T?.07:.025)}function Je(F,U){if(!U||U==="normal")return;let T=U==="gold"?[16765788]:U==="cosmic"?[11439103,7921151]:[16751266,16769157,9300932,9423359];for(let L=0;L<T.length;L++){let Q=u(F,.5+L*.06,.026,T[L],0,.12+L*.065,0);Q.rotation.x=Math.PI/2}if(U==="cosmic")for(let L=0;L<4;L++){let Q=L*Math.PI/2;a(F,.05,16777215,Math.sin(Q)*.6,.6,Math.cos(Q)*.6)}F.userData.mutation=U}function lt(F,U){se.material=s(F.color),ne.material=s(F.roof),K.clear();for(let T=0;T<U;T++)h(K,.37,.4,.06,13745522,(T%4-1.5)*1.45,.09,Math.floor(T/4)*1.1-2.7,10);for(let T of[-3,3]){h(K,.3,.23,.5,F.roof,T,.3,3);for(let L=0;L<3;L++)a(K,.17,F.color===7833016?16769157:16229816,T+(L-1)*.2,.85,3)}}let R=y.map((F,U)=>{let T=o(F),L=u(T,1.15,.06,16766312,0,.1,0);L.rotation.x=Math.PI/2;let Q=o(T),k=Ne[U];if(U===0||U===9)h(Q,.18,.18,2.2,k.color,0,.45,0).rotation.z=Math.PI/2;else if(U===4||U===5||U===6)h(Q,0,.6,1.3,k.color,0,.7,0,6);else if(U===3||U===7||U===8)a(Q,.8,k.color,0,.14,0,1.4,.12,1);else if(U===10)c(Q,1.4,.45,1.2,16760158,0,1.4,0);else for(let re=0;re<3;re++)u(Q,.5+re*.2,.05,k.color,0,.3+re*.3,0).rotation.x=Math.PI/2;return{node:T,body:Q,ring:L}});function st(F){R.forEach((U,T)=>{let L=F.hazard(T);U.node.position.set(L.x,0,L.z),U.ring.material=s(L.active?16740442:L.warning?16767842:13360333),U.body.visible=L.active||L.warning,U.body.scale.y=L.active?1:.3,U.body.rotation.y=F.time*(T+1)*.3})}return{hero:N,mutate:Je,decorate:lt,updateHazards:st,equipAccessories:w,setTrainingPlaque:S,shieldBubble:Ke,root:H,base:M,zoneGroups:y,nests:B,guardians:$,player:Xe,penContent:me,egg:m,shopItem:E,creature:d,animateCreature:Ie,animate:Oe,burst:Ae,label:p,mat:s,group:o}}var oh={compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/></svg>',coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10m-2-10h3m-3 10h3"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 3 1-2h4l1 2 2 1 2-1 3 4-2 2v3l2 2-2 4-3-1-2 1-1 3h-4l-1-3-2-1-3 1-2-4 2-2V9L2 7l3-4 2 1Z"/><circle cx="12" cy="11" r="3"/></svg>',pause:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',full:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 7 16-7-4-7 4Z"/></svg>',egg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15c0 5-4 7-8 7s-8-2-8-7S9 2 12 2s8 8 8 13Z"/><path d="m7 12 3-2 3 3 4-2"/></svg>',speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17a9 9 0 1 1 18 0M12 13l5-5M4 21h16"/><circle cx="12" cy="14" r="2"/></svg>',dumbbell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9h12M6 15h12M3 8v8m3-11v14M18 5v14m3-11v8"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 2-9 12h6l-1 8 9-12h-6Z"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 8 3v6c0 6-8 11-8 11S4 17 4 11V5Z"/><path d="m8 11 3 3 5-5"/></svg>',juice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 2 13h10l2-13ZM3 8h18M12 8l2-6h5"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 11 10-8 10 8M5 10v11h14V10M10 21v-7h4v7"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 22V3m0 0c5-5 9 5 14 0v11c-5 5-9-5-14 0"/></svg>',friends:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M2 21v-4c0-7 14-7 14 0v4M17 4a3 3 0 0 1 0 6m2 3c3 1 3 4 3 8"/></svg>',shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h18l-2-6H5Zm1 0v12h16V9M9 21v-7h6v7"/></svg>',help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 1-2 3m0 3h.01"/></svg>',jump:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V3m-7 7 7-7 7 7"/></svg>'},Ee=i=>document.getElementById(i),gl="integro-box-eggs-v1";function lh({onExit:i,registerAdapter:e}){let t=window.BoxStorage||localStorage,n=null,s="",r=null,o=null,l=null,c=!0;try{l=JSON.parse(t.getItem(gl)||"null")}catch{c=!1}let a=new hs(l),h=!1,u,f,p,x,S=0,m=0,d=0,P=0,w=null,E="gear",N=0,C=0,O=0,H=0,M=.52,y=.52,B=null,$=null,ee="",j="",se="",ne=-1,me=-1,K={},ge=null,ve=null,Re={x:0,z:0},Ve=!1,Xe=new Set,Ke=0,je=Ee("eggApp"),te=Ee("eggCanvas"),ae=new X,Ae=v=>v.toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:2}),Oe=document.createElement("div");Oe.className="egg-income-effects",Oe.setAttribute("aria-hidden","true"),Ee("eggStage").append(Oe);let Ie=[],Je=0,lt=document.createElement("span");lt.className="egg-wallet-gain",lt.setAttribute("aria-hidden","true"),document.querySelector("#eggApp .egg-money").append(lt);function R(v){if(!v.uid||r||!x||Ie.length>=24)return;let q=document.createElement("div");q.className="egg-income-float",q.innerHTML="<span>"+oh.coin+" +"+v.amount.toLocaleString("pt-BR")+"</span>",Oe.append(q),Ie.push({el:q,uid:v.uid,start:performance.now()})}function st(v){for(let q of Ie){let le=!r&&x?.penContent.userData.actors?.find(Ge=>Ge.uid===q.uid),he=le?.g||(s===q.uid?n?.g:null);if(v-q.start>1800||!he){q.el.remove(),q.done=!0;continue}let V=he.getWorldPosition(new X);V.y+=1.3,V.project(p);let ue=V.z>=-1&&V.z<=1&&Math.abs(V.x)<.94&&Math.abs(V.y)<.83;q.el.hidden=!ue,ue&&(q.el.style.left=(V.x+1)*50+"%",q.el.style.top=(1-V.y)*50+"%")}Ie=Ie.filter(q=>!q.done),v>Je&&(lt.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning"))}function F(){for(let v of Ie)v.el.remove();Ie=[],lt.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning")}function U(){a.captureNests();try{t.setItem(gl,JSON.stringify(a.save)),c=!0,window.BoxEggCloud?.dirty()}catch{c=!1}}function T(v){Ee("eggToast").textContent=v,N=performance.now()+3400}function L(){B=null,$=null,te.classList.remove("dragging"),Xe.clear(),Re={x:0,z:0},Ve=!1,ve=null,ge=null,Ee("eggStick").style.transform="translate(0px,0px)",Ee("eggSprint").classList.remove("held")}function Q(){C=H,y=.52,B=null,$=null,te.classList.remove("dragging"),Ee("eggCamera").setAttribute("aria-pressed","false")}function k(){let v=Math.atan2(Math.sin(C-H),Math.cos(C-H));C=Math.abs(Math.abs(v)-Math.PI)<.2?H:H+Math.PI,y=.38,Ee("eggCamera").setAttribute("aria-pressed",String(Math.abs(C-H)>.2))}te.addEventListener("pointerdown",v=>{!h||w||B!==null||v.pointerType==="mouse"&&v.button!==0||(v.preventDefault(),B=v.pointerId,$={x:v.clientX,y:v.clientY},te.setPointerCapture(v.pointerId),te.classList.add("dragging"),te.focus())}),te.addEventListener("pointermove",v=>{if(v.pointerId!==B||!$||w)return;v.preventDefault();let q=v.clientX-$.x,le=v.clientY-$.y;C-=q/Math.max(240,te.clientWidth)*Math.PI*2,C=Math.atan2(Math.sin(C),Math.cos(C)),y=Math.max(.2,Math.min(1.05,y+le/Math.max(200,te.clientHeight)*1.6)),$={x:v.clientX,y:v.clientY},Ee("eggCamera").setAttribute("aria-pressed","false")});let re=v=>{v.pointerId===B&&(B=null,$=null,te.classList.remove("dragging"))};for(let v of["pointerup","pointercancel","lostpointercapture"])te.addEventListener(v,re);e&&(o=e("egg",{scene:()=>f,active:()=>h,state:()=>({x:a.player.x,y:a.player.y,z:a.player.z,yaw:Ke,zone:"world"}),enter:()=>{Ce(),T("Sala conectada! Abra Amigos para correr, visitar e trocar.")},leave:()=>{r=null,j="",A()}}));function Le(){let v=new Ys({alpha:!0,antialias:!0});v.setPixelRatio(1),v.setSize(130,120),v.outputColorSpace=St,v.toneMapping=ks,v.toneMappingExposure=1.2;let q=new qi;q.add(new ji(16777215,11057583,2.5));let le=new Qi(16777215,2);le.position.set(3,6,-5),q.add(le);let he=new At(30,130/120,.1,30);for(let V=0;V<Ne.length;V++){let ue=x.creature(q,Ne[V].kind,Ne[V].color);he.position.set(2,1.8,-3.5),he.lookAt(0,.78,0),v.render(q,he),K[V]=v.domElement.toDataURL("image/png"),q.remove(ue.g)}for(let V of[...Object.keys(yi),...Object.keys(cs),...Object.keys(ln)]){let ue=x.shopItem(q,V);he.position.set(1.7,1.6,-3.1),he.lookAt(0,.6,0),v.render(q,he),K[V]=v.domElement.toDataURL("image/png"),q.remove(ue)}for(let V of Object.keys(yt)){let ue=x.egg(q,15505771,1,V);he.position.set(1.7,1.6,-3.1),he.lookAt(0,.6,0),v.render(q,he),K["egg-"+V]=v.domElement.toDataURL("image/png"),q.remove(ue)}v.dispose(),v.forceContextLoss()}function b(){try{u=new Ys({canvas:te,antialias:!0,alpha:!1,powerPreference:"high-performance"}),u.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<950?1.25:1.6)),u.shadowMap.enabled=!0,u.shadowMap.type=$r,u.outputColorSpace=St,u.toneMapping=ks,u.toneMappingExposure=1.1,f=new qi,f.background=new Ye(Ne[0].sky),f.fog=new Is(Ne[0].sky,42,108),p=new At(52,1,.1,130),f.add(new ji(16775917,6983578,2));let v=new Qi(16774104,2.4);v.position.set(-10,20,13),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),Object.assign(v.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:65}),v.shadow.normalBias=.035,v.shadow.bias=-2e-4,f.add(v),f.add(v.target),f.userData.sun=v,x=ah(f),Le(),p.position.set(0,8,27),p.lookAt(0,1,10),new ResizeObserver(g).observe(Ee("eggStage")),g(),A(),ie(),m=performance.now(),oe(m)}catch(v){console.error("Pegue o Ovo 3D:",v),Ee("eggWebglError").hidden=!1}}function g(){if(!u)return;let v=te.clientWidth,q=te.clientHeight;!v||!q||(u.setSize(v,q,!1),p.aspect=v/q,p.fov=v/q>2?58:v/q<1?64:52,p.updateProjectionMatrix())}function D(){let v=Re.x+(Xe.has("d")||Xe.has("arrowright")?1:0)-(Xe.has("a")||Xe.has("arrowleft")?1:0),q=Re.z+(Xe.has("s")||Xe.has("arrowdown")?1:0)-(Xe.has("w")||Xe.has("arrowup")?1:0);return p.getWorldDirection(ae),ae.y=0,ae.normalize(),{x:-v*ae.z-q*ae.x,z:v*ae.x-q*ae.z,sprint:Ve||Xe.has("shift")}}function Y(){let v=0;for(let q of a.drainEvents()){if(q.type==="income"){v+=q.amount,R(q);continue}q.type==="grab"&&(H=Math.PI,Q()),["caught","deposit","train"].includes(q.type)&&(H=0,Q()),["grab","deposit","caught","hatch","level","sold","upgrade","juice","shield"].includes(q.type)&&(A(),U()),q.type==="hatch"&&(x?.burst(new X(cn.x,1,cn.z),Ne[q.world].color),a.save.seen.every(Boolean)&&(q.text+=" Voc\xEA descobriu todas as 12 criaturas!")),q.type==="shield"&&x?.burst(new X(a.player.x,1,a.player.z),8843007),q.type==="level"&&x?.burst(new X(vn.x,1.5,vn.z),14283674),T(q.text)}v&&(lt.textContent="+"+v.toLocaleString("pt-BR"),Je=performance.now()+1800,document.querySelector("#eggApp .egg-money").classList.add("earning"),Ee("eggCoins").textContent=a.save.coins.toLocaleString("pt-BR"),U())}function A(){if(!x)return;let v=r||a.save,q=JSON.stringify([v.decoration,a.capacity(),v.creatures,v.eggs]);if(q===j)return;j=q,x.decorate(Mi[v.decoration]||Mi.meadow,r?Math.max(3,v.creatures.length):a.capacity()),x.penContent.clear(),x.penContent.userData.actors=[];let le=0;for(let he of v.eggs||[]){let V=x.egg(x.penContent,Ne[he.world].color,.55,he.rarity);x.mutate(V,he.mutation),V.position.set((le%4-1.5)*1.45,.14,Math.floor(le/4)*1.1-2.7),V.userData.egg=he.id,x.penContent.userData.actors.push({g:V,egg:!0,baseX:V.position.x,baseZ:V.position.z}),le++}for(let he of v.creatures){let V=x.creature(x.penContent,Ne[he.world].kind,Ne[he.world].color,.52,he.rarity);x.mutate(V.g,he.mutation),V.g.position.set((le%4-1.5)*1.45,.12,Math.floor(le/4)*1.1-2.7),x.penContent.userData.actors.push({...V,uid:he.uid,baseX:V.g.position.x,baseZ:V.g.position.z}),le++}}function I(v,q){o?.tick(v),x.updateHazards(a);let le=a.companion();(le?.uid||"")!==s&&(n&&x.root.remove(n.g),s=le?.uid||"",n=le?x.creature(x.root,Ne[le.world].kind,Ne[le.world].color,.7,le.rarity):null,n&&(x.mutate(n.g,le.mutation),n.g.position.set(a.player.x+1,0,a.player.z+1))),n&&(n.g.position.lerp(new X(a.player.x+1,0,a.player.z+1.1),Math.min(1,v*5)),n.g.rotation.y=Ke,x.animateCreature(n,a.time,a.moving));let he=a.player,V=x.player;V.g.position.set(he.x,he.y+(a.mode==="train"?.37:0),he.z),Math.hypot(q.x,q.z)>.05&&a.mode==="run"&&(Ke=Math.atan2(-q.x,-q.z)),a.mode==="train"&&(Ke=0);let ue=Math.atan2(Math.sin(Ke-V.g.rotation.y),Math.cos(Ke-V.g.rotation.y));V.g.rotation.y+=ue*Math.min(1,v*14);let Ge=a.time*(a.sprinting?17:12),ut=a.moving;for(let We=0;We<2;We++)V.legs[We].rotation.x=Math.sin(Ge+We*Math.PI)*.7*ut,V.arms[We].rotation.x=a.carrying!==null?1.03:Math.sin(Ge+(We+1)*Math.PI)*.55*ut;V.hips.position.y=.62+Math.abs(Math.sin(Ge))*.035*ut,V.hips.rotation.z=a.carrying!==null?.025*Math.sin(Ge):0;let Mt=a.carriedEgg?`${a.carrying}:${a.carriedEgg.rarity}:${a.carriedEgg.mutation}`:"none";if(ne!==Mt){if(V.carry.clear(),a.carrying!==null){let We=x.egg(V.carry,Ne[a.carrying].color,.65,a.carriedEgg.rarity);x.mutate(We,a.carriedEgg.mutation)}ne=Mt}let mt=JSON.stringify(a.save.equipped);mt!==ee&&(x.equipAccessories(V,a.save.equipped),ee=mt),x.shieldBubble.visible=a.carrying!==null&&a.guardians[a.carrying].grace>0&&a.guardians[a.carrying].grace>1.1;let _t=a.zone();for(let We=0;We<Ne.length;We++){x.zoneGroups[We].visible=Math.abs(We-_t)<=2;let hn=x.guardians[We],yn=a.guardians[We],_=yn.x-hn.g.position.x,G=yn.z-hn.g.position.z;Math.hypot(_,G)>.005?hn.g.rotation.y=Math.atan2(-_,-G):yn.state==="idle"&&(hn.g.rotation.y=Math.sin(a.time*.5+We)*.35),hn.g.position.x=yn.x,hn.g.position.z=yn.z,x.animateCreature(hn,a.time+We,yn.state==="chase"||yn.state==="return"?1:0),x.nests[We].eggs.forEach((Z,J)=>{let W=a.nestEggs[We][J],fe=W.rarity+W.mutation;Z.userData.signature!==fe&&(x.nests[We].g.remove(Z),Z=x.egg(x.nests[We].g,Ne[We].color,.8,W.rarity),x.mutate(Z,W.mutation),Z.userData.signature=fe,Z.position.set((J-1)*.85,.2,J===1?.42:0),x.nests[We].eggs[J]=Z),Z.visible=a.nestEggs[We][J].availableAt<=a.time,Z.rotation.y=a.time*.6,Z.position.y=.2+Math.sin(a.time*2+We+J)*.04}),a.carrying===We&&(hn.g.visible=!0,x.zoneGroups[We].visible=!0)}x.base.visible=he.z>-88;for(let We of x.penContent.userData.actors||[])We.egg?We.g.rotation.z=Math.sin(a.time*4+We.baseX)*.06:(x.animateCreature(We,a.time+We.baseX,.1),We.g.position.y+=.12,We.g.position.x=We.baseX+Math.sin(a.time*.6+We.baseZ)*.16,We.g.position.z=We.baseZ+Math.cos(a.time*.45+We.baseX)*.12,We.g.rotation.y=Math.sin(a.time*.35+We.baseX)*.7);let Zs=Math.atan2(Math.sin(C-O),Math.cos(C-O));O+=Zs*Math.min(1,v*5),M+=(y-M)*Math.min(1,v*8);let Si=te.clientWidth/te.clientHeight>2,us=Si?10:13.5,ei=Math.cos(M)*us,Js=Math.cos(O)*ei,Ks=Math.sin(O)*ei,Ya=new X(he.x+Ks,1.05+Math.sin(M)*us+he.y*.25,he.z+Js);p.position.lerp(Ya,Math.min(1,v*9)),p.lookAt(he.x-Math.sin(O)*3.3,1.05,he.z-Math.cos(O)*3.3);let Za=new Ye(Ne[_t].sky);f.background.lerp(Za,Math.min(1,v*.8)),f.fog.color.copy(f.background);let js=f.userData.sun;js.position.set(he.x-10,20,he.z+13),js.target.position.set(he.x,0,he.z),x.animate(v,a.mode==="train"?a.time:a.time*.3),me!==_t&&(me=_t,he.z<0&&T(`${_t+1}/${Ne.length} \xB7 ${Ne[_t].name}`))}function ie(){let v=a.save,q=a.player,le=a.zone(),he=[v.training,v.upgrades.boots,v.upgrades.gloves,v.companionId].join(":");x&&he!==se&&(se=he,Ne.forEach((mt,_t)=>x.setTrainingPlaque(_t,a.trainingAdvice(_t)))),Ee("eggJuiceCount").textContent=v.supplies.juice,Ee("eggShieldCount").textContent=v.supplies.shield,Ee("eggJuice").disabled=!!w||a.mode!=="run"||!v.supplies.juice||a.energy>=a.maxEnergy()-1,Ee("eggCoins").textContent=v.coins.toLocaleString("pt-BR"),Ee("eggSpeed").textContent=Ae(a.speed()),Ee("eggLevel").textContent=v.training,Ee("eggLevelMax").textContent=Qn;let V=Math.round(a.energy/a.maxEnergy()*100);Ee("eggEnergyFill").style.width=V+"%",Ee("eggEnergyMeter").setAttribute("aria-valuenow",V),Ee("eggEnergyMeter").classList.toggle("low",V<25),Ee("eggShield").hidden=!v.supplies.shield,Ee("eggJuice").hidden=!v.supplies.juice,Ee("eggWorldIndex").textContent=a.inBase()?"BASE SEGURA":`${le+1} / ${Ne.length}`,Ee("eggWorldName").textContent=a.inBase()?"Seu curral":Ne[le].name;let ue=a.interaction();Ee("eggInteract").textContent=r?"Voltar ao meu curral":ue.label,Ee("eggInteract").disabled=!r&&["walk","return","wait"].includes(ue.type),Ee("eggTraining").hidden=a.mode!=="train",Ee("eggTrainText").textContent=`Pr\xF3ximo n\xEDvel: ${Math.ceil(Math.max(0,(a.trainTarget()-v.trainXP)/(1+v.upgrades.coach*.25)))} s \xB7 +0,35 de velocidade`,Ee("eggTrainFill").style.width=v.trainXP/a.trainTarget()*100+"%";let Ge=_n.map((mt,_t)=>({i:_t,d:on(q,mt)})).filter(mt=>a.availableAt[mt.i]<=a.time).sort((mt,_t)=>mt.d-_t.d)[0],ut=a.carrying!==null?cn:Ge?_n[Ge.i]:null;Ee("eggTarget").textContent=a.mode==="train"?`Treino ${v.training}/${Qn}`:a.carrying!==null?`Curral \xB7 ${Math.ceil(on(q,cn))} m`:Ge?`Ovo \xB7 ${Math.ceil(Ge.d)} m`:"Ninhos renovando",Ee("eggBearing").hidden=!ut||a.mode==="train",ut&&(Ee("eggBearing").style.transform=`rotate(${Math.atan2(ut.x-q.x,-(ut.z-q.z))+O}rad)`);let Mt=Ee("eggChase");if(Mt.hidden=a.carrying===null,a.carrying!==null){let mt=a.inBase(),_t=Math.max(0,Math.round(on(q,a.guardians[a.carrying])));Mt.classList.toggle("safe",mt),Mt.classList.toggle("urgent",!mt&&_t<10),Mt.textContent=mt?"\u2713 Ovo seguro":`! Perseguidor \xB7 ${_t} m`,Mt.setAttribute("aria-label",mt?"Voc\xEA est\xE1 seguro. Guarde o ovo no curral.":`Perseguidor a ${_t} metros`)}}function oe(v){S=requestAnimationFrame(oe);let q=Math.min(.05,Math.max(0,(v-m)/1e3));if(m=v,!(!h||!u)){if(!w&&!document.hidden){let le=D();a.mode==="train"&&Math.hypot(le.x,le.z)>.2&&a.interact(),window.BoxEggCloud?.frozen||a.update(q,le),Y(),I(q,le),P+=q,P>2&&(U(),P=0)}u.render(f,p),st(v),d+=q,d>.1&&(ie(),d=0),Ee("eggToast").textContent&&v>N&&(Ee("eggToast").textContent="")}}function _e(){if(w)return;if(r){r=null,j="",A(),T("Voc\xEA voltou ao seu curral.");return}let v=a.interact();v==="corral"&&De("corral"),v==="nest"&&De("nest"),Y(),ie(),w||te.focus()}function we(){return`<ol class="egg-help-list"><li><strong>Siga a pista.</strong> Os ${Ne.length} mundos est\xE3o conectados. N\xE3o h\xE1 troca de tela. Os donos ficam mais r\xE1pidos a cada mundo.</li><li><strong>Escolha seu ovo.</strong> Cada ninho tem tr\xEAs ovos que se renovam a cada 3\u20134 minutos de jogo ativo. As muta\xE7\xF5es dourada, arco-\xEDris e c\xF3smica aumentam o valor em 1,5\xD7, 2\xD7 e 3\xD7. Aproxime-se, toque em \u201CEscolher ovo\u201D ou aperte E e escolha um. Comum vale 1\xD7, raro 3\xD7, \xE9pico 5\xD7 lend\xE1rio 8\xD7 e secreto 12\xD7; lend\xE1rios e secretos aparecem a partir da pista 7. A c\xE2mera vira para o curral; continue em frente para voltar.</li><li><strong>Fuja!</strong> Mova pelo controle ou WASD/setas. Use Espa\xE7o/Pular para saltar obst\xE1culos e Shift/Disparar para correr mais r\xE1pido. O f\xF4lego recarrega sozinho.</li><li><strong>Guarde no curral.</strong> Na base, v\xE1 at\xE9 o cercado e toque em \u201CGuardar ovo\u201D. Ele choca em ${a.hatchTime()} s de jogo ativo. O dono n\xE3o entra na base.</li><li><strong>Venda e melhore.</strong> As criaturas geram integros que entram automaticamente no saldo enquanto voc\xEA joga. O valor aparece sobre elas; voc\xEA tamb\xE9m pode vend\xEA-las no curral. Escolha uma como companheira para ganhar uma habilidade. Compre melhorias ou entre na esteira para treinar a velocidade. Cada barra completa aumenta o n\xEDvel, at\xE9 ${Qn}.</li><li><strong>Confira a plaqueta do ovo.</strong> Ela mostra o treino recomendado e quantos n\xEDveis faltam. O c\xE1lculo considera seus t\xEAnis e luvas, com 10% de vantagem de velocidade carregando o ovo sem disparar. \xC9 uma refer\xEAncia: desvie dos obst\xE1culos durante a fuga.</li><li><strong>Olhe ao redor.</strong> Arraste a \xE1rea do cen\xE1rio com o dedo ou mouse para girar e inclinar a c\xE2mera. Use \u201CAtr\xE1s\u201D ou C para olhar para tr\xE1s; \u201CCentrar\u201D ou R volta \xE0 vista de corrida. O direcional acompanha a c\xE2mera: para cima vai \xE0 frente da tela; esquerda e direita seguem a vis\xE3o atual.</li><li><strong>Prepare sua mochila.</strong> O escudo protege automaticamente de uma captura. Toque em Suco para recuperar o f\xF4lego. Compre na base, com integros ganhas no jogo.</li></ol><p class="egg-muted">${c?"integros, criaturas, ovos no curral e treino ficam salvos neste navegador. Uma corrida em andamento recome\xE7a na base ao recarregar.":"O navegador n\xE3o permitiu salvar. O progresso ficar\xE1 apenas nesta sess\xE3o."} No portal, consulte Amigos e perfil para ver a situa\xE7\xE3o do salvamento online. O jogo pausa ao abrir um painel, trocar de jogo ou sair da tela. N\xE3o h\xE1 dinheiro real.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Jogar</button></div><button class="egg-reset" data-egg-action="resetAsk">Apagar progresso deste jogo</button>`}function ce(){if(!w)return;let v=a.save,q="",le="PEGUE O OVO",he="";if(w==="shop")q="Loja do corredor",le="22 ITENS \xB7 INTEGROS DO JOGO",he=`<div class="egg-shop-balance">\u25CF ${v.coins.toLocaleString("pt-BR")} integros dispon\xEDveis</div><div class="egg-shop-tabs"><button data-shop-tab="gear" class="${E==="gear"?"selected":""}">Melhorias permanentes</button><button data-shop-tab="supplies" class="${E==="supplies"?"selected":""}">Mochila \xB7 ${v.supplies.shield+v.supplies.juice}</button><button data-shop-tab="accessories" class="${E==="accessories"?"selected":""}">Acess\xF3rios \xB7 ${v.accessories.length}/6</button><button data-shop-tab="decor" class="${E==="decor"?"selected":""}">Decora\xE7\xF5es</button></div>${a.inBase()?"":"<p>Volte \xE0 base para comprar.</p>"}<div class="egg-sheet-grid">`,E==="gear"?he+=Object.entries(yi).map(([V,ue])=>{let Ge=v.upgrades[V]>=ue.max,ut=a.price(V);return`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[V]}" alt="${ue.name}"><small>N\xCDVEL ${v.upgrades[V]}/${ue.max}</small><h3>${ue.name}</h3><p>${ue.desc}</p><div class="egg-level-dots" aria-label="${v.upgrades[V]} de ${ue.max} n\xEDveis">${Array.from({length:ue.max},(Mt,mt)=>`<i class="${mt<v.upgrades[V]?"owned":""}"></i>`).join("")}</div><button class="egg-primary" data-buy="${V}" ${Ge||v.coins<ut||!a.inBase()?"disabled":""}>${Ge?"No m\xE1ximo":ut+" integros"}</button></article>`}).join(""):E==="supplies"?he+=Object.entries(cs).map(([V,ue])=>`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[V]}" alt="${ue.name}"><small>NA MOCHILA: ${v.supplies[V]}/${ue.max}</small><h3>${ue.name}</h3><p>${ue.desc}</p><button class="egg-primary" data-buy="${V}" ${v.supplies[V]>=ue.max||v.coins<ue.price||!a.inBase()?"disabled":""}>${v.supplies[V]>=ue.max?"Mochila cheia":ue.price+" integros"}</button></article>`).join(""):E==="decor"?he+=Object.entries(Mi).map(([V,ue])=>`<article class="egg-upgrade"><div class="egg-decor-preview" style="--decor:#${ue.color.toString(16)};--roof:#${ue.roof.toString(16)}">\u2302</div><h3>${ue.name}</h3><p>Piso, cobertura e plantas do curral.</p><button class="egg-primary" data-buy="${V}" ${!a.inBase()||!v.decorations.includes(V)&&v.coins<ue.price?"disabled":""}>${v.decoration===V?"Selecionado":v.decorations.includes(V)?"Decorar":ue.price+" integros"}</button></article>`).join(""):he+=Object.entries(ln).map(([V,ue])=>{let Ge=v.accessories.includes(V),ut=v.equipped[ue.slot]===V;return`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[V]}" alt="${ue.name}"><small>${ut?"EQUIPADO":Ge?"NA SUA COLE\xC7\xC3O":"ACESS\xD3RIO VISUAL"}</small><h3>${ue.name}</h3><p>${ue.desc} N\xE3o altera a velocidade.</p><button class="egg-primary" ${Ge?`data-equip="${V}"`:`data-buy="${V}"`} ${!Ge&&(v.coins<ue.price||!a.inBase())?"disabled":""}>${Ge?ut?"Guardar":"Equipar":ue.price+" integros"}</button></article>`}).join(""),he+="</div>";else if(w==="tracks")q="As 12 pistas",le="UMA CORRIDA CONT\xCDNUA",he='<p>Os mundos se conectam na mesma pista. Siga em frente para explorar. Cada ovo mostra seu treino recomendado e quantos n\xEDveis faltam. A refer\xEAncia considera seus t\xEAnis e luvas: correr com o ovo 10% mais r\xE1pido que o dono, sem disparar. Desvie dos obst\xE1culos.</p><div class="egg-pet-grid">'+Ne.map((V,ue)=>`<article class="egg-pet-card egg-track-card" style="--track-color:#${V.color.toString(16)}"><small>PISTA ${ue+1} \xB7 ${v.visited[ue]?"VISITADA":"PARA EXPLORAR"}</small><img src="${K[ue]}" alt="${V.creature}"><strong>${V.name}</strong><p>${V.creature}</p><small>${pl[ue]} \xB7 ${["Persegui\xE7\xE3o direta","Antecipa a dire\xE7\xE3o","Corrida em zigue-zague"][ue%3]}${ue>=3?" + arrancadas":""}</small><small>Dono: ${Ae(ls(ue))} de velocidade</small><div class="egg-track-training ${a.trainingAdvice(ue).ready?"ready":""}"><strong>Treino recomendado: ${a.recommendedTraining(ue)}</strong><span>${a.trainingAdvice(ue).ready?"N\xEDvel alcan\xE7ado":`Faltam ${a.trainingAdvice(ue).remaining} n\xEDveis`}</span></div><b>${a.saleValue(ue).toLocaleString("pt-BR")} integros</b><small>${v.seen[ue]?"\u2713 Criatura descoberta":"Leve o ovo ao curral"}</small></article>`).join("")+"</div>";else if(w==="corral")q="Seu curral",le=`${v.creatures.length+v.eggs.length}/${a.capacity()} ESPA\xC7OS \xB7 ${v.seen.filter(Boolean).length}/${Ne.length} CRIATURAS DESCOBERTAS`,he=`<div class="egg-income"><strong>Produ\xE7\xE3o autom\xE1tica</strong><span>${(a.incomeRate()*60).toLocaleString("pt-BR",{maximumFractionDigits:1})} integros / min de jogo ativo</span><small>Os ganhos entram direto no saldo. Total produzido: ${Math.floor(v.incomeEarned).toLocaleString("pt-BR")} integros.</small></div><p>Companheiro: ${$a(a.companion())}</p><p>Os ovos chocam durante o jogo ativo. ${a.inBase()?"Venda criaturas para ganhar integros.":"Volte \xE0 base para vender criaturas."}</p>`,!v.creatures.length&&!v.eggs.length?he+='<div class="egg-empty"><strong>Seu primeiro ovo est\xE1 esperando!</strong><p>Siga a pista, pegue um ovo e traga at\xE9 o cercado.</p></div>':he+='<div class="egg-pet-grid">'+v.eggs.map(V=>`<article class="egg-pet-card"><img src="${K["egg-"+V.rarity]}" alt="Ovo ${yt[V.rarity].name}"><strong>Ovo de ${Ne[V.world].creature}</strong><small>${yt[V.rarity].name} \xB7 ${a.saleValue(V.world,V.rarity,V.mutation)} integros</small><small>Choca em ${Math.ceil(V.remaining)} s de jogo</small><button class="egg-secondary" data-egg-action="resume">Continuar incubando</button></article>`).join("")+v.creatures.map(V=>`<article class="egg-pet-card"><img src="${K[V.world]}" alt="${Ne[V.world].creature}"><strong>${Ne[V.world].creature}</strong><small>${yt[V.rarity].name} \xB7 ${On[V.mutation].name}</small><small>Valor: ${a.saleValue(V.world,V.rarity,V.mutation)} integros</small><small>${$a(V)}</small><button class="egg-secondary" data-pet="${V.uid}" ${a.inBase()?"":"disabled"}>${v.companionId===V.uid?"Guardar companheiro":"Acompanhar"}</button><button class="egg-primary" data-sell="${V.id}" ${a.inBase()?"":"disabled"}>Vender por ${a.saleValue(V.world,V.rarity,V.mutation)}</button></article>`).join("")+"</div>";else if(w==="nest"){let V=a.interaction().world;V===void 0?(q="Ninho distante",he="<p>Aproxime-se de um ninho para escolher.</p>"):(q="Escolha um ovo",le=Ne[V].name.toUpperCase(),he=`<p>Leve um ovo por vez ao curral. Os outros continuam no ninho. Treino recomendado: <strong>${a.recommendedTraining(V)}</strong>.</p><div class="egg-nest-grid">${a.nestEggs[V].map(ue=>{let Ge=yt[ue.rarity],ut=ue.availableAt<=a.time;return`<article class="egg-pet-card" style="border-top:5px solid #${Ge.color.toString(16)}"><img src="${K["egg-"+ue.rarity]}" alt="Ovo ${Ge.name}"><strong>${Ge.name} \xB7 ${On[ue.mutation].name}</strong><small>Valor da criatura \xB7 ${Ge.mult}\xD7</small><b>${a.saleValue(V,ue.rarity,ue.mutation)} integros</b><button class="egg-primary" data-steal="${ue.slot}" ${ut?"":"disabled"}>${ut?"Pegar e correr":`Volta em ${Math.ceil(ue.availableAt-a.time)} s de jogo`}</button></article>`}).join("")}</div>`)}else if(w==="missions")q="Miss\xF5es e cole\xE7\xE3o",le="CONQUISTAS \xB7 INTEGROS",he=`<div class="egg-income"><strong>Expedi\xE7\xE3o do dia</strong><span>Entregue 3 ovos: ${Math.min(3,v.daily.delivered)}/3 \xB7 200 integros</span><button class="egg-primary" data-daily ${v.daily.claimed||v.daily.delivered<3?"disabled":""}>${v.daily.claimed?"Recompensa recebida":"Receber"}</button></div><div class="egg-sheet-grid">${qa.map(V=>`<article class="egg-upgrade"><h3>${V.name}</h3><progress value="${a.missionProgress(V)}" max="${V.target}"></progress><p>${a.missionProgress(V)}/${V.target} \xB7 ${V.reward} integros</p><button class="egg-primary" data-mission="${V.id}" ${v.claimed.includes(V.id)||a.missionProgress(V)<V.target?"disabled":""}>${v.claimed.includes(V.id)?"Conclu\xEDda":"Receber"}</button></article>`).join("")}</div><h3>\xC1lbum \xB7 ${v.album.length} combina\xE7\xF5es descobertas</h3><div class="egg-album">${v.album.map(V=>{let[ue,Ge,ut]=V.split(":");return Ne[ue]?`<span>${Ne[ue].creature} \xB7 ${yt[Ge].name} \xB7 ${On[ut].name}</span>`:""}).join("")||"Traga ovos e descubra novas combina\xE7\xF5es!"}</div>`;else if(w==="friends")q="Aventura com amigos",le="SALAS \xB7 CORRIDA \xB7 VISITAS \xB7 TROCAS",he='<div id="eggOnlineContent"></div>';else if(w==="settings"){q="Menu da aventura",le="PEGUE O OVO";let V=a.trainingAdvice(a.carrying??a.zone());he=`<nav class="egg-menu-grid" aria-label="Atalhos do jogo">${[["corral","home","Curral",`${v.creatures.length+v.eggs.length}/${a.capacity()} espa\xE7os`],["missions","flag","Miss\xF5es","Conquistas e cole\xE7\xE3o"],["friends","friends","Amigos","Corridas, visitas e trocas"],["shop","shop","Loja","Melhorias e acess\xF3rios"],["tracks","compass","Pistas","Os 12 mundos"],["help","help","Como jogar","Controles e dicas"]].map(([Ge,ut,Mt,mt])=>`<button data-egg-action="${Ge}">${oh[ut]}<strong>${Mt}</strong><small>${mt}</small></button>`).join("")}</nav><div class="egg-menu-detail"><strong>${a.inBase()?"Seu curral":Ne[a.zone()].name}</strong><p>${a.carrying!==null?`Ovo ${yt[a.carriedEgg.rarity].name} \xB7 ${a.saleValue(a.carrying,a.carriedEgg.rarity,a.carriedEgg.mutation)} integros. Leve ao curral!`:a.mode==="train"?"A esteira aumenta sua velocidade permanentemente.":"Aproxime-se de um ninho, escolha um ovo e leve ao curral."}</p><p>Treino recomendado: <b>${V.level}</b> \xB7 ${V.ready?"N\xEDvel alcan\xE7ado":`faltam ${V.remaining} n\xEDveis`}.</p></div><div class="egg-settings-stats"><span><b>${Ae(a.speed())}</b> velocidade</span><span><b>${v.training}/${Qn}</b> treino</span><span><b>${v.delivered}</b> ovos entregues</span><span><b>${v.coins.toLocaleString("pt-BR")}</b> integros</span></div><div class="egg-settings-buttons"><button class="egg-secondary" data-control="behind">Olhar para tr\xE1s</button><button class="egg-secondary" data-control="center">Centrar c\xE2mera</button><button class="egg-secondary" data-control="fullscreen">Tela cheia</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div><p class="egg-muted">Mova pelo direcional ou WASD/setas. Arraste o cen\xE1rio para olhar. Espa\xE7o: pular \xB7 Shift: disparar \xB7 E: a\xE7\xE3o \xB7 C: atr\xE1s \xB7 R: centrar \xB7 Esc: pausa.</p><button class="egg-primary" data-egg-action="resume">Voltar ao jogo</button>`}else w==="help"?(q="Como jogar",he=we()):w==="reset"?(q="Apagar este progresso?",he='<p>Isso zera as integros, criaturas, ovos, treino e melhorias do Pegue o Ovo.</p><div class="egg-modal-actions"><button class="egg-secondary" data-egg-action="help">Manter meu progresso</button><button class="egg-primary" data-egg-action="resetConfirm">Apagar e recome\xE7ar</button></div>'):(q="Uma pausa na aventura",he=`<p>Seu jogo est\xE1 pausado. ${v.seen.filter(Boolean).length} de ${Ne.length} criaturas descobertas \xB7 ${v.delivered} ovos entregues.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Continuar</button><button class="egg-secondary" data-egg-action="help">Como jogar</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div>`);Ee("eggSheetTitle").textContent=q,Ee("eggSheetTag").textContent=le,Ee("eggSheetBody").innerHTML=he,Se(),Ee("eggSheetBody").querySelectorAll("[data-shop-tab]").forEach(V=>V.onclick=()=>{E=V.dataset.shopTab,ce()}),Ee("eggSheetBody").querySelectorAll("[data-steal]").forEach(V=>V.onclick=()=>{a.steal(+V.dataset.steal)&&(Ce(),Y(),ie())}),Ee("eggSheetBody").querySelectorAll("[data-equip]").forEach(V=>V.onclick=()=>{a.equip(V.dataset.equip)&&(Y(),ce())}),Ee("eggSheetBody").querySelectorAll("[data-control]").forEach(V=>V.onclick=()=>{let ue=V.dataset.control;Ce(),ue==="behind"&&k(),ue==="center"&&Q(),ue==="fullscreen"&&Ee("eggFullscreen").click()}),Ee("eggSheetBody").querySelectorAll("[data-buy]").forEach(V=>V.onclick=()=>{a.buy(V.dataset.buy)&&(Y(),ce(),ie())}),Ee("eggSheetBody").querySelectorAll("[data-sell]").forEach(V=>V.onclick=()=>{a.sell(+V.dataset.sell)&&(Y(),ce(),ie())}),Ee("eggSheetBody").querySelectorAll("[data-egg-action]").forEach(V=>V.onclick=()=>{let ue=V.dataset.eggAction;ue==="resume"&&Ce(),["help","shop","corral","tracks","missions","friends"].includes(ue)&&De(ue),ue==="exit"&&(He(),i()),ue==="resetAsk"&&De("reset"),ue==="resetConfirm"&&(a=new hs(ml()),H=0,Q(),O=0,M=.52,Ke=0,j="force",se="",ne=-1,A(),U(),Ce(),T("Nova aventura! Siga a pista para encontrar o primeiro ovo."))})}function Se(){let v=Ee("eggSheetBody"),q=(le,he)=>v.querySelectorAll(le).forEach(V=>V.onclick=()=>{he(V),Y(),ce(),ie()});q("[data-pet]",le=>a.equipPet(le.dataset.pet)),q("[data-mission]",le=>a.claimMission(le.dataset.mission)),q("[data-daily]",()=>a.claimDaily()),w==="friends"&&(window.BoxEggCloud?window.BoxEggCloud.render(Ee("eggOnlineContent")):Ee("eggOnlineContent").innerHTML='<p>O progresso fica neste navegador. As salas, visitas, trocas e salvamento por perfil est\xE3o no portal da fam\xEDlia.</p><a class="egg-primary" href="https://www.institutointegro.com.br/integro-box/" target="_blank" rel="noopener">Abrir Integro Box no portal</a>')}function De(v){L(),w=v,Ee("eggSheet").hidden=!1,ce(),Ee("eggCloseSheet").focus(),U()}function Ce(){w=null,Ee("eggSheet").hidden=!0,L(),m=performance.now(),te.focus()}function ye(){je.hidden=!1,h=!0,u?(g(),m=performance.now()):b(),ie(),te.focus(),window.scrollTo(0,0)}function He(){F(),U(),h=!1,je.hidden=!0,w=null,Ee("eggSheet").hidden=!0,L()}Ee("eggRoute").onclick=()=>De("tracks"),Ee("eggInteract").onclick=_e,Ee("eggStopTraining").onclick=_e,Ee("eggJump").onclick=()=>{w||a.jump(),te.focus()},Ee("eggCamera").onclick=()=>{k(),te.focus()},Ee("eggSettings").onclick=()=>De("settings"),Ee("eggPause").onclick=()=>De("pause"),Ee("eggJuice").onclick=()=>{!w&&a.useJuice()&&(Y(),ie(),te.focus())},Ee("eggCloseSheet").onclick=Ce,Ee("eggReload").onclick=()=>location.reload(),Ee("eggFullscreen").onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await je.requestFullscreen();try{await screen.orientation?.lock("landscape")}catch{}}}catch{T("Gire o celular para o modo paisagem para ampliar o jogo.")}};let z=Ee("eggJoystick");function pe(v){let q=z.getBoundingClientRect(),le=q.width*.32,he=v.clientX-q.left-q.width/2,V=v.clientY-q.top-q.height/2,ue=Math.hypot(he,V),Ge=ue>le?le/ue:1;Re={x:he*Ge/le,z:V*Ge/le},Ee("eggStick").style.transform=`translate(${he*Ge}px,${V*Ge}px)`}z.addEventListener("pointerdown",v=>{w||(v.preventDefault(),ge=v.pointerId,z.setPointerCapture(v.pointerId),pe(v))}),z.addEventListener("pointermove",v=>{v.pointerId===ge&&pe(v)});let xe=v=>{v.pointerId===ge&&(ge=null,Re={x:0,z:0},Ee("eggStick").style.transform="translate(0px,0px)")};for(let v of["pointerup","pointercancel","lostpointercapture"])z.addEventListener(v,xe);let Te=Ee("eggSprint");Te.addEventListener("pointerdown",v=>{w||(v.preventDefault(),ve=v.pointerId,Te.setPointerCapture(v.pointerId),Ve=!0,Te.classList.add("held"))});let de=v=>{v.pointerId===ve&&(Ve=!1,ve=null,Te.classList.remove("held"))};for(let v of["pointerup","pointercancel","lostpointercapture"])Te.addEventListener(v,de);return document.addEventListener("keydown",v=>{if(!h||v.target?.closest("input,select,textarea,[contenteditable=true],#boxOnline"))return;let q=v.key.toLowerCase();if(q==="escape"){v.preventDefault(),w?Ce():De("pause");return}if(w){if(q==="tab"){let le=[...Ee("eggSheet").querySelectorAll("button:not([disabled])")];v.shiftKey&&document.activeElement===le[0]?(v.preventDefault(),le.at(-1)?.focus()):!v.shiftKey&&document.activeElement===le.at(-1)&&(v.preventDefault(),le[0]?.focus())}return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","c","r"].includes(q)&&(v.preventDefault(),Xe.add(q),v.repeat||(q===" "&&a.jump(),q==="e"&&_e(),q==="c"&&k(),q==="r"&&Q()))}),document.addEventListener("keyup",v=>Xe.delete(v.key.toLowerCase())),window.addEventListener("blur",L),document.addEventListener("visibilitychange",()=>{document.hidden&&h&&(U(),De("pause"))}),window.addEventListener("pagehide",U),window.BoxEggRuntime={save:()=>(a.captureNests(),JSON.parse(JSON.stringify(a.save))),apply:v=>{F(),a=new hs(v),r=null,j="",A(),ie();try{t.setItem(gl,JSON.stringify(a.save))}catch{}w&&ce()},active:()=>h,inBase:()=>a.inBase()&&a.carrying===null,visit:v=>{F(),r=v,a.player.x=0,a.player.z=15,j="",A(),Ce(),T("Visitando o curral do colega. Toque em Voltar para sair.")},message:T,openFriends:()=>De("friends"),pause:()=>De("pause"),raceMode:v=>{a.raceMode=v},raceStart:()=>{r=null,a.carriedEgg&&(a.nestEggs[a.carrying][a.carriedEgg.slot].availableAt=a.time+5,a.guardians[a.carrying].state="return"),a.mode="run",a.carrying=null,a.carriedEgg=null,a.player.x=0,a.player.z=15,a.player.y=0,L(),Ce()},stop:He},window.IntegroOvo={getState:()=>({...a.snapshot(),active:h,paused:!!w,sheet:w,thumbnailCount:Object.keys(K).length,visibleNestEggs:x?.nests.map(v=>v.eggs.filter(q=>q.visible).length),equippedModels:x?.player.wear.children.length,plaques:x?.nests.map(v=>({...v.plaque.sprite.userData.advice})),cameraYaw:C,cameraActualYaw:O,cameraForward:p?p.getWorldDirection(new X).toArray():null,cameraPitch:y,movementYaw:H,webgl:!!u}),getScreenPoints:()=>p?[{name:"curral",...cn},{name:"esteira",...vn},..._n.map((v,q)=>({name:"ninho"+q,...v}))].map(v=>{let q=new X(v.x,1,v.z).project(p),le=te.getBoundingClientRect();return{name:v.name,x:le.left+(q.x+1)*le.width/2,y:le.top+(1-q.y)*le.height/2}}):[]},{show:ye,hide:He,help:()=>De("help"),get active(){return h}}}window.BoxEgg={mountEggGame:lh,worldNames:Ne.map(i=>i.name),petName:i=>`${Ne[i.world]?.creature||"Criatura"} \xB7 ${yt[i.rarity]?.name||"Comum"} \xB7 ${On[i.mutation]?.name||"Natural"}`};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
