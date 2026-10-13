(()=>{var Oc=0,Ro=1,Bc=2;var Io=1,Yr=2,un=3,An=0,It=1,dn=2,In=0,ai=1,Po=2,Lo=3,Do=4,zc=5,Xn=100,kc=101,Vc=102,Hc=103,Gc=104,Wc=200,Xc=201,qc=202,$c=203,Sr=204,br=205,Yc=206,Zc=207,Jc=208,Kc=209,jc=210,Qc=211,el=212,tl=213,nl=214,Zr=0,Jr=1,Kr=2,oi=3,jr=4,Qr=5,ea=6,ta=7,Uo=0,il=1,sl=2,Pn=0,rl=1,al=2,ol=3,Vs=4,cl=5,ll=6,hl=7;var No=300,di=301,fi=302,na=303,ia=304,Hs=306,Er=1e3,Gn=1001,Tr=1002,qt=1003,ul=1004;var Gs=1005;var en=1006,sa=1007;var Jn=1008;var sn=1009,Fo=1010,Oo=1011,es=1012,ra=1013,Kn=1014,fn=1015,ts=1016,aa=1017,oa=1018,ns=1020,Bo=35902,zo=35899,ko=1021,Vo=1022,Yt=1023,Vi=1026,is=1027,Ho=1028,ca=1029,Go=1030,la=1031;var ha=1033,Ws=33776,Xs=33777,qs=33778,$s=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,xa=37496,_a=37808,va=37809,ya=37810,Ma=37811,Sa=37812,ba=37813,Ea=37814,Ta=37815,Aa=37816,wa=37817,Ca=37818,Ra=37819,Ia=37820,Pa=37821,La=36492,Da=36494,Ua=36495,Na=36283,Fa=36284,Oa=36285,Ba=36286;var Ms=2300,Ar=2301,Mr=2302,So=2400,bo=2401,Eo=2402;var dl=3200,fl=3201;var Wo=0,pl=1,Ln="",gt="srgb",ci="srgb-linear",Ss="linear",tt="srgb";var ri=7680;var To=519,ml=512,gl=513,xl=514,Xo=515,_l=516,vl=517,yl=518,Ml=519,wr=35044;var qo="300 es",Qt=2e3,bs=2001;var wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ja=Math.PI/180,Cr=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function Ka(i,e,t){return(1-t)*i+t*e}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var We=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,c){let l=n[s+0],a=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],M=r[o+3];if(c===0){e[t+0]=l,e[t+1]=a,e[t+2]=h,e[t+3]=u;return}if(c===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=M;return}if(u!==M||l!==f||a!==p||h!==x){let m=1-c,d=l*f+a*p+h*x+u*M,D=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){let F=Math.sqrt(A),I=Math.atan2(F,d*D);m=Math.sin(m*I)/F,c=Math.sin(c*I)/F}let E=c*D;if(l=l*m+f*E,a=a*m+p*E,h=h*m+x*E,u=u*m+M*E,m===1-c){let F=1/Math.sqrt(l*l+a*a+h*h+u*u);l*=F,a*=F,h*=F,u*=F}}e[t]=l,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let c=n[s],l=n[s+1],a=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=c*x+h*u+l*p-a*f,e[t+1]=l*x+h*f+a*u-c*p,e[t+2]=a*x+h*p+c*f-l*u,e[t+3]=h*x-c*u-l*f-a*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,l=Math.sin,a=c(n/2),h=c(s/2),u=c(r/2),f=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u+f*p*x;break;case"YZX":this._x=f*h*u+a*p*x,this._y=a*p*u+f*h*x,this._z=a*h*x-f*p*u,this._w=a*h*u-f*p*x;break;case"XZY":this._x=f*h*u-a*p*x,this._y=a*p*u-f*h*x,this._z=a*h*x+f*p*u,this._w=a*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],c=t[5],l=t[9],a=t[2],h=t[6],u=t[10],f=n+c+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-a)*p,this._z=(o-s)*p}else if(n>c&&n>u){let p=2*Math.sqrt(1+n-c-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+a)/p}else if(c>u){let p=2*Math.sqrt(1+c-n-u);this._w=(r-a)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-c);this._w=(o-s)/p,this._x=(r+a)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,c=t._x,l=t._y,a=t._z,h=t._w;return this._x=n*h+o*c+s*a-r*l,this._y=s*h+o*l+r*c-n*a,this._z=r*h+o*a+n*l-s*c,this._w=o*h-n*c-s*l-r*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,c=o*e._w+n*e._x+s*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-c*c;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let a=Math.sqrt(l),h=Math.atan2(a,c),u=Math.sin((1-t)*h)/a,f=Math.sin(t*h)/a;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,c=e.z,l=e.w,a=2*(o*s-c*n),h=2*(c*t-r*s),u=2*(r*n-o*t);return this.x=t+l*a+o*u-c*h,this.y=n+l*h+c*a-r*u,this.z=s+l*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,c=t.y,l=t.z;return this.x=s*l-r*c,this.y=r*o-n*l,this.z=n*c-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new W,gc=new Cn,Ge=class i{constructor(e,t,n,s,r,o,c,l,a){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,l,a)}set(e,t,n,s,r,o,c,l,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=c,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[3],l=n[6],a=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],M=s[0],m=s[3],d=s[6],D=s[1],A=s[4],E=s[7],F=s[2],I=s[5],z=s[8];return r[0]=o*M+c*D+l*F,r[3]=o*m+c*A+l*I,r[6]=o*d+c*E+l*z,r[1]=a*M+h*D+u*F,r[4]=a*m+h*A+u*I,r[7]=a*d+h*E+u*z,r[2]=f*M+p*D+x*F,r[5]=f*m+p*A+x*I,r[8]=f*d+p*E+x*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8];return t*o*h-t*c*a-n*r*h+n*c*l+s*r*a-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8],u=h*o-c*a,f=c*l-h*r,p=a*r-o*l,x=t*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=u*M,e[1]=(s*a-h*n)*M,e[2]=(c*n-s*o)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-c*t)*M,e[6]=p*M,e[7]=(n*l-a*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,c){let l=Math.cos(r),a=Math.sin(r);return this.set(n*l,n*a,-n*(l*o+a*c)+o+e,-s*a,s*l,-s*(-a*o+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Ge;function $o(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sl(){let i=Es("canvas");return i.style.display="block",i}var xc={};function Hi(i){i in xc||(xc[i]=!0,console.warn(i))}function bl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _c=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){let i={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ci]:{primaries:e,whitePoint:n,transfer:Ss,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}var je=lh();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,Rr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=Es("canvas")),Ei.width=e.width,Ei.height=e.height;let s=Ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hh=0,Gi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(eo(s[o].image)):r.push(eo(s[o]))}else r=eo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uh=0,to=new W,Dt=class i extends wn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=en,o=Jn,c=Yt,l=sn,a=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Wn(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=c,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==No)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=No;Dt.DEFAULT_ANISOTROPY=1;var ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,a=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(x+m)<.1&&Math.abs(a+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(a+1)/2,E=(p+1)/2,F=(d+1)/2,I=(h+f)/4,z=(u+M)/4,H=(x+m)/4;return A>E&&A>F?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=I/n,r=z/n):E>F?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=H/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=z/r,s=H/r),this.set(n,s,r,t),this}let D=Math.sqrt((m-x)*(m-x)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(D)<.001&&(D=1),this.x=(m-x)/D,this.y=(u-M)/D,this.z=(f-h)/D,this.w=Math.acos((a+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ir=class extends wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];let o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Ir{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ts=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pr=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(r,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),tr.subVectors(this.max,ps),Ti.subVectors(e.a,ps),Ai.subVectors(e.b,ps),wi.subVectors(e.c,ps),On.subVectors(Ai,Ti),Bn.subVectors(wi,Ai),ti.subVectors(Ti,wi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!no(t,Ti,Ai,wi,tr)||(t=[1,0,0,0,1,0,0,0,1],!no(t,Ti,Ai,wi,tr))?!1:(nr.crossVectors(On,Bn),t=[nr.x,nr.y,nr.z],no(t,Ti,Ai,wi,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_n=[new W,new W,new W,new W,new W,new W,new W,new W],Jt=new W,er=new qn,Ti=new W,Ai=new W,wi=new W,On=new W,Bn=new W,ti=new W,ps=new W,tr=new W,nr=new W,ni=new W;function no(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);let c=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),a=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,a,h),Math.min(l,a,h))>c)return!1}return!0}var dh=new qn,ms=new W,io=new W,Wi=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);let t=ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(io)),this.expandByPoint(ms.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vn=new W,so=new W,ir=new W,zn=new W,ro=new W,sr=new W,ao=new W,Lr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){so.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(so);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ir),c=zn.dot(this.direction),l=-zn.dot(ir),a=zn.lengthSq(),h=Math.abs(1-o*o),u,f,p,x;if(h>0)if(u=o*l-c,f=o*c-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let M=1/h;u*=M,f*=M,p=u*(u+o*f+2*c)+f*(o*u+f+2*l)+a}else f=r,u=Math.max(0,-(o*f+c)),p=-u*u+f*(f+2*l)+a;else f=-r,u=Math.max(0,-(o*f+c)),p=-u*u+f*(f+2*l)+a;else f<=-x?(u=Math.max(0,-(-o*r+c)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+a):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+a):(u=Math.max(0,-(o*r+c)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+a);else f=o>0?-r:r,u=Math.max(0,-(o*f+c)),p=-u*u+f*(f+2*l)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(so).addScaledVector(ir,f),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,l=n+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,c,l,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return a>=0?(n=(e.min.x-f.x)*a,s=(e.max.x-f.x)*a):(n=(e.max.x-f.x)*a,s=(e.min.x-f.x)*a),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(c=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(c=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||c>s)||((c>n||n!==n)&&(n=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){ro.subVectors(t,e),sr.subVectors(n,e),ao.crossVectors(ro,sr);let o=this.direction.dot(ao),c;if(o>0){if(s)return null;c=1}else if(o<0)c=-1,o=-o;else return null;zn.subVectors(this.origin,e);let l=c*this.direction.dot(sr.crossVectors(zn,sr));if(l<0)return null;let a=c*this.direction.dot(ro.cross(zn));if(a<0||l+a>o)return null;let h=-c*zn.dot(ao);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,c,l,a,h,u,f,p,x,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,l,a,h,u,f,p,x,M,m)}set(e,t,n,s,r,o,c,l,a,h,u,f,p,x,M,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=c,d[13]=l,d[2]=a,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ci.setFromMatrixColumn(e,0).length(),r=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),c=Math.sin(n),l=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,x=c*h,M=c*u;t[0]=l*h,t[4]=-l*u,t[8]=a,t[1]=p+x*a,t[5]=f-M*a,t[9]=-c*l,t[2]=M-f*a,t[6]=x+p*a,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,x=a*h,M=a*u;t[0]=f+M*c,t[4]=x*c-p,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-c,t[2]=p*c-x,t[6]=M+f*c,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,x=a*h,M=a*u;t[0]=f-M*c,t[4]=-o*u,t[8]=x+p*c,t[1]=p+x*c,t[5]=o*h,t[9]=M-f*c,t[2]=-o*a,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,x=c*h,M=c*u;t[0]=l*h,t[4]=x*a-p,t[8]=f*a+M,t[1]=l*u,t[5]=M*a+f,t[9]=p*a-x,t[2]=-a,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*a,x=c*l,M=c*a;t[0]=l*h,t[4]=M-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-c*h,t[2]=-a*h,t[6]=p*u+x,t[10]=f-M*u}else if(e.order==="XZY"){let f=o*l,p=o*a,x=c*l,M=c*a;t[0]=l*h,t[4]=-u,t[8]=a*h,t[1]=f*u+M,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=c*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fh,e,ph)}lookAt(e,t,n){let s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),kn.crossVectors(n,Bt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),kn.crossVectors(n,Bt)),kn.normalize(),rr.crossVectors(Bt,kn),s[0]=kn.x,s[4]=rr.x,s[8]=Bt.x,s[1]=kn.y,s[5]=rr.y,s[9]=Bt.y,s[2]=kn.z,s[6]=rr.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[4],l=n[8],a=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],M=n[6],m=n[10],d=n[14],D=n[3],A=n[7],E=n[11],F=n[15],I=s[0],z=s[4],H=s[8],y=s[12],v=s[1],k=s[5],q=s[9],te=s[13],j=s[2],ce=s[6],se=s[10],pe=s[14],K=s[3],me=s[7],ve=s[11],we=s[15];return r[0]=o*I+c*v+l*j+a*K,r[4]=o*z+c*k+l*ce+a*me,r[8]=o*H+c*q+l*se+a*ve,r[12]=o*y+c*te+l*pe+a*we,r[1]=h*I+u*v+f*j+p*K,r[5]=h*z+u*k+f*ce+p*me,r[9]=h*H+u*q+f*se+p*ve,r[13]=h*y+u*te+f*pe+p*we,r[2]=x*I+M*v+m*j+d*K,r[6]=x*z+M*k+m*ce+d*me,r[10]=x*H+M*q+m*se+d*ve,r[14]=x*y+M*te+m*pe+d*we,r[3]=D*I+A*v+E*j+F*K,r[7]=D*z+A*k+E*ce+F*me,r[11]=D*H+A*q+E*se+F*ve,r[15]=D*y+A*te+E*pe+F*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],c=e[5],l=e[9],a=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],M=e[7],m=e[11],d=e[15];return x*(+r*l*u-s*a*u-r*c*f+n*a*f+s*c*p-n*l*p)+M*(+t*l*p-t*a*f+r*o*f-s*o*p+s*a*h-r*l*h)+m*(+t*a*u-t*c*p-r*o*u+n*o*p+r*c*h-n*a*h)+d*(-s*c*h-t*l*u+t*c*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],M=e[13],m=e[14],d=e[15],D=u*m*a-M*f*a+M*l*p-c*m*p-u*l*d+c*f*d,A=x*f*a-h*m*a-x*l*p+o*m*p+h*l*d-o*f*d,E=h*M*a-x*u*a+x*c*p-o*M*p-h*c*d+o*u*d,F=x*u*l-h*M*l-x*c*f+o*M*f+h*c*m-o*u*m,I=t*D+n*A+s*E+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return e[0]=D*z,e[1]=(M*f*r-u*m*r-M*s*p+n*m*p+u*s*d-n*f*d)*z,e[2]=(c*m*r-M*l*r+M*s*a-n*m*a-c*s*d+n*l*d)*z,e[3]=(u*l*r-c*f*r-u*s*a+n*f*a+c*s*p-n*l*p)*z,e[4]=A*z,e[5]=(h*m*r-x*f*r+x*s*p-t*m*p-h*s*d+t*f*d)*z,e[6]=(x*l*r-o*m*r-x*s*a+t*m*a+o*s*d-t*l*d)*z,e[7]=(o*f*r-h*l*r+h*s*a-t*f*a-o*s*p+t*l*p)*z,e[8]=E*z,e[9]=(x*u*r-h*M*r-x*n*p+t*M*p+h*n*d-t*u*d)*z,e[10]=(o*M*r-x*c*r+x*n*a-t*M*a-o*n*d+t*c*d)*z,e[11]=(h*c*r-o*u*r-h*n*a+t*u*a+o*n*p-t*c*p)*z,e[12]=F*z,e[13]=(h*M*s-x*u*s+x*n*f-t*M*f-h*n*m+t*u*m)*z,e[14]=(x*c*s-o*M*s-x*n*l+t*M*l+o*n*m-t*c*m)*z,e[15]=(o*u*s-h*c*s+h*n*l-t*u*l-o*n*f+t*c*f)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,c=e.y,l=e.z,a=r*o,h=r*c;return this.set(a*o+n,a*c-s*l,a*l+s*c,0,a*c+s*l,h*c+n,h*l-s*o,0,a*l-s*c,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,c=t._z,l=t._w,a=r+r,h=o+o,u=c+c,f=r*a,p=r*h,x=r*u,M=o*h,m=o*u,d=c*u,D=l*a,A=l*h,E=l*u,F=n.x,I=n.y,z=n.z;return s[0]=(1-(M+d))*F,s[1]=(p+E)*F,s[2]=(x-A)*F,s[3]=0,s[4]=(p-E)*I,s[5]=(1-(f+d))*I,s[6]=(m+D)*I,s[7]=0,s[8]=(x+A)*z,s[9]=(m-D)*z,s[10]=(1-(f+M))*z,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),c=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);let a=1/r,h=1/o,u=1/c;return Kt.elements[0]*=a,Kt.elements[1]*=a,Kt.elements[2]*=a,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,o,c=Qt,l=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,M;if(l)x=r/(o-r),M=o*r/(o-r);else if(c===Qt)x=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(c===bs)x=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=h,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=x,a[14]=M,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,c=Qt,l=!1){let a=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),x,M;if(l)x=1/(o-r),M=o/(o-r);else if(c===Qt)x=-2/(o-r),M=-(o+r)/(o-r);else if(c===bs)x=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=h,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=p,a[2]=0,a[6]=0,a[10]=x,a[14]=M,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ci=new W,Kt=new ft,fh=new W(0,0,0),ph=new W(1,1,1),kn=new W,rr=new W,Bt=new W,yc=new ft,Mc=new Cn,tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],c=s[8],l=s[1],a=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mh=0,Sc=new W,Ri=new Cn,yn=new ft,ar=new W,gs=new W,gh=new W,xh=new Cn,bc=new W(1,0,0),Ec=new W(0,1,0),Tc=new W(0,0,1),Ac={type:"added"},_h={type:"removed"},Ii={type:"childadded",child:null},oo={type:"childremoved",child:null},St=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new tn,n=new Cn,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ge}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(gs,ar,this.up):yn.lookAt(ar,gs,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(yn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_h),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ac),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let a=0,h=l.length;a<h;a++){let u=l[a];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,a=this.material.length;l<a;l++)c.push(r(e.materials,this.material[l]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(r(e.animations,l))}}if(t){let c=o(e.geometries),l=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(c){let l=[];for(let a in c){let h=c[a];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new W(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=new W,Mn=new W,co=new W,Sn=new W,Pi=new W,Li=new W,wc=new W,lo=new W,ho=new W,uo=new W,fo=new ut,po=new ut,mo=new ut,bn=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),Mn.subVectors(n,t),co.subVectors(e,t);let o=jt.dot(jt),c=jt.dot(Mn),l=jt.dot(co),a=Mn.dot(Mn),h=Mn.dot(co),u=o*a-c*c;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(a*l-c*h)*f,x=(o*h-c*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,o,c,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(c,Sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(e,t),po.fromBufferAttribute(e,n),mo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),Mn.subVectors(e,t),jt.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),jt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,c;Pi.subVectors(s,n),Li.subVectors(r,n),lo.subVectors(e,n);let l=Pi.dot(lo),a=Li.dot(lo);if(l<=0&&a<=0)return t.copy(n);ho.subVectors(e,s);let h=Pi.dot(ho),u=Li.dot(ho);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*a;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);uo.subVectors(e,r);let p=Pi.dot(uo),x=Li.dot(uo);if(x>=0&&p<=x)return t.copy(r);let M=p*a-l*x;if(M<=0&&a>=0&&x<=0)return c=a/(a-x),t.copy(n).addScaledVector(Li,c);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return wc.subVectors(r,s),c=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(wc,c);let d=1/(m+M+f);return o=M*d,c=f*d,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},or={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=ch(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=go(o,r,e+1/3),this.g=go(o,r,e),this.b=go(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return je.workingToColorSpace(Tt.copy(this),e),Math.round(Je(Tt.r*255,0,255))*65536+Math.round(Je(Tt.g*255,0,255))*256+Math.round(Je(Tt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),c=Math.min(n,s,r),l,a,h=(c+o)/2;if(c===o)l=0,a=0;else{let u=o-c;switch(a=h<=.5?u/(o+c):u/(2-o-c),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=a,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=gt){je.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(or);let n=Ka(Vn.h,or.h,t),s=Ka(Vn.s,or.s,t),r=Ka(Vn.l,or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Xe;Xe.NAMES=El;var vh=0,Rn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=ai,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=br,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==br&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let l=r[c];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new W,cr=new We,yh=0,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wr,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wr&&(e.usage=this.usage),e}};var ws=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cs=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mh=0,Xt=new ft,xo=new St,Di=new W,zt=new qn,xs=new qn,yt=new W,$t=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($o(e)?Cs:ws)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let c=t[r];xs.setFromBufferAttribute(c),this.morphTargetsRelative?(yt.addVectors(zt.min,xs.min),zt.expandByPoint(yt),yt.addVectors(zt.max,xs.max),zt.expandByPoint(yt)):(zt.expandByPoint(xs.min),zt.expandByPoint(xs.max))}zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){let c=t[r],l=this.morphTargetsRelative;for(let a=0,h=c.count;a<h;a++)yt.fromBufferAttribute(c,a),l&&(Di.fromBufferAttribute(e,a),yt.add(Di)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),c=[],l=[];for(let H=0;H<n.count;H++)c[H]=new W,l[H]=new W;let a=new W,h=new W,u=new W,f=new We,p=new We,x=new We,M=new W,m=new W;function d(H,y,v){a.fromBufferAttribute(n,H),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,H),p.fromBufferAttribute(r,y),x.fromBufferAttribute(r,v),h.sub(a),u.sub(a),p.sub(f),x.sub(f);let k=1/(p.x*x.y-x.x*p.y);isFinite(k)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(k),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(k),c[H].add(M),c[y].add(M),c[v].add(M),l[H].add(m),l[y].add(m),l[v].add(m))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let H=0,y=D.length;H<y;++H){let v=D[H],k=v.start,q=v.count;for(let te=k,j=k+q;te<j;te+=3)d(e.getX(te+0),e.getX(te+1),e.getX(te+2))}let A=new W,E=new W,F=new W,I=new W;function z(H){F.fromBufferAttribute(s,H),I.copy(F);let y=c[H];A.copy(y),A.sub(F.multiplyScalar(F.dot(y))).normalize(),E.crossVectors(I,y);let k=E.dot(l[H])<0?-1:1;o.setXYZW(H,A.x,A.y,A.z,k)}for(let H=0,y=D.length;H<y;++H){let v=D[H],k=v.start,q=v.count;for(let te=k,j=k+q;te<j;te+=3)z(e.getX(te+0)),z(e.getX(te+1)),z(e.getX(te+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new W,r=new W,o=new W,c=new W,l=new W,a=new W,h=new W,u=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),c.add(h),l.add(h),a.add(h),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,a.x,a.y,a.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(c,l){let a=c.array,h=c.itemSize,u=c.normalized,f=new a.constructor(l.length*h),p=0,x=0;for(let M=0,m=l.length;M<m;M++){c.isInterleavedBufferAttribute?p=l[M]*c.data.stride+c.offset:p=l[M]*h;for(let d=0;d<h;d++)f[x++]=a[p++]}return new Lt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let c in s){let l=s[c],a=e(l,n);t.setAttribute(c,a)}let r=this.morphAttributes;for(let c in r){let l=[],a=r[c];for(let h=0,u=a.length;h<u;h++){let f=a[h],p=e(f,n);l.push(p)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,l=o.length;c<l;c++){let a=o[c];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let a in l)l[a]!==void 0&&(e[a]=l[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let a=n[l];e.data.attributes[l]=a.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let a=this.morphAttributes[l],h=[];for(let u=0,f=a.length;u<f;u++){let p=a[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=new ft,ii=new Lr,lr=new Wi,Rc=new W,hr=new W,ur=new W,dr=new W,_o=new W,fr=new W,Ic=new W,pr=new W,Rt=class extends St{constructor(e=new $t,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let c=this.morphTargetInfluences;if(r&&c){fr.set(0,0,0);for(let l=0,a=r.length;l<a;l++){let h=c[l],u=r[l];h!==0&&(_o.fromBufferAttribute(u,e),o?fr.addScaledVector(_o,h):fr.addScaledVector(_o.sub(t),h))}t.add(fr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(lr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(lr,Rc)===null||ii.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Cc.copy(r).invert(),ii.copy(e.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,c=r.index,l=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let m=f[x],d=o[m.materialIndex],D=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=D,F=A;E<F;E+=3){let I=c.getX(E),z=c.getX(E+1),H=c.getX(E+2);s=mr(this,d,e,n,a,h,u,I,z,H),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=x,d=M;m<d;m+=3){let D=c.getX(m),A=c.getX(m+1),E=c.getX(m+2);s=mr(this,o,e,n,a,h,u,D,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let m=f[x],d=o[m.materialIndex],D=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=D,F=A;E<F;E+=3){let I=E,z=E+1,H=E+2;s=mr(this,d,e,n,a,h,u,I,z,H),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=x,d=M;m<d;m+=3){let D=m,A=m+1,E=m+2;s=mr(this,o,e,n,a,h,u,D,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sh(i,e,t,n,s,r,o,c){let l;if(e.side===It?l=n.intersectTriangle(o,r,s,!0,c):l=n.intersectTriangle(s,r,o,e.side===An,c),l===null)return null;pr.copy(c),pr.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(pr);return a<t.near||a>t.far?null:{distance:a,point:pr.clone(),object:i}}function mr(i,e,t,n,s,r,o,c,l,a){i.getVertexPosition(c,hr),i.getVertexPosition(l,ur),i.getVertexPosition(a,dr);let h=Sh(i,e,t,n,hr,ur,dr,Ic);if(h){let u=new W;bn.getBarycoord(Ic,hr,ur,dr,u),s&&(h.uv=bn.getInterpolatedAttribute(s,c,l,a,u,new We)),r&&(h.uv1=bn.getInterpolatedAttribute(r,c,l,a,u,new We)),o&&(h.normal=bn.getInterpolatedAttribute(o,c,l,a,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:c,b:l,c:a,normal:new W,materialIndex:0};bn.getNormal(hr,ur,dr,f.normal),h.face=f,h.barycoord=u}return h}var $n=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],a=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function x(M,m,d,D,A,E,F,I,z,H,y){let v=E/z,k=F/H,q=E/2,te=F/2,j=I/2,ce=z+1,se=H+1,pe=0,K=0,me=new W;for(let ve=0;ve<se;ve++){let we=ve*k-te;for(let ze=0;ze<ce;ze++){let Ve=ze*v-q;me[M]=Ve*D,me[m]=we*A,me[d]=j,a.push(me.x,me.y,me.z),me[M]=0,me[m]=0,me[d]=I>0?1:-1,h.push(me.x,me.y,me.z),u.push(ze/z),u.push(1-ve/H),pe+=1}}for(let ve=0;ve<H;ve++)for(let we=0;we<z;we++){let ze=f+we+ce*ve,Ve=f+we+ce*(ve+1),$e=f+(we+1)+ce*(ve+1),Ye=f+(we+1)+ce*ve;l.push(ze,Ve,Ye),l.push(Ve,$e,Ye),K+=6}c.addGroup(p,K,y),p+=K,f+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=pi(i[t]);for(let s in n)e[s]=n[s]}return e}function bh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Tl={clone:pi,merge:At},Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rs=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new W,Pc=new We,Lc=new We,Mt=class extends Rs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Lc),t.subVectors(Lc,Pc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/a,s*=o.width/l,n*=o.height/a}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Ni=1,Dr=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mt(Ui,Ni,e,t);s.layers=this.layers,this.add(s);let r=new Mt(Ui,Ni,e,t);r.layers=this.layers,this.add(r);let o=new Mt(Ui,Ni,e,t);o.layers=this.layers,this.add(o);let c=new Mt(Ui,Ni,e,t);c.layers=this.layers,this.add(c);let l=new Mt(Ui,Ni,e,t);l.layers=this.layers,this.add(l);let a=new Mt(Ui,Ni,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,c,l]=t;for(let a of t)this.remove(a);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,l,a,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,a),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Is=class extends Dt{constructor(e=[],t=di,n,s,r,o,c,l,a,h){super(e,t,n,s,r,o,c,l,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ur=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Is(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:In});r.uniforms.tEquirect.value=t;let o=new Rt(s,r),c=t.minFilter;return t.minFilter===Jn&&(t.minFilter=en),new Dr(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},En=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ah={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,c=this._targetRay,l=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),d=this._getHandJoint(a,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;a.inputState.pinching&&f>p+x?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&f<=p-x&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ah)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ps=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wr,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ct=new W,Ls=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hi=class extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fi,_s=new W,Oi=new W,Bi=new W,zi=new We,vs=new We,Al=new ft,gr=new W,ys=new W,xr=new W,Dc=new We,vo=new We,Uc=new We,$i=class extends St{constructor(e=new hi){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new $t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nr(t,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Ls(n,3,0,!1)),Fi.setAttribute("uv",new Ls(n,2,3,!1))}this.geometry=Fi,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Al.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;_r(gr.set(-.5,-.5,0),Bi,o,Oi,s,r),_r(ys.set(.5,-.5,0),Bi,o,Oi,s,r),_r(xr.set(.5,.5,0),Bi,o,Oi,s,r),Dc.set(0,0),vo.set(1,0),Uc.set(1,1);let c=e.ray.intersectTriangle(gr,ys,xr,!1,_s);if(c===null&&(_r(ys.set(-.5,.5,0),Bi,o,Oi,s,r),vo.set(0,1),c=e.ray.intersectTriangle(gr,xr,ys,!1,_s),c===null))return;let l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||t.push({distance:l,point:_s.clone(),uv:bn.getInterpolation(_s,gr,ys,xr,Dc,vo,Uc,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _r(i,e,t,n,s,r){zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vs.x=r*zi.x-s*zi.y,vs.y=s*zi.x+r*zi.y):vs.copy(zi),i.copy(e),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(Al)}var yo=new W,wh=new W,Ch=new Ge,cn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yo.subVectors(n,t).cross(wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ch.getNormalMatrix(e),s=this.coplanarPoint(yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new Wi,Rh=new We(.5,.5),vr=new W,Yi=class{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,o=new cn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){let s=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],a=r[3],h=r[4],u=r[5],f=r[6],p=r[7],x=r[8],M=r[9],m=r[10],d=r[11],D=r[12],A=r[13],E=r[14],F=r[15];if(s[0].setComponents(a-o,p-h,d-x,F-D).normalize(),s[1].setComponents(a+o,p+h,d+x,F+D).normalize(),s[2].setComponents(a+c,p+u,d+M,F+A).normalize(),s[3].setComponents(a-c,p-u,d-M,F-A).normalize(),n)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(a-l,p-f,d-m,F-E).normalize();else if(s[4].setComponents(a-l,p-f,d-m,F-E).normalize(),t===Qt)s[5].setComponents(a+l,p+f,d+m,F+E).normalize();else if(t===bs)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);let t=Rh.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(vr.x=s.normal.x>0?e.max.x:e.min.x,vr.y=s.normal.y>0?e.max.y:e.min.y,vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zi=class extends Dt{constructor(e,t,n,s,r,o,c,l,a){super(e,t,n,s,r,o,c,l,a),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ds=class extends Dt{constructor(e,t,n=Kn,s,r,o,c=qt,l=qt,a,h=Vi,u=1){if(h!==Vi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,c,l,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Us=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ns=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:l};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,M=[],m=n/2,d=0;D(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function D(){let E=new W,F=new W,I=0,z=(t-e)/n;for(let H=0;H<=r;H++){let y=[],v=H/r,k=v*(t-e)+e;for(let q=0;q<=s;q++){let te=q/s,j=te*l+c,ce=Math.sin(j),se=Math.cos(j);F.x=k*ce,F.y=-v*n+m,F.z=k*se,u.push(F.x,F.y,F.z),E.set(ce,z,se).normalize(),f.push(E.x,E.y,E.z),p.push(te,1-v),y.push(x++)}M.push(y)}for(let H=0;H<s;H++)for(let y=0;y<r;y++){let v=M[y][H],k=M[y+1][H],q=M[y+1][H+1],te=M[y][H+1];(e>0||y!==0)&&(h.push(v,k,te),I+=3),(t>0||y!==r-1)&&(h.push(k,q,te),I+=3)}a.addGroup(d,I,0),d+=I}function A(E){let F=x,I=new We,z=new W,H=0,y=E===!0?e:t,v=E===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),x++;let k=x;for(let q=0;q<=s;q++){let j=q/s*l+c,ce=Math.cos(j),se=Math.sin(j);z.x=y*se,z.y=m*v,z.z=y*ce,u.push(z.x,z.y,z.z),f.push(0,v,0),I.x=ce*.5+.5,I.y=se*.5*v+.5,p.push(I.x,I.y),x++}for(let q=0;q<s;q++){let te=F+q,j=k+q;E===!0?h.push(j,j+1,te):h.push(j+1,j,te),H+=3}a.addGroup(d,H,E===!0?1:2),d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fs=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,c=Math.floor(n),l=Math.floor(s),a=c+1,h=l+1,u=e/c,f=t/l,p=[],x=[],M=[],m=[];for(let d=0;d<h;d++){let D=d*f-o;for(let A=0;A<a;A++){let E=A*u-r;x.push(E,-D,0),M.push(0,0,1),m.push(A/c),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let D=0;D<c;D++){let A=D+a*d,E=D+a*(d+1),F=D+1+a*(d+1),I=D+1+a*d;p.push(A,E,I),p.push(E,F,I)}this.setIndex(p),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ji=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+c,Math.PI),a=0,h=[],u=new W,f=new W,p=[],x=[],M=[],m=[];for(let d=0;d<=n;d++){let D=[],A=d/n,E=0;d===0&&o===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let F=0;F<=t;F++){let I=F/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+A*c),u.y=e*Math.cos(o+A*c),u.z=e*Math.sin(s+I*r)*Math.sin(o+A*c),x.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(I+E,1-A),D.push(a++)}h.push(D)}for(let d=0;d<n;d++)for(let D=0;D<t;D++){let A=h[d][D+1],E=h[d][D],F=h[d+1][D],I=h[d+1][D+1];(d!==0||o>0)&&p.push(A,E,I),(d!==n-1||l<Math.PI)&&p.push(E,F,I)}this.setIndex(p),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ki=class i extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],l=[],a=[],h=new W,u=new W,f=new W;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let M=x/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),a.push(x/s),a.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let M=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,d=(s+1)*(p-1)+x,D=(s+1)*p+x;o.push(M,m,D),o.push(m,d,D)}this.setIndex(o),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Os=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fr=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Or=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ih(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let c=t[1];e<c&&(n=2,r=c);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let c=n+o>>>1;e<t[c]?o=c:n=c+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Br=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,c=s[r],l=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case bo:r=e,c=2*t-n;break;case Eo:r=s.length-2,c=t+s[r]-s[r+1];break;default:r=e,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bo:o=e,l=2*n-t;break;case Eo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-c),this._weightNext=a/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),M=x*x,m=M*x,d=-f*m+2*f*M-f*x,D=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*x+1,A=(-1-p)*m+(1.5+p)*M+.5*x,E=p*m-p*M;for(let F=0;F!==c;++F)r[F]=d*o[h+F]+D*o[a+F]+A*o[l+F]+E*o[u+F];return r}},zr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==c;++f)r[f]=o[a+f]*u+o[l+f]*h;return r}},kr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Br(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Mr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Mr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){let l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,o),e=!1;break}o=l}if(s!==void 0&&Ih(s))for(let c=0,l=s.length;c!==l;++c){let a=s[c];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=e.length-1,o=1;for(let c=1;c<r;++c){let l=!1,a=e[c],h=e[c+1];if(a!==h&&(c!==1||a!==e[0]))if(s)l=!0;else{let u=c*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let M=t[u+x];if(M!==t[f+x]||M!==t[p+x]){l=!0;break}}}if(l){if(c!==o){e[o]=e[c];let u=c*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let c=r*n,l=o*n,a=0;a!==n;++a)t[l+a]=t[c+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kt.prototype.ValueTypeName="";kt.prototype.TimeBufferType=Float32Array;kt.prototype.ValueBufferType=Float32Array;kt.prototype.DefaultInterpolation=Ar;var Yn=class extends kt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Ms;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}};Vr.prototype.ValueTypeName="color";var Hr=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}};Hr.prototype.ValueTypeName="number";var Gr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=(n-t)/(s-t),a=e*c;for(let h=a+c;a!==h;a+=4)Cn.slerpFlat(r,0,o,a-c,o,a,l);return r}},Bs=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Gr(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends kt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Ms;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="vector";var Xr=class{constructor(e,t,n){let s=this,r=!1,o=0,c=0,l,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,c),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=a.length;u<f;u+=2){let p=a[u],x=a[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wl=new Xr,qr=class{constructor(e){this.manager=e!==void 0?e:wl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ji=class extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Mo=new ft,Nc=new W,Fc=new W,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ks=class extends Rs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,c=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wo=class extends Ao{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new wo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $r=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zo="\\[\\]\\.:\\/",Ph=new RegExp("["+Zo+"]","g"),Jo="[^"+Zo+"]",Lh="[^"+Zo.replace("\\.","")+"]",Dh=/((?:WC+[\/:])*)/.source.replace("WC",Jo),Uh=/(WCOD+)?/.source.replace("WCOD",Lh),Nh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),Fh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),Oh=new RegExp("^"+Dh+Uh+Nh+Fh+"$"),Bh=["material","materials","bones","map"],Co=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ph,"")}static parseTrackName(e){let t=Oh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===t||c.uuid===t)return c;let l=n(c.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Co;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xm=new Float32Array(1);function Ko(i,e,t,n){let s=zh(n);switch(t){case ko:return i*e;case Ho:return i*e/s.components*s.byteLength;case ca:return i*e/s.components*s.byteLength;case Go:return i*e*2/s.components*s.byteLength;case la:return i*e*2/s.components*s.byteLength;case Vo:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case ha:return i*e*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qs:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(e,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Da:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Na:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zh(i){switch(i){case sn:case Fo:return{byteLength:1,components:1};case es:case Oo:case ts:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case Kn:case ra:case fn:return{byteLength:4,components:1};case Bo:case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Kl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vh(i){let e=new WeakMap;function t(c,l){let a=c.array,h=c.usage,u=a.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,a,h),c.onUploadCallback();let p;if(a instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)p=i.HALF_FLOAT;else if(a instanceof Uint16Array)c.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)p=i.SHORT;else if(a instanceof Uint32Array)p=i.UNSIGNED_INT;else if(a instanceof Int32Array)p=i.INT;else if(a instanceof Int8Array)p=i.BYTE;else if(a instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:p,bytesPerElement:a.BYTES_PER_ELEMENT,version:c.version,size:u}}function n(c,l,a){let h=l.array,u=l.updateRanges;if(i.bindBuffer(a,c),u.length===0)i.bufferSubData(a,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){let x=u[f],M=u[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,u[f]=M)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){let M=u[p];i.bufferSubData(a,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=e.get(c);l&&(i.deleteBuffer(l.buffer),e.delete(c))}function o(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let h=e.get(c);(!h||h.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let a=e.get(c);if(a===void 0)e.set(c,t(c,l));else if(a.version<c.version){if(a.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,c,l),a.version=c.version}}return{get:s,remove:r,update:o}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
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
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tu=`#ifdef USE_IRIDESCENCE
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
#endif`,nu=`#ifdef USE_BUMPMAP
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
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uu=`#define PI 3.141592653589793
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
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fu=`vec3 transformedNormal = objectNormal;
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
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",vu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ru=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
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
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zu=`PhysicalMaterial material;
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
#endif`,ku=`struct PhysicalMaterial {
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
}`,Vu=`
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
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ku=`#if defined( USE_POINTS_UV )
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
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,od=`#ifndef FLAT_SHADED
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
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,Yd=`#if DEPTH_PACKING == 3200
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
}`,Zd=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#define LAMBERT
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
}`,rf=`#define LAMBERT
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
}`,af=`#define MATCAP
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
}`,of=`#define MATCAP
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
}`,lf=`#define NORMAL
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
}`,hf=`#define PHONG
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
}`,uf=`#define PHONG
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
}`,df=`#define STANDARD
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
}`,ff=`#define STANDARD
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
}`,pf=`#define TOON
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
}`,mf=`#define TOON
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
}`,gf=`uniform float size;
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
}`,xf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,vf=`uniform vec3 color;
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
}`,yf=`uniform float rotation;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Hh,alphahash_pars_fragment:Gh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:$h,aomap_fragment:Yh,aomap_pars_fragment:Zh,batching_pars_vertex:Jh,batching_vertex:Kh,begin_vertex:jh,beginnormal_vertex:Qh,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ru,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:cu,color_pars_vertex:lu,color_vertex:hu,common:uu,cube_uv_reflection_fragment:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:xu,colorspace_fragment:_u,colorspace_pars_fragment:vu,envmap_fragment:yu,envmap_common_pars_fragment:Mu,envmap_pars_fragment:Su,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Uu,envmap_vertex:Eu,fog_vertex:Tu,fog_pars_vertex:Au,fog_fragment:wu,fog_pars_fragment:Cu,gradientmap_pars_fragment:Ru,lightmap_pars_fragment:Iu,lights_lambert_fragment:Pu,lights_lambert_pars_fragment:Lu,lights_pars_begin:Du,lights_toon_fragment:Nu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Ou,lights_phong_pars_fragment:Bu,lights_physical_fragment:zu,lights_physical_pars_fragment:ku,lights_fragment_begin:Vu,lights_fragment_maps:Hu,lights_fragment_end:Gu,logdepthbuf_fragment:Wu,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:$u,map_fragment:Yu,map_pars_fragment:Zu,map_particle_fragment:Ju,map_particle_pars_fragment:Ku,metalnessmap_fragment:ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:ed,morphcolor_vertex:td,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:cd,normal_vertex:ld,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:xd,project_vertex:_d,dithering_fragment:vd,dithering_pars_fragment:yd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:Ad,skinbase_vertex:wd,skinning_pars_vertex:Cd,skinning_vertex:Rd,skinnormal_vertex:Id,specularmap_fragment:Pd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Ud,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:Bd,uv_vertex:zd,worldpos_vertex:kd,background_vert:Vd,background_frag:Hd,backgroundCube_vert:Gd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:$d,depth_frag:Yd,distanceRGBA_vert:Zd,distanceRGBA_frag:Jd,equirect_vert:Kd,equirect_frag:jd,linedashed_vert:Qd,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:af,meshmatcap_frag:of,meshnormal_vert:cf,meshnormal_frag:lf,meshphong_vert:hf,meshphong_frag:uf,meshphysical_vert:df,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:xf,shadow_vert:_f,shadow_frag:vf,sprite_vert:yf,sprite_frag:Mf},ye={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pn={basic:{uniforms:At([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:At([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:At([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:At([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:At([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:At([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:At([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:At([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:At([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:At([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:At([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:At([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:At([ye.lights,ye.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pn.physical={uniforms:At([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var za={r:0,b:0,g:0},mi=new tn,Sf=new ft;function bf(i,e,t,n,s,r,o){let c=new Xe(0),l=r===!0?0:1,a,h,u=null,f=0,p=null;function x(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function M(A){let E=!1,F=x(A);F===null?d(c,l):F&&F.isColor&&(d(F,1),E=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,E){let F=x(E);F&&(F.isCubeTexture||F.mapping===Hs)?(h===void 0&&(h=new Rt(new $n(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:pi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(E.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(mi)),h.material.toneMapped=je.getTransfer(F.colorSpace)!==tt,(u!==F||f!==F.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=F,f=F.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(a===void 0&&(a=new Rt(new Fs(2,2),new nn({name:"BackgroundMaterial",uniforms:pi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(a)),a.material.uniforms.t2D.value=F,a.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,a.material.toneMapped=je.getTransfer(F.colorSpace)!==tt,F.matrixAutoUpdate===!0&&F.updateMatrix(),a.material.uniforms.uvTransform.value.copy(F.matrix),(u!==F||f!==F.version||p!==i.toneMapping)&&(a.material.needsUpdate=!0,u=F,f=F.version,p=i.toneMapping),a.layers.enableAll(),A.unshift(a,a.geometry,a.material,0,0,null))}function d(A,E){A.getRGB(za,Yo(i)),n.buffers.color.setClear(za.r,za.g,za.b,E,o)}function D(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,E=1){c.set(A),l=E,d(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(c,l)},render:M,addToRenderList:m,dispose:D}}function Ef(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(v,k,q,te,j){let ce=!1,se=u(te,q,k);r!==se&&(r=se,a(r.object)),ce=p(v,te,q,j),ce&&x(v,te,q,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,E(v,k,q,te),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function a(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,k,q){let te=q.wireframe===!0,j=n[v.id];j===void 0&&(j={},n[v.id]=j);let ce=j[k.id];ce===void 0&&(ce={},j[k.id]=ce);let se=ce[te];return se===void 0&&(se=f(l()),ce[te]=se),se}function f(v){let k=[],q=[],te=[];for(let j=0;j<t;j++)k[j]=0,q[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:te,object:v,attributes:{},index:null}}function p(v,k,q,te){let j=r.attributes,ce=k.attributes,se=0,pe=q.getAttributes();for(let K in pe)if(pe[K].location>=0){let ve=j[K],we=ce[K];if(we===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;se++}return r.attributesNum!==se||r.index!==te}function x(v,k,q,te){let j={},ce=k.attributes,se=0,pe=q.getAttributes();for(let K in pe)if(pe[K].location>=0){let ve=ce[K];ve===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor));let we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),j[K]=we,se++}r.attributes=j,r.attributesNum=se,r.index=te}function M(){let v=r.newAttributes;for(let k=0,q=v.length;k<q;k++)v[k]=0}function m(v){d(v,0)}function d(v,k){let q=r.newAttributes,te=r.enabledAttributes,j=r.attributeDivisors;q[v]=1,te[v]===0&&(i.enableVertexAttribArray(v),te[v]=1),j[v]!==k&&(i.vertexAttribDivisor(v,k),j[v]=k)}function D(){let v=r.newAttributes,k=r.enabledAttributes;for(let q=0,te=k.length;q<te;q++)k[q]!==v[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function A(v,k,q,te,j,ce,se){se===!0?i.vertexAttribIPointer(v,k,q,j,ce):i.vertexAttribPointer(v,k,q,te,j,ce)}function E(v,k,q,te){M();let j=te.attributes,ce=q.getAttributes(),se=k.defaultAttributeValues;for(let pe in ce){let K=ce[pe];if(K.location>=0){let me=j[pe];if(me===void 0&&(pe==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),pe==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),me!==void 0){let ve=me.normalized,we=me.itemSize,ze=e.get(me);if(ze===void 0)continue;let Ve=ze.buffer,$e=ze.type,Ye=ze.bytesPerElement,Q=$e===i.INT||$e===i.UNSIGNED_INT||me.gpuType===ra;if(me.isInterleavedBufferAttribute){let he=me.data,Te=he.stride,Le=me.offset;if(he.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)d(K.location+Ae,he.meshPerAttribute);v.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Ae=0;Ae<K.locationSize;Ae++)A(K.location+Ae,we/K.locationSize,$e,ve,Te*Ye,(Le+we/K.locationSize*Ae)*Ye,Q)}else{if(me.isInstancedBufferAttribute){for(let he=0;he<K.locationSize;he++)d(K.location+he,me.meshPerAttribute);v.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let he=0;he<K.locationSize;he++)m(K.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let he=0;he<K.locationSize;he++)A(K.location+he,we/K.locationSize,$e,ve,we*Ye,we/K.locationSize*he*Ye,Q)}}else if(se!==void 0){let ve=se[pe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(K.location,ve);break;case 3:i.vertexAttrib3fv(K.location,ve);break;case 4:i.vertexAttrib4fv(K.location,ve);break;default:i.vertexAttrib1fv(K.location,ve)}}}}D()}function F(){H();for(let v in n){let k=n[v];for(let q in k){let te=k[q];for(let j in te)h(te[j].object),delete te[j];delete k[q]}delete n[v]}}function I(v){if(n[v.id]===void 0)return;let k=n[v.id];for(let q in k){let te=k[q];for(let j in te)h(te[j].object),delete te[j];delete k[q]}delete n[v.id]}function z(v){for(let k in n){let q=n[k];if(q[v.id]===void 0)continue;let te=q[v.id];for(let j in te)h(te[j].object),delete te[j];delete q[v.id]}}function H(){y(),o=!0,r!==s&&(r=s,a(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:H,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:m,disableUnusedAttributes:D}}function Tf(i,e,t){let n;function s(a){n=a}function r(a,h){i.drawArrays(n,a,h),t.update(h,n,1)}function o(a,h,u){u!==0&&(i.drawArraysInstanced(n,a,h,u),t.update(h,n,u))}function c(a,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function l(a,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<a.length;x++)o(a[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,a,0,h,0,f,0,u);let x=0;for(let M=0;M<u;M++)x+=h[M]*f[M];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Af(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(z){return!(z!==Yt&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(z){let H=z===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==sn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==fn&&!H)}function l(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=l(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=x>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:D,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:F,maxSamples:I}}function wf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new cn,c=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):a();else{let D=r?0:n,A=D*4,E=d.clippingState||null;l.value=E,E=h(x,f,A,p);for(let F=0;F!==A;++F)E[F]=t[F];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function a(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,x!==!0||m===null){let d=p+M*4,D=f.matrixWorldInverse;c.getNormalMatrix(D),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,E=p;A!==M;++A,E+=4)o.copy(u[A]).applyMatrix4(D,c),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Cf(i){let e=new WeakMap;function t(o,c){return c===na?o.mapping=di:c===ia&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){let c=o.mapping;if(c===na||c===ia)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let a=new Ur(l.height);return a.fromEquirectangularTexture(i,o),e.set(o,a),o.addEventListener("dispose",s),t(a.texture,o.mapping)}else return null}}return o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rs=4,Cl=[.125,.215,.35,.446,.526,.582],_i=20,jo=new ks,Rl=new Xe,Qo=null,ec=0,tc=0,nc=!1,xi=(1+Math.sqrt(5))/2,ss=1/xi,Il=[new W(-xi,ss,0),new W(xi,ss,0),new W(-ss,0,xi),new W(ss,0,xi),new W(0,xi,-ss),new W(0,xi,ss),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Rf=new W,Ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:c=Rf}=r;Qo=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ts,format:Yt,colorSpace:ci,depthBuffer:!1},s=Pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=If(r)),this._blurMaterial=Pf(r,e,t)}return s}_compileMaterial(e){let t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,s,r){let l=new Mt(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Rl),u.toneMapping=Pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let M=new li({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),m=new Rt(new $n,M),d=!1,D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,d=!0):(M.color.copy(Rl),d=!0);for(let A=0;A<6;A++){let E=A%3;E===0?(l.up.set(0,a[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):E===1?(l.up.set(0,0,a[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,a[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let F=this._cubeSize;ka(s,E*F,A>2?F:0,F,F),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=D}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===di||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;let l=this._cubeSize;ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Il[(s-r-1)%Il.length];this._blur(e,r-1,r,o,c)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,c){let l=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[s],a),f=a.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),M=r/x,m=isFinite(r)?1+Math.floor(h*M):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);let d=[],D=0;for(let z=0;z<_i;++z){let H=z/M,y=Math.exp(-H*H/2);d.push(y),z===0?D+=y:z<m&&(D+=2*y)}for(let z=0;z<d.length;z++)d[z]=d[z]/D;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",c&&(f.poleAxis.value=c);let{_lodMax:A}=this;f.dTheta.value=x,f.mipInt.value=A-n;let E=this._sizeLods[s],F=3*E*(s>A-rs?s-A+rs:0),I=4*(this._cubeSize-E);ka(t,F,I,3*E,2*E),l.setRenderTarget(t),l.render(u,jo)}};function If(i){let e=[],t=[],n=[],s=i,r=i-rs+1+Cl.length;for(let o=0;o<r;o++){let c=Math.pow(2,s);t.push(c);let l=1/c;o>i-rs?l=Cl[o-i+rs-1]:o===0&&(l=0),n.push(l);let a=1/(c-2),h=-a,u=1+a,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,M=3,m=2,d=1,D=new Float32Array(M*x*p),A=new Float32Array(m*x*p),E=new Float32Array(d*x*p);for(let I=0;I<p;I++){let z=I%3*2/3-1,H=I>2?0:-1,y=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];D.set(y,M*x*I),A.set(f,m*x*I);let v=[I,I,I,I,I,I];E.set(v,d*x*I)}let F=new $t;F.setAttribute("position",new Lt(D,M)),F.setAttribute("uv",new Lt(A,m)),F.setAttribute("faceIndex",new Lt(E,d)),e.push(F),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pl(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pf(i,e,t){let n=new Float32Array(_i),s=new W(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ll(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Dl(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function Lf(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){let l=c.mapping,a=l===na||l===ia,h=l===di||l===fi;if(a||h){let u=e.get(c),f=u!==void 0?u.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return t===null&&(t=new Ha(i)),u=a?t.fromEquirectangular(c,u):t.fromCubemap(c,u),u.texture.pmremVersion=c.pmremVersion,e.set(c,u),u.texture;if(u!==void 0)return u.texture;{let p=c.image;return a&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ha(i)),u=a?t.fromEquirectangular(c):t.fromCubemap(c),u.texture.pmremVersion=c.pmremVersion,e.set(c,u),c.addEventListener("dispose",r),u.texture):null}}}return c}function s(c){let l=0,a=6;for(let h=0;h<a;h++)c[h]!==void 0&&l++;return l===a}function r(c){let l=c.target;l.removeEventListener("dispose",r);let a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Df(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uf(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function a(u){let f=[],p=u.index,x=u.attributes.position,M=0;if(p!==null){let D=p.array;M=p.version;for(let A=0,E=D.length;A<E;A+=3){let F=D[A+0],I=D[A+1],z=D[A+2];f.push(F,I,I,z,z,F)}}else if(x!==void 0){let D=x.array;M=x.version;for(let A=0,E=D.length/3-1;A<E;A+=3){let F=A+0,I=A+1,z=A+2;f.push(F,I,I,z,z,F)}}else return;let m=new($o(f)?Cs:ws)(f,1);m.version=M;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&a(u)}else a(u);return r.get(u)}return{get:c,update:l,getWireframeAttribute:h}}function Nf(i,e,t){let n;function s(f){n=f}let r,o;function c(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function a(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,M){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)a(f[d]/o,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,x);let d=0;for(let D=0;D<x;D++)d+=p[D]*M[D];t.update(d,n,1)}}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ff(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(r/3);break;case i.LINES:t.lines+=c*(r/2);break;case i.LINE_STRIP:t.lines+=c*(r-1);break;case i.LINE_LOOP:t.lines+=c*r;break;case i.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Of(i,e,t){let n=new WeakMap,s=new ut;function r(o,c,l){let a=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(c);if(f===void 0||f.count!==u){let y=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],d=c.morphAttributes.normal||[],D=c.morphAttributes.color||[],A=0;p===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let E=c.attributes.position.count*A,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let I=new Float32Array(E*F*4*u),z=new Ts(I,E,F,u);z.type=fn,z.needsUpdate=!0;let H=A*4;for(let v=0;v<u;v++){let k=m[v],q=d[v],te=D[v],j=E*F*4*v;for(let ce=0;ce<k.count;ce++){let se=ce*H;p===!0&&(s.fromBufferAttribute(k,ce),I[j+se+0]=s.x,I[j+se+1]=s.y,I[j+se+2]=s.z,I[j+se+3]=0),x===!0&&(s.fromBufferAttribute(q,ce),I[j+se+4]=s.x,I[j+se+5]=s.y,I[j+se+6]=s.z,I[j+se+7]=0),M===!0&&(s.fromBufferAttribute(te,ce),I[j+se+8]=s.x,I[j+se+9]=s.y,I[j+se+10]=s.z,I[j+se+11]=te.itemSize===4?s.w:1)}}f={count:u,texture:z,size:new We(E,F)},n.set(c,f),c.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<a.length;M++)p+=a[M];let x=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",a)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bf(i,e,t,n){let s=new WeakMap;function r(l){let a=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==a&&(e.update(u),s.set(u,a)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==a&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,a))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==a&&(f.update(),s.set(f,a))}return u}function o(){s=new WeakMap}function c(l){let a=l.target;a.removeEventListener("dispose",c),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:r,dispose:o}}var jl=new Dt,Ul=new Ds(1,1),Ql=new Ts,eh=new Pr,th=new Is,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nl[s];if(r===void 0&&(r=new Float32Array(s),Nl[s]=r),e!==0){n.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(r,c)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Vf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Hf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Gf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),vt(t,n)}}function Wf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),vt(t,n)}}function Xf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),vt(t,n)}}function qf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Yf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Jf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function ep(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=Xo,r=Ul):r=jl,t.setTexture2D(e||r,s)}function tp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||eh,s)}function np(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||th,s)}function ip(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ql,s)}function sp(i){switch(i){case 5126:return zf;case 35664:return kf;case 35665:return Vf;case 35666:return Hf;case 35674:return Gf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return $f;case 35668:case 35672:return Yf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Kf;case 36295:return jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function rp(i,e){i.uniform1fv(this.addr,e)}function ap(i,e){let t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function op(i,e){let t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function cp(i,e){let t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function lp(i,e){let t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hp(i,e){let t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function up(i,e){let t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dp(i,e){i.uniform1iv(this.addr,e)}function fp(i,e){i.uniform2iv(this.addr,e)}function pp(i,e){i.uniform3iv(this.addr,e)}function mp(i,e){i.uniform4iv(this.addr,e)}function gp(i,e){i.uniform1uiv(this.addr,e)}function xp(i,e){i.uniform2uiv(this.addr,e)}function _p(i,e){i.uniform3uiv(this.addr,e)}function vp(i,e){i.uniform4uiv(this.addr,e)}function yp(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jl,r[o])}function Mp(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||eh,r[o])}function Sp(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||th,r[o])}function bp(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ql,r[o])}function Ep(i){switch(i){case 5126:return rp;case 35664:return ap;case 35665:return op;case 35666:return cp;case 35674:return lp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return xp;case 36295:return _p;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return bp}}var sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}},rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ep(t.type)}},ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(e,t[c.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function kl(i,e){i.seq.push(e),i.map[e.id]=e}function Tp(i,e,t){let n=i.name,s=n.length;for(ic.lastIndex=0;;){let r=ic.exec(n),o=ic.lastIndex,c=r[1],l=r[2]==="]",a=r[3];if(l&&(c=c|0),a===void 0||a==="["&&o+2===s){kl(t,a===void 0?new sc(c,i,e):new rc(c,i,e));break}else{let u=t.map[c];u===void 0&&(u=new ac(c),kl(t,u)),t=u}}}var as=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let c=t[r],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Vl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ap=37297,wp=0;function Cp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}var Hl=new Ge;function Rp(i){je._getMatrix(Hl,je.workingColorSpace,i);let e=`mat3( ${Hl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Ss:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Cp(i.getShaderSource(e),c)}else return r}function Ip(i,e){let t=Rp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pp(i,e){let t;switch(e){case rl:t="Linear";break;case al:t="Reinhard";break;case ol:t="Cineon";break;case Vs:t="ACESFilmic";break;case ll:t="AgX";break;case hl:t="Neutral";break;case cl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Va=new W;function Lp(){je.getLuminanceCoefficients(Va);let i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Up(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Np(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Ys(i){return i!==""}function Wl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(Fp,Bp)}var Op=new Map;function Bp(i,e){let t=qe[e];if(t===void 0){let n=Op.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}var zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(zp,kp)}function kp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $l(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Vp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uo:e="ENVMAP_BLENDING_MULTIPLY";break;case il:e="ENVMAP_BLENDING_MIX";break;case sl:e="ENVMAP_BLENDING_ADD";break}return e}function Xp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,c=t.fragmentShader,l=Vp(t),a=Hp(t),h=Gp(t),u=Wp(t),f=Xp(t),p=Dp(t),x=Up(r),M=s.createProgram(),m,d,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ys).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ys).join(`
`),d.length>0&&(d+=`
`)):(m=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),d=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),Lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=oc(o),o=Wl(o,t),o=Xl(o,t),c=oc(c),c=Wl(c,t),c=Xl(c,t),o=ql(o),c=ql(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=D+m+o,E=D+d+c,F=Vl(s,s.VERTEX_SHADER,A),I=Vl(s,s.FRAGMENT_SHADER,E);s.attachShader(M,F),s.attachShader(M,I),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function z(k){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(M)||"",te=s.getShaderInfoLog(F)||"",j=s.getShaderInfoLog(I)||"",ce=q.trim(),se=te.trim(),pe=j.trim(),K=!0,me=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,F,I);else{let ve=Gl(s,F,"vertex"),we=Gl(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ce+`
`+ve+`
`+we)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(se===""||pe==="")&&(me=!1);me&&(k.diagnostics={runnable:K,programLog:ce,vertexShader:{log:se,prefix:m},fragmentShader:{log:pe,prefix:d}})}s.deleteShader(F),s.deleteShader(I),H=new as(s,M),y=Np(s,M)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let y;this.getAttributes=function(){return y===void 0&&z(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,Ap)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=I,this}var $p=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lc(e),t.set(e,n)),n}},lc=class{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}};function Yp(i,e,t,n,s,r,o){let c=new As,l=new cc,a=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return a.add(y),y===0?"uv":`uv${y}`}function m(y,v,k,q,te){let j=q.fog,ce=te.geometry,se=y.isMeshStandardMaterial?q.environment:null,pe=(y.isMeshStandardMaterial?t:e).get(y.envMap||se),K=pe&&pe.mapping===Hs?pe.image.height:null,me=x[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ve=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,we=ve!==void 0?ve.length:0,ze=0;ce.morphAttributes.position!==void 0&&(ze=1),ce.morphAttributes.normal!==void 0&&(ze=2),ce.morphAttributes.color!==void 0&&(ze=3);let Ve,$e,Ye,Q;if(me){let Qe=pn[me];Ve=Qe.vertexShader,$e=Qe.fragmentShader}else Ve=y.vertexShader,$e=y.fragmentShader,l.update(y),Ye=l.getVertexShaderID(y),Q=l.getFragmentShaderID(y);let he=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Le=te.isInstancedMesh===!0,Ae=te.isBatchedMesh===!0,He=!!y.map,at=!!y.matcap,P=!!pe,nt=!!y.aoMap,O=!!y.lightMap,B=!!y.bumpMap,T=!!y.normalMap,N=!!y.displacementMap,Z=!!y.emissiveMap,V=!!y.metalnessMap,le=!!y.roughnessMap,Se=y.anisotropy>0,S=y.clearcoat>0,g=y.dispersion>0,U=y.iridescence>0,$=y.sheen>0,R=y.transmission>0,C=Se&&!!y.anisotropyMap,oe=S&&!!y.clearcoatMap,ue=S&&!!y.clearcoatNormalMap,xe=S&&!!y.clearcoatRoughnessMap,be=U&&!!y.iridescenceMap,de=U&&!!y.iridescenceThicknessMap,Me=$&&!!y.sheenColorMap,De=$&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,b=!!y.specularColorMap,re=!!y.specularIntensityMap,w=R&&!!y.transmissionMap,Y=R&&!!y.thicknessMap,L=!!y.gradientMap,J=!!y.alphaMap,ae=y.alphaTest>0,ie=!!y.alphaHash,_e=!!y.extensions,Ne=Pn;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let Ke={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:$e,defines:y.defines,customVertexShaderID:Ye,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&te._colorsTexture!==null,instancing:Le,instancingColor:Le&&te.instanceColor!==null,instancingMorph:Le&&te.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ci,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:at,envMap:P,envMapMode:P&&pe.mapping,envMapCubeUVHeight:K,aoMap:nt,lightMap:O,bumpMap:B,normalMap:T,displacementMap:f&&N,emissiveMap:Z,normalMapObjectSpace:T&&y.normalMapType===pl,normalMapTangentSpace:T&&y.normalMapType===Wo,metalnessMap:V,roughnessMap:le,anisotropy:Se,anisotropyMap:C,clearcoat:S,clearcoatMap:oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:xe,dispersion:g,iridescence:U,iridescenceMap:be,iridescenceThicknessMap:de,sheen:$,sheenColorMap:Me,sheenRoughnessMap:De,specularMap:Ie,specularColorMap:b,specularIntensityMap:re,transmission:R,transmissionMap:w,thicknessMap:Y,gradientMap:L,opaque:y.transparent===!1&&y.blending===ai&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ae,alphaHash:ie,combine:y.combine,mapUv:He&&M(y.map.channel),aoMapUv:nt&&M(y.aoMap.channel),lightMapUv:O&&M(y.lightMap.channel),bumpMapUv:B&&M(y.bumpMap.channel),normalMapUv:T&&M(y.normalMap.channel),displacementMapUv:N&&M(y.displacementMap.channel),emissiveMapUv:Z&&M(y.emissiveMap.channel),metalnessMapUv:V&&M(y.metalnessMap.channel),roughnessMapUv:le&&M(y.roughnessMap.channel),anisotropyMapUv:C&&M(y.anisotropyMap.channel),clearcoatMapUv:oe&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(y.sheenRoughnessMap.channel),specularMapUv:Ie&&M(y.specularMap.channel),specularColorMapUv:b&&M(y.specularColorMap.channel),specularIntensityMapUv:re&&M(y.specularIntensityMap.channel),transmissionMapUv:w&&M(y.transmissionMap.channel),thicknessMapUv:Y&&M(y.thicknessMap.channel),alphaMapUv:J&&M(y.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(T||Se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ce.attributes.uv&&(He||J),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:Z&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=a.has(1),Ke.vertexUv2s=a.has(2),Ke.vertexUv3s=a.has(3),a.clear(),Ke}function d(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)v.push(k),v.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(D(v,y),A(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function D(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function A(y,v){c.disableAll(),v.supportsVertexTextures&&c.enable(0),v.instancing&&c.enable(1),v.instancingColor&&c.enable(2),v.instancingMorph&&c.enable(3),v.matcap&&c.enable(4),v.envMap&&c.enable(5),v.normalMapObjectSpace&&c.enable(6),v.normalMapTangentSpace&&c.enable(7),v.clearcoat&&c.enable(8),v.iridescence&&c.enable(9),v.alphaTest&&c.enable(10),v.vertexColors&&c.enable(11),v.vertexAlphas&&c.enable(12),v.vertexUv1s&&c.enable(13),v.vertexUv2s&&c.enable(14),v.vertexUv3s&&c.enable(15),v.vertexTangents&&c.enable(16),v.anisotropy&&c.enable(17),v.alphaHash&&c.enable(18),v.batching&&c.enable(19),v.dispersion&&c.enable(20),v.batchingColor&&c.enable(21),v.gradientMap&&c.enable(22),y.push(c.mask),c.disableAll(),v.fog&&c.enable(0),v.useFog&&c.enable(1),v.flatShading&&c.enable(2),v.logarithmicDepthBuffer&&c.enable(3),v.reversedDepthBuffer&&c.enable(4),v.skinning&&c.enable(5),v.morphTargets&&c.enable(6),v.morphNormals&&c.enable(7),v.morphColors&&c.enable(8),v.premultipliedAlpha&&c.enable(9),v.shadowMapEnabled&&c.enable(10),v.doubleSided&&c.enable(11),v.flipSided&&c.enable(12),v.useDepthPacking&&c.enable(13),v.dithering&&c.enable(14),v.transmission&&c.enable(15),v.sheen&&c.enable(16),v.opaque&&c.enable(17),v.pointsUvs&&c.enable(18),v.decodeVideoTexture&&c.enable(19),v.decodeVideoTextureEmissive&&c.enable(20),v.alphaToCoverage&&c.enable(21),y.push(c.mask)}function E(y){let v=x[y.type],k;if(v){let q=pn[v];k=Tl.clone(q.uniforms)}else k=y.uniforms;return k}function F(y,v){let k;for(let q=0,te=h.length;q<te;q++){let j=h[q];if(j.cacheKey===v){k=j,++k.usedTimes;break}}return k===void 0&&(k=new qp(i,v,y,r),h.push(k)),k}function I(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function z(y){l.remove(y)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:h,dispose:H}}function Zp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,l){i.get(o)[c]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,x,M,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:M,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=M,d.group=m),e++,d}function c(u,f,p,x,M,m){let d=o(u,f,p,x,M,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,x,M,m){let d=o(u,f,p,x,M,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function a(u,f){t.length>1&&t.sort(u||Jp),n.length>1&&n.sort(f||Yl),s.length>1&&s.sort(f||Yl)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:a}}function Kp(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zl,i.set(n,[o])):s>=r.length?(o=new Zl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Xe};break;case"SpotLight":t={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Qp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var em=0;function tm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nm(i){let e=new jp,t=Qp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new W);let s=new W,r=new ft,o=new ft;function c(a){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,x=0,M=0,m=0,d=0,D=0,A=0,E=0,F=0,I=0,z=0;a.sort(tm);for(let y=0,v=a.length;y<v;y++){let k=a[y],q=k.color,te=k.intensity,j=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=q.r*te,u+=q.g*te,f+=q.b*te;else if(k.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(k.sh.coefficients[se],te);z++}else if(k.isDirectionalLight){let se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let pe=k.shadow,K=t.get(k);K.shadowIntensity=pe.intensity,K.shadowBias=pe.bias,K.shadowNormalBias=pe.normalBias,K.shadowRadius=pe.radius,K.shadowMapSize=pe.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=ce,n.directionalShadowMatrix[p]=k.shadow.matrix,D++}n.directional[p]=se,p++}else if(k.isSpotLight){let se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(q).multiplyScalar(te),se.distance=j,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,n.spot[M]=se;let pe=k.shadow;if(k.map&&(n.spotLightMap[F]=k.map,F++,pe.updateMatrices(k),k.castShadow&&I++),n.spotLightMatrix[M]=pe.matrix,k.castShadow){let K=t.get(k);K.shadowIntensity=pe.intensity,K.shadowBias=pe.bias,K.shadowNormalBias=pe.normalBias,K.shadowRadius=pe.radius,K.shadowMapSize=pe.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=ce,E++}M++}else if(k.isRectAreaLight){let se=e.get(k);se.color.copy(q).multiplyScalar(te),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=se,m++}else if(k.isPointLight){let se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){let pe=k.shadow,K=t.get(k);K.shadowIntensity=pe.intensity,K.shadowBias=pe.bias,K.shadowNormalBias=pe.normalBias,K.shadowRadius=pe.radius,K.shadowMapSize=pe.mapSize,K.shadowCameraNear=pe.camera.near,K.shadowCameraFar=pe.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=ce,n.pointShadowMatrix[x]=k.shadow.matrix,A++}n.point[x]=se,x++}else if(k.isHemisphereLight){let se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(te),se.groundColor.copy(k.groundColor).multiplyScalar(te),n.hemi[d]=se,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let H=n.hash;(H.directionalLength!==p||H.pointLength!==x||H.spotLength!==M||H.rectAreaLength!==m||H.hemiLength!==d||H.numDirectionalShadows!==D||H.numPointShadows!==A||H.numSpotShadows!==E||H.numSpotMaps!==F||H.numLightProbes!==z)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+F-I,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=z,H.directionalLength=p,H.pointLength=x,H.spotLength=M,H.rectAreaLength=m,H.hemiLength=d,H.numDirectionalShadows=D,H.numPointShadows=A,H.numSpotShadows=E,H.numSpotMaps=F,H.numLightProbes=z,n.version=em++)}function l(a,h){let u=0,f=0,p=0,x=0,M=0,m=h.matrixWorldInverse;for(let d=0,D=a.length;d<D;d++){let A=a[d];if(A.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(A.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let E=n.hemi[M];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:c,setupView:l,state:n}}function Jl(i){let e=new nm(i),t=[],n=[];function s(h){a.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function c(){e.setup(t)}function l(h){e.setupView(t,h)}let a={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:a,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function im(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),c;return o===void 0?(c=new Jl(i),e.set(s,[c])):r>=o.length?(c=new Jl(i),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}var sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
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
}`;function am(i,e,t){let n=new Yi,s=new We,r=new We,o=new ut,c=new Fr({depthPacking:fl}),l=new Or,a={},h=t.maxTextureSize,u={[An]:It,[It]:An,[dn]:dn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:sm,fragmentShader:rm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new $t;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Rt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let d=this.type;this.render=function(I,z,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let y=i.getRenderTarget(),v=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(In),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let te=d!==un&&this.type===un,j=d===un&&this.type!==un;for(let ce=0,se=I.length;ce<se;ce++){let pe=I[ce],K=pe.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let me=K.getFrameExtents();if(s.multiply(me),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,K.mapSize.y=r.y)),K.map===null||te===!0||j===!0){let we=this.type!==un?{minFilter:qt,magFilter:qt}:{};K.map!==null&&K.map.dispose(),K.map=new hn(s.x,s.y,we),K.map.texture.name=pe.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let ve=K.getViewportCount();for(let we=0;we<ve;we++){let ze=K.getViewport(we);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),q.viewport(o),K.updateMatrices(pe,we),n=K.getFrustum(),E(z,H,K.camera,pe,this.type)}K.isPointLightShadow!==!0&&this.type===un&&D(K,H),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,k)};function D(I,z){let H=e.update(M);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new hn(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(z,null,H,f,M,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(z,null,H,p,M,null)}function A(I,z,H,y){let v=null,k=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)v=k;else if(v=H.isPointLight===!0?l:c,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let q=v.uuid,te=z.uuid,j=a[q];j===void 0&&(j={},a[q]=j);let ce=j[te];ce===void 0&&(ce=v.clone(),j[te]=ce,z.addEventListener("dispose",F)),v=ce}if(v.visible=z.visible,v.wireframe=z.wireframe,y===un?v.side=z.shadowSide!==null?z.shadowSide:z.side:v.side=z.shadowSide!==null?z.shadowSide:u[z.side],v.alphaMap=z.alphaMap,v.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,v.map=z.map,v.clipShadows=z.clipShadows,v.clippingPlanes=z.clippingPlanes,v.clipIntersection=z.clipIntersection,v.displacementMap=z.displacementMap,v.displacementScale=z.displacementScale,v.displacementBias=z.displacementBias,v.wireframeLinewidth=z.wireframeLinewidth,v.linewidth=z.linewidth,H.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let q=i.properties.get(v);q.light=H}return v}function E(I,z,H,y,v){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===un)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);let te=e.update(I),j=I.material;if(Array.isArray(j)){let ce=te.groups;for(let se=0,pe=ce.length;se<pe;se++){let K=ce[se],me=j[K.materialIndex];if(me&&me.visible){let ve=A(I,me,y,v);I.onBeforeShadow(i,I,z,H,te,ve,K),i.renderBufferDirect(H,null,te,ve,I,K),I.onAfterShadow(i,I,z,H,te,ve,K)}}}else if(j.visible){let ce=A(I,j,y,v);I.onBeforeShadow(i,I,z,H,te,ce,null),i.renderBufferDirect(H,null,te,ce,I,null),I.onAfterShadow(i,I,z,H,te,ce,null)}}let q=I.children;for(let te=0,j=q.length;te<j;te++)E(q[te],z,H,y,v)}function F(I){I.target.removeEventListener("dispose",F);for(let H in a){let y=a[H],v=I.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var om={[Zr]:Jr,[Kr]:ea,[jr]:ta,[oi]:Qr,[Jr]:Zr,[ea]:Kr,[ta]:jr,[Qr]:oi};function cm(i,e){function t(){let w=!1,Y=new ut,L=null,J=new ut(0,0,0,0);return{setMask:function(ae){L!==ae&&!w&&(i.colorMask(ae,ae,ae,ae),L=ae)},setLocked:function(ae){w=ae},setClear:function(ae,ie,_e,Ne,Ke){Ke===!0&&(ae*=Ne,ie*=Ne,_e*=Ne),Y.set(ae,ie,_e,Ne),J.equals(Y)===!1&&(i.clearColor(ae,ie,_e,Ne),J.copy(Y))},reset:function(){w=!1,L=null,J.set(-1,0,0,0)}}}function n(){let w=!1,Y=!1,L=null,J=null,ae=null;return{setReversed:function(ie){if(Y!==ie){let _e=e.get("EXT_clip_control");ie?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),Y=ie;let Ne=ae;ae=null,this.setClear(Ne)}},getReversed:function(){return Y},setTest:function(ie){ie?he(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ie){L!==ie&&!w&&(i.depthMask(ie),L=ie)},setFunc:function(ie){if(Y&&(ie=om[ie]),J!==ie){switch(ie){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ie}},setLocked:function(ie){w=ie},setClear:function(ie){ae!==ie&&(Y&&(ie=1-ie),i.clearDepth(ie),ae=ie)},reset:function(){w=!1,L=null,J=null,ae=null,Y=!1}}}function s(){let w=!1,Y=null,L=null,J=null,ae=null,ie=null,_e=null,Ne=null,Ke=null;return{setTest:function(Qe){w||(Qe?he(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Qe){Y!==Qe&&!w&&(i.stencilMask(Qe),Y=Qe)},setFunc:function(Qe,Zt,Ut){(L!==Qe||J!==Zt||ae!==Ut)&&(i.stencilFunc(Qe,Zt,Ut),L=Qe,J=Zt,ae=Ut)},setOp:function(Qe,Zt,Ut){(ie!==Qe||_e!==Zt||Ne!==Ut)&&(i.stencilOp(Qe,Zt,Ut),ie=Qe,_e=Zt,Ne=Ut)},setLocked:function(Qe){w=Qe},setClear:function(Qe){Ke!==Qe&&(i.clearStencil(Qe),Ke=Qe)},reset:function(){w=!1,Y=null,L=null,J=null,ae=null,ie=null,_e=null,Ne=null,Ke=null}}}let r=new t,o=new n,c=new s,l=new WeakMap,a=new WeakMap,h={},u={},f=new WeakMap,p=[],x=null,M=!1,m=null,d=null,D=null,A=null,E=null,F=null,I=null,z=new Xe(0,0,0),H=0,y=!1,v=null,k=null,q=null,te=null,j=null,ce=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,pe=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=pe>=1):K.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=pe>=2);let me=null,ve={},we=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Ve=new ut().fromArray(we),$e=new ut().fromArray(ze);function Ye(w,Y,L,J){let ae=new Uint8Array(4),ie=i.createTexture();i.bindTexture(w,ie),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<L;_e++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(Y+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ie}let Q={};Q[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),he(i.DEPTH_TEST),o.setFunc(oi),B(!1),T(Ro),he(i.CULL_FACE),nt(In);function he(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function Te(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function Le(w,Y){return u[w]!==Y?(i.bindFramebuffer(w,Y),u[w]=Y,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Y),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Ae(w,Y){let L=p,J=!1;if(w){L=f.get(Y),L===void 0&&(L=[],f.set(Y,L));let ae=w.textures;if(L.length!==ae.length||L[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,_e=ae.length;ie<_e;ie++)L[ie]=i.COLOR_ATTACHMENT0+ie;L.length=ae.length,J=!0}}else L[0]!==i.BACK&&(L[0]=i.BACK,J=!0);J&&i.drawBuffers(L)}function He(w){return x!==w?(i.useProgram(w),x=w,!0):!1}let at={[Xn]:i.FUNC_ADD,[kc]:i.FUNC_SUBTRACT,[Vc]:i.FUNC_REVERSE_SUBTRACT};at[Hc]=i.MIN,at[Gc]=i.MAX;let P={[Wc]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[jc]:i.SRC_ALPHA_SATURATE,[Jc]:i.DST_COLOR,[Yc]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[br]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Zc]:i.ONE_MINUS_DST_ALPHA,[Qc]:i.CONSTANT_COLOR,[el]:i.ONE_MINUS_CONSTANT_COLOR,[tl]:i.CONSTANT_ALPHA,[nl]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(w,Y,L,J,ae,ie,_e,Ne,Ke,Qe){if(w===In){M===!0&&(Te(i.BLEND),M=!1);return}if(M===!1&&(he(i.BLEND),M=!0),w!==zc){if(w!==m||Qe!==y){if((d!==Xn||E!==Xn)&&(i.blendEquation(i.FUNC_ADD),d=Xn,E=Xn),Qe)switch(w){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Do:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}D=null,A=null,F=null,I=null,z.set(0,0,0),H=0,m=w,y=Qe}return}ae=ae||Y,ie=ie||L,_e=_e||J,(Y!==d||ae!==E)&&(i.blendEquationSeparate(at[Y],at[ae]),d=Y,E=ae),(L!==D||J!==A||ie!==F||_e!==I)&&(i.blendFuncSeparate(P[L],P[J],P[ie],P[_e]),D=L,A=J,F=ie,I=_e),(Ne.equals(z)===!1||Ke!==H)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Ke),z.copy(Ne),H=Ke),m=w,y=!1}function O(w,Y){w.side===dn?Te(i.CULL_FACE):he(i.CULL_FACE);let L=w.side===It;Y&&(L=!L),B(L),w.blending===ai&&w.transparent===!1?nt(In):nt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),o.setFunc(w.depthFunc),o.setTest(w.depthTest),o.setMask(w.depthWrite),r.setMask(w.colorWrite);let J=w.stencilWrite;c.setTest(J),J&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Z(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function B(w){v!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),v=w)}function T(w){w!==Oc?(he(i.CULL_FACE),w!==k&&(w===Ro?i.cullFace(i.BACK):w===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),k=w}function N(w){w!==q&&(se&&i.lineWidth(w),q=w)}function Z(w,Y,L){w?(he(i.POLYGON_OFFSET_FILL),(te!==Y||j!==L)&&(i.polygonOffset(Y,L),te=Y,j=L)):Te(i.POLYGON_OFFSET_FILL)}function V(w){w?he(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function le(w){w===void 0&&(w=i.TEXTURE0+ce-1),me!==w&&(i.activeTexture(w),me=w)}function Se(w,Y,L){L===void 0&&(me===null?L=i.TEXTURE0+ce-1:L=me);let J=ve[L];J===void 0&&(J={type:void 0,texture:void 0},ve[L]=J),(J.type!==w||J.texture!==Y)&&(me!==L&&(i.activeTexture(L),me=L),i.bindTexture(w,Y||Q[w]),J.type=w,J.texture=Y)}function S(){let w=ve[me];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function R(){try{i.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function C(){try{i.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(){try{i.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{i.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{i.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{i.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(w){Ve.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Ve.copy(w))}function De(w){$e.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),$e.copy(w))}function Ie(w,Y){let L=a.get(Y);L===void 0&&(L=new WeakMap,a.set(Y,L));let J=L.get(w);J===void 0&&(J=i.getUniformBlockIndex(Y,w.name),L.set(w,J))}function b(w,Y){let J=a.get(Y).get(w);l.get(Y)!==J&&(i.uniformBlockBinding(Y,J,w.__bindingPointIndex),l.set(Y,J))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ve={},u={},f=new WeakMap,p=[],x=null,M=!1,m=null,d=null,D=null,A=null,E=null,F=null,I=null,z=new Xe(0,0,0),H=0,y=!1,v=null,k=null,q=null,te=null,j=null,Ve.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:he,disable:Te,bindFramebuffer:Le,drawBuffers:Ae,useProgram:He,setBlending:nt,setMaterial:O,setFlipSided:B,setCullFace:T,setLineWidth:N,setPolygonOffset:Z,setScissorTest:V,activeTexture:le,bindTexture:Se,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:be,texImage3D:de,updateUBOMapping:Ie,uniformBlockBinding:b,texStorage2D:ue,texStorage3D:xe,texSubImage2D:$,texSubImage3D:R,compressedTexSubImage2D:C,compressedTexSubImage3D:oe,scissor:Me,viewport:De,reset:re}}function lm(i,e,t,n,s,r,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new We,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,g){return p?new OffscreenCanvas(S,g):Es("canvas")}function M(S,g,U){let $=1,R=Se(S);if((R.width>U||R.height>U)&&($=U/Math.max(R.width,R.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let C=Math.floor($*R.width),oe=Math.floor($*R.height);u===void 0&&(u=x(C,oe));let ue=g?x(C,oe):u;return ue.width=C,ue.height=oe,ue.getContext("2d").drawImage(S,0,0,C,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+C+"x"+oe+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){i.generateMipmap(S)}function D(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(S,g,U,$,R=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let C=g;if(g===i.RED&&(U===i.FLOAT&&(C=i.R32F),U===i.HALF_FLOAT&&(C=i.R16F),U===i.UNSIGNED_BYTE&&(C=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(C=i.R8UI),U===i.UNSIGNED_SHORT&&(C=i.R16UI),U===i.UNSIGNED_INT&&(C=i.R32UI),U===i.BYTE&&(C=i.R8I),U===i.SHORT&&(C=i.R16I),U===i.INT&&(C=i.R32I)),g===i.RG&&(U===i.FLOAT&&(C=i.RG32F),U===i.HALF_FLOAT&&(C=i.RG16F),U===i.UNSIGNED_BYTE&&(C=i.RG8)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(C=i.RG8UI),U===i.UNSIGNED_SHORT&&(C=i.RG16UI),U===i.UNSIGNED_INT&&(C=i.RG32UI),U===i.BYTE&&(C=i.RG8I),U===i.SHORT&&(C=i.RG16I),U===i.INT&&(C=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(C=i.RGB8UI),U===i.UNSIGNED_SHORT&&(C=i.RGB16UI),U===i.UNSIGNED_INT&&(C=i.RGB32UI),U===i.BYTE&&(C=i.RGB8I),U===i.SHORT&&(C=i.RGB16I),U===i.INT&&(C=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),U===i.UNSIGNED_INT&&(C=i.RGBA32UI),U===i.BYTE&&(C=i.RGBA8I),U===i.SHORT&&(C=i.RGBA16I),U===i.INT&&(C=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),g===i.RGBA){let oe=R?Ss:je.getTransfer($);U===i.FLOAT&&(C=i.RGBA32F),U===i.HALF_FLOAT&&(C=i.RGBA16F),U===i.UNSIGNED_BYTE&&(C=oe===tt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return(C===i.R16F||C===i.R32F||C===i.RG16F||C===i.RG32F||C===i.RGBA16F||C===i.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function E(S,g){let U;return S?g===null||g===Kn||g===ns?U=i.DEPTH24_STENCIL8:g===fn?U=i.DEPTH32F_STENCIL8:g===es&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Kn||g===ns?U=i.DEPTH_COMPONENT24:g===fn?U=i.DEPTH_COMPONENT32F:g===es&&(U=i.DEPTH_COMPONENT16),U}function F(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==qt&&S.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function I(S){let g=S.target;g.removeEventListener("dispose",I),H(g),g.isVideoTexture&&h.delete(g)}function z(S){let g=S.target;g.removeEventListener("dispose",z),v(g)}function H(S){let g=n.get(S);if(g.__webglInit===void 0)return;let U=S.source,$=f.get(U);if($){let R=$[g.__cacheKey];R.usedTimes--,R.usedTimes===0&&y(S),Object.keys($).length===0&&f.delete(U)}n.remove(S)}function y(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let U=S.source,$=f.get(U);delete $[g.__cacheKey],o.memory.textures--}function v(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let R=0;R<g.__webglFramebuffer[$].length;R++)i.deleteFramebuffer(g.__webglFramebuffer[$][R]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=S.textures;for(let $=0,R=U.length;$<R;$++){let C=n.get(U[$]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),o.memory.textures--),n.remove(U[$])}n.remove(S)}let k=0;function q(){k=0}function te(){let S=k;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),k+=1,S}function j(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function ce(S,g){let U=n.get(S);if(S.isVideoTexture&&V(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(U,S,g);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function se(S,g){let U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Q(U,S,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function pe(S,g){let U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Q(U,S,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function K(S,g){let U=n.get(S);if(S.version>0&&U.__version!==S.version){he(U,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let me={[Er]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},ve={[qt]:i.NEAREST,[ul]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},we={[ml]:i.NEVER,[Ml]:i.ALWAYS,[gl]:i.LESS,[Xo]:i.LEQUAL,[xl]:i.EQUAL,[yl]:i.GEQUAL,[_l]:i.GREATER,[vl]:i.NOTEQUAL};function ze(S,g){if(g.type===fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===sa||g.magFilter===Gs||g.magFilter===Jn||g.minFilter===en||g.minFilter===sa||g.minFilter===Gs||g.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,me[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,me[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,me[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ve[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===qt||g.minFilter!==Gs&&g.minFilter!==Jn||g.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ve(S,g){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",I));let $=g.source,R=f.get($);R===void 0&&(R={},f.set($,R));let C=j(g);if(C!==S.__cacheKey){R[C]===void 0&&(R[C]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),R[C].usedTimes++;let oe=R[S.__cacheKey];oe!==void 0&&(R[S.__cacheKey].usedTimes--,oe.usedTimes===0&&y(g)),S.__cacheKey=C,S.__webglTexture=R[C].texture}return U}function $e(S,g,U){return Math.floor(Math.floor(S/U)/g)}function Ye(S,g,U,$){let C=S.updateRanges;if(C.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,$,g.data);else{C.sort((de,Me)=>de.start-Me.start);let oe=0;for(let de=1;de<C.length;de++){let Me=C[oe],De=C[de],Ie=Me.start+Me.count,b=$e(De.start,g.width,4),re=$e(Me.start,g.width,4);De.start<=Ie+1&&b===re&&$e(De.start+De.count-1,g.width,4)===b?Me.count=Math.max(Me.count,De.start+De.count-Me.start):(++oe,C[oe]=De)}C.length=oe+1;let ue=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let de=0,Me=C.length;de<Me;de++){let De=C[de],Ie=Math.floor(De.start/4),b=Math.ceil(De.count/4),re=Ie%g.width,w=Math.floor(Ie/g.width),Y=b,L=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,re),i.pixelStorei(i.UNPACK_SKIP_ROWS,w),t.texSubImage2D(i.TEXTURE_2D,0,re,w,Y,L,U,$,g.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function Q(S,g,U){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);let R=Ve(S,g),C=g.source;t.bindTexture($,S.__webglTexture,i.TEXTURE0+U);let oe=n.get(C);if(C.version!==oe.__version||R===!0){t.activeTexture(i.TEXTURE0+U);let ue=je.getPrimaries(je.workingColorSpace),xe=g.colorSpace===Ln?null:je.getPrimaries(g.colorSpace),be=g.colorSpace===Ln||ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let de=M(g.image,!1,s.maxTextureSize);de=le(g,de);let Me=r.convert(g.format,g.colorSpace),De=r.convert(g.type),Ie=A(g.internalFormat,Me,De,g.colorSpace,g.isVideoTexture);ze($,g);let b,re=g.mipmaps,w=g.isVideoTexture!==!0,Y=oe.__version===void 0||R===!0,L=C.dataReady,J=F(g,de);if(g.isDepthTexture)Ie=E(g.format===is,g.type),Y&&(w?t.texStorage2D(i.TEXTURE_2D,1,Ie,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ie,de.width,de.height,0,Me,De,null));else if(g.isDataTexture)if(re.length>0){w&&Y&&t.texStorage2D(i.TEXTURE_2D,J,Ie,re[0].width,re[0].height);for(let ae=0,ie=re.length;ae<ie;ae++)b=re[ae],w?L&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,b.width,b.height,Me,De,b.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,b.width,b.height,0,Me,De,b.data);g.generateMipmaps=!1}else w?(Y&&t.texStorage2D(i.TEXTURE_2D,J,Ie,de.width,de.height),L&&Ye(g,de,Me,De)):t.texImage2D(i.TEXTURE_2D,0,Ie,de.width,de.height,0,Me,De,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){w&&Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,Ie,re[0].width,re[0].height,de.depth);for(let ae=0,ie=re.length;ae<ie;ae++)if(b=re[ae],g.format!==Yt)if(Me!==null)if(w){if(L)if(g.layerUpdates.size>0){let _e=Ko(b.width,b.height,g.format,g.type);for(let Ne of g.layerUpdates){let Ke=b.data.subarray(Ne*_e/b.data.BYTES_PER_ELEMENT,(Ne+1)*_e/b.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ne,b.width,b.height,1,Me,Ke)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,b.width,b.height,de.depth,Me,b.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,b.width,b.height,de.depth,0,b.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,b.width,b.height,de.depth,Me,De,b.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,b.width,b.height,de.depth,0,Me,De,b.data)}else{w&&Y&&t.texStorage2D(i.TEXTURE_2D,J,Ie,re[0].width,re[0].height);for(let ae=0,ie=re.length;ae<ie;ae++)b=re[ae],g.format!==Yt?Me!==null?w?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,b.width,b.height,Me,b.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ie,b.width,b.height,0,b.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?L&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,b.width,b.height,Me,De,b.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,b.width,b.height,0,Me,De,b.data)}else if(g.isDataArrayTexture)if(w){if(Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,Ie,de.width,de.height,de.depth),L)if(g.layerUpdates.size>0){let ae=Ko(de.width,de.height,g.format,g.type);for(let ie of g.layerUpdates){let _e=de.data.subarray(ie*ae/de.data.BYTES_PER_ELEMENT,(ie+1)*ae/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,de.width,de.height,1,Me,De,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,De,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,Me,De,de.data);else if(g.isData3DTexture)w?(Y&&t.texStorage3D(i.TEXTURE_3D,J,Ie,de.width,de.height,de.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,De,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,Me,De,de.data);else if(g.isFramebufferTexture){if(Y)if(w)t.texStorage2D(i.TEXTURE_2D,J,Ie,de.width,de.height);else{let ae=de.width,ie=de.height;for(let _e=0;_e<J;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ie,ae,ie,0,Me,De,null),ae>>=1,ie>>=1}}else if(re.length>0){if(w&&Y){let ae=Se(re[0]);t.texStorage2D(i.TEXTURE_2D,J,Ie,ae.width,ae.height)}for(let ae=0,ie=re.length;ae<ie;ae++)b=re[ae],w?L&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me,De,b):t.texImage2D(i.TEXTURE_2D,ae,Ie,Me,De,b);g.generateMipmaps=!1}else if(w){if(Y){let ae=Se(de);t.texStorage2D(i.TEXTURE_2D,J,Ie,ae.width,ae.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,De,de)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Me,De,de);m(g)&&d($),oe.__version=C.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function he(S,g,U){if(g.image.length!==6)return;let $=Ve(S,g),R=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+U);let C=n.get(R);if(R.version!==C.__version||$===!0){t.activeTexture(i.TEXTURE0+U);let oe=je.getPrimaries(je.workingColorSpace),ue=g.colorSpace===Ln?null:je.getPrimaries(g.colorSpace),xe=g.colorSpace===Ln||oe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let be=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!be&&!de?Me[ie]=M(g.image[ie],!0,s.maxCubemapSize):Me[ie]=de?g.image[ie].image:g.image[ie],Me[ie]=le(g,Me[ie]);let De=Me[0],Ie=r.convert(g.format,g.colorSpace),b=r.convert(g.type),re=A(g.internalFormat,Ie,b,g.colorSpace),w=g.isVideoTexture!==!0,Y=C.__version===void 0||$===!0,L=R.dataReady,J=F(g,De);ze(i.TEXTURE_CUBE_MAP,g);let ae;if(be){w&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,J,re,De.width,De.height);for(let ie=0;ie<6;ie++){ae=Me[ie].mipmaps;for(let _e=0;_e<ae.length;_e++){let Ne=ae[_e];g.format!==Yt?Ie!==null?w?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,Ne.width,Ne.height,Ie,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,re,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,Ne.width,Ne.height,Ie,b,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,re,Ne.width,Ne.height,0,Ie,b,Ne.data)}}}else{if(ae=g.mipmaps,w&&Y){ae.length>0&&J++;let ie=Se(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,J,re,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(de){w?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,Ie,b,Me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,Me[ie].width,Me[ie].height,0,Ie,b,Me[ie].data);for(let _e=0;_e<ae.length;_e++){let Ke=ae[_e].image[ie].image;w?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Ke.width,Ke.height,Ie,b,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,re,Ke.width,Ke.height,0,Ie,b,Ke.data)}}else{w?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,b,Me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,Ie,b,Me[ie]);for(let _e=0;_e<ae.length;_e++){let Ne=ae[_e];w?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Ie,b,Ne.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,re,Ie,b,Ne.image[ie])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),C.__version=R.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Te(S,g,U,$,R,C){let oe=r.convert(U.format,U.colorSpace),ue=r.convert(U.type),xe=A(U.internalFormat,oe,ue,U.colorSpace),be=n.get(g),de=n.get(U);if(de.__renderTarget=g,!be.__hasExternalTextures){let Me=Math.max(1,g.width>>C),De=Math.max(1,g.height>>C);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?t.texImage3D(R,C,xe,Me,De,g.depth,0,oe,ue,null):t.texImage2D(R,C,xe,Me,De,0,oe,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Z(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,R,de.__webglTexture,0,N(g)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,R,de.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(S,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let $=g.depthTexture,R=$&&$.isDepthTexture?$.type:null,C=E(g.stencilBuffer,R),oe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=N(g);Z(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,C,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,C,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,C,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,S)}else{let $=g.textures;for(let R=0;R<$.length;R++){let C=$[R],oe=r.convert(C.format,C.colorSpace),ue=r.convert(C.type),xe=A(C.internalFormat,oe,ue,C.colorSpace),be=N(g);U&&Z(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,xe,g.width,g.height):Z(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,xe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,xe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ce(g.depthTexture,0);let R=$.__webglTexture,C=N(g);if(g.depthTexture.format===Vi)Z(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0);else if(g.depthTexture.format===is)Z(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function He(S){let g=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){let R=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",R)};$.addEventListener("dispose",R),g.__depthDisposeCallback=R}g.__boundDepthTexture=$}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let $=S.texture.mipmaps;$&&$.length>0?Ae(g.__webglFramebuffer[0],S):Ae(g.__webglFramebuffer,S)}else if(U){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),Le(g.__webglDepthbuffer[$],S,!1);else{let R=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,C)}}else{let $=S.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Le(g.__webglDepthbuffer,S,!1);else{let R=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(S,g,U){let $=n.get(S);g!==void 0&&Te($.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&He(S)}function P(S){let g=S.texture,U=n.get(S),$=n.get(g);S.addEventListener("dispose",z);let R=S.textures,C=S.isWebGLCubeRenderTarget===!0,oe=R.length>1;if(oe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),C){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let xe=0;xe<g.mipmaps.length;xe++)U.__webglFramebuffer[ue][xe]=i.createFramebuffer()}else U.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)U.__webglFramebuffer[ue]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ue=0,xe=R.length;ue<xe;ue++){let be=n.get(R[ue]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Z(S)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<R.length;ue++){let xe=R[ue];U.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);let be=r.convert(xe.format,xe.colorSpace),de=r.convert(xe.type),Me=A(xe.internalFormat,be,de,xe.colorSpace,S.isXRRenderTarget===!0),De=N(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Me,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Te(U.__webglFramebuffer[ue][xe],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else Te(U.__webglFramebuffer[ue],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ue=0,xe=R.length;ue<xe;ue++){let be=R[ue],de=n.get(be),Me=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Me=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,de.__webglTexture),ze(Me,be),Te(U.__webglFramebuffer,S,be,i.COLOR_ATTACHMENT0+ue,Me,0),m(be)&&d(Me)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ue=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,$.__webglTexture),ze(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Te(U.__webglFramebuffer[xe],S,g,i.COLOR_ATTACHMENT0,ue,xe);else Te(U.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,ue,0);m(g)&&d(ue),t.unbindTexture()}S.depthBuffer&&He(S)}function nt(S){let g=S.textures;for(let U=0,$=g.length;U<$;U++){let R=g[U];if(m(R)){let C=D(S),oe=n.get(R).__webglTexture;t.bindTexture(C,oe),d(C),t.unbindTexture()}}}let O=[],B=[];function T(S){if(S.samples>0){if(Z(S)===!1){let g=S.textures,U=S.width,$=S.height,R=i.COLOR_BUFFER_BIT,C=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(S),ue=g.length>1;if(ue)for(let be=0;be<g.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let xe=S.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let be=0;be<g.length;be++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[be]);let de=n.get(g[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,U,$,0,0,U,$,R,i.NEAREST),l===!0&&(O.length=0,B.length=0,O.push(i.COLOR_ATTACHMENT0+be),S.depthBuffer&&S.resolveDepthBuffer===!1&&(O.push(C),B.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<g.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,oe.__webglColorRenderbuffer[be]);let de=n.get(g[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function N(S){return Math.min(s.maxSamples,S.samples)}function Z(S){let g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function V(S){let g=o.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function le(S,g){let U=S.colorSpace,$=S.format,R=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==ci&&U!==Ln&&(je.getTransfer(U)===tt?($!==Yt||R!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function Se(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(a.width=S.naturalWidth||S.width,a.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(a.width=S.displayWidth,a.height=S.displayHeight):(a.width=S.width,a.height=S.height),a}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.setTexture2D=ce,this.setTexture2DArray=se,this.setTexture3D=pe,this.setTextureCube=K,this.rebindTextures=at,this.setupRenderTarget=P,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Z}function hm(i,e){function t(n,s=Ln){let r,o=je.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fo)return i.BYTE;if(n===Oo)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Vo)return i.RGB;if(n===Yt)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===Go)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===$s)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===va||n===ya||n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===Aa||n===wa||n===Ca||n===Ra||n===Ia||n===Pa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Da||n===Ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Us(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:um,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends wn{constructor(e,t){super();let n=this,s=null,r=1,o=null,c="local-floor",l=1,a=null,h=null,u=null,f=null,p=null,x=null,M=typeof XRWebGLBinding<"u",m=new hc,d={},D=t.getContextAttributes(),A=null,E=null,F=[],I=[],z=new We,H=null,y=new Mt;y.viewport=new ut;let v=new Mt;v.viewport=new ut;let k=[y,v],q=new $r,te=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=F[Q];return he===void 0&&(he=new Xi,F[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=F[Q];return he===void 0&&(he=new Xi,F[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=F[Q];return he===void 0&&(he=new Xi,F[Q]=he),he.getHandSpace()};function ce(Q){let he=I.indexOf(Q.inputSource);if(he===-1)return;let Te=F[he];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,a||o),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function se(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",pe);for(let Q=0;Q<F.length;Q++){let he=I[Q];he!==null&&(I[Q]=null,F[Q].disconnect(he))}te=null,j=null,m.reset();for(let Q in d)delete d[Q];e.setRenderTarget(A),p=null,f=null,u=null,s=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(Q){a=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",se),s.addEventListener("inputsourceschange",pe),D.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(z),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Le=null,Ae=null;D.depth&&(Ae=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=D.stencil?is:Vi,Le=D.stencil?ns:Kn);let He={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new hn(f.textureWidth,f.textureHeight,{format:Yt,type:sn,depthTexture:new Ds(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new hn(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),a=null,o=await s.requestReferenceSpace(c),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(Q){for(let he=0;he<Q.removed.length;he++){let Te=Q.removed[he],Le=I.indexOf(Te);Le>=0&&(I[Le]=null,F[Le].disconnect(Te))}for(let he=0;he<Q.added.length;he++){let Te=Q.added[he],Le=I.indexOf(Te);if(Le===-1){for(let He=0;He<F.length;He++)if(He>=I.length){I.push(Te),Le=He;break}else if(I[He]===null){I[He]=Te,Le=He;break}if(Le===-1)break}let Ae=F[Le];Ae&&Ae.connect(Te)}}let K=new W,me=new W;function ve(Q,he,Te){K.setFromMatrixPosition(he.matrixWorld),me.setFromMatrixPosition(Te.matrixWorld);let Le=K.distanceTo(me),Ae=he.projectionMatrix.elements,He=Te.projectionMatrix.elements,at=Ae[14]/(Ae[10]-1),P=Ae[14]/(Ae[10]+1),nt=(Ae[9]+1)/Ae[5],O=(Ae[9]-1)/Ae[5],B=(Ae[8]-1)/Ae[0],T=(He[8]+1)/He[0],N=at*B,Z=at*T,V=Le/(-B+T),le=V*-B;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(le),Q.translateZ(V),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let Se=at+V,S=P+V,g=N-le,U=Z+(Le-le),$=nt*P/S*Se,R=O*P/S*Se;Q.projectionMatrix.makePerspective(g,U,$,R,Se,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function we(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let he=Q.near,Te=Q.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),q.near=v.near=y.near=he,q.far=v.far=y.far=Te,(te!==q.near||j!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),te=q.near,j=q.far),q.layers.mask=Q.layers.mask|6,y.layers.mask=q.layers.mask&3,v.layers.mask=q.layers.mask&5;let Le=Q.parent,Ae=q.cameras;we(q,Le);for(let He=0;He<Ae.length;He++)we(Ae[He],Le);Ae.length===2?ve(q,y,v):q.projectionMatrix.copy(y.projectionMatrix),ze(Q,q,Le)};function ze(Q,he,Te){Te===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Cr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(Q){return d[Q]};let Ve=null;function $e(Q,he){if(h=he.getViewerPose(a||o),x=he,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Le=!1;Te.length!==q.cameras.length&&(q.cameras.length=0,Le=!0);for(let P=0;P<Te.length;P++){let nt=Te[P],O=null;if(p!==null)O=p.getViewport(nt);else{let T=u.getViewSubImage(f,nt);O=T.viewport,P===0&&(e.setRenderTargetTextures(E,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(E))}let B=k[P];B===void 0&&(B=new Mt,B.layers.enable(P),B.viewport=new ut,k[P]=B),B.matrix.fromArray(nt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(nt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(O.x,O.y,O.width,O.height),P===0&&(q.matrix.copy(B.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Le===!0&&q.cameras.push(B)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let P=u.getDepthInformation(Te[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Ae&&Ae.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<Te.length;P++){let nt=Te[P].camera;if(nt){let O=d[nt];O||(O=new Us,d[nt]=O);let B=u.getCameraImage(nt);O.sourceTexture=B}}}}for(let Te=0;Te<F.length;Te++){let Le=I[Te],Ae=F[Te];Le!==null&&Ae!==void 0&&Ae.update(Le,he,a||o)}Ve&&Ve(Q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}let Ye=new Kl;Ye.setAnimationLoop($e),this.setAnimationLoop=function(Q){Ve=Q},this.dispose=function(){}}},gi=new tn,fm=new ft;function pm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Yo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,D,A,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&c(m,d)):d.isPointsMaterial?l(m,d,D,A):d.isSpriteMaterial?a(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===It&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===It&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let D=e.get(d),A=D.envMap,E=D.envMapRotation;A&&(m.envMap.value=A,gi.copy(E),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(gi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function c(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,D,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*D,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,D){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=D.texture,m.transmissionSamplerSize.value.set(D.width,D.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let D=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(D.matrixWorld),m.nearDistance.value=D.shadow.camera.near,m.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,e,t,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,A){let E=A.program;n.uniformBlockBinding(D,E)}function a(D,A){let E=s[D.id];E===void 0&&(x(D),E=h(D),s[D.id]=E,D.addEventListener("dispose",m));let F=A.program;n.updateUBOMapping(D,F);let I=e.render.frame;r[D.id]!==I&&(f(D),r[D.id]=I)}function h(D){let A=u();D.__bindingPointIndex=A;let E=i.createBuffer(),F=D.__size,I=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function u(){for(let D=0;D<c;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(D){let A=s[D.id],E=D.uniforms,F=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let I=0,z=E.length;I<z;I++){let H=Array.isArray(E[I])?E[I]:[E[I]];for(let y=0,v=H.length;y<v;y++){let k=H[y];if(p(k,I,y,F)===!0){let q=k.__offset,te=Array.isArray(k.value)?k.value:[k.value],j=0;for(let ce=0;ce<te.length;ce++){let se=te[ce],pe=M(se);typeof se=="number"||typeof se=="boolean"?(k.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,q+j,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=0,k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=0,k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=0):(se.toArray(k.__data,j),j+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(D,A,E,F){let I=D.value,z=A+"_"+E;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{let H=F[z];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return F[z]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function x(D){let A=D.uniforms,E=0,F=16;for(let z=0,H=A.length;z<H;z++){let y=Array.isArray(A[z])?A[z]:[A[z]];for(let v=0,k=y.length;v<k;v++){let q=y[v],te=Array.isArray(q.value)?q.value:[q.value];for(let j=0,ce=te.length;j<ce;j++){let se=te[j],pe=M(se),K=E%F,me=K%pe.boundary,ve=K+me;E+=me,ve!==0&&F-ve<pe.storage&&(E+=F-ve),q.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=pe.storage}}}let I=E%F;return I>0&&(E+=F-I),D.__size=E,D.__cache={},this}function M(D){let A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function m(D){let A=D.target;A.removeEventListener("dispose",m);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let D in s)i.deleteBuffer(s[D]);o=[],s={},r={}}return{bind:l,update:a,dispose:d}}var Zs=class{constructor(e={}){let{canvas:t=Sl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),M=new Int32Array(4),m=null,d=null,D=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,F=!1;this._outputColorSpace=gt;let I=0,z=0,H=null,y=-1,v=null,k=new ut,q=new ut,te=null,j=new Xe(0),ce=0,se=t.width,pe=t.height,K=1,me=null,ve=null,we=new ut(0,0,se,pe),ze=new ut(0,0,se,pe),Ve=!1,$e=new Yi,Ye=!1,Q=!1,he=new ft,Te=new W,Le=new ut,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function at(){return H===null?K:1}let P=n;function nt(_,G){return t.getContext(_,G)}try{let _={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ae,!1),P===null){let G="webgl2";if(P=nt(G,_),P===null)throw nt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let O,B,T,N,Z,V,le,Se,S,g,U,$,R,C,oe,ue,xe,be,de,Me,De,Ie,b,re;function w(){O=new Df(P),O.init(),Ie=new hm(P,O),B=new Af(P,O,e,Ie),T=new cm(P,O),B.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),N=new Ff(P),Z=new Zp,V=new lm(P,O,T,Z,B,Ie,N),le=new Cf(E),Se=new Lf(E),S=new Vh(P),b=new Ef(P,S),g=new Uf(P,S,N,b),U=new Bf(P,g,S,N),de=new Of(P,B,V),ue=new wf(Z),$=new Yp(E,le,Se,O,B,b,ue),R=new pm(E,Z),C=new Kp,oe=new im(O),be=new bf(E,le,Se,T,U,p,l),xe=new am(E,U,B),re=new mm(P,N,B,T),Me=new Tf(P,O,N),De=new Nf(P,O,N),N.programs=$.programs,E.capabilities=B,E.extensions=O,E.properties=Z,E.renderLists=C,E.shadowMap=xe,E.state=T,E.info=N}w();let Y=new uc(E,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=O.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=O.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(_){_!==void 0&&(K=_,this.setSize(se,pe,!1))},this.getSize=function(_){return _.set(se,pe)},this.setSize=function(_,G,ee=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=_,pe=G,t.width=Math.floor(_*K),t.height=Math.floor(G*K),ee===!0&&(t.style.width=_+"px",t.style.height=G+"px"),this.setViewport(0,0,_,G)},this.getDrawingBufferSize=function(_){return _.set(se*K,pe*K).floor()},this.setDrawingBufferSize=function(_,G,ee){se=_,pe=G,K=ee,t.width=Math.floor(_*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,_,G)},this.getCurrentViewport=function(_){return _.copy(k)},this.getViewport=function(_){return _.copy(we)},this.setViewport=function(_,G,ee,ne){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,G,ee,ne),T.viewport(k.copy(we).multiplyScalar(K).round())},this.getScissor=function(_){return _.copy(ze)},this.setScissor=function(_,G,ee,ne){_.isVector4?ze.set(_.x,_.y,_.z,_.w):ze.set(_,G,ee,ne),T.scissor(q.copy(ze).multiplyScalar(K).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(_){T.setScissorTest(Ve=_)},this.setOpaqueSort=function(_){me=_},this.setTransparentSort=function(_){ve=_},this.getClearColor=function(_){return _.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(_=!0,G=!0,ee=!0){let ne=0;if(_){let X=!1;if(H!==null){let fe=H.texture.format;X=fe===ha||fe===la||fe===ca}if(X){let fe=H.texture.type,Ee=fe===sn||fe===Kn||fe===es||fe===ns||fe===aa||fe===oa,Re=be.getClearColor(),Ce=be.getClearAlpha(),Oe=Re.r,Be=Re.g,Ue=Re.b;Ee?(x[0]=Oe,x[1]=Be,x[2]=Ue,x[3]=Ce,P.clearBufferuiv(P.COLOR,0,x)):(M[0]=Oe,M[1]=Be,M[2]=Ue,M[3]=Ce,P.clearBufferiv(P.COLOR,0,M))}else ne|=P.COLOR_BUFFER_BIT}G&&(ne|=P.DEPTH_BUFFER_BIT),ee&&(ne|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),be.dispose(),C.dispose(),oe.dispose(),Z.dispose(),le.dispose(),Se.dispose(),U.dispose(),b.dispose(),re.dispose(),$.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ut),Y.removeEventListener("sessionend",hs),xn.stop()};function L(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let _=N.autoReset,G=xe.enabled,ee=xe.autoUpdate,ne=xe.needsUpdate,X=xe.type;w(),N.autoReset=_,xe.enabled=G,xe.autoUpdate=ee,xe.needsUpdate=ne,xe.type=X}function ae(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ie(_){let G=_.target;G.removeEventListener("dispose",ie),_e(G)}function _e(_){Ne(_),Z.remove(_)}function Ne(_){let G=Z.get(_).programs;G!==void 0&&(G.forEach(function(ee){$.releaseProgram(ee)}),_.isShaderMaterial&&$.releaseShaderCache(_))}this.renderBufferDirect=function(_,G,ee,ne,X,fe){G===null&&(G=Ae);let Ee=X.isMesh&&X.matrixWorld.determinant()<0,Re=js(_,G,ee,ne,X);T.setMaterial(ne,Ee);let Ce=ee.index,Oe=1;if(ne.wireframe===!0){if(Ce=g.getWireframeAttribute(ee),Ce===void 0)return;Oe=2}let Be=ee.drawRange,Ue=ee.attributes.position,Ze=Be.start*Oe,it=(Be.start+Be.count)*Oe;fe!==null&&(Ze=Math.max(Ze,fe.start*Oe),it=Math.min(it,(fe.start+fe.count)*Oe)),Ce!==null?(Ze=Math.max(Ze,0),it=Math.min(it,Ce.count)):Ue!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,Ue.count));let dt=it-Ze;if(dt<0||dt===1/0)return;b.setup(X,ne,Re,ee,Ce);let ot,rt=Me;if(Ce!==null&&(ot=S.get(Ce),rt=De,rt.setIndex(ot)),X.isMesh)ne.wireframe===!0?(T.setLineWidth(ne.wireframeLinewidth*at()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(X.isLine){let Fe=ne.linewidth;Fe===void 0&&(Fe=1),T.setLineWidth(Fe*at()),X.isLineSegments?rt.setMode(P.LINES):X.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else X.isPoints?rt.setMode(P.POINTS):X.isSprite&&rt.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Fe=X._multiDrawStarts,lt=X._multiDrawCounts,et=X._multiDrawCount,Ft=Ce?S.get(Ce).bytesPerElement:1,bi=Z.get(ne).currentProgram.getUniforms();for(let Ot=0;Ot<et;Ot++)bi.setValue(P,"_gl_DrawID",Ot),rt.render(Fe[Ot]/Ft,lt[Ot])}else if(X.isInstancedMesh)rt.renderInstances(Ze,dt,X.count);else if(ee.isInstancedBufferGeometry){let Fe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,lt=Math.min(ee.instanceCount,Fe);rt.renderInstances(Ze,dt,lt)}else rt.render(Ze,dt)};function Ke(_,G,ee){_.transparent===!0&&_.side===dn&&_.forceSinglePass===!1?(_.side=It,_.needsUpdate=!0,Nt(_,G,ee),_.side=An,_.needsUpdate=!0,Nt(_,G,ee),_.side=dn):Nt(_,G,ee)}this.compile=function(_,G,ee=null){ee===null&&(ee=_),d=oe.get(ee),d.init(G),A.push(d),ee.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),_!==ee&&_.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();let ne=new Set;return _.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let fe=X.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){let Re=fe[Ee];Ke(Re,ee,X),ne.add(Re)}else Ke(fe,ee,X),ne.add(fe)}),d=A.pop(),ne},this.compileAsync=function(_,G,ee=null){let ne=this.compile(_,G,ee);return new Promise(X=>{function fe(){if(ne.forEach(function(Ee){Z.get(Ee).currentProgram.isReady()&&ne.delete(Ee)}),ne.size===0){X(_);return}setTimeout(fe,10)}O.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Qe=null;function Zt(_){Qe&&Qe(_)}function Ut(){xn.stop()}function hs(){xn.start()}let xn=new Kl;xn.setAnimationLoop(Zt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(_){Qe=_,Y.setAnimationLoop(_),_===null?xn.stop():xn.start()},Y.addEventListener("sessionstart",Ut),Y.addEventListener("sessionend",hs),this.render=function(_,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(G),G=Y.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,G,H),d=oe.get(_,A.length),d.init(G),A.push(d),he.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$e.setFromProjectionMatrix(he,Qt,G.reversedDepth),Q=this.localClippingEnabled,Ye=ue.init(this.clippingPlanes,Q),m=C.get(_,D.length),m.init(),D.push(m),Y.enabled===!0&&Y.isPresenting===!0){let fe=E.xr.getDepthSensingMesh();fe!==null&&us(fe,G,-1/0,E.sortObjects)}us(_,G,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(me,ve),He=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,He&&be.addToRenderList(m,_),this.info.render.frame++,Ye===!0&&ue.beginShadows();let ee=d.state.shadowsArray;xe.render(ee,_,G),Ye===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=m.opaque,X=m.transmissive;if(d.setupLights(),G.isArrayCamera){let fe=G.cameras;if(X.length>0)for(let Ee=0,Re=fe.length;Ee<Re;Ee++){let Ce=fe[Ee];Ks(ne,X,_,Ce)}He&&be.render(_);for(let Ee=0,Re=fe.length;Ee<Re;Ee++){let Ce=fe[Ee];Js(m,_,Ce,Ce.viewport)}}else X.length>0&&Ks(ne,X,_,G),He&&be.render(_),Js(m,_,G);H!==null&&z===0&&(V.updateMultisampleRenderTarget(H),V.updateRenderTargetMipmap(H)),_.isScene===!0&&_.onAfterRender(E,_,G),b.resetDefaultState(),y=-1,v=null,A.pop(),A.length>0?(d=A[A.length-1],Ye===!0&&ue.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,D.pop(),D.length>0?m=D[D.length-1]:m=null};function us(_,G,ee,ne){if(_.visible===!1)return;if(_.layers.test(G.layers)){if(_.isGroup)ee=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(G);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$e.intersectsSprite(_)){ne&&Le.setFromMatrixPosition(_.matrixWorld).applyMatrix4(he);let Ee=U.update(_),Re=_.material;Re.visible&&m.push(_,Ee,Re,ee,Le.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$e.intersectsObject(_))){let Ee=U.update(_),Re=_.material;if(ne&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Le.copy(_.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Le.copy(Ee.boundingSphere.center)),Le.applyMatrix4(_.matrixWorld).applyMatrix4(he)),Array.isArray(Re)){let Ce=Ee.groups;for(let Oe=0,Be=Ce.length;Oe<Be;Oe++){let Ue=Ce[Oe],Ze=Re[Ue.materialIndex];Ze&&Ze.visible&&m.push(_,Ee,Ze,ee,Le.z,Ue)}}else Re.visible&&m.push(_,Ee,Re,ee,Le.z,null)}}let fe=_.children;for(let Ee=0,Re=fe.length;Ee<Re;Ee++)us(fe[Ee],G,ee,ne)}function Js(_,G,ee,ne){let X=_.opaque,fe=_.transmissive,Ee=_.transparent;d.setupLightsView(ee),Ye===!0&&ue.setGlobalState(E.clippingPlanes,ee),ne&&T.viewport(k.copy(ne)),X.length>0&&Qn(X,G,ee),fe.length>0&&Qn(fe,G,ee),Ee.length>0&&Qn(Ee,G,ee),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ks(_,G,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ne.id]===void 0&&(d.state.transmissionRenderTarget[ne.id]=new hn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?ts:sn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let fe=d.state.transmissionRenderTarget[ne.id],Ee=ne.viewport||k;fe.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);let Re=E.getRenderTarget(),Ce=E.getActiveCubeFace(),Oe=E.getActiveMipmapLevel();E.setRenderTarget(fe),E.getClearColor(j),ce=E.getClearAlpha(),ce<1&&E.setClearColor(16777215,.5),E.clear(),He&&be.render(ee);let Be=E.toneMapping;E.toneMapping=Pn;let Ue=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),d.setupLightsView(ne),Ye===!0&&ue.setGlobalState(E.clippingPlanes,ne),Qn(_,ee,ne),V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe),O.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let it=0,dt=G.length;it<dt;it++){let ot=G[it],rt=ot.object,Fe=ot.geometry,lt=ot.material,et=ot.group;if(lt.side===dn&&rt.layers.test(ne.layers)){let Ft=lt.side;lt.side=It,lt.needsUpdate=!0,ke(rt,ee,ne,Fe,lt,et),lt.side=Ft,lt.needsUpdate=!0,Ze=!0}}Ze===!0&&(V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe))}E.setRenderTarget(Re,Ce,Oe),E.setClearColor(j,ce),Ue!==void 0&&(ne.viewport=Ue),E.toneMapping=Be}function Qn(_,G,ee){let ne=G.isScene===!0?G.overrideMaterial:null;for(let X=0,fe=_.length;X<fe;X++){let Ee=_[X],Re=Ee.object,Ce=Ee.geometry,Oe=Ee.group,Be=Ee.material;Be.allowOverride===!0&&ne!==null&&(Be=ne),Re.layers.test(ee.layers)&&ke(Re,G,ee,Ce,Be,Oe)}}function ke(_,G,ee,ne,X,fe){_.onBeforeRender(E,G,ee,ne,X,fe),_.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),X.onBeforeRender(E,G,ee,ne,_,fe),X.transparent===!0&&X.side===dn&&X.forceSinglePass===!1?(X.side=It,X.needsUpdate=!0,E.renderBufferDirect(ee,G,ne,X,_,fe),X.side=An,X.needsUpdate=!0,E.renderBufferDirect(ee,G,ne,X,_,fe),X.side=dn):E.renderBufferDirect(ee,G,ne,X,_,fe),_.onAfterRender(E,G,ee,ne,X,fe)}function Nt(_,G,ee){G.isScene!==!0&&(G=Ae);let ne=Z.get(_),X=d.state.lights,fe=d.state.shadowsArray,Ee=X.state.version,Re=$.getParameters(_,X.state,fe,G,ee),Ce=$.getProgramCacheKey(Re),Oe=ne.programs;ne.environment=_.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(_.isMeshStandardMaterial?Se:le).get(_.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&_.envMap===null?G.environmentRotation:_.envMapRotation,Oe===void 0&&(_.addEventListener("dispose",ie),Oe=new Map,ne.programs=Oe);let Be=Oe.get(Ce);if(Be!==void 0){if(ne.currentProgram===Be&&ne.lightsStateVersion===Ee)return ds(_,Re),Be}else Re.uniforms=$.getUniforms(_),_.onBeforeCompile(Re,E),Be=$.acquireProgram(Re,Ce),Oe.set(Ce,Be),ne.uniforms=Re.uniforms;let Ue=ne.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),ds(_,Re),ne.needsLights=Fn(_),ne.lightsStateVersion=Ee,ne.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMap.value=X.state.directionalShadowMap,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotShadowMap.value=X.state.spotShadowMap,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMap.value=X.state.pointShadowMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=Be,ne.uniformsList=null,Be}function on(_){if(_.uniformsList===null){let G=_.currentProgram.getUniforms();_.uniformsList=as.seqWithValue(G.seq,_.uniforms)}return _.uniformsList}function ds(_,G){let ee=Z.get(_);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function js(_,G,ee,ne,X){G.isScene!==!0&&(G=Ae),V.resetTextureUnits();let fe=G.fog,Ee=ne.isMeshStandardMaterial?G.environment:null,Re=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ci,Ce=(ne.isMeshStandardMaterial?Se:le).get(ne.envMap||Ee),Oe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Be=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ue=!!ee.morphAttributes.position,Ze=!!ee.morphAttributes.normal,it=!!ee.morphAttributes.color,dt=Pn;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(dt=E.toneMapping);let ot=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,rt=ot!==void 0?ot.length:0,Fe=Z.get(ne),lt=d.state.lights;if(Ye===!0&&(Q===!0||_!==v)){let wt=_===v&&ne.id===y;ue.setState(ne,_,wt)}let et=!1;ne.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==lt.state.version||Fe.outputColorSpace!==Re||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Ce||ne.fog===!0&&Fe.fog!==fe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ue.numPlanes||Fe.numIntersection!==ue.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==Be||Fe.morphTargets!==Ue||Fe.morphNormals!==Ze||Fe.morphColors!==it||Fe.toneMapping!==dt||Fe.morphTargetsCount!==rt)&&(et=!0):(et=!0,Fe.__version=ne.version);let Ft=Fe.currentProgram;et===!0&&(Ft=Nt(ne,G,X));let bi=!1,Ot=!1,fs=!1,ht=Ft.getUniforms(),Gt=Fe.uniforms;if(T.useProgram(Ft.program)&&(bi=!0,Ot=!0,fs=!0),ne.id!==y&&(y=ne.id,Ot=!0),bi||v!==_){T.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",_.projectionMatrix),ht.setValue(P,"viewMatrix",_.matrixWorldInverse);let Pt=ht.map.cameraPosition;Pt!==void 0&&Pt.setValue(P,Te.setFromMatrixPosition(_.matrixWorld)),B.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ht.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,Ot=!0,fs=!0)}if(X.isSkinnedMesh){ht.setOptional(P,X,"bindMatrix"),ht.setOptional(P,X,"bindMatrixInverse");let wt=X.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ht.setValue(P,"boneTexture",wt.boneTexture,V))}X.isBatchedMesh&&(ht.setOptional(P,X,"batchingTexture"),ht.setValue(P,"batchingTexture",X._matricesTexture,V),ht.setOptional(P,X,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",X._indirectTexture,V),ht.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",X._colorsTexture,V));let Wt=ee.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&de.update(X,ee,Ft),(Ot||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,ht.setValue(P,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Gt.envMap.value=Ce,Gt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(Gt.envMapIntensity.value=G.environmentIntensity),Ot&&(ht.setValue(P,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&Ht(Gt,fs),fe&&ne.fog===!0&&R.refreshFogUniforms(Gt,fe),R.refreshMaterialUniforms(Gt,ne,K,pe,d.state.transmissionRenderTarget[_.id]),as.upload(P,on(Fe),Gt,V)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(as.upload(P,on(Fe),Gt,V),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ht.setValue(P,"center",X.center),ht.setValue(P,"modelViewMatrix",X.modelViewMatrix),ht.setValue(P,"normalMatrix",X.normalMatrix),ht.setValue(P,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let wt=ne.uniformsGroups;for(let Pt=0,Za=wt.length;Pt<Za;Pt++){let ei=wt[Pt];re.update(ei,Ft),re.bind(ei,Ft)}}return Ft}function Ht(_,G){_.ambientLightColor.needsUpdate=G,_.lightProbe.needsUpdate=G,_.directionalLights.needsUpdate=G,_.directionalLightShadows.needsUpdate=G,_.pointLights.needsUpdate=G,_.pointLightShadows.needsUpdate=G,_.spotLights.needsUpdate=G,_.spotLightShadows.needsUpdate=G,_.rectAreaLights.needsUpdate=G,_.hemisphereLights.needsUpdate=G}function Fn(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(_,G,ee){let ne=Z.get(_);ne.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Z.get(_.texture).__webglTexture=G,Z.get(_.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,G){let ee=Z.get(_);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};let Si=P.createFramebuffer();this.setRenderTarget=function(_,G=0,ee=0){H=_,I=G,z=ee;let ne=!0,X=null,fe=!1,Ee=!1;if(_){let Ce=Z.get(_);if(Ce.__useDefaultFramebuffer!==void 0)T.bindFramebuffer(P.FRAMEBUFFER,null),ne=!1;else if(Ce.__webglFramebuffer===void 0)V.setupRenderTarget(_);else if(Ce.__hasExternalTextures)V.rebindTextures(_,Z.get(_.texture).__webglTexture,Z.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ue=_.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&Z.has(Ue)&&(_.width!==Ue.image.width||_.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(_)}}let Oe=_.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);let Be=Z.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Be[G])?X=Be[G][ee]:X=Be[G],fe=!0):_.samples>0&&V.useMultisampledRTT(_)===!1?X=Z.get(_).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[ee]:X=Be,k.copy(_.viewport),q.copy(_.scissor),te=_.scissorTest}else k.copy(we).multiplyScalar(K).floor(),q.copy(ze).multiplyScalar(K).floor(),te=Ve;if(ee!==0&&(X=Si),T.bindFramebuffer(P.FRAMEBUFFER,X)&&ne&&T.drawBuffers(_,X),T.viewport(k),T.scissor(q),T.setScissorTest(te),fe){let Ce=Z.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,ee)}else if(Ee){let Ce=G;for(let Oe=0;Oe<_.textures.length;Oe++){let Be=Z.get(_.textures[Oe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Oe,Be.__webglTexture,ee,Ce)}}else if(_!==null&&ee!==0){let Ce=Z.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,ee)}y=-1},this.readRenderTargetPixels=function(_,G,ee,ne,X,fe,Ee,Re=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){T.bindFramebuffer(P.FRAMEBUFFER,Ce);try{let Oe=_.textures[Re],Be=Oe.format,Ue=Oe.type;if(!B.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=_.width-ne&&ee>=0&&ee<=_.height-X&&(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(G,ee,ne,X,Ie.convert(Be),Ie.convert(Ue),fe))}finally{let Oe=H!==null?Z.get(H).__webglFramebuffer:null;T.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(_,G,ee,ne,X,fe,Ee,Re=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(G>=0&&G<=_.width-ne&&ee>=0&&ee<=_.height-X){T.bindFramebuffer(P.FRAMEBUFFER,Ce);let Oe=_.textures[Re],Be=Oe.format,Ue=Oe.type;if(!B.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(G,ee,ne,X,Ie.convert(Be),Ie.convert(Ue),0);let it=H!==null?Z.get(H).__webglFramebuffer:null;T.bindFramebuffer(P.FRAMEBUFFER,it);let dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bl(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Ze),P.deleteSync(dt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,G=null,ee=0){let ne=Math.pow(2,-ee),X=Math.floor(_.image.width*ne),fe=Math.floor(_.image.height*ne),Ee=G!==null?G.x:0,Re=G!==null?G.y:0;V.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,ee,0,0,Ee,Re,X,fe),T.unbindTexture()};let Qs=P.createFramebuffer(),oh=P.createFramebuffer();this.copyTextureToTexture=function(_,G,ee=null,ne=null,X=0,fe=null){fe===null&&(X!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=X,X=0):fe=0);let Ee,Re,Ce,Oe,Be,Ue,Ze,it,dt,ot=_.isCompressedTexture?_.mipmaps[fe]:_.image;if(ee!==null)Ee=ee.max.x-ee.min.x,Re=ee.max.y-ee.min.y,Ce=ee.isBox3?ee.max.z-ee.min.z:1,Oe=ee.min.x,Be=ee.min.y,Ue=ee.isBox3?ee.min.z:0;else{let Wt=Math.pow(2,-X);Ee=Math.floor(ot.width*Wt),Re=Math.floor(ot.height*Wt),_.isDataArrayTexture?Ce=ot.depth:_.isData3DTexture?Ce=Math.floor(ot.depth*Wt):Ce=1,Oe=0,Be=0,Ue=0}ne!==null?(Ze=ne.x,it=ne.y,dt=ne.z):(Ze=0,it=0,dt=0);let rt=Ie.convert(G.format),Fe=Ie.convert(G.type),lt;G.isData3DTexture?(V.setTexture3D(G,0),lt=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(V.setTexture2DArray(G,0),lt=P.TEXTURE_2D_ARRAY):(V.setTexture2D(G,0),lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);let et=P.getParameter(P.UNPACK_ROW_LENGTH),Ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),bi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ot=P.getParameter(P.UNPACK_SKIP_ROWS),fs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue);let ht=_.isDataArrayTexture||_.isData3DTexture,Gt=G.isDataArrayTexture||G.isData3DTexture;if(_.isDepthTexture){let Wt=Z.get(_),wt=Z.get(G),Pt=Z.get(Wt.__renderTarget),Za=Z.get(wt.__renderTarget);T.bindFramebuffer(P.READ_FRAMEBUFFER,Pt.__webglFramebuffer),T.bindFramebuffer(P.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let ei=0;ei<Ce;ei++)ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Z.get(_).__webglTexture,X,Ue+ei),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,fe,dt+ei)),P.blitFramebuffer(Oe,Be,Ee,Re,Ze,it,Ee,Re,P.DEPTH_BUFFER_BIT,P.NEAREST);T.bindFramebuffer(P.READ_FRAMEBUFFER,null),T.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||_.isRenderTargetTexture||Z.has(_)){let Wt=Z.get(_),wt=Z.get(G);T.bindFramebuffer(P.READ_FRAMEBUFFER,Qs),T.bindFramebuffer(P.DRAW_FRAMEBUFFER,oh);for(let Pt=0;Pt<Ce;Pt++)ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,X,Ue+Pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,X),Gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.__webglTexture,fe,dt+Pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wt.__webglTexture,fe),X!==0?P.blitFramebuffer(Oe,Be,Ee,Re,Ze,it,Ee,Re,P.COLOR_BUFFER_BIT,P.NEAREST):Gt?P.copyTexSubImage3D(lt,fe,Ze,it,dt+Pt,Oe,Be,Ee,Re):P.copyTexSubImage2D(lt,fe,Ze,it,Oe,Be,Ee,Re);T.bindFramebuffer(P.READ_FRAMEBUFFER,null),T.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Gt?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(lt,fe,Ze,it,dt,Ee,Re,Ce,rt,Fe,ot.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(lt,fe,Ze,it,dt,Ee,Re,Ce,rt,ot.data):P.texSubImage3D(lt,fe,Ze,it,dt,Ee,Re,Ce,rt,Fe,ot):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Ze,it,Ee,Re,rt,Fe,ot.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Ze,it,ot.width,ot.height,rt,ot.data):P.texSubImage2D(P.TEXTURE_2D,fe,Ze,it,Ee,Re,rt,Fe,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,et),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,fs),fe===0&&G.generateMipmaps&&P.generateMipmap(lt),T.unbindTexture()},this.initRenderTarget=function(_){Z.get(_).__webglFramebuffer===void 0&&V.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?V.setTextureCube(_,0):_.isData3DTexture?V.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?V.setTexture2DArray(_,0):V.setTexture2D(_,0),T.unbindTexture()},this.resetState=function(){I=0,z=0,H=null,T.reset(),b.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Pe=[{name:"Campos do Sol",short:"Sol",creature:"Pintinho Pipoca",value:80,color:16239189,ground:6072679,path:14665623,sky:11067373,kind:"chick"},{name:"Dunas Douradas",short:"Dunas",creature:"Raposa de Areia",value:140,color:16163924,ground:14262362,path:15978380,sky:16176812,kind:"fox"},{name:"Bosque Encantado",short:"Bosque",creature:"Cervinho Folha",value:230,color:9096067,ground:3767916,path:11380108,sky:10142154,kind:"deer"},{name:"Reino de Gelo",short:"Gelo",creature:"Pingui de Gelo",value:360,color:8509420,ground:13495281,path:9553371,sky:13232891,kind:"penguin"},{name:"Vale Vulc\xE2nico",short:"Vulc\xE3o",creature:"Drag\xE3o Brasa",value:550,color:15890772,ground:5589083,path:7824246,sky:7689058,kind:"dragon"},{name:"Caverna de Cristal",short:"Cristal",creature:"Tartaruga Cristal",value:850,color:11969011,ground:7632040,path:11839441,sky:7634862,kind:"turtle"},{name:"Ilhas C\xF3smicas",short:"Cosmos",creature:"Gato Estelar",value:1300,color:12884981,ground:4146541,path:7960243,sky:2699606,kind:"cat"},{name:"Recife de Coral",short:"Coral",creature:"Axolote P\xE9rola",value:1900,color:16748986,ground:2400186,path:15192996,sky:9560045,kind:"axolotl"},{name:"Vale dos Doces",short:"Doces",creature:"Coelho Caramelo",value:2700,color:16297102,ground:11969500,path:16766653,sky:16240612,kind:"rabbit"},{name:"Floresta de Bambu",short:"Bambu",creature:"Panda Jade",value:3700,color:6865562,ground:3904109,path:12958598,sky:12773588,kind:"panda"},{name:"Cidade das Engrenagens",short:"Rob\xF4s",creature:"Rob\xF4 Fa\xEDsca",value:5e3,color:16761943,ground:4479355,path:8820914,sky:9549791,kind:"robot"},{name:"Templo das Nuvens",short:"Nuvens",creature:"Grifo Aurora",value:6800,color:14070527,ground:10732778,path:16180925,sky:13359866,kind:"griffin"}],vi=600,bt=48,gn={x:-5,z:14},mn={x:5,z:14},Un=Pe.map((i,e)=>({x:e%2?-3.2:3.2,z:-(e*bt+25)})),jn=i=>(7.7+i*1.1)*2,Wa=Pe.flatMap((i,e)=>[{x:-2.3,z:-(e*bt+11),r:.72,h:.65,world:e},{x:2.15,z:-(e*bt+37),r:.78,h:.72,world:e},...e>=7?Array.from({length:3},(t,n)=>({x:[0,-3.1,3.1][n],z:-(e*bt+17+n*8),r:.65,h:.8+n*.08,world:e})):[]]),yi={boots:{name:"T\xEAnis velozes",icon:"\u{1F45F}",desc:"+0,8 de velocidade por n\xEDvel.",max:10,base:80},energy:{name:"Mais f\xF4lego",icon:"\u{1F4A8}",desc:"+30 de energia para disparar.",max:5,base:90},pen:{name:"Curral maior",icon:"\u{1F3E1}",desc:"+2 espa\xE7os para ovos e criaturas.",max:10,base:150},incubator:{name:"Ninho aquecido",icon:"\u{1F95A}",desc:"O ovo choca 1,5 s mais r\xE1pido.",max:3,base:100},gloves:{name:"Luvas de transporte",icon:"\u{1F9E4}",desc:"Corra 4% mais r\xE1pido carregando o ovo, por n\xEDvel.",max:4,base:180},springs:{name:"Molas de salto",icon:"\u{1F998}",desc:"Pule mais alto para superar obst\xE1culos.",max:3,base:120},hydration:{name:"Garrafa esportiva",icon:"\u{1F4A7}",desc:"+6 de f\xF4lego recuperado por segundo, por n\xEDvel.",max:4,base:160},coach:{name:"Esteira profissional",icon:"\u{1F3C3}",desc:"Ganhe 25% mais treino por segundo, por n\xEDvel.",max:4,base:200},charm:{name:"Medalha do criador",icon:"\u{1F3C5}",desc:"Receba 10% a mais por criatura vendida, por n\xEDvel.",max:3,base:300},turbo:{name:"Impulso turbo",icon:"\u{1F680}",desc:"Dispare 10% mais r\xE1pido, por n\xEDvel.",max:3,base:220}},cs={shield:{name:"Escudo bolha",icon:"\u{1F6E1}\uFE0F",price:60,max:5,desc:"Protege de uma captura. Ativa sozinho quando o dono encosta."},juice:{name:"Suco de energia",icon:"\u{1F9C3}",price:35,max:5,desc:"Recupera todo o f\xF4lego. Toque em Suco durante a corrida."}},mt={common:{name:"Comum",mult:1,color:16773585},rare:{name:"Raro",mult:3,color:7921151},epic:{name:"\xC9pico",mult:5,color:13476095},legendary:{name:"Lend\xE1rio",mult:8,color:16765788},secret:{name:"Secreto",mult:12,color:15963343}},ih=(i,e)=>e===0?"common":e===1?"rare":i>=6?"legendary":"epic",an={crown:{name:"Coroa dourada",slot:"head",price:240,desc:"Uma coroa com pedras coloridas."},headphones:{name:"Fones neon",slot:"head",price:120,desc:"Fones azuis para seu corredor."},halo:{name:"Halo estelar",slot:"head",price:550,desc:"Um anel luminoso sobre a cabe\xE7a."},goggles:{name:"\xD3culos de aviador",slot:"face",price:160,desc:"Lentes turquesa e arma\xE7\xE3o dourada."},wings:{name:"Asas de cristal",slot:"back",price:420,desc:"Asas lil\xE1s para enfeitar o personagem."},cape:{name:"Capa de her\xF3i",slot:"back",price:200,desc:"Uma capa vermelha para a aventura."}},Nn={normal:{name:"Natural",mult:1,color:null},gold:{name:"Dourado",mult:1.5,color:16764006},rainbow:{name:"Arco-\xEDris",mult:2,color:9369055},cosmic:{name:"C\xF3smico",mult:3,color:11439103}},Mi={meadow:{name:"Prado",price:0,color:9750141,roof:7824561},candy:{name:"Doceria",price:600,color:15839692,roof:8244431},space:{name:"Observat\xF3rio",price:1200,color:7833016,roof:14527231},bamboo:{name:"Jardim de bambu",price:800,color:7780741,roof:14531176}},fc=["Troncos girat\xF3rios","Rajada de areia","Esporos do bosque","Piso escorregadio","Jatos de lava","Pulso de cristal","Baixa gravidade","Correnteza do recife","Po\xE7as de caramelo","Bambu m\xF3vel","Prensa mec\xE2nica","Vento das nuvens"],$a=[{id:"first",name:"Primeira entrega",key:"delivered",target:1,reward:100},{id:"five",name:"Mensageiro dos ovos",key:"delivered",target:5,reward:350},{id:"explorer",name:"Seis mundos",key:"visited",target:6,reward:600},{id:"collector",name:"Seis esp\xE9cies",key:"seen",target:6,reward:1e3},{id:"trainer",name:"Atleta n\xEDvel 50",key:"training",target:50,reward:700},{id:"rare",name:"Criador de raridades",key:"rareHatched",target:5,reward:800},{id:"income",name:"Curral produtivo",key:"incomeEarned",target:500,reward:400},{id:"clean",name:"Fuga impec\xE1vel",key:"cleanRuns",target:3,reward:500},{id:"worlds",name:"Grande explorador",key:"visited",target:12,reward:2e3},{id:"secret",name:"Segredo revelado",key:"secretHatched",target:1,reward:1500}],Xa=i=>Nn[i]?i:"normal",sh=i=>["speed","energy","value"][i%3],Ya=i=>i?{speed:"Velocidade +5%",energy:"Recupera\xE7\xE3o de f\xF4lego +8/s",value:"Vendas +10%"}[sh(i.world)]:"Escolha uma criatura no curral.",qa=i=>mt[i]?i:"common",Dn=(i,e,t)=>Math.max(e,Math.min(t,i)),Vt=(i,e,t)=>Number.isFinite(i)?Dn(i,e,t):e,rn=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function pc(){return{version:4,rng:Math.floor(Math.random()*2147483646)+1,nestState:null,companionId:null,decorations:["meadow"],decoration:"meadow",incomePending:0,incomeEarned:0,rareHatched:0,secretHatched:0,cleanRuns:0,claimed:[],album:[],daily:{day:"",delivered:0,claimed:!1},accessories:[],equipped:{},coins:0,training:0,trainXP:0,upgrades:Object.fromEntries(Object.keys(yi).map(i=>[i,0])),supplies:{shield:0,juice:0},creatures:[],eggs:[],seen:Array(Pe.length).fill(!1),visited:Array(Pe.length).fill(!1),delivered:0,caught:0,nextId:1}}function gm(i){let e=pc();if(!i||![1,2,3,4].includes(i.version))return e;e.accessories=Object.keys(an).filter(t=>i.accessories?.includes(t));for(let t of e.accessories)i.equipped?.[an[t].slot]===t&&(e.equipped[an[t].slot]=t);e.coins=Math.floor(Vt(i.coins,0,1e9)),e.training=Math.floor(Vt(i.training,0,vi)),e.trainXP=Vt(i.trainXP,0,8+e.training*1.5);for(let[t,n]of Object.entries(yi))e.upgrades[t]=Math.floor(Vt(i.upgrades?.[t],0,n.max));for(let[t,n]of Object.entries(cs))e.supplies[t]=Math.floor(Vt(i.supplies?.[t],0,n.max));e.seen=e.seen.map((t,n)=>i.seen?.[n]===!0),e.visited=e.visited.map((t,n)=>i.visited?.[n]===!0),e.delivered=Math.floor(Vt(i.delivered,0,1e6)),e.caught=Math.floor(Vt(i.caught,0,1e6));for(let t of Array.isArray(i.creatures)?i.creatures:[])Number.isInteger(t.world)&&t.world>=0&&t.world<Pe.length&&e.creatures.length<3+e.upgrades.pen*2&&e.creatures.push({id:e.nextId++,world:t.world,rarity:qa(t.rarity),mutation:Xa(t.mutation),uid:typeof t.uid=="string"&&/^[a-zA-Z0-9_-]{1,80}$/.test(t.uid)?t.uid:"pet-"+Date.now().toString(36)+"-"+e.nextId});for(let t of Array.isArray(i.eggs)?i.eggs:[])Number.isInteger(t.world)&&t.world>=0&&t.world<Pe.length&&e.creatures.length+e.eggs.length<3+e.upgrades.pen*2&&e.eggs.push({id:e.nextId++,world:t.world,rarity:qa(t.rarity),mutation:Xa(t.mutation),remaining:Vt(t.remaining,0,8)});e.companionId=e.creatures.find(t=>t.uid===i.companionId)?.uid||null,e.decorations=Object.keys(Mi).filter(t=>t==="meadow"||i.decorations?.includes(t)),e.decoration=e.decorations.includes(i.decoration)?i.decoration:"meadow",e.rng=Math.floor(Vt(i.rng||e.rng,1,4294967295)),e.nestState=Array.isArray(i.nestState)?i.nestState:null;for(let t of["incomePending","incomeEarned","rareHatched","secretHatched","cleanRuns"])e[t]=Vt(i[t],0,1e9);e.claimed=$a.filter(t=>i.claimed?.includes(t.id)).map(t=>t.id),e.album=Array.isArray(i.album)?[...new Set(i.album.filter(t=>/^\d{1,2}:(common|rare|epic|legendary|secret):(normal|gold|rainbow|cosmic)$/.test(t)))].slice(0,240):[];for(let t of e.creatures){let n=t.world+":"+t.rarity+":"+t.mutation;e.album.includes(n)||e.album.push(n)}return i.daily&&/^\d{4}-\d{2}-\d{2}$/.test(i.daily.day)&&(e.daily={day:i.daily.day,delivered:Vt(i.daily.delivered,0,1e4),claimed:i.daily.claimed===!0}),e}var ls=class{constructor(e){this.save=gm(e),this.player={x:0,z:15,y:0,vy:0},this.time=0,this.carrying=null,this.carriedEgg=null,this.mode="run",this.energy=this.maxEnergy(),this.moving=0,this.sprinting=!1,this.events=[],this.hazardCooldown=0,this.slowUntil=0,this.runClean=!0,this.nestEggs=Pe.map((t,n)=>Array.from({length:3},(s,r)=>{let o=this.save.nestState?.[n]?.[r];return o?{slot:r,rarity:qa(o.rarity),mutation:Xa(o.mutation),availableAt:Vt(o.cooldown,0,240),refreshAt:Vt(o.refresh,1,240)}:this.rollEgg(n,r)})),this.captureNests(),this.guardians=Un.map(t=>({x:t.x,z:t.z-2.5,state:"idle",grace:0})),this.hitCooldown=0,this.save.visited[0]=!0}get availableAt(){return this.nestEggs.map(e=>Math.min(...e.map(t=>t.availableAt)))}availableEggs(e){return this.nestEggs[e].filter(t=>t.availableAt<=this.time)}recommendedTraining(e){let t=.92+this.save.upgrades.gloves*.04;return Math.max(0,Math.ceil((jn(e)*1.1/(t*(this.power()==="speed"?1.05:1))-9-this.save.upgrades.boots*.8)/.35))}trainingAdvice(e){let t=this.recommendedTraining(e);return{level:t,remaining:Math.max(0,t-this.save.training),ready:this.save.training>=t}}speed(){return this.raceMode?22:(9+this.save.training*.35+this.save.upgrades.boots*.8)*(this.power()==="speed"?1.05:1)}maxEnergy(){return 100+this.save.upgrades.energy*30}capacity(){return 3+this.save.upgrades.pen*2}trainTarget(){return 8+this.save.training*1.5}hatchTime(){return 8-this.save.upgrades.incubator*1.5}zone(){return Dn(Math.floor(-this.player.z/bt),0,Pe.length-1)}inBase(){return this.player.z>3}price(e){let t=yi[e];return t?Math.round(t.base*(this.save.upgrades[e]+1)**1.5):1/0}emit(e,t,n){this.events.push({type:e,text:t,world:n})}drainEvents(){return this.events.splice(0)}jump(){return this.mode==="run"&&this.player.y===0?(this.player.vy=7.6+(this.raceMode?0:this.save.upgrades.springs*.7),!0):!1}interaction(){if(this.raceMode)return{type:"walk",label:"Siga o ninho da corrida"};if(this.mode==="train")return{type:"stop",label:"Sair da esteira"};if(this.carrying!==null)return rn(this.player,gn)<3.1?{type:"deposit",label:"Guardar ovo"}:{type:"return",label:"Leve ao curral"};if(rn(this.player,mn)<2.5)return{type:"train",label:"Treinar na esteira"};if(rn(this.player,gn)<3.1)return{type:"corral",label:"Abrir curral"};for(let e=0;e<Pe.length;e++)if(rn(this.player,Un[e])<2.6)return this.availableAt[e]<=this.time?{type:"nest",label:`Escolher ovo \xB7 ${this.availableEggs(e).length}`,world:e}:{type:"wait",label:`Novo ovo em ${Math.ceil(this.availableAt[e]-this.time)} s`};return{type:"walk",label:"Aproxime-se do ovo"}}interact(){let e=this.interaction();if(e.type==="stop")return this.mode="run",this.player.z=16.2,this.emit("stop","Treino conclu\xEDdo. Sua velocidade est\xE1 maior!"),e.type;if(e.type==="train")return this.save.training>=vi?(this.emit("notice","Voc\xEA j\xE1 atingiu o n\xEDvel m\xE1ximo de treino!"),!1):(this.mode="train",this.player.x=mn.x,this.player.z=mn.z,this.player.y=0,this.player.vy=0,this.emit("train","Treinando! A cada barra completa, sua velocidade aumenta."),e.type);if(e.type==="deposit"){if(this.save.creatures.length+this.save.eggs.length>=this.capacity())return this.emit("notice","Curral cheio! Venda uma criatura ou compre mais espa\xE7os."),!1;let t=this.carrying;return this.save.eggs.push({id:this.save.nextId++,world:t,rarity:this.carriedEgg.rarity,mutation:this.carriedEgg.mutation,remaining:this.hatchTime()}),this.save.delivered++,this.refreshDay(),this.save.daily.delivered++,this.runClean&&this.save.cleanRuns++,this.nestEggs[t][this.carriedEgg.slot].availableAt=this.time+18,this.carrying=null,this.carriedEgg=null,this.guardians[t].state="return",this.emit("deposit","O ovo chegou ao curral! J\xE1 est\xE1 chocando.",t),e.type}return["corral","nest"].includes(e.type)?e.type:!1}steal(e){let t=this.interaction();if(t.type!=="nest"||!Number.isInteger(e))return!1;let n=this.nestEggs[t.world]?.[e];if(!n||n.availableAt>this.time)return!1;this.carrying=t.world,this.runClean=!0,this.carriedEgg={world:t.world,slot:e,rarity:n.rarity,mutation:n.mutation},n.availableAt=1/0;let s=this.guardians[t.world];return s.state="chase",s.grace=1.1,this.emit("grab",`Ovo ${mt[n.rarity].name.toLowerCase()}! Corra para o curral!`,t.world),!0}saleValue(e,t="common",n="normal"){return Math.round(Pe[e].value*mt[qa(t)].mult*Nn[Xa(n)].mult*(1+this.save.upgrades.charm*.1+(this.power()==="value"?.1:0)))}equip(e){let t=an[e];return!t||!this.save.accessories.includes(e)?!1:(this.save.equipped[t.slot]===e?delete this.save.equipped[t.slot]:this.save.equipped[t.slot]=e,this.emit("upgrade",this.save.equipped[t.slot]===e?`${t.name} equipado!`:`${t.name} guardado.`),!0)}useJuice(){return this.mode!=="run"||this.save.supplies.juice<1||this.energy>=this.maxEnergy()-1?!1:(this.save.supplies.juice--,this.energy=this.maxEnergy(),this.emit("juice","Suco usado! Seu f\xF4lego est\xE1 completo."),!0)}sell(e){if(!this.inBase())return!1;let t=this.save.creatures.findIndex(r=>r.id===e);if(t<0)return!1;let n=this.saleValue(this.save.creatures[t].world,this.save.creatures[t].rarity,this.save.creatures[t].mutation),[s]=this.save.creatures.splice(t,1);return this.save.companionId===s.uid&&(this.save.companionId=null),this.save.coins+=n,this.emit("sold",`${Pe[s.world].creature}: +${n} integros!`,s.world),!0}buy(e){if(Mi[e]){let n=Mi[e];if(!this.inBase())return!1;if(!this.save.decorations.includes(e)){if(this.save.coins<n.price)return!1;this.save.coins-=n.price,this.save.decorations.push(e)}return this.save.decoration=e,this.emit("upgrade","Curral decorado: "+n.name),!0}if(an[e]){let n=an[e];return!this.inBase()||this.save.accessories.includes(e)||this.save.coins<n.price?!1:(this.save.coins-=n.price,this.save.accessories.push(e),this.equip(e),!0)}if(cs[e]){let n=cs[e];return!this.inBase()||this.save.coins<n.price||this.save.supplies[e]>=n.max?!1:(this.save.coins-=n.price,this.save.supplies[e]++,this.emit("upgrade",`${n.name} comprado!`),!0)}let t=yi[e];return!t||!this.inBase()||this.save.upgrades[e]>=t.max||this.save.coins<this.price(e)?!1:(this.save.coins-=this.price(e),this.save.upgrades[e]++,this.energy=this.maxEnergy(),this.emit("upgrade",`${t.name}: melhoria comprada!`),!0)}catchEgg(e){if(this.runClean=!1,this.save.supplies.shield>0){this.save.supplies.shield--,this.guardians[e].grace=3,this.energy=this.maxEnergy(),this.emit("shield","Escudo ativado! Voc\xEA tem 3 segundos para abrir dist\xE2ncia.",e);return}this.nestEggs[e][this.carriedEgg.slot].availableAt=this.time+5,this.carrying=null,this.carriedEgg=null,this.guardians[e].state="return",this.save.caught++,Object.assign(this.player,{x:0,z:15,y:0,vy:0}),this.energy=this.maxEnergy(),this.emit("caught","O dono recuperou o ovo! Treine ou melhore seus t\xEAnis e tente de novo.",e)}collide(e,t=.35,n=!1){for(let s of Wa){if(!n&&e.y>s.h)continue;let r=e.x-s.x,o=e.z-s.z,c=Math.hypot(r,o),l=t+s.r;c<l&&(e.x=s.x+(c?r/c:1)*l,e.z=s.z+(c?o/c:0)*l,!n&&this.hitCooldown<=0&&(this.runClean=!1,this.emit("obstacle","Pule ou contorne os obst\xE1culos!"),this.hitCooldown=2))}}moveGuardian(e,t,n,s){let r=t.x-e.x,o=t.z-e.z,c=Math.hypot(r,o);if(c<.12)return;r/=c,o/=c;for(let a of Wa){let h=e.x-a.x,u=e.z-a.z,f=Math.hypot(h,u);f<a.r+1.5&&f>.01&&(r+=h/f*(a.r+1.5-f)*1.2,o+=u/f*(a.r+1.5-f)*1.2)}let l=Math.hypot(r,o)||1;e.x+=r/l*Math.min(n*s,c),e.z+=o/l*Math.min(n*s,c),this.collide(e,.43,!0)}update(e,t={}){e=Dn(e,0,.05),this.time+=e,this.refreshDay(),this.hazardCooldown=Math.max(0,this.hazardCooldown-e);for(let l=0;l<this.nestEggs.length;l++)for(let a=0;a<3;a++){let h=this.nestEggs[l][a];h.availableAt<=this.time&&h.refreshAt<=this.time&&(this.nestEggs[l][a]=this.rollEgg(l,a))}this.save.incomePending+=this.incomeRate()*e,this.captureNests(),this.hitCooldown-=e;for(let l of this.save.eggs)l.remaining-=e;let n=this.save.eggs.filter(l=>l.remaining<=0);this.save.eggs=this.save.eggs.filter(l=>l.remaining>0);for(let l of n){let a={id:l.id,uid:"pet-"+Date.now().toString(36)+"-"+this.random().toString(36).slice(2,10),world:l.world,rarity:l.rarity,mutation:l.mutation||"normal"};this.save.creatures.push(a),l.rarity!=="common"&&this.save.rareHatched++,l.rarity==="secret"&&this.save.secretHatched++;let h=a.world+":"+a.rarity+":"+a.mutation;this.save.album.includes(h)||this.save.album.push(h),this.save.seen[l.world]=!0,this.emit("hatch",`${Pe[l.world].creature} nasceu! Vale ${this.saleValue(l.world,l.rarity,l.mutation)} integros (${mt[l.rarity].name}).`,l.world)}if(this.mode==="train"){this.moving=1,this.sprinting=!1,this.save.trainXP+=e*(1+this.save.upgrades.coach*.25),this.energy=Math.min(this.maxEnergy(),this.energy+e*20),this.save.trainXP>=this.trainTarget()&&(this.save.trainXP-=this.trainTarget(),this.save.training++,this.emit("level",`Treino n\xEDvel ${this.save.training}! Velocidade: ${this.speed().toFixed(2).replace(".",",")}.`),this.save.training>=vi&&(this.save.trainXP=0,this.mode="run",this.player.z=16.2));return}let s=t.x||0,r=t.z||0,o=Math.hypot(s,r);o>1&&(s/=o,r/=o),this.moving=Math.min(1,o),this.sprinting=!!t.sprint&&this.energy>1&&this.moving>0,this.energy=Dn(this.energy+e*(this.sprinting?-32:18+this.save.upgrades.hydration*6+(this.power()==="energy"?8:0)),0,this.maxEnergy());let c=this.raceMode?22:this.speed()*(this.time<this.slowUntil?.65:1)*(this.carrying===null?1:.92+this.save.upgrades.gloves*.04)*(this.sprinting?1.55+this.save.upgrades.turbo*.1:1);this.player.x=Dn(this.player.x+s*c*e,-9,9),this.player.z=Dn(this.player.z+r*c*e,-bt*Pe.length+.8,25),(this.player.vy||this.player.y)&&(this.player.vy-=(this.zone()===6?13:22)*e,this.player.y+=this.player.vy*e,this.player.y<0&&(this.player.y=0,this.player.vy=0)),this.collide(this.player),this.save.visited[this.zone()]=!0,this.updateHazard();for(let l=0;l<Pe.length;l++){let a=this.guardians[l],h={x:Un[l].x,z:Un[l].z-2.5};if(this.carrying===l){if(a.grace=Math.max(0,a.grace-e),this.inBase())a.state="waiting",this.moveGuardian(a,{x:Dn(this.player.x,-4,4),z:1.5},jn(l),e);else if(a.state="chase",a.grace||this.moveGuardian(a,this.guardianTarget(l,t),jn(l)*(this.guardianBurst(l)?1.18:1),e),!a.grace&&rn(a,this.player)<.94&&this.player.y<.65){this.catchEgg(l);break}}else a.state!=="idle"&&(this.moveGuardian(a,h,12,e),rn(a,h)<.15&&(a.state="idle"))}}random(){return this.save.rng=Math.imul(this.save.rng,1664525)+1013904223>>>0,this.save.rng/4294967296}rollEgg(e,t){let n=this.random(),s=this.random(),r=e===0&&t===0||n<.46?"common":n<.75?"rare":n<.92||e<6?"epic":n<.988?"legendary":"secret";return{slot:t,rarity:r,mutation:s<.72?"normal":s<.91?"gold":s<.985?"rainbow":"cosmic",availableAt:this.time,refreshAt:this.time+180+this.random()*60}}captureNests(){this.save.nestState=this.nestEggs.map(e=>e.map(t=>({rarity:t.rarity,mutation:t.mutation,cooldown:Number.isFinite(t.availableAt)?Math.max(0,t.availableAt-this.time):18,refresh:Math.max(1,t.refreshAt-this.time)})))}refreshDay(){let e=new Date().toISOString().slice(0,10);this.save.daily.day!==e&&(this.save.daily={day:e,delivered:0,claimed:!1})}companion(){return this.save.creatures.find(e=>e.uid===this.save.companionId)||null}power(){let e=this.companion();return e?sh(e.world):null}equipPet(e){return!this.inBase()||!this.save.creatures.some(t=>t.uid===e)?!1:(this.save.companionId=this.save.companionId===e?null:e,this.emit("upgrade",this.save.companionId?"Companheiro pronto! "+Ya(this.companion()):"Companheiro voltou ao curral."),!0)}incomeRate(){return this.save.creatures.reduce((e,t)=>e+Pe[t.world].value*mt[t.rarity].mult*Nn[t.mutation||"normal"].mult/1200,0)}collectIncome(){if(!this.inBase())return!1;let e=Math.floor(this.save.incomePending);return e?(this.save.incomePending-=e,this.save.coins+=e,this.save.incomeEarned+=e,this.emit("upgrade","Produ\xE7\xE3o recolhida: +"+e+" integros!"),e):!1}missionProgress(e){let t=this.save[e.key];return Math.min(e.target,Array.isArray(t)?t.filter(Boolean).length:t||0)}claimMission(e){let t=$a.find(n=>n.id===e);return!t||this.save.claimed.includes(e)||this.missionProgress(t)<t.target?!1:(this.save.claimed.push(e),this.save.coins+=t.reward,this.emit("upgrade","Conquista: "+t.name+" \xB7 +"+t.reward+" integros"),!0)}claimDaily(){return this.refreshDay(),this.save.daily.claimed||this.save.daily.delivered<3?!1:(this.save.daily.claimed=!0,this.save.coins+=200,this.emit("upgrade","Expedi\xE7\xE3o do dia: +200 integros!"),!0)}hazard(e=this.zone()){let t=-(e*bt+19),n=(this.time+e*.63)%6;return{x:Math.sin(this.time*(e===10?1.6:.8)+e)*3.8,z:t,r:e===4?1.5:1.1,active:n>2&&n<4.6,warning:n>1.2&&n<=2,name:fc[e]}}guardianTarget(e,t){let n=this.player;return e%3===1?{x:Dn(n.x+(t.x||0)*2,-8,8),z:n.z+(t.z||0)*2}:e%3===2?{x:n.x+Math.sin(this.time*2+e)*1.2,z:n.z}:n}guardianBurst(e){return e>=3&&(this.time+e)%8>6.8}updateHazard(){if(this.inBase()||this.hazardCooldown>0)return;let e=this.zone(),t=this.hazard(e);t.active&&rn(this.player,t)<t.r+.3&&this.player.y<.8&&(this.hazardCooldown=3,this.runClean=!1,this.energy=Math.max(0,this.energy-12),this.slowUntil=this.time+(e===8?2:e===3?1.6:1),[1,7,11].includes(e)&&(this.player.x=Dn(this.player.x+(e%2?1:-1)*2,-8,8)),e===4&&(this.energy=Math.max(0,this.energy-12)),this.emit("obstacle",t.name+"! Pule ou desvie da \xE1rea marcada."))}snapshot(){return this.captureNests(),{incomeRate:this.incomeRate(),hazard:this.hazard(),player:{...this.player},zone:this.zone(),speed:this.speed(),energy:this.energy,capacity:this.capacity(),carrying:this.carrying,carriedEgg:this.carriedEgg?{...this.carriedEgg}:null,nestEggs:this.nestEggs.map(e=>e.map(t=>({...t,available:t.availableAt<=this.time}))),mode:this.mode,time:this.time,interaction:this.interaction(),guardians:this.guardians.map((e,t)=>({...e,speed:jn(t)})),availableAt:[...this.availableAt],trainingAdvice:Pe.map((e,t)=>this.trainingAdvice(t)),...JSON.parse(JSON.stringify(this.save))}}};function rh(i){let e=new Map,t=new Map,n=[],s=(O,B=!1)=>{let T=O+":"+B;return e.has(T)||e.set(T,new Os({color:O,roughness:.78,flatShading:!0,emissive:B?O:0,emissiveIntensity:B?.35:0})),e.get(T)},r=(O,B)=>(t.has(O)||t.set(O,B()),t.get(O)),o=(O,B=0,T=0,N=0)=>{let Z=new En;return Z.position.set(B,T,N),O.add(Z),Z},c=(O,B,T,N=0,Z=0,V=0,le=!1)=>{let Se=new Rt(B,s(T,le));return Se.position.set(N,Z,V),Se.receiveShadow=!0,O.add(Se),Se},l=(O,B,T,N,Z,V=0,le=0,Se=0)=>c(O,r(`b${B},${T},${N}`,()=>new $n(B,T,N)),Z,V,le,Se),a=(O,B,T,N=0,Z=0,V=0,le=1,Se=1,S=1)=>{let g=c(O,r("s"+B,()=>new Ji(B,12,8)),T,N,Z,V);return g.scale.set(le,Se,S),g},h=(O,B,T,N,Z,V=0,le=0,Se=0,S=12)=>c(O,r(`c${B},${T},${N},${S}`,()=>new Ns(B,T,N,S)),Z,V,le,Se),u=(O,B,T,N,Z=0,V=0,le=0)=>c(O,r(`t${B},${T}`,()=>new Ki(B,T,6,24)),N,Z,V,le),f=(O,B,T,N,Z)=>{let V=new W(...B),le=new W(...T).sub(V),Se=h(O,N,N,le.length(),Z,...V.addScaledVector(le,.5).toArray());return Se.quaternion.setFromUnitVectors(new W(0,1,0),le.normalize()),Se},p=(O,B,T,N,Z,V=3,le="#233d46",Se="#fff6d9")=>{let S=document.createElement("canvas");S.width=512,S.height=128;let g=S.getContext("2d");g.fillStyle=Se,g.beginPath(),g.roundRect(4,4,504,120,22),g.fill(),g.fillStyle=le,g.font="bold 40px Arial",g.textAlign="center",g.textBaseline="middle",g.fillText(B,256,66,480);let U=new Zi(S);U.colorSpace=gt;let $=new $i(new hi({map:U,depthWrite:!1}));return $.position.set(T,N,Z),$.scale.set(V,V/4,1),O.add($),n.push($),$};function x(O){let B=document.createElement("canvas");B.width=640,B.height=288;let T=new Zi(B);T.colorSpace=gt;let N=new $i(new hi({map:T,depthWrite:!1}));return N.position.set(0,2.4,0),N.scale.set(4.2,1.89,1),O.add(N),{canvas:B,texture:T,sprite:N}}function M(O,B){let T=k[O].plaque,N=T.canvas.getContext("2d");N.clearRect(0,0,640,288),N.fillStyle=B.ready?"#daf3cf":"#fff1c8",N.beginPath(),N.roundRect(5,5,630,278,28),N.fill(),N.strokeStyle=B.ready?"#4b8c55":"#b48135",N.lineWidth=8,N.stroke(),N.textAlign="center",N.textBaseline="middle",N.fillStyle="#345047",N.font="bold 30px Arial",N.fillText("TREINO RECOMENDADO",320,52),N.font="bold 54px Arial",N.fillText("N\xCDVEL "+B.level,320,115),N.font="bold 34px Arial",N.fillText(B.ready?"Voc\xEA j\xE1 tem esse treino!":"Faltam "+B.remaining+" n\xEDveis",320,178),N.fillStyle="#876323",N.font="bold 24px Arial",N.fillText("3 OVOS \xB7 RARIDADES E MUTA\xC7\xD5ES",320,240),T.texture.needsUpdate=!0,T.sprite.userData.advice={...B}}function m(O,B,T=1,N="common"){let Z=o(O);Z.scale.setScalar(T),a(Z,.42,mt[N].color,0,.5,0,1,1.35,1);for(let[V,le,Se]of[[.25,.63,.28],[-.19,.34,.32],[.05,.9,.18],[.3,.33,-.2]])a(Z,.075,B,V,le,Se,1,1.2,.4);if(N!=="common"){u(Z,.44,.025,mt[N].color,0,.06,0).rotation.x=Math.PI/2;for(let V=0;V<mt[N].mult-1;V++){let le=V*2.4;h(Z,0,.06,.15,16773296,Math.sin(le)*.47,.75+V%2*.2,Math.cos(le)*.47,4)}}return Z}function d(O,B,T,N=1,Z="common"){let V=o(O);V.scale.setScalar(N);let le=[],Se=2505291,S=16771258,g=-.35,U=.92;if(B==="chick"){a(V,.43,T,0,.51,0,1,1.1,.9),a(V,.31,T,0,1,-.07),h(V,0,.13,.24,15697476,0,.94,-.43,4).rotation.x=-Math.PI/2;for(let R of[-.16,.16])l(V,.18,.09,.3,15697476,R,.06,-.06);for(let R of[-.42,.42]){let C=a(V,.22,T,R,.61,0,.45,1.15,.9);le.push(C)}for(let R=0;R<3;R++)a(V,.095,15231840,(R-1)*.09,1.28,-.05);U=1.06,g=-.35}else if(B==="fox"||B==="cat"){a(V,.36,T,0,.47,.06,1,1.1,1.35),a(V,.34,T,0,.95,-.18,1.08,.92,.95),a(V,.19,S,0,.83,-.43,1,.65,.7),a(V,.065,Se,0,.9,-.55);for(let C of[-.24,.24]){let oe=h(V,0,.16,.4,T,C,1.31,-.16,4);oe.rotation.z=C<0?.18:-.18,a(V,.07,16036809,C,1.35,-.28,1,1.8,.3)}for(let C of[-.21,.21]){let oe=l(V,.16,.28,.23,T,C,.16,-.12);le.push(oe)}let R=o(V,0,.4,.47);if(a(R,.2,T,0,.22,.24,1,1.2,2.1),a(R,.14,S,0,.32,.52,1,1,1.3),R.rotation.x=-.3,le.push(R),U=1,g=-.48,B==="cat"){u(V,.2,.025,16176247,0,1.7,-.16).rotation.x=Math.PI/2;for(let C of[-.44,.44]){let oe=a(V,.27,9018337,C,.72,.1,.45,.6,1.5);oe.rotation.z=C,le.push(oe)}}}else if(B==="deer"){a(V,.38,T,0,.55,.06,.8,1,1.4),a(V,.26,12574109,0,1.06,-.23,.9,1.1,1),a(V,.14,S,0,.99,-.48),a(V,.045,Se,0,1.04,-.6);for(let R of[-.22,.22])a(V,.16,T,R,1.18,-.24,1.5,.5,.65),f(V,[R*.6,1.25,-.2],[R,1.67,-.2],.038,12358234),f(V,[R*.85,1.47,-.2],[R*1.7,1.56,-.2],.026,12358234);for(let R of[-.19,.19])for(let C of[-.24,.29]){let oe=h(V,.055,.055,.37,7506774,R,.2,C);le.push(oe)}for(let R of[-.16,.16])a(V,.048,S,R,.65,-.29);U=1.12,g=-.46}else if(B==="penguin"){a(V,.44,3299975,0,.61,0,1,1.4,.85),a(V,.32,16119271,0,.55,-.19,1,1.5,.6),a(V,.3,3299975,0,1.1,-.06),h(V,0,.12,.22,15908181,0,1,-.4,4).rotation.x=-Math.PI/2;for(let R of[-.42,.42]){let C=a(V,.21,T,R,.65,0,.45,1.8,.8);C.rotation.z=R*.7,le.push(C)}for(let R of[-.2,.2])a(V,.16,15908181,R,.07,-.13,1,.35,1.4);u(V,.32,.065,T,0,.89,-.04).rotation.x=Math.PI/2,U=1.13,g=-.34}else if(B==="dragon"){a(V,.42,T,0,.52,.07,1,1.1,1.2),a(V,.31,T,0,1.06,-.23),a(V,.21,15972966,0,.94,-.48,1,.7,1);for(let R of[-.2,.2])h(V,0,.075,.27,S,R,1.41,-.1,5);for(let R of[-.56,.56]){let C=o(V,R,.92,.12);h(C,0,.35,.62,10967922,0,0,0,3).rotation.z=R>0?-1.1:1.1,le.push(C)}for(let R=0;R<4;R++)h(V,0,.11,.18,16438365,0,.93-R*.13,.24+R*.18,4);for(let R of[-.24,.24]){let C=l(V,.19,.25,.31,T,R,.13,-.1);le.push(C)}a(V,.18,T,0,.28,.6,1,.7,2.1),U=1.13,g=-.5}else if(B==="turtle"){a(V,.52,6980258,0,.49,.1,1,.7,1.2);for(let R=0;R<5;R++){let C=R*1.256;h(V,0,.18,.42,T,Math.sin(C)*.3,.8,Math.cos(C)*.34+.1,5)}a(V,.24,9029305,0,.4,-.56);for(let R of[-.42,.42])for(let C of[-.23,.39]){let oe=a(V,.15,9029305,R,.12,C,1,.55,1.25);le.push(oe)}U=.47,g=-.77}else if(B==="axolotl"){a(V,.36,T,0,.38,.12,1,.7,1.6),a(V,.34,16765666,0,.7,-.24,1.25,.8,1);for(let R of[-.38,.38])for(let C=0;C<3;C++)f(V,[R*.75,.7,-.2],[R*1.5,.55+C*.18,-.17],.05,T),a(V,.08,T,R*1.5,.55+C*.18,-.17);for(let R of[-.3,.3])for(let C of[-.1,.4]){let oe=a(V,.14,T,R,.13,C,1,.5,1.3);le.push(oe)}a(V,.18,T,0,.32,.67,.35,1,1.8),U=.73,g=-.54}else if(B==="rabbit"){a(V,.37,T,0,.44,.04,1,1.2,1),a(V,.32,16770256,0,.99,-.13);for(let R of[-.16,.16])a(V,.16,T,R,1.47,-.08,.7,2.1,.7),a(V,.08,16161978,R,1.5,-.17,.6,2.2,.4);for(let R of[-.24,.24]){let C=a(V,.2,T,R,.12,-.1,.8,.6,1.5);le.push(C)}a(V,.18,16775146,0,.45,.44),a(V,.06,14582162,0,.91,-.43),U=1.04,g=-.41}else if(B==="panda"){a(V,.46,15922141,0,.52,0,1,1.12,1),a(V,.36,15922141,0,1.07,-.12,1.12,.96,1);for(let R of[-.31,.31])a(V,.15,2575947,R,1.31,-.1);for(let R of[-.15,.15])a(V,.12,2575947,R,1.08,-.42,1,1.2,.3);for(let R of[-.37,.37]){let C=a(V,.19,2575947,R,.58,0,.75,1.5,.8);le.push(C)}for(let R of[-.23,.23])a(V,.18,2575947,R,.13,-.05);u(V,.33,.065,T,0,.81,-.02).rotation.x=Math.PI/2,a(V,.06,2575947,0,.96,-.47),U=1.1,g=-.46}else if(B==="robot"){l(V,.66,.6,.46,8366791,0,.65,0),l(V,.66,.46,.48,T,0,1.22,-.06),l(V,.5,.25,.03,2704991,0,1.25,-.31),l(V,.28,.23,.04,T,0,.69,-.25),f(V,[0,1.45,0],[0,1.68,0],.035,8366791),a(V,.09,10876879,0,1.7,0);for(let R of[-.45,.45]){let C=l(V,.17,.46,.21,T,R,.64,0);le.push(C)}for(let R of[-.2,.2]){let C=l(V,.2,.35,.28,4217725,R,.19,0);le.push(C)}U=1.25,g=-.33}else if(B==="griffin"){a(V,.4,T,0,.52,.09,1,1.1,1.2),a(V,.32,16774357,0,1.08,-.17),h(V,0,.12,.3,16038756,0,1,-.54,4).rotation.x=-Math.PI/2;for(let R of[-.58,.58]){let C=o(V,R,.85,.1);for(let oe=0;oe<3;oe++)a(C,.22,oe%2?T:16774357,Math.sign(R)*oe*.13,oe*.13,oe*.12,.5,1.6,1);le.push(C)}for(let R of[-.23,.23]){let C=l(V,.2,.22,.3,16038756,R,.12,-.12);le.push(C)}h(V,0,.2,.3,16038756,0,1.46,-.1,5),U=1.15,g=-.45}Z!=="common"&&(u(V,.55,.035,mt[Z].color,0,.055,0).rotation.x=Math.PI/2);let $=B==="turtle"?.1:.12;for(let R of[-$,$])a(V,.065,16777215,R,U,g),a(V,.035,Se,R,U,g-.055),a(V,.012,16777215,R-.01,U+.015,g-.084);return V.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),{g:V,limbs:le,kind:B}}function D(O,B){let T=o(O);if(B==="crown"){h(T,.34,.34,.16,15910483,0,.1,0,10);for(let N=0;N<7;N++){let Z=N*Math.PI*2/7;h(T,0,.09,.28,16767336,Math.sin(Z)*.29,.3,Math.cos(Z)*.29,4),a(T,.055,N%2?7724525:15759772,Math.sin(Z)*.33,.12,Math.cos(Z)*.33)}}if(B==="halo"){u(T,.4,.06,16768889,0,.16,0).rotation.x=Math.PI/2;for(let N of[-.5,.5])h(T,0,.06,.17,16774330,N,.2,0,4)}if(B==="headphones"){u(T,.33,.045,3560884,0,0,0);for(let N of[-.32,.32])l(T,.12,.3,.23,6480616,N,-.03,0),l(T,.13,.2,.15,8483822,N*1.15,-.03,0)}if(B==="goggles"){for(let N of[-.15,.15])u(T,.125,.035,16764004,N,0,0),a(T,.1,6807528,N,0,-.01,1,1,.25);l(T,.08,.04,.07,16764004,0,0,0)}if(B==="wings")for(let N of[-1,1])for(let Z=0;Z<4;Z++){let V=a(T,.19,Z%2?10149870:13214971,N*(.26+Z*.17),.25+Z*.09,.08+Z*.05,.7,2.3,.4);V.rotation.z=-N*(.4+Z*.08)}if(B==="cape"){let N=h(T,.26,.6,1,14636152,0,-.2,.1,4);N.scale.z=.19,l(T,.5,.08,.17,16766832,0,.35,0)}return T}function A(O,B){O.wear.clear();for(let T of Object.values(B)){let N=D(O.wear,T);T==="crown"&&N.position.set(0,1.35,0),T==="halo"&&N.position.set(0,1.6,0),T==="headphones"&&N.position.set(0,1.08,0),T==="goggles"&&N.position.set(0,1.05,-.3),T==="wings"&&N.position.set(0,.6,.3),T==="cape"&&N.position.set(0,.55,.36)}O.hat.visible=!["crown","halo"].includes(B.head)}function E(O,B){if(an[B]){let le=o(O),Se=D(le,B);return Se.position.y=B==="cape"?.8:.6,le}let T=o(O),N=5610951,Z=15843169,V=16773330;if(B==="boots"||B==="springs")for(let le of[-.28,.28]){l(T,.36,.22,.7,B==="boots"?N:9861582,le,.35,-.1),l(T,.33,.3,.36,B==="boots"?7915215:12821745,le,.55,.1),l(T,.38,.08,.74,V,le,.21,-.1);for(let Se=0;Se<3;Se++)l(T,.25,.025,.04,V,le,.48,-.32+Se*.09);if(B==="springs")for(let Se=0;Se<3;Se++)u(T,.13,.025,Z,le,.06+Se*.055,0).rotation.x=Math.PI/2}if((B==="energy"||B==="hydration"||B==="juice")&&(h(T,.25,.28,.8,B==="juice"?16099675:N,0,.5,0),h(T,.14,.14,.2,V,0,.99,0),h(T,.19,.19,.12,5334158,0,1.13,0),l(T,.36,.26,.055,V,0,.6,-.25),B==="juice"?a(T,.1,15898692,0,.6,-.3):l(T,.08,.19,.05,N,0,.6,-.29)),B==="pen"){l(T,1.2,.09,1,10012531,0,.06,0);for(let le of[-.52,.52])for(let Se of[-.4,0,.4])l(T,.08,.55,.08,V,le,.33,Se),l(T,.06,.06,.8,V,le,.42,0);m(T,Z,.6)}if(B==="incubator"){h(T,.53,.6,.15,11569751,0,.1,0),u(T,.43,.08,Z,0,.23,0).rotation.x=Math.PI/2,m(T,15505259,.75);for(let le of[-.55,.55])f(T,[le,.1,0],[le,1.05,0],.04,N);l(T,1.2,.14,.5,15303283,0,1.1,0)}if(B==="gloves")for(let le of[-.26,.26])a(T,.23,15906415,le,.5,0,.9,1.2,.55),l(T,.32,.2,.24,N,le,.24,0),a(T,.12,15906415,le+Math.sign(le)*.2,.48,0,.75,1.3,.9);if(B==="coach"){l(T,1,.17,1.4,N,0,.12,0),l(T,.75,.04,1.1,3426142,0,.23,0);for(let le=0;le<5;le++)l(T,.7,.01,.03,11192271,0,.26,-.4+le*.2);for(let le of[-.44,.44])f(T,[le,.2,-.4],[le,1,-.5],.04,V);l(T,1,.23,.14,6600369,0,1,-.5)}if(B==="charm"){u(T,.31,.05,N,0,.95,0);let le=h(T,.3,.3,.12,Z,0,.42,0);le.rotation.x=Math.PI/2;let Se=h(T,0,.17,.08,V,0,.43,-.08,5);Se.rotation.x=-Math.PI/2}if(B==="turbo"){h(T,.18,.23,.8,15777377,0,.7,0),h(T,0,.18,.32,14579833,0,1.26,0);for(let le of[-.25,.25])l(T,.18,.35,.2,N,le,.43,0);h(T,.15,0,.35,15569252,0,.14,0),a(T,.1,N,0,.86,-.18)}if(B==="shield"){let le=a(T,.48,N,0,.67,0,1,1.25,.22);u(T,.42,.045,V,0,.67,-.04).scale.y=1.2,l(T,.08,.43,.07,Z,0,.67,-.13),l(T,.3,.08,.07,Z,0,.67,-.13)}return T}function F(O){let B=o(O),T=o(B,0,.62,0),N=[],Z=[];l(T,.62,.67,.38,2469802,0,.35,0),l(T,.4,.45,.13,16034132,0,.38,.27),a(T,.28,15777163,0,1.01,-.02,.95,1.08,.9);let V=o(T);l(V,.56,.18,.46,7035595,0,1.25,0),l(V,.53,.055,.24,7035595,0,1.2,-.31);for(let S of[-.1,.1])a(T,.029,2570576,S,1.05,-.27),a(T,.009,16777215,S-.008,1.06,-.295);for(let S of[-.17,.17]){let g=o(T,S,0,0);l(g,.23,.5,.23,3361650,0,-.25,0),l(g,.25,.13,.39,16771499,0,-.55,-.055),N.push(g)}for(let S of[-.41,.41]){let g=o(T,S,.68,0);l(g,.18,.35,.2,2469802,0,-.14,0),a(g,.105,15777163,0,-.36,0),Z.push(g)}let le=o(B,0,1.04,-.57);B.traverse(S=>{S.isMesh&&(S.castShadow=!0)});let Se=o(T);return{g:B,hips:T,legs:N,arms:Z,carry:le,wear:Se,hat:V}}function I(O,B,T,N=0,Z=1){let V=o(O,B,0,T);if(V.scale.setScalar(Z),h(V,.15,.22,1.5,9727820,0,.75,0,7),N===3)for(let le=0;le<3;le++)h(V,0,1.05-le*.21,1.4,[11654875,15070957,16252152][le],0,1.65+le*.55,0,7);else a(V,1.03,N===2?6454466:4100700,0,2,0,1,1,.9),a(V,.73,N===2?8958608:7386716,.51,2.35,.1),a(V,.65,N===2?10266329:7780711,-.5,2.05,-.1)}function z(O,B,T,N,Z=2){let V=o(O,B,0,T);h(V,0,.53,Z,N,0,Z/2,0,5);let le=h(V,0,.29,Z*.7,N,.43,Z*.33,.2,5);return le.rotation.z=-.35,V}let H=o(i),y=o(H),v=[],k=[],q=[],te=[];l(y,28,.7,30,7648127,0,-.43,12),l(y,10,.04,30,14994592,0,-.025,12),l(y,28,.3,1,5867873,0,-.22,27);let j=o(y,gn.x,0,gn.z),ce=l(j,7,.08,7.8,9750141,0,.02,0);for(let O of[-3.5,3.5])for(let B=-3.5;B<4;B+=1.4)l(j,.13,.9,.13,16048051,O,.5,B),l(j,.1,.13,1.45,16048051,O,.72,B+.5),l(j,.1,.13,1.45,16048051,O,.33,B+.5);for(let O=-3.5;O<4;O+=1.4)l(j,.13,.9,.13,16048051,O,.5,3.8),l(j,1.4,.12,.12,16048051,O+.5,.72,3.8);for(let O of[-2.8,2.8])l(j,.18,2.9,.18,11701600,O,1.45,2.5);let se=h(j,0,4.5,1.2,7824561,0,3.2,2.5,4);se.rotation.y=Math.PI/4,se.scale.z=.48,p(j,"SEU CURRAL",0,2.1,-3.7,3.7);let pe=o(j),K=o(j),me=o(y,mn.x,0,mn.z);l(me,2.1,.28,3.3,3233139,0,.15,0),l(me,1.68,.07,2.9,3358805,0,.33,0);let ve=[];for(let O=0;O<9;O++)ve.push(l(me,1.6,.016,.055,7047576,0,.374,-1.3+O*.32));for(let O of[-.95,.95])f(me,[O,.35,-1],[O,1.8,-1.2],.065,10864330),f(me,[O,1.8,-1.2],[O,1.25,.9],.045,10864330);l(me,1.95,.37,.28,3324338,0,1.8,-1.25),l(me,.75,.17,.03,10808757,0,1.82,-1.42),p(me,"ESTEIRA",0,2.8,0,3);let we=o(y,7,0,21);l(we,2.8,1.25,1.6,15052645,0,.67,0),l(we,3.2,.16,2,16309936,0,1.34,0);for(let O of[-1.4,1.4])l(we,.12,2.6,.12,5471379,O,1.5,0);l(we,3.4,.2,2,3781804,0,2.7,0),p(we,"MELHORIAS",0,3.25,0,3);for(let O of[-9.8,10.5])I(y,O,8,0,1.4),I(y,O,23,0,1.15);p(y,"BASE SEGURA",0,3.7,4,4.3),l(y,23,.06,.32,13169563,0,.025,3);for(let O=0;O<Pe.length;O++){let B=Pe[O],T=-(O*bt+bt/2),N=o(H);v.push(N),l(N,28,.8,bt,B.ground,0,-.46,T),l(N,9.5,.06,bt,B.path,0,-.03,T);for(let U of[-5.1,5.1])l(N,.2,.08,bt,B.color,U,.03,T);for(let U=0;U<6;U++)l(N,.1,.01,1.7,16772554,0,.013,-O*bt-U*8-3);let Z=o(N,0,0,-O*bt);for(let U of[-6,6])l(Z,.42,4.3,.48,B.color,U,2.15,0),l(Z,.7,.2,.75,16378298,U,4.35,0);l(Z,12.6,.38,.48,B.color,0,4.6,0),p(Z,`${O+1} \xB7 ${B.name.toUpperCase()}`,0,5.25,0,6.3);for(let U=0;U<10;U++){let $=U%2?1:-1,R=$*(7+U%3*2),C=-O*bt-5-U*4.1;if(O===0){I(N,R,C,0,.8+U%3*.22);for(let oe=0;oe<3;oe++)h(N,.03,.03,.55,5410126,R+.4*oe,.25,C+1),a(N,.15,16042588,R+.4*oe,.55,C+1,1,.65,1)}if(O===1&&(U%3===0?h(N,0,2.4,3.5,15119733,R,1.7,C,4).rotation.y=Math.PI/4:(h(N,.22,.26,2.2,7055212,R,1.05,C,7),f(N,[R,.8,C],[R+$*.65,.8,C],.15,7055212),h(N,.15,.15,.85,7055212,R+$*.65,1.2,C,7))),O===2){I(N,R,C,2,1);let oe=o(N,R-$*1,0,C+1.4);h(oe,.16,.21,.85,15454134,0,.4,0),a(oe,.68,U%2?10256603:15306921,0,1,0,1,.47,1);for(let ue of[-.2,.2])a(oe,.1,16772304,ue,1.28,.18,1,.3,1)}if(O===3&&(I(N,R,C,3,1),U%2&&z(N,R-$,C+1.7,8967914,1.6),a(N,.75,16251632,R+$,.3,C-1,1,.5,1.3)),O===4&&(h(N,0,2,3.5,4669011,R,1.4,C,5),h(N,.4,.56,.12,16755799,R,3.1,C,8),l(N,1.3,.02,3.2,15891267,R-$,.01,C+1),z(N,R-$*1.5,C-1,12411489,.8)),O===5&&(z(N,R,C,U%2?11507182:7524321,2.4+U%3*.5),U%3===0&&c(N,r("crystalArch",()=>new Ki(3.1,.36,6,20,Math.PI)),5988494,0,0,C).scale.set(2.3,1.8,1)),O===6){z(N,R,C,9080267,1.2);let oe=a(N,.42,U%2?15251951:9358300,R,3+U%3,C);if(te.push({mesh:oe,y:oe.position.y,phase:U}),U%3===0){let ue=a(N,1.1,10259424,R+$*2,5.5,C);u(N,1.6,.055,15978889,R+$*2,5.5,C).rotation.x=1,te.push({mesh:ue,y:5.5,phase:U})}}if(O===7){l(N,5,.04,3,6870231,R,-.005,C);for(let ue=0;ue<3;ue++){let xe=.8+ue*.5;f(N,[R+ue*.32,0,C],[R+ue*.32,xe,C],.12,ue%2?16756104:16095426),f(N,[R+ue*.32,xe*.6,C],[R+ue*.32+.4,xe*.9,C+.1],.09,16095426)}let oe=a(N,.22,16775143,R-$*.8,.3,C+.9);U%2===0&&(u(N,1.05,.13,15905225,R,1.1,C).rotation.y=.4)}if(O===8){h(N,.09,.09,2.6,16774881,R,1.3,C);let oe=a(N,.65,U%2?15760045:8641486,R,2.6,C,1,1,.4);u(N,.42,.08,16772550,R,2.6,C-.28),U%3===0&&(l(N,1.9,1.4,1.6,12814180,R+$*1.2,.7,C+1.4),l(N,2.1,.28,1.8,16769003,R+$*1.2,1.55,C+1.4))}if(O===9){for(let oe=0;oe<3;oe++){let ue=R+(oe-1)*.5,xe=3.4+U%3*.5;h(N,.1,.15,xe,8047993,ue,xe/2,C+oe*.25,7);for(let be=.6;be<xe;be+=.7)u(N,.12,.025,14020275,ue,be,C+oe*.25).rotation.x=Math.PI/2,a(N,.35,2852191,ue+$*.22,be+.2,C+oe*.25,.9,.18,.6)}U%3===0&&(l(N,1.8,.32,1.8,6847856,R,.16,C+1.5),h(N,0,1,.6,12602709,R,1.6,C+1.5,4),l(N,.5,1.1,.5,16770725,R,.8,C+1.5))}if(O===10){let oe=2+U%3*1.5;l(N,2,oe,2,4614284,R,oe/2,C);for(let xe=0;xe<3;xe++)l(N,.28,.28,.03,9172959,R+(xe-1)*.5,oe*.65,C-1.02);let ue=o(N,R,2.1,C+1.6);u(ue,.65,.16,15910507);for(let xe=0;xe<8;xe++){let be=xe*Math.PI/4,de=l(ue,.24,.35,.2,15910507,Math.sin(be)*.83,Math.cos(be)*.83,0);de.rotation.z=-be}te.push({mesh:ue,y:ue.position.y,phase:U,spin:!0})}if(O===11){for(let oe=0;oe<3;oe++)a(N,1.3,16053759,R+(oe-1)*.7,.5,C,1,.45,1);if(h(N,.3,.4,3.4,16773848,R,1.7,C,10),l(N,1.1,.23,1.1,15186537,R,3.5,C),U%2===0){u(N,1.1,.1,14068991,R,4.4,C);let oe=a(N,.22,16765553,R,4.4,C);te.push({mesh:oe,y:4.4,phase:U})}}}let V=Un[O],le=o(N,V.x,0,V.z);h(le,1.55,1.7,.2,10123090,0,.1,0);for(let U=0;U<3;U++)u(le,1.45-U*.12,.065,14926459,0,.22+U*.035,0).rotation.x=Math.PI/2;let Se=Array.from({length:3},(U,$)=>{let R=m(le,B.color,.8,ih(O,$));return R.position.set(($-1)*.85,.2,$===1?.42:0),R}),S=x(le);k.push({g:le,eggs:Se,plaque:S});let g=d(N,B.kind,B.color,1.65);g.g.position.set(V.x,0,V.z-2.5),p(g.g,"DONO DO OVO",0,2.9,0,2.6),q.push(g)}for(let O of Wa){let B=v[O.world];if(O.world===0||O.world===2){let T=h(B,.4,.4,1.55,10253394,O.x,.37,O.z,8);T.rotation.z=Math.PI/2}else if(O.world===1)l(B,1.35,O.h,1.1,12292190,O.x,O.h/2,O.z);else if(O.world===3)z(B,O.x,O.z,11724011,O.h);else if(O.world===4)h(B,.35,.8,O.h,9591137,O.x,O.h/2,O.z,6);else if(O.world===8)h(B,.55,.66,O.h,16230326,O.x,O.h/2,O.z),u(B,.5,.09,16773332,O.x,O.h,O.z).rotation.x=Math.PI/2;else if(O.world===9){let T=h(B,.32,.32,1.4,7584881,O.x,.32,O.z,7);T.rotation.z=Math.PI/2}else O.world===10?l(B,1.2,O.h,1.2,14595688,O.x,O.h/2,O.z):z(B,O.x,O.z,Pe[O.world].color,O.h)}let ze=o(v[Pe.length-1],0,0,-bt*Pe.length+1);l(ze,18,.45,1,6908570,0,.2,0),p(ze,"12 MUNDOS \xB7 VOLTE AO CURRAL",0,3,0,7);let Ve=F(H),$e=new Rt(new Ji(1.15,20,12),new li({color:8843007,transparent:!0,opacity:.25,depthWrite:!1}));$e.position.y=1,$e.visible=!1,Ve.g.add($e);let Ye=o(H),Q=Array.from({length:24},()=>{let O=a(Ye,.09,16769443);return O.visible=!1,{mesh:O,life:0,v:new W}}),he=0;function Te(O,B){for(let T=0;T<16;T++){let N=Q[he++%Q.length];N.mesh.material=s(B),N.mesh.position.copy(O),N.mesh.visible=!0,N.life=.6+Math.random()*.4,N.v.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3)}}function Le(O,B){for(let T of te)T.spin?T.mesh.rotation.z=B*.7+T.phase:T.mesh.position.y=T.y+Math.sin(B*1.5+T.phase)*.3;for(let T of Q)T.life>0&&(T.life-=O,T.mesh.visible=T.life>0,T.v.y-=7*O,T.mesh.position.addScaledVector(T.v,O),T.mesh.scale.setScalar(Math.max(.1,T.life)));for(let T=0;T<ve.length;T++)ve[T].position.z=-1.4+(B*2+T*.32)%2.8}function Ae(O,B,T=0){for(let N=0;N<O.limbs.length;N++){let Z=O.limbs[N];Z.rotation.x=Math.sin(B*9+N*Math.PI)*(.13+T*.25)}O.g.position.y=Math.sin(B*(T?10:2))*(T?.07:.025)}function He(O,B){if(!B||B==="normal")return;let T=B==="gold"?[16765788]:B==="cosmic"?[11439103,7921151]:[16751266,16769157,9300932,9423359];for(let N=0;N<T.length;N++){let Z=u(O,.5+N*.06,.026,T[N],0,.12+N*.065,0);Z.rotation.x=Math.PI/2}if(B==="cosmic")for(let N=0;N<4;N++){let Z=N*Math.PI/2;a(O,.05,16777215,Math.sin(Z)*.6,.6,Math.cos(Z)*.6)}O.userData.mutation=B}function at(O,B){ce.material=s(O.color),se.material=s(O.roof),K.clear();for(let T=0;T<B;T++)h(K,.37,.4,.06,13745522,(T%4-1.5)*1.45,.09,Math.floor(T/4)*1.1-2.7,10);for(let T of[-3,3]){h(K,.3,.23,.5,O.roof,T,.3,3);for(let N=0;N<3;N++)a(K,.17,O.color===7833016?16769157:16229816,T+(N-1)*.2,.85,3)}}let P=v.map((O,B)=>{let T=o(O),N=u(T,1.15,.06,16766312,0,.1,0);N.rotation.x=Math.PI/2;let Z=o(T),V=Pe[B];if(B===0||B===9)h(Z,.18,.18,2.2,V.color,0,.45,0).rotation.z=Math.PI/2;else if(B===4||B===5||B===6)h(Z,0,.6,1.3,V.color,0,.7,0,6);else if(B===3||B===7||B===8)a(Z,.8,V.color,0,.14,0,1.4,.12,1);else if(B===10)l(Z,1.4,.45,1.2,16760158,0,1.4,0);else for(let le=0;le<3;le++)u(Z,.5+le*.2,.05,V.color,0,.3+le*.3,0).rotation.x=Math.PI/2;return{node:T,body:Z,ring:N}});function nt(O){P.forEach((B,T)=>{let N=O.hazard(T);B.node.position.set(N.x,0,N.z),B.ring.material=s(N.active?16740442:N.warning?16767842:13360333),B.body.visible=N.active||N.warning,B.body.scale.y=N.active?1:.3,B.body.rotation.y=O.time*(T+1)*.3})}return{hero:F,mutate:He,decorate:at,updateHazards:nt,equipAccessories:A,setTrainingPlaque:M,shieldBubble:$e,root:H,base:y,zoneGroups:v,nests:k,guardians:q,player:Ve,penContent:pe,egg:m,shopItem:E,creature:d,animateCreature:Ae,animate:Le,burst:Te,label:p,mat:s,group:o}}var ge=i=>document.getElementById(i),mc="integro-box-eggs-v1";function ah({onExit:i,registerAdapter:e}){let t=window.BoxStorage||localStorage,n=null,s="",r=null,o=null,c=null,l=!0;try{c=JSON.parse(t.getItem(mc)||"null")}catch{l=!1}let a=new ls(c),h=!1,u,f,p,x,M=0,m=0,d=0,D=0,A=null,E="gear",F=0,I=0,z=0,H=0,y=.52,v=.52,k=null,q=null,te="",j="",ce="",se=-1,pe=-1,K={},me=null,ve=null,we={x:0,z:0},ze=!1,Ve=new Set,$e=0,Ye=ge("eggApp"),Q=ge("eggCanvas"),he=new W,Te=b=>b.toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:2});function Le(){a.captureNests();try{t.setItem(mc,JSON.stringify(a.save)),l=!0,window.BoxEggCloud?.dirty()}catch{l=!1}}function Ae(b){ge("eggToast").textContent=b,F=performance.now()+6200}function He(){k=null,q=null,Q.classList.remove("dragging"),Ve.clear(),we={x:0,z:0},ze=!1,ve=null,me=null,ge("eggStick").style.transform="translate(0px,0px)",ge("eggSprint").classList.remove("held")}function at(){I=H,v=.52,k=null,q=null,Q.classList.remove("dragging"),ge("eggCamera").setAttribute("aria-pressed","false")}function P(){let b=Math.atan2(Math.sin(I-H),Math.cos(I-H));I=Math.abs(Math.abs(b)-Math.PI)<.2?H:H+Math.PI,v=.38,ge("eggCamera").setAttribute("aria-pressed",String(Math.abs(I-H)>.2))}Q.addEventListener("pointerdown",b=>{!h||A||k!==null||b.pointerType==="mouse"&&b.button!==0||(b.preventDefault(),k=b.pointerId,q={x:b.clientX,y:b.clientY},Q.setPointerCapture(b.pointerId),Q.classList.add("dragging"),Q.focus())}),Q.addEventListener("pointermove",b=>{if(b.pointerId!==k||!q||A)return;b.preventDefault();let re=b.clientX-q.x,w=b.clientY-q.y;I-=re/Math.max(240,Q.clientWidth)*Math.PI*2,I=Math.atan2(Math.sin(I),Math.cos(I)),v=Math.max(.2,Math.min(1.05,v+w/Math.max(200,Q.clientHeight)*1.6)),q={x:b.clientX,y:b.clientY},ge("eggCamera").setAttribute("aria-pressed","false")});let nt=b=>{b.pointerId===k&&(k=null,q=null,Q.classList.remove("dragging"))};for(let b of["pointerup","pointercancel","lostpointercapture"])Q.addEventListener(b,nt);e&&(o=e("egg",{scene:()=>f,active:()=>h,state:()=>({x:a.player.x,y:a.player.y,z:a.player.z,yaw:$e,zone:"world"}),enter:()=>{oe(),Ae("Sala conectada! Abra Amigos para correr, visitar e trocar.")},leave:()=>{r=null,j="",V()}}));function O(){let b=new Zs({alpha:!0,antialias:!0});b.setPixelRatio(1),b.setSize(130,120),b.outputColorSpace=gt,b.toneMapping=Vs,b.toneMappingExposure=1.2;let re=new qi;re.add(new ji(16777215,11057583,2.5));let w=new Qi(16777215,2);w.position.set(3,6,-5),re.add(w);let Y=new Mt(30,130/120,.1,30);for(let L=0;L<Pe.length;L++){let J=x.creature(re,Pe[L].kind,Pe[L].color);Y.position.set(2,1.8,-3.5),Y.lookAt(0,.78,0),b.render(re,Y),K[L]=b.domElement.toDataURL("image/png"),re.remove(J.g)}for(let L of[...Object.keys(yi),...Object.keys(cs),...Object.keys(an)]){let J=x.shopItem(re,L);Y.position.set(1.7,1.6,-3.1),Y.lookAt(0,.6,0),b.render(re,Y),K[L]=b.domElement.toDataURL("image/png"),re.remove(J)}for(let L of Object.keys(mt)){let J=x.egg(re,15505771,1,L);Y.position.set(1.7,1.6,-3.1),Y.lookAt(0,.6,0),b.render(re,Y),K["egg-"+L]=b.domElement.toDataURL("image/png"),re.remove(J)}b.dispose(),b.forceContextLoss()}function B(){try{u=new Zs({canvas:Q,antialias:!0,alpha:!1,powerPreference:"high-performance"}),u.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<950?1.25:1.6)),u.shadowMap.enabled=!0,u.shadowMap.type=Yr,u.outputColorSpace=gt,u.toneMapping=Vs,u.toneMappingExposure=1.1,f=new qi,f.background=new Xe(Pe[0].sky),f.fog=new Ps(Pe[0].sky,42,108),p=new Mt(52,1,.1,130),f.add(new ji(16775917,6983578,2));let b=new Qi(16774104,2.4);b.position.set(-10,20,13),b.castShadow=!0,b.shadow.mapSize.set(1024,1024),Object.assign(b.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:65}),b.shadow.normalBias=.035,b.shadow.bias=-2e-4,f.add(b),f.add(b.target),f.userData.sun=b,x=rh(f),O(),p.position.set(0,8,27),p.lookAt(0,1,10),new ResizeObserver(T).observe(ge("eggStage")),T(),V(),Se(),m=performance.now(),S(m)}catch(b){console.error("Pegue o Ovo 3D:",b),ge("eggWebglError").hidden=!1}}function T(){if(!u)return;let b=Q.clientWidth,re=Q.clientHeight;!b||!re||(u.setSize(b,re,!1),p.aspect=b/re,p.fov=b/re>2?58:b/re<1?64:52,p.updateProjectionMatrix())}function N(){let b=we.x+(Ve.has("d")||Ve.has("arrowright")?1:0)-(Ve.has("a")||Ve.has("arrowleft")?1:0),re=we.z+(Ve.has("s")||Ve.has("arrowdown")?1:0)-(Ve.has("w")||Ve.has("arrowup")?1:0);return p.getWorldDirection(he),he.y=0,he.normalize(),{x:-b*he.z-re*he.x,z:b*he.x-re*he.z,sprint:ze||Ve.has("shift")}}function Z(){for(let b of a.drainEvents())b.type==="grab"&&(H=Math.PI,at()),["caught","deposit","train"].includes(b.type)&&(H=0,at()),["grab","deposit","caught","hatch","level","sold","upgrade","juice","shield"].includes(b.type)&&(V(),Le()),b.type==="hatch"&&(x?.burst(new W(gn.x,1,gn.z),Pe[b.world].color),a.save.seen.every(Boolean)&&(b.text+=" Voc\xEA descobriu todas as 12 criaturas!")),b.type==="shield"&&x?.burst(new W(a.player.x,1,a.player.z),8843007),b.type==="level"&&x?.burst(new W(mn.x,1.5,mn.z),14283674),Ae(b.text)}function V(){if(!x)return;let b=r||a.save,re=JSON.stringify([b.decoration,a.capacity(),b.creatures,b.eggs]);if(re===j)return;j=re,x.decorate(Mi[b.decoration]||Mi.meadow,r?Math.max(3,b.creatures.length):a.capacity()),x.penContent.clear(),x.penContent.userData.actors=[];let w=0;for(let Y of b.eggs||[]){let L=x.egg(x.penContent,Pe[Y.world].color,.55,Y.rarity);x.mutate(L,Y.mutation),L.position.set((w%4-1.5)*1.45,.14,Math.floor(w/4)*1.1-2.7),L.userData.egg=Y.id,x.penContent.userData.actors.push({g:L,egg:!0,baseX:L.position.x,baseZ:L.position.z}),w++}for(let Y of b.creatures){let L=x.creature(x.penContent,Pe[Y.world].kind,Pe[Y.world].color,.52,Y.rarity);x.mutate(L.g,Y.mutation),L.g.position.set((w%4-1.5)*1.45,.12,Math.floor(w/4)*1.1-2.7),x.penContent.userData.actors.push({...L,baseX:L.g.position.x,baseZ:L.g.position.z}),w++}}function le(b,re){o?.tick(b),x.updateHazards(a);let w=a.companion();(w?.uid||"")!==s&&(n&&x.root.remove(n.g),s=w?.uid||"",n=w?x.creature(x.root,Pe[w.world].kind,Pe[w.world].color,.7,w.rarity):null,n&&(x.mutate(n.g,w.mutation),n.g.position.set(a.player.x+1,0,a.player.z+1))),n&&(n.g.position.lerp(new W(a.player.x+1,0,a.player.z+1.1),Math.min(1,b*5)),n.g.rotation.y=$e,x.animateCreature(n,a.time,a.moving));let Y=a.player,L=x.player;L.g.position.set(Y.x,Y.y+(a.mode==="train"?.37:0),Y.z),Math.hypot(re.x,re.z)>.05&&a.mode==="run"&&($e=Math.atan2(-re.x,-re.z)),a.mode==="train"&&($e=0);let J=Math.atan2(Math.sin($e-L.g.rotation.y),Math.cos($e-L.g.rotation.y));L.g.rotation.y+=J*Math.min(1,b*14);let ae=a.time*(a.sprinting?17:12),ie=a.moving;for(let ke=0;ke<2;ke++)L.legs[ke].rotation.x=Math.sin(ae+ke*Math.PI)*.7*ie,L.arms[ke].rotation.x=a.carrying!==null?1.03:Math.sin(ae+(ke+1)*Math.PI)*.55*ie;L.hips.position.y=.62+Math.abs(Math.sin(ae))*.035*ie,L.hips.rotation.z=a.carrying!==null?.025*Math.sin(ae):0;let _e=a.carriedEgg?`${a.carrying}:${a.carriedEgg.rarity}:${a.carriedEgg.mutation}`:"none";if(se!==_e){if(L.carry.clear(),a.carrying!==null){let ke=x.egg(L.carry,Pe[a.carrying].color,.65,a.carriedEgg.rarity);x.mutate(ke,a.carriedEgg.mutation)}se=_e}let Ne=JSON.stringify(a.save.equipped);Ne!==te&&(x.equipAccessories(L,a.save.equipped),te=Ne),x.shieldBubble.visible=a.carrying!==null&&a.guardians[a.carrying].grace>0&&a.guardians[a.carrying].grace>1.1;let Ke=a.zone();for(let ke=0;ke<Pe.length;ke++){x.zoneGroups[ke].visible=Math.abs(ke-Ke)<=2;let Nt=x.guardians[ke],on=a.guardians[ke],ds=on.x-Nt.g.position.x,js=on.z-Nt.g.position.z;Math.hypot(ds,js)>.005?Nt.g.rotation.y=Math.atan2(-ds,-js):on.state==="idle"&&(Nt.g.rotation.y=Math.sin(a.time*.5+ke)*.35),Nt.g.position.x=on.x,Nt.g.position.z=on.z,x.animateCreature(Nt,a.time+ke,on.state==="chase"||on.state==="return"?1:0),x.nests[ke].eggs.forEach((Ht,Fn)=>{let Si=a.nestEggs[ke][Fn],Qs=Si.rarity+Si.mutation;Ht.userData.signature!==Qs&&(x.nests[ke].g.remove(Ht),Ht=x.egg(x.nests[ke].g,Pe[ke].color,.8,Si.rarity),x.mutate(Ht,Si.mutation),Ht.userData.signature=Qs,Ht.position.set((Fn-1)*.85,.2,Fn===1?.42:0),x.nests[ke].eggs[Fn]=Ht),Ht.visible=a.nestEggs[ke][Fn].availableAt<=a.time,Ht.rotation.y=a.time*.6,Ht.position.y=.2+Math.sin(a.time*2+ke+Fn)*.04}),a.carrying===ke&&(Nt.g.visible=!0,x.zoneGroups[ke].visible=!0)}x.base.visible=Y.z>-88;for(let ke of x.penContent.userData.actors||[])ke.egg?ke.g.rotation.z=Math.sin(a.time*4+ke.baseX)*.06:(x.animateCreature(ke,a.time+ke.baseX,.1),ke.g.position.y+=.12,ke.g.position.x=ke.baseX+Math.sin(a.time*.6+ke.baseZ)*.16,ke.g.position.z=ke.baseZ+Math.cos(a.time*.45+ke.baseX)*.12,ke.g.rotation.y=Math.sin(a.time*.35+ke.baseX)*.7);let Qe=Math.atan2(Math.sin(I-z),Math.cos(I-z));z+=Qe*Math.min(1,b*5),y+=(v-y)*Math.min(1,b*8);let Zt=Q.clientWidth/Q.clientHeight>2,Ut=Zt?10:13.5,hs=Math.cos(y)*Ut,xn=Math.cos(z)*hs,us=Math.sin(z)*hs,Js=new W(Y.x+us,1.05+Math.sin(y)*Ut+Y.y*.25,Y.z+xn);p.position.lerp(Js,Math.min(1,b*9)),p.lookAt(Y.x-Math.sin(z)*3.3,1.05,Y.z-Math.cos(z)*3.3);let Ks=new Xe(Pe[Ke].sky);f.background.lerp(Ks,Math.min(1,b*.8)),f.fog.color.copy(f.background);let Qn=f.userData.sun;Qn.position.set(Y.x-10,20,Y.z+13),Qn.target.position.set(Y.x,0,Y.z),x.animate(b,a.mode==="train"?a.time:a.time*.3),pe!==Ke&&(pe=Ke,Y.z<0&&Ae(`${Ke+1}/${Pe.length} \xB7 ${Pe[Ke].name}. Dono: ${Te(jn(Ke))} de velocidade.`))}function Se(){let b=a.save,re=a.player,w=a.zone(),Y=[b.training,b.upgrades.boots,b.upgrades.gloves,b.companionId].join(":");x&&Y!==ce&&(ce=Y,Pe.forEach((ie,_e)=>x.setTrainingPlaque(_e,a.trainingAdvice(_e))));let L=a.trainingAdvice(a.carrying??w);ge("eggTrainingAdvice").textContent=`Treino recomendado: ${L.level} \xB7 ${L.ready?"N\xEDvel alcan\xE7ado":`faltam ${L.remaining}`}`,ge("eggTrainingAdvice").classList.toggle("ready",L.ready),ge("eggJuiceCount").textContent=b.supplies.juice,ge("eggShieldCount").textContent=b.supplies.shield,ge("eggJuice").disabled=!!A||a.mode!=="run"||!b.supplies.juice||a.energy>=a.maxEnergy()-1,ge("eggCoins").textContent=b.coins.toLocaleString("pt-BR"),ge("eggSpeed").textContent=Te(a.speed()),ge("eggLevel").textContent=b.training,ge("eggLevelMax").textContent=vi,ge("eggPenCount").textContent=b.creatures.length+b.eggs.length+"/"+a.capacity(),ge("eggEnergyFill").style.width=a.energy/a.maxEnergy()*100+"%",ge("eggWorldIndex").textContent=a.inBase()?"BASE SEGURA":`MUNDO ${w+1} DE ${Pe.length}`,ge("eggWorldName").textContent=a.inBase()?"Seu curral":Pe[w].name;for(let ie of ge("eggRoute").children){let _e=+ie.dataset.world;ie.classList.toggle("here",_e===w),ie.classList.toggle("visited",b.visited[_e])}let J=a.interaction();if(ge("eggInteract").textContent=r?"Voltar ao meu curral":J.label,ge("eggInteract").disabled=!r&&["walk","return","wait"].includes(J.type),ge("eggTraining").hidden=a.mode!=="train",ge("eggTrainText").textContent=`Pr\xF3ximo n\xEDvel: ${Math.ceil(Math.max(0,(a.trainTarget()-b.trainXP)/(1+b.upgrades.coach*.25)))} s \xB7 +0,35 de velocidade`,ge("eggTrainFill").style.width=b.trainXP/a.trainTarget()*100+"%",a.mode==="train")ge("eggMission").textContent="A esteira aumenta sua velocidade permanentemente.",ge("eggTarget").textContent=`TREINO ${b.training}/${vi}`;else if(a.carrying!==null)ge("eggMission").textContent=`Ovo ${mt[a.carriedEgg.rarity].name.toLowerCase()} \xB7 ${a.saleValue(a.carrying,a.carriedEgg.rarity,a.carriedEgg.mutation)} integros. Leve ao curral!`,ge("eggTarget").textContent=`CURRAL \xB7 ${Math.ceil(rn(re,gn))} m`;else{let ie=Un.map((_e,Ne)=>({i:Ne,d:rn(re,_e)})).filter(_e=>a.availableAt[_e.i]<=a.time).sort((_e,Ne)=>_e.d-Ne.d)[0];ge("eggMission").textContent=a.inBase()?"Pegue ovos, crie criaturas e fique mais r\xE1pido.":"Aproxime-se do ninho. Pegue o ovo e fuja!",ge("eggTarget").textContent=ie?`OVO \xB7 ${Math.ceil(ie.d)} m \xB7 ${Pe[ie.i].value} integros`:"Os ninhos est\xE3o preparando novos ovos."}let ae=ge("eggChase");ae.hidden=a.carrying===null,a.carrying!==null&&(ae.classList.toggle("safe",a.inBase()),ae.textContent=a.inBase()?"Voc\xEA est\xE1 seguro! Guarde o ovo.":`DONO A ${Math.max(0,Math.round(rn(re,a.guardians[a.carrying])))} m \xB7 ${Te(jn(a.carrying))}`)}function S(b){M=requestAnimationFrame(S);let re=Math.min(.05,Math.max(0,(b-m)/1e3));if(m=b,!(!h||!u)){if(!A&&!document.hidden){let w=N();a.mode==="train"&&Math.hypot(w.x,w.z)>.2&&a.interact(),window.BoxEggCloud?.frozen||a.update(re,w),Z(),le(re,w),D+=re,D>2&&(Le(),D=0)}u.render(f,p),d+=re,d>.1&&(Se(),d=0),ge("eggToast").textContent&&b>F&&(ge("eggToast").textContent="")}}function g(){if(A)return;if(r){r=null,j="",V(),Ae("Voc\xEA voltou ao seu curral.");return}let b=a.interact();b==="corral"&&C("corral"),b==="nest"&&C("nest"),Z(),Se(),A||Q.focus()}function U(){return`<ol class="egg-help-list"><li><strong>Siga a pista.</strong> Os ${Pe.length} mundos est\xE3o conectados. N\xE3o h\xE1 troca de tela. Os donos ficam mais r\xE1pidos a cada mundo.</li><li><strong>Escolha seu ovo.</strong> Cada ninho tem tr\xEAs ovos que se renovam a cada 3\u20134 minutos de jogo ativo. As muta\xE7\xF5es dourada, arco-\xEDris e c\xF3smica aumentam o valor em 1,5\xD7, 2\xD7 e 3\xD7. Aproxime-se, toque em \u201CEscolher ovo\u201D ou aperte E e escolha um. Comum vale 1\xD7, raro 3\xD7, \xE9pico 5\xD7 lend\xE1rio 8\xD7 e secreto 12\xD7; lend\xE1rios e secretos aparecem a partir da pista 7. A c\xE2mera vira para o curral; continue em frente para voltar.</li><li><strong>Fuja!</strong> Mova pelo controle ou WASD/setas. Use Espa\xE7o/Pular para saltar obst\xE1culos e Shift/Disparar para correr mais r\xE1pido. O f\xF4lego recarrega sozinho.</li><li><strong>Guarde no curral.</strong> Na base, v\xE1 at\xE9 o cercado e toque em \u201CGuardar ovo\u201D. Ele choca em ${a.hatchTime()} s de jogo ativo. O dono n\xE3o entra na base.</li><li><strong>Venda e melhore.</strong> No curral, recolha a produ\xE7\xE3o das criaturas ou venda-as por integros do jogo. Escolha uma como companheira para ganhar uma habilidade. Compre melhorias ou entre na esteira para treinar a velocidade. Cada barra completa aumenta o n\xEDvel, at\xE9 ${vi}.</li><li><strong>Confira a plaqueta do ovo.</strong> Ela mostra o treino recomendado e quantos n\xEDveis faltam. O c\xE1lculo considera seus t\xEAnis e luvas, com 10% de vantagem de velocidade carregando o ovo sem disparar. \xC9 uma refer\xEAncia: desvie dos obst\xE1culos durante a fuga.</li><li><strong>Olhe ao redor.</strong> Arraste a \xE1rea do cen\xE1rio com o dedo ou mouse para girar e inclinar a c\xE2mera. Use \u201CAtr\xE1s\u201D ou C para olhar para tr\xE1s; \u201CCentrar\u201D ou R volta \xE0 vista de corrida. O direcional acompanha a c\xE2mera: para cima vai \xE0 frente da tela; esquerda e direita seguem a vis\xE3o atual.</li><li><strong>Prepare sua mochila.</strong> O escudo protege automaticamente de uma captura. Toque em Suco para recuperar o f\xF4lego. Compre na base, com integros ganhas no jogo.</li></ol><p class="egg-muted">${l?"integros, criaturas, ovos no curral e treino ficam salvos neste navegador. Uma corrida em andamento recome\xE7a na base ao recarregar.":"O navegador n\xE3o permitiu salvar. O progresso ficar\xE1 apenas nesta sess\xE3o."} No portal, consulte Amigos e perfil para ver a situa\xE7\xE3o do salvamento online. O jogo pausa ao abrir um painel, trocar de jogo ou sair da tela. N\xE3o h\xE1 dinheiro real.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Jogar</button></div><button class="egg-reset" data-egg-action="resetAsk">Apagar progresso deste jogo</button>`}function $(){if(!A)return;let b=a.save,re="",w="PEGUE O OVO",Y="";if(A==="shop")re="Loja do corredor",w="22 ITENS \xB7 INTEGROS DO JOGO",Y=`<div class="egg-shop-balance">\u25CF ${b.coins.toLocaleString("pt-BR")} integros dispon\xEDveis</div><div class="egg-shop-tabs"><button data-shop-tab="gear" class="${E==="gear"?"selected":""}">Melhorias permanentes</button><button data-shop-tab="supplies" class="${E==="supplies"?"selected":""}">Mochila \xB7 ${b.supplies.shield+b.supplies.juice}</button><button data-shop-tab="accessories" class="${E==="accessories"?"selected":""}">Acess\xF3rios \xB7 ${b.accessories.length}/6</button><button data-shop-tab="decor" class="${E==="decor"?"selected":""}">Decora\xE7\xF5es</button></div>${a.inBase()?"":"<p>Volte \xE0 base para comprar.</p>"}<div class="egg-sheet-grid">`,E==="gear"?Y+=Object.entries(yi).map(([L,J])=>{let ae=b.upgrades[L]>=J.max,ie=a.price(L);return`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[L]}" alt="${J.name}"><small>N\xCDVEL ${b.upgrades[L]}/${J.max}</small><h3>${J.name}</h3><p>${J.desc}</p><div class="egg-level-dots" aria-label="${b.upgrades[L]} de ${J.max} n\xEDveis">${Array.from({length:J.max},(_e,Ne)=>`<i class="${Ne<b.upgrades[L]?"owned":""}"></i>`).join("")}</div><button class="egg-primary" data-buy="${L}" ${ae||b.coins<ie||!a.inBase()?"disabled":""}>${ae?"No m\xE1ximo":ie+" integros"}</button></article>`}).join(""):E==="supplies"?Y+=Object.entries(cs).map(([L,J])=>`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[L]}" alt="${J.name}"><small>NA MOCHILA: ${b.supplies[L]}/${J.max}</small><h3>${J.name}</h3><p>${J.desc}</p><button class="egg-primary" data-buy="${L}" ${b.supplies[L]>=J.max||b.coins<J.price||!a.inBase()?"disabled":""}>${b.supplies[L]>=J.max?"Mochila cheia":J.price+" integros"}</button></article>`).join(""):E==="decor"?Y+=Object.entries(Mi).map(([L,J])=>`<article class="egg-upgrade"><div class="egg-decor-preview" style="--decor:#${J.color.toString(16)};--roof:#${J.roof.toString(16)}">\u2302</div><h3>${J.name}</h3><p>Piso, cobertura e plantas do curral.</p><button class="egg-primary" data-buy="${L}" ${!a.inBase()||!b.decorations.includes(L)&&b.coins<J.price?"disabled":""}>${b.decoration===L?"Selecionado":b.decorations.includes(L)?"Decorar":J.price+" integros"}</button></article>`).join(""):Y+=Object.entries(an).map(([L,J])=>{let ae=b.accessories.includes(L),ie=b.equipped[J.slot]===L;return`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[L]}" alt="${J.name}"><small>${ie?"EQUIPADO":ae?"NA SUA COLE\xC7\xC3O":"ACESS\xD3RIO VISUAL"}</small><h3>${J.name}</h3><p>${J.desc} N\xE3o altera a velocidade.</p><button class="egg-primary" ${ae?`data-equip="${L}"`:`data-buy="${L}"`} ${!ae&&(b.coins<J.price||!a.inBase())?"disabled":""}>${ae?ie?"Guardar":"Equipar":J.price+" integros"}</button></article>`}).join(""),Y+="</div>";else if(A==="tracks")re="As 12 pistas",w="UMA CORRIDA CONT\xCDNUA",Y='<p>Os mundos se conectam na mesma pista. Siga em frente para explorar. Cada ovo mostra seu treino recomendado e quantos n\xEDveis faltam. A refer\xEAncia considera seus t\xEAnis e luvas: correr com o ovo 10% mais r\xE1pido que o dono, sem disparar. Desvie dos obst\xE1culos.</p><div class="egg-pet-grid">'+Pe.map((L,J)=>`<article class="egg-pet-card egg-track-card" style="--track-color:#${L.color.toString(16)}"><small>PISTA ${J+1} \xB7 ${b.visited[J]?"VISITADA":"PARA EXPLORAR"}</small><img src="${K[J]}" alt="${L.creature}"><strong>${L.name}</strong><p>${L.creature}</p><small>${fc[J]} \xB7 ${["Persegui\xE7\xE3o direta","Antecipa a dire\xE7\xE3o","Corrida em zigue-zague"][J%3]}${J>=3?" + arrancadas":""}</small><small>Dono: ${Te(jn(J))} de velocidade</small><div class="egg-track-training ${a.trainingAdvice(J).ready?"ready":""}"><strong>Treino recomendado: ${a.recommendedTraining(J)}</strong><span>${a.trainingAdvice(J).ready?"N\xEDvel alcan\xE7ado":`Faltam ${a.trainingAdvice(J).remaining} n\xEDveis`}</span></div><b>${a.saleValue(J).toLocaleString("pt-BR")} integros</b><small>${b.seen[J]?"\u2713 Criatura descoberta":"Leve o ovo ao curral"}</small></article>`).join("")+"</div>";else if(A==="corral")re="Seu curral",w=`${b.creatures.length+b.eggs.length}/${a.capacity()} ESPA\xC7OS \xB7 ${b.seen.filter(Boolean).length}/${Pe.length} CRIATURAS DESCOBERTAS`,Y=`<div class="egg-income"><strong>${Math.floor(b.incomePending)} integros para recolher</strong><span>Produ\xE7\xE3o: ${(a.incomeRate()*60).toFixed(1)} / min de jogo ativo</span><button class="egg-primary" data-collect ${!a.inBase()||b.incomePending<1?"disabled":""}>Recolher produ\xE7\xE3o</button></div><p>Companheiro: ${Ya(a.companion())}</p><p>Os ovos chocam durante o jogo ativo. ${a.inBase()?"Venda criaturas para ganhar integros.":"Volte \xE0 base para vender criaturas."}</p>`,!b.creatures.length&&!b.eggs.length?Y+='<div class="egg-empty"><strong>Seu primeiro ovo est\xE1 esperando!</strong><p>Siga a pista, pegue um ovo e traga at\xE9 o cercado.</p></div>':Y+='<div class="egg-pet-grid">'+b.eggs.map(L=>`<article class="egg-pet-card"><img src="${K["egg-"+L.rarity]}" alt="Ovo ${mt[L.rarity].name}"><strong>Ovo de ${Pe[L.world].creature}</strong><small>${mt[L.rarity].name} \xB7 ${a.saleValue(L.world,L.rarity,L.mutation)} integros</small><small>Choca em ${Math.ceil(L.remaining)} s de jogo</small><button class="egg-secondary" data-egg-action="resume">Continuar incubando</button></article>`).join("")+b.creatures.map(L=>`<article class="egg-pet-card"><img src="${K[L.world]}" alt="${Pe[L.world].creature}"><strong>${Pe[L.world].creature}</strong><small>${mt[L.rarity].name} \xB7 ${Nn[L.mutation].name}</small><small>Valor: ${a.saleValue(L.world,L.rarity,L.mutation)} integros</small><small>${Ya(L)}</small><button class="egg-secondary" data-pet="${L.uid}" ${a.inBase()?"":"disabled"}>${b.companionId===L.uid?"Guardar companheiro":"Acompanhar"}</button><button class="egg-primary" data-sell="${L.id}" ${a.inBase()?"":"disabled"}>Vender por ${a.saleValue(L.world,L.rarity,L.mutation)}</button></article>`).join("")+"</div>";else if(A==="nest"){let L=a.interaction().world;L===void 0?(re="Ninho distante",Y="<p>Aproxime-se de um ninho para escolher.</p>"):(re="Escolha um ovo",w=Pe[L].name.toUpperCase(),Y=`<p>Leve um ovo por vez ao curral. Os outros continuam no ninho. Treino recomendado: <strong>${a.recommendedTraining(L)}</strong>.</p><div class="egg-nest-grid">${a.nestEggs[L].map(J=>{let ae=mt[J.rarity],ie=J.availableAt<=a.time;return`<article class="egg-pet-card" style="border-top:5px solid #${ae.color.toString(16)}"><img src="${K["egg-"+J.rarity]}" alt="Ovo ${ae.name}"><strong>${ae.name} \xB7 ${Nn[J.mutation].name}</strong><small>Valor da criatura \xB7 ${ae.mult}\xD7</small><b>${a.saleValue(L,J.rarity,J.mutation)} integros</b><button class="egg-primary" data-steal="${J.slot}" ${ie?"":"disabled"}>${ie?"Pegar e correr":`Volta em ${Math.ceil(J.availableAt-a.time)} s de jogo`}</button></article>`}).join("")}</div>`)}else A==="missions"?(re="Miss\xF5es e cole\xE7\xE3o",w="CONQUISTAS \xB7 INTEGROS",Y=`<div class="egg-income"><strong>Expedi\xE7\xE3o do dia</strong><span>Entregue 3 ovos: ${Math.min(3,b.daily.delivered)}/3 \xB7 200 integros</span><button class="egg-primary" data-daily ${b.daily.claimed||b.daily.delivered<3?"disabled":""}>${b.daily.claimed?"Recompensa recebida":"Receber"}</button></div><div class="egg-sheet-grid">${$a.map(L=>`<article class="egg-upgrade"><h3>${L.name}</h3><progress value="${a.missionProgress(L)}" max="${L.target}"></progress><p>${a.missionProgress(L)}/${L.target} \xB7 ${L.reward} integros</p><button class="egg-primary" data-mission="${L.id}" ${b.claimed.includes(L.id)||a.missionProgress(L)<L.target?"disabled":""}>${b.claimed.includes(L.id)?"Conclu\xEDda":"Receber"}</button></article>`).join("")}</div><h3>\xC1lbum \xB7 ${b.album.length} combina\xE7\xF5es descobertas</h3><div class="egg-album">${b.album.map(L=>{let[J,ae,ie]=L.split(":");return Pe[J]?`<span>${Pe[J].creature} \xB7 ${mt[ae].name} \xB7 ${Nn[ie].name}</span>`:""}).join("")||"Traga ovos e descubra novas combina\xE7\xF5es!"}</div>`):A==="friends"?(re="Aventura com amigos",w="SALAS \xB7 CORRIDA \xB7 VISITAS \xB7 TROCAS",Y='<div id="eggOnlineContent"></div>'):A==="settings"?(re="Informa\xE7\xF5es e controles",w="PEGUE O OVO \xB7 ENGRENAGEM",Y=`<div class="egg-settings-stats"><span><b>2\xD7</b> velocidade dos donos</span><span><b>3</b> ovos por ninho</span><span><b>${b.training}/600</b> seu treino</span><span><b>${b.delivered}</b> ovos entregues</span></div><p>12 pistas cont\xEDnuas \xB7 5 raridades \xB7 4 muta\xE7\xF5es \xB7 22 itens na loja. Os donos ficam mais r\xE1pidos a cada pista. Veja na plaqueta o treino recomendado.</p><div class="egg-settings-buttons"><button class="egg-secondary" data-egg-action="missions">Miss\xF5es e cole\xE7\xE3o</button><button class="egg-secondary" data-egg-action="friends">Amigos e perfil</button><button class="egg-secondary" data-egg-action="shop">Loja e acess\xF3rios</button><button class="egg-secondary" data-egg-action="corral">Seu curral</button><button class="egg-secondary" data-egg-action="tracks">Pistas e treino</button><button class="egg-secondary" data-egg-action="help">Como jogar</button><button class="egg-secondary" data-control="behind">Olhar para tr\xE1s</button><button class="egg-secondary" data-control="center">Centrar c\xE2mera</button><button class="egg-secondary" data-control="fullscreen">Tela cheia</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div><dl class="egg-control-guide"><dt>WASD / setas ou direcional</dt><dd>Mover conforme a c\xE2mera</dd><dt>E / bot\xE3o de a\xE7\xE3o</dt><dd>Escolher ovo, guardar ou treinar</dd><dt>Espa\xE7o / \u2191</dt><dd>Pular</dd><dt>Shift / \u03DF</dt><dd>Disparar enquanto segura</dd><dt>Arrastar o cen\xE1rio</dt><dd>Girar e inclinar a c\xE2mera</dd><dt>C \xB7 R \xB7 Esc</dt><dd>Olhar atr\xE1s \xB7 centrar \xB7 pausar</dd></dl><button class="egg-primary" data-egg-action="resume">Voltar ao jogo</button>`):A==="help"?(re="Como jogar",Y=U()):A==="reset"?(re="Apagar este progresso?",Y='<p>Isso zera as integros, criaturas, ovos, treino e melhorias do Pegue o Ovo.</p><div class="egg-modal-actions"><button class="egg-secondary" data-egg-action="help">Manter meu progresso</button><button class="egg-primary" data-egg-action="resetConfirm">Apagar e recome\xE7ar</button></div>'):(re="Uma pausa na aventura",Y=`<p>Seu jogo est\xE1 pausado. ${b.seen.filter(Boolean).length} de ${Pe.length} criaturas descobertas \xB7 ${b.delivered} ovos entregues.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Continuar</button><button class="egg-secondary" data-egg-action="help">Como jogar</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div>`);ge("eggSheetTitle").textContent=re,ge("eggSheetTag").textContent=w,ge("eggSheetBody").innerHTML=Y,R(),ge("eggSheetBody").querySelectorAll("[data-shop-tab]").forEach(L=>L.onclick=()=>{E=L.dataset.shopTab,$()}),ge("eggSheetBody").querySelectorAll("[data-steal]").forEach(L=>L.onclick=()=>{a.steal(+L.dataset.steal)&&(oe(),Z(),Se())}),ge("eggSheetBody").querySelectorAll("[data-equip]").forEach(L=>L.onclick=()=>{a.equip(L.dataset.equip)&&(Z(),$())}),ge("eggSheetBody").querySelectorAll("[data-control]").forEach(L=>L.onclick=()=>{let J=L.dataset.control;oe(),J==="behind"&&P(),J==="center"&&at(),J==="fullscreen"&&ge("eggFullscreen").click()}),ge("eggSheetBody").querySelectorAll("[data-buy]").forEach(L=>L.onclick=()=>{a.buy(L.dataset.buy)&&(Z(),$(),Se())}),ge("eggSheetBody").querySelectorAll("[data-sell]").forEach(L=>L.onclick=()=>{a.sell(+L.dataset.sell)&&(Z(),$(),Se())}),ge("eggSheetBody").querySelectorAll("[data-egg-action]").forEach(L=>L.onclick=()=>{let J=L.dataset.eggAction;J==="resume"&&oe(),["help","shop","corral","tracks","missions","friends"].includes(J)&&C(J),J==="exit"&&(xe(),i()),J==="resetAsk"&&C("reset"),J==="resetConfirm"&&(a=new ls(pc()),H=0,at(),z=0,y=.52,$e=0,j="force",ce="",se=-1,V(),Le(),oe(),Ae("Nova aventura! Siga a pista para encontrar o primeiro ovo."))})}function R(){let b=ge("eggSheetBody"),re=(w,Y)=>b.querySelectorAll(w).forEach(L=>L.onclick=()=>{Y(L),Z(),$(),Se()});re("[data-collect]",()=>a.collectIncome()),re("[data-pet]",w=>a.equipPet(w.dataset.pet)),re("[data-mission]",w=>a.claimMission(w.dataset.mission)),re("[data-daily]",()=>a.claimDaily()),A==="friends"&&(window.BoxEggCloud?window.BoxEggCloud.render(ge("eggOnlineContent")):ge("eggOnlineContent").innerHTML='<p>O progresso fica neste navegador. As salas, visitas, trocas e salvamento por perfil est\xE3o no portal da fam\xEDlia.</p><a class="egg-primary" href="https://www.institutointegro.com.br/integro-box/" target="_blank" rel="noopener">Abrir Integro Box no portal</a>')}function C(b){He(),A=b,ge("eggSheet").hidden=!1,$(),ge("eggCloseSheet").focus(),Le()}function oe(){A=null,ge("eggSheet").hidden=!0,He(),m=performance.now(),Q.focus()}function ue(){Ye.hidden=!1,h=!0,u?(T(),m=performance.now()):B(),Se(),Q.focus(),Ae("Arraste o cen\xE1rio para olhar ao redor. Toque em Atr\xE1s para ver o perseguidor."),window.scrollTo(0,0)}function xe(){Le(),h=!1,Ye.hidden=!0,A=null,ge("eggSheet").hidden=!0,He()}ge("eggMissions").onclick=()=>C("missions"),ge("eggFriends").onclick=()=>C("friends"),ge("eggRoute").onclick=()=>C("tracks"),ge("eggRoute").innerHTML=Pe.map((b,re)=>`<span data-world="${re}" style="--world-color:#${b.color.toString(16)}" title="${b.name}"><b>${re+1}</b>${b.short}</span>`).join(""),ge("eggInteract").onclick=g,ge("eggStopTraining").onclick=g,ge("eggJump").onclick=()=>{A||a.jump(),Q.focus()},ge("eggCamera").onclick=()=>{P(),Q.focus()},ge("eggCenterCamera").onclick=()=>{at(),Q.focus()},ge("eggSettings").onclick=()=>C("settings"),ge("eggPause").onclick=()=>C("pause"),ge("eggShop").onclick=()=>C("shop"),ge("eggTracks").onclick=()=>C("tracks"),ge("eggJuice").onclick=()=>{!A&&a.useJuice()&&(Z(),Se(),Q.focus())},ge("eggCorral").onclick=()=>C("corral"),ge("eggCloseSheet").onclick=oe,ge("eggReload").onclick=()=>location.reload(),ge("eggFullscreen").onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await Ye.requestFullscreen();try{await screen.orientation?.lock("landscape")}catch{}}}catch{Ae("Gire o celular para o modo paisagem para ampliar o jogo.")}};let be=ge("eggJoystick");function de(b){let re=be.getBoundingClientRect(),w=re.width*.32,Y=b.clientX-re.left-re.width/2,L=b.clientY-re.top-re.height/2,J=Math.hypot(Y,L),ae=J>w?w/J:1;we={x:Y*ae/w,z:L*ae/w},ge("eggStick").style.transform=`translate(${Y*ae}px,${L*ae}px)`}be.addEventListener("pointerdown",b=>{A||(b.preventDefault(),me=b.pointerId,be.setPointerCapture(b.pointerId),de(b))}),be.addEventListener("pointermove",b=>{b.pointerId===me&&de(b)});let Me=b=>{b.pointerId===me&&(me=null,we={x:0,z:0},ge("eggStick").style.transform="translate(0px,0px)")};for(let b of["pointerup","pointercancel","lostpointercapture"])be.addEventListener(b,Me);let De=ge("eggSprint");De.addEventListener("pointerdown",b=>{A||(b.preventDefault(),ve=b.pointerId,De.setPointerCapture(b.pointerId),ze=!0,De.classList.add("held"))});let Ie=b=>{b.pointerId===ve&&(ze=!1,ve=null,De.classList.remove("held"))};for(let b of["pointerup","pointercancel","lostpointercapture"])De.addEventListener(b,Ie);return document.addEventListener("keydown",b=>{if(!h||b.target?.closest("input,select,textarea,[contenteditable=true],#boxOnline"))return;let re=b.key.toLowerCase();if(re==="escape"){b.preventDefault(),A?oe():C("pause");return}if(A){if(re==="tab"){let w=[...ge("eggSheet").querySelectorAll("button:not([disabled])")];b.shiftKey&&document.activeElement===w[0]?(b.preventDefault(),w.at(-1)?.focus()):!b.shiftKey&&document.activeElement===w.at(-1)&&(b.preventDefault(),w[0]?.focus())}return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","c","r"].includes(re)&&(b.preventDefault(),Ve.add(re),b.repeat||(re===" "&&a.jump(),re==="e"&&g(),re==="c"&&P(),re==="r"&&at()))}),document.addEventListener("keyup",b=>Ve.delete(b.key.toLowerCase())),window.addEventListener("blur",He),document.addEventListener("visibilitychange",()=>{document.hidden&&h&&(Le(),C("pause"))}),window.addEventListener("pagehide",Le),window.BoxEggRuntime={save:()=>(a.captureNests(),JSON.parse(JSON.stringify(a.save))),apply:b=>{a=new ls(b),r=null,j="",V(),Se();try{t.setItem(mc,JSON.stringify(a.save))}catch{}A&&$()},active:()=>h,inBase:()=>a.inBase()&&a.carrying===null,visit:b=>{r=b,a.player.x=0,a.player.z=15,j="",V(),oe(),Ae("Visitando o curral do colega. Toque em Voltar para sair.")},message:Ae,openFriends:()=>C("friends"),pause:()=>C("pause"),raceMode:b=>{a.raceMode=b},raceStart:()=>{r=null,a.carriedEgg&&(a.nestEggs[a.carrying][a.carriedEgg.slot].availableAt=a.time+5,a.guardians[a.carrying].state="return"),a.mode="run",a.carrying=null,a.carriedEgg=null,a.player.x=0,a.player.z=15,a.player.y=0,He(),oe()},stop:xe},window.IntegroOvo={getState:()=>({...a.snapshot(),active:h,paused:!!A,sheet:A,thumbnailCount:Object.keys(K).length,visibleNestEggs:x?.nests.map(b=>b.eggs.filter(re=>re.visible).length),equippedModels:x?.player.wear.children.length,plaques:x?.nests.map(b=>({...b.plaque.sprite.userData.advice})),cameraYaw:I,cameraActualYaw:z,cameraForward:p?p.getWorldDirection(new W).toArray():null,cameraPitch:v,movementYaw:H,webgl:!!u}),getScreenPoints:()=>p?[{name:"curral",...gn},{name:"esteira",...mn},...Un.map((b,re)=>({name:"ninho"+re,...b}))].map(b=>{let re=new W(b.x,1,b.z).project(p),w=Q.getBoundingClientRect();return{name:b.name,x:w.left+(re.x+1)*w.width/2,y:w.top+(1-re.y)*w.height/2}}):[]},{show:ue,hide:xe,help:()=>C("help"),get active(){return h}}}window.BoxEgg={mountEggGame:ah,worldNames:Pe.map(i=>i.name),petName:i=>`${Pe[i.world]?.creature||"Criatura"} \xB7 ${mt[i.rarity]?.name||"Comum"} \xB7 ${Nn[i.mutation]?.name||"Natural"}`};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
