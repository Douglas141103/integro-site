var au=Object.create;var ql=Object.defineProperty;var ou=Object.getOwnPropertyDescriptor;var lu=Object.getOwnPropertyNames;var cu=Object.getPrototypeOf,hu=Object.prototype.hasOwnProperty;var uu=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var fu=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of lu(e))!hu.call(s,i)&&i!==t&&ql(s,i,{get:()=>e[i],enumerable:!(n=ou(e,i))||n.enumerable});return s};var du=(s,e,t)=>(t=s!=null?au(cu(s)):{},fu(e||!s||!s.__esModule?ql(t,"default",{value:s,enumerable:!0}):t,s));var Zh=uu((Qs,Nl)=>{(function(e,t){typeof Qs=="object"&&typeof Nl=="object"?Nl.exports=t():typeof define=="function"&&define.amd?define("Matter",[],t):typeof Qs=="object"?Qs.Matter=t():e.Matter=t()})(Qs,function(){return(function(s){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return s[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=s,t.c=e,t.d=function(n,i,r){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:r})},t.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(i&1&&(n=t(n)),i&8||i&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),i&2&&typeof n!="string")for(var a in n)t.d(r,a,function(o){return n[o]}.bind(null,a));return r},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=20)})([(function(s,e){var t={};s.exports=t,(function(){t._baseDelta=1e3/60,t._nextId=0,t._seed=0,t._nowStartTime=+new Date,t._warnedOnce={},t._decomp=null,t.extend=function(i,r){var a,o,c;typeof r=="boolean"?(a=2,c=r):(a=1,c=!0);for(var h=a;h<arguments.length;h++){var u=arguments[h];if(u)for(var l in u)c&&u[l]&&u[l].constructor===Object&&(!i[l]||i[l].constructor===Object)?(i[l]=i[l]||{},t.extend(i[l],c,u[l])):i[l]=u[l]}return i},t.clone=function(i,r){return t.extend({},r,i)},t.keys=function(i){if(Object.keys)return Object.keys(i);var r=[];for(var a in i)r.push(a);return r},t.values=function(i){var r=[];if(Object.keys){for(var a=Object.keys(i),o=0;o<a.length;o++)r.push(i[a[o]]);return r}for(var c in i)r.push(i[c]);return r},t.get=function(i,r,a,o){r=r.split(".").slice(a,o);for(var c=0;c<r.length;c+=1)i=i[r[c]];return i},t.set=function(i,r,a,o,c){var h=r.split(".").slice(o,c);return t.get(i,r,0,-1)[h[h.length-1]]=a,a},t.shuffle=function(i){for(var r=i.length-1;r>0;r--){var a=Math.floor(t.random()*(r+1)),o=i[r];i[r]=i[a],i[a]=o}return i},t.choose=function(i){return i[Math.floor(t.random()*i.length)]},t.isElement=function(i){return typeof HTMLElement<"u"?i instanceof HTMLElement:!!(i&&i.nodeType&&i.nodeName)},t.isArray=function(i){return Object.prototype.toString.call(i)==="[object Array]"},t.isFunction=function(i){return typeof i=="function"},t.isPlainObject=function(i){return typeof i=="object"&&i.constructor===Object},t.isString=function(i){return toString.call(i)==="[object String]"},t.clamp=function(i,r,a){return i<r?r:i>a?a:i},t.sign=function(i){return i<0?-1:1},t.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-t._nowStartTime},t.random=function(i,r){return i=typeof i<"u"?i:0,r=typeof r<"u"?r:1,i+n()*(r-i)};var n=function(){return t._seed=(t._seed*9301+49297)%233280,t._seed/233280};t.colorToNumber=function(i){return i=i.replace("#",""),i.length==3&&(i=i.charAt(0)+i.charAt(0)+i.charAt(1)+i.charAt(1)+i.charAt(2)+i.charAt(2)),parseInt(i,16)},t.logLevel=1,t.log=function(){console&&t.logLevel>0&&t.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},t.info=function(){console&&t.logLevel>0&&t.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},t.warn=function(){console&&t.logLevel>0&&t.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},t.warnOnce=function(){var i=Array.prototype.slice.call(arguments).join(" ");t._warnedOnce[i]||(t.warn(i),t._warnedOnce[i]=!0)},t.deprecated=function(i,r,a){i[r]=t.chain(function(){t.warnOnce("\u{1F505} deprecated \u{1F505}",a)},i[r])},t.nextId=function(){return t._nextId++},t.indexOf=function(i,r){if(i.indexOf)return i.indexOf(r);for(var a=0;a<i.length;a++)if(i[a]===r)return a;return-1},t.map=function(i,r){if(i.map)return i.map(r);for(var a=[],o=0;o<i.length;o+=1)a.push(r(i[o]));return a},t.topologicalSort=function(i){var r=[],a=[],o=[];for(var c in i)!a[c]&&!o[c]&&t._topologicalSort(c,a,o,i,r);return r},t._topologicalSort=function(i,r,a,o,c){var h=o[i]||[];a[i]=!0;for(var u=0;u<h.length;u+=1){var l=h[u];a[l]||r[l]||t._topologicalSort(l,r,a,o,c)}a[i]=!1,r[i]=!0,c.push(i)},t.chain=function(){for(var i=[],r=0;r<arguments.length;r+=1){var a=arguments[r];a._chained?i.push.apply(i,a._chained):i.push(a)}var o=function(){for(var c,h=new Array(arguments.length),u=0,l=arguments.length;u<l;u++)h[u]=arguments[u];for(u=0;u<i.length;u+=1){var f=i[u].apply(c,h);typeof f<"u"&&(c=f)}return c};return o._chained=i,o},t.chainPathBefore=function(i,r,a){return t.set(i,r,t.chain(a,t.get(i,r)))},t.chainPathAfter=function(i,r,a){return t.set(i,r,t.chain(t.get(i,r),a))},t.setDecomp=function(i){t._decomp=i},t.getDecomp=function(){var i=t._decomp;try{!i&&typeof window<"u"&&(i=window.decomp),!i&&typeof global<"u"&&(i=global.decomp)}catch{i=null}return i}})()}),(function(s,e){var t={};s.exports=t,(function(){t.create=function(n){var i={min:{x:0,y:0},max:{x:0,y:0}};return n&&t.update(i,n),i},t.update=function(n,i,r){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var a=0;a<i.length;a++){var o=i[a];o.x>n.max.x&&(n.max.x=o.x),o.x<n.min.x&&(n.min.x=o.x),o.y>n.max.y&&(n.max.y=o.y),o.y<n.min.y&&(n.min.y=o.y)}r&&(r.x>0?n.max.x+=r.x:n.min.x+=r.x,r.y>0?n.max.y+=r.y:n.min.y+=r.y)},t.contains=function(n,i){return i.x>=n.min.x&&i.x<=n.max.x&&i.y>=n.min.y&&i.y<=n.max.y},t.overlaps=function(n,i){return n.min.x<=i.max.x&&n.max.x>=i.min.x&&n.max.y>=i.min.y&&n.min.y<=i.max.y},t.translate=function(n,i){n.min.x+=i.x,n.max.x+=i.x,n.min.y+=i.y,n.max.y+=i.y},t.shift=function(n,i){var r=n.max.x-n.min.x,a=n.max.y-n.min.y;n.min.x=i.x,n.max.x=i.x+r,n.min.y=i.y,n.max.y=i.y+a}})()}),(function(s,e){var t={};s.exports=t,(function(){t.create=function(n,i){return{x:n||0,y:i||0}},t.clone=function(n){return{x:n.x,y:n.y}},t.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},t.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},t.rotate=function(n,i,r){var a=Math.cos(i),o=Math.sin(i);r||(r={});var c=n.x*a-n.y*o;return r.y=n.x*o+n.y*a,r.x=c,r},t.rotateAbout=function(n,i,r,a){var o=Math.cos(i),c=Math.sin(i);a||(a={});var h=r.x+((n.x-r.x)*o-(n.y-r.y)*c);return a.y=r.y+((n.x-r.x)*c+(n.y-r.y)*o),a.x=h,a},t.normalise=function(n){var i=t.magnitude(n);return i===0?{x:0,y:0}:{x:n.x/i,y:n.y/i}},t.dot=function(n,i){return n.x*i.x+n.y*i.y},t.cross=function(n,i){return n.x*i.y-n.y*i.x},t.cross3=function(n,i,r){return(i.x-n.x)*(r.y-n.y)-(i.y-n.y)*(r.x-n.x)},t.add=function(n,i,r){return r||(r={}),r.x=n.x+i.x,r.y=n.y+i.y,r},t.sub=function(n,i,r){return r||(r={}),r.x=n.x-i.x,r.y=n.y-i.y,r},t.mult=function(n,i){return{x:n.x*i,y:n.y*i}},t.div=function(n,i){return{x:n.x/i,y:n.y/i}},t.perp=function(n,i){return i=i===!0?-1:1,{x:i*-n.y,y:i*n.x}},t.neg=function(n){return{x:-n.x,y:-n.y}},t.angle=function(n,i){return Math.atan2(i.y-n.y,i.x-n.x)},t._temp=[t.create(),t.create(),t.create(),t.create(),t.create(),t.create()]})()}),(function(s,e,t){var n={};s.exports=n;var i=t(2),r=t(0);(function(){n.create=function(a,o){for(var c=[],h=0;h<a.length;h++){var u=a[h],l={x:u.x,y:u.y,index:h,body:o,isInternal:!1};c.push(l)}return c},n.fromPath=function(a,o){var c=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,h=[];return a.replace(c,function(u,l,f){h.push({x:parseFloat(l),y:parseFloat(f)})}),n.create(h,o)},n.centre=function(a){for(var o=n.area(a,!0),c={x:0,y:0},h,u,l,f=0;f<a.length;f++)l=(f+1)%a.length,h=i.cross(a[f],a[l]),u=i.mult(i.add(a[f],a[l]),h),c=i.add(c,u);return i.div(c,6*o)},n.mean=function(a){for(var o={x:0,y:0},c=0;c<a.length;c++)o.x+=a[c].x,o.y+=a[c].y;return i.div(o,a.length)},n.area=function(a,o){for(var c=0,h=a.length-1,u=0;u<a.length;u++)c+=(a[h].x-a[u].x)*(a[h].y+a[u].y),h=u;return o?c/2:Math.abs(c)/2},n.inertia=function(a,o){for(var c=0,h=0,u=a,l,f,d=0;d<u.length;d++)f=(d+1)%u.length,l=Math.abs(i.cross(u[f],u[d])),c+=l*(i.dot(u[f],u[f])+i.dot(u[f],u[d])+i.dot(u[d],u[d])),h+=l;return o/6*(c/h)},n.translate=function(a,o,c){c=typeof c<"u"?c:1;var h=a.length,u=o.x*c,l=o.y*c,f;for(f=0;f<h;f++)a[f].x+=u,a[f].y+=l;return a},n.rotate=function(a,o,c){if(o!==0){var h=Math.cos(o),u=Math.sin(o),l=c.x,f=c.y,d=a.length,p,v,g,m;for(m=0;m<d;m++)p=a[m],v=p.x-l,g=p.y-f,p.x=l+(v*h-g*u),p.y=f+(v*u+g*h);return a}},n.contains=function(a,o){for(var c=o.x,h=o.y,u=a.length,l=a[u-1],f,d=0;d<u;d++){if(f=a[d],(c-l.x)*(f.y-l.y)+(h-l.y)*(l.x-f.x)>0)return!1;l=f}return!0},n.scale=function(a,o,c,h){if(o===1&&c===1)return a;h=h||n.centre(a);for(var u,l,f=0;f<a.length;f++)u=a[f],l=i.sub(u,h),a[f].x=h.x+l.x*o,a[f].y=h.y+l.y*c;return a},n.chamfer=function(a,o,c,h,u){typeof o=="number"?o=[o]:o=o||[8],c=typeof c<"u"?c:-1,h=h||2,u=u||14;for(var l=[],f=0;f<a.length;f++){var d=a[f-1>=0?f-1:a.length-1],p=a[f],v=a[(f+1)%a.length],g=o[f<o.length?f:o.length-1];if(g===0){l.push(p);continue}var m=i.normalise({x:p.y-d.y,y:d.x-p.x}),S=i.normalise({x:v.y-p.y,y:p.x-v.x}),x=Math.sqrt(2*Math.pow(g,2)),y=i.mult(r.clone(m),g),w=i.normalise(i.mult(i.add(m,S),.5)),M=i.sub(p,i.mult(w,x)),T=c;c===-1&&(T=Math.pow(g,.32)*1.75),T=r.clamp(T,h,u),T%2===1&&(T+=1);for(var E=Math.acos(i.dot(m,S)),_=E/T,b=0;b<T;b++)l.push(i.add(i.rotate(y,_*b),M))}return l},n.clockwiseSort=function(a){var o=n.mean(a);return a.sort(function(c,h){return i.angle(o,c)-i.angle(o,h)}),a},n.isConvex=function(a){var o=0,c=a.length,h,u,l,f;if(c<3)return null;for(h=0;h<c;h++)if(u=(h+1)%c,l=(h+2)%c,f=(a[u].x-a[h].x)*(a[l].y-a[u].y),f-=(a[u].y-a[h].y)*(a[l].x-a[u].x),f<0?o|=1:f>0&&(o|=2),o===3)return!1;return o!==0?!0:null},n.hull=function(a){var o=[],c=[],h,u;for(a=a.slice(0),a.sort(function(l,f){var d=l.x-f.x;return d!==0?d:l.y-f.y}),u=0;u<a.length;u+=1){for(h=a[u];c.length>=2&&i.cross3(c[c.length-2],c[c.length-1],h)<=0;)c.pop();c.push(h)}for(u=a.length-1;u>=0;u-=1){for(h=a[u];o.length>=2&&i.cross3(o[o.length-2],o[o.length-1],h)<=0;)o.pop();o.push(h)}return o.pop(),c.pop(),o.concat(c)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(2),a=t(7),o=t(0),c=t(1),h=t(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(l){var f={id:o.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},d=o.extend(f,l);return u(d,l),d},n.nextGroup=function(l){return l?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var u=function(l,f){f=f||{},n.set(l,{bounds:l.bounds||c.create(l.vertices),positionPrev:l.positionPrev||r.clone(l.position),anglePrev:l.anglePrev||l.angle,vertices:l.vertices,parts:l.parts||[l],isStatic:l.isStatic,isSleeping:l.isSleeping,parent:l.parent||l}),i.rotate(l.vertices,l.angle,l.position),h.rotate(l.axes,l.angle),c.update(l.bounds,l.vertices,l.velocity),n.set(l,{axes:f.axes||l.axes,area:f.area||l.area,mass:f.mass||l.mass,inertia:f.inertia||l.inertia});var d=l.isStatic?"#14151f":o.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=l.isStatic?"#555":"#ccc",v=l.isStatic&&l.render.fillStyle===null?1:0;l.render.fillStyle=l.render.fillStyle||d,l.render.strokeStyle=l.render.strokeStyle||p,l.render.lineWidth=l.render.lineWidth||v,l.render.sprite.xOffset+=-(l.bounds.min.x-l.position.x)/(l.bounds.max.x-l.bounds.min.x),l.render.sprite.yOffset+=-(l.bounds.min.y-l.position.y)/(l.bounds.max.y-l.bounds.min.y)};n.set=function(l,f,d){var p;typeof f=="string"&&(p=f,f={},f[p]=d);for(p in f)if(Object.prototype.hasOwnProperty.call(f,p))switch(d=f[p],p){case"isStatic":n.setStatic(l,d);break;case"isSleeping":a.set(l,d);break;case"mass":n.setMass(l,d);break;case"density":n.setDensity(l,d);break;case"inertia":n.setInertia(l,d);break;case"vertices":n.setVertices(l,d);break;case"position":n.setPosition(l,d);break;case"angle":n.setAngle(l,d);break;case"velocity":n.setVelocity(l,d);break;case"angularVelocity":n.setAngularVelocity(l,d);break;case"speed":n.setSpeed(l,d);break;case"angularSpeed":n.setAngularSpeed(l,d);break;case"parts":n.setParts(l,d);break;case"centre":n.setCentre(l,d);break;default:l[p]=d}},n.setStatic=function(l,f){for(var d=0;d<l.parts.length;d++){var p=l.parts[d];f?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=f}},n.setMass=function(l,f){var d=l.inertia/(l.mass/6);l.inertia=d*(f/6),l.inverseInertia=1/l.inertia,l.mass=f,l.inverseMass=1/l.mass,l.density=l.mass/l.area},n.setDensity=function(l,f){n.setMass(l,f*l.area),l.density=f},n.setInertia=function(l,f){l.inertia=f,l.inverseInertia=1/l.inertia},n.setVertices=function(l,f){f[0].body===l?l.vertices=f:l.vertices=i.create(f,l),l.axes=h.fromVertices(l.vertices),l.area=i.area(l.vertices),n.setMass(l,l.density*l.area);var d=i.centre(l.vertices);i.translate(l.vertices,d,-1),n.setInertia(l,n._inertiaScale*i.inertia(l.vertices,l.mass)),i.translate(l.vertices,l.position),c.update(l.bounds,l.vertices,l.velocity)},n.setParts=function(l,f,d){var p;for(f=f.slice(0),l.parts.length=0,l.parts.push(l),l.parent=l,p=0;p<f.length;p++){var v=f[p];v!==l&&(v.parent=l,l.parts.push(v))}if(l.parts.length!==1){if(d=typeof d<"u"?d:!0,d){var g=[];for(p=0;p<f.length;p++)g=g.concat(f[p].vertices);i.clockwiseSort(g);var m=i.hull(g),S=i.centre(m);n.setVertices(l,m),i.translate(l.vertices,S)}var x=n._totalProperties(l);l.area=x.area,l.parent=l,l.position.x=x.centre.x,l.position.y=x.centre.y,l.positionPrev.x=x.centre.x,l.positionPrev.y=x.centre.y,n.setMass(l,x.mass),n.setInertia(l,x.inertia),n.setPosition(l,x.centre)}},n.setCentre=function(l,f,d){d?(l.positionPrev.x+=f.x,l.positionPrev.y+=f.y,l.position.x+=f.x,l.position.y+=f.y):(l.positionPrev.x=f.x-(l.position.x-l.positionPrev.x),l.positionPrev.y=f.y-(l.position.y-l.positionPrev.y),l.position.x=f.x,l.position.y=f.y)},n.setPosition=function(l,f,d){var p=r.sub(f,l.position);d?(l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.velocity.x=p.x,l.velocity.y=p.y,l.speed=r.magnitude(p)):(l.positionPrev.x+=p.x,l.positionPrev.y+=p.y);for(var v=0;v<l.parts.length;v++){var g=l.parts[v];g.position.x+=p.x,g.position.y+=p.y,i.translate(g.vertices,p),c.update(g.bounds,g.vertices,l.velocity)}},n.setAngle=function(l,f,d){var p=f-l.angle;d?(l.anglePrev=l.angle,l.angularVelocity=p,l.angularSpeed=Math.abs(p)):l.anglePrev+=p;for(var v=0;v<l.parts.length;v++){var g=l.parts[v];g.angle+=p,i.rotate(g.vertices,p,l.position),h.rotate(g.axes,p),c.update(g.bounds,g.vertices,l.velocity),v>0&&r.rotateAbout(g.position,p,l.position,g.position)}},n.setVelocity=function(l,f){var d=l.deltaTime/n._baseDelta;l.positionPrev.x=l.position.x-f.x*d,l.positionPrev.y=l.position.y-f.y*d,l.velocity.x=(l.position.x-l.positionPrev.x)/d,l.velocity.y=(l.position.y-l.positionPrev.y)/d,l.speed=r.magnitude(l.velocity)},n.getVelocity=function(l){var f=n._baseDelta/l.deltaTime;return{x:(l.position.x-l.positionPrev.x)*f,y:(l.position.y-l.positionPrev.y)*f}},n.getSpeed=function(l){return r.magnitude(n.getVelocity(l))},n.setSpeed=function(l,f){n.setVelocity(l,r.mult(r.normalise(n.getVelocity(l)),f))},n.setAngularVelocity=function(l,f){var d=l.deltaTime/n._baseDelta;l.anglePrev=l.angle-f*d,l.angularVelocity=(l.angle-l.anglePrev)/d,l.angularSpeed=Math.abs(l.angularVelocity)},n.getAngularVelocity=function(l){return(l.angle-l.anglePrev)*n._baseDelta/l.deltaTime},n.getAngularSpeed=function(l){return Math.abs(n.getAngularVelocity(l))},n.setAngularSpeed=function(l,f){n.setAngularVelocity(l,o.sign(n.getAngularVelocity(l))*f)},n.translate=function(l,f,d){n.setPosition(l,r.add(l.position,f),d)},n.rotate=function(l,f,d,p){if(!d)n.setAngle(l,l.angle+f,p);else{var v=Math.cos(f),g=Math.sin(f),m=l.position.x-d.x,S=l.position.y-d.y;n.setPosition(l,{x:d.x+(m*v-S*g),y:d.y+(m*g+S*v)},p),n.setAngle(l,l.angle+f,p)}},n.scale=function(l,f,d,p){var v=0,g=0;p=p||l.position;for(var m=0;m<l.parts.length;m++){var S=l.parts[m];i.scale(S.vertices,f,d,p),S.axes=h.fromVertices(S.vertices),S.area=i.area(S.vertices),n.setMass(S,l.density*S.area),i.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),n.setInertia(S,n._inertiaScale*i.inertia(S.vertices,S.mass)),i.translate(S.vertices,{x:S.position.x,y:S.position.y}),m>0&&(v+=S.area,g+=S.inertia),S.position.x=p.x+(S.position.x-p.x)*f,S.position.y=p.y+(S.position.y-p.y)*d,c.update(S.bounds,S.vertices,l.velocity)}l.parts.length>1&&(l.area=v,l.isStatic||(n.setMass(l,l.density*v),n.setInertia(l,g))),l.circleRadius&&(f===d?l.circleRadius*=f:l.circleRadius=null)},n.update=function(l,f){f=(typeof f<"u"?f:1e3/60)*l.timeScale;var d=f*f,p=n._timeCorrection?f/(l.deltaTime||f):1,v=1-l.frictionAir*(f/o._baseDelta),g=(l.position.x-l.positionPrev.x)*p,m=(l.position.y-l.positionPrev.y)*p;l.velocity.x=g*v+l.force.x/l.mass*d,l.velocity.y=m*v+l.force.y/l.mass*d,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.position.x+=l.velocity.x,l.position.y+=l.velocity.y,l.deltaTime=f,l.angularVelocity=(l.angle-l.anglePrev)*v*p+l.torque/l.inertia*d,l.anglePrev=l.angle,l.angle+=l.angularVelocity;for(var S=0;S<l.parts.length;S++){var x=l.parts[S];i.translate(x.vertices,l.velocity),S>0&&(x.position.x+=l.velocity.x,x.position.y+=l.velocity.y),l.angularVelocity!==0&&(i.rotate(x.vertices,l.angularVelocity,l.position),h.rotate(x.axes,l.angularVelocity),S>0&&r.rotateAbout(x.position,l.angularVelocity,l.position,x.position)),c.update(x.bounds,x.vertices,l.velocity)}},n.updateVelocities=function(l){var f=n._baseDelta/l.deltaTime,d=l.velocity;d.x=(l.position.x-l.positionPrev.x)*f,d.y=(l.position.y-l.positionPrev.y)*f,l.speed=Math.sqrt(d.x*d.x+d.y*d.y),l.angularVelocity=(l.angle-l.anglePrev)*f,l.angularSpeed=Math.abs(l.angularVelocity)},n.applyForce=function(l,f,d){var p={x:f.x-l.position.x,y:f.y-l.position.y};l.force.x+=d.x,l.force.y+=d.y,l.torque+=p.x*d.y-p.y*d.x},n._totalProperties=function(l){for(var f={mass:0,area:0,inertia:0,centre:{x:0,y:0}},d=l.parts.length===1?0:1;d<l.parts.length;d++){var p=l.parts[d],v=p.mass!==1/0?p.mass:1;f.mass+=v,f.area+=p.area,f.inertia+=p.inertia,f.centre=r.add(f.centre,r.mult(p.position,v))}return f.centre=r.div(f.centre,f.mass),f}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(0);(function(){n.on=function(r,a,o){for(var c=a.split(" "),h,u=0;u<c.length;u++)h=c[u],r.events=r.events||{},r.events[h]=r.events[h]||[],r.events[h].push(o);return o},n.off=function(r,a,o){if(!a){r.events={};return}typeof a=="function"&&(o=a,a=i.keys(r.events).join(" "));for(var c=a.split(" "),h=0;h<c.length;h++){var u=r.events[c[h]],l=[];if(o&&u)for(var f=0;f<u.length;f++)u[f]!==o&&l.push(u[f]);r.events[c[h]]=l}},n.trigger=function(r,a,o){var c,h,u,l,f=r.events;if(f&&i.keys(f).length>0){o||(o={}),c=a.split(" ");for(var d=0;d<c.length;d++)if(h=c[d],u=f[h],u){l=i.clone(o,!1),l.name=h,l.source=r;for(var p=0;p<u.length;p++)u[p].apply(r,[l])}}}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(5),r=t(0),a=t(1),o=t(4);(function(){n.create=function(c){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},c)},n.setModified=function(c,h,u,l){if(c.isModified=h,h&&c.cache&&(c.cache.allBodies=null,c.cache.allConstraints=null,c.cache.allComposites=null),u&&c.parent&&n.setModified(c.parent,h,u,l),l)for(var f=0;f<c.composites.length;f++){var d=c.composites[f];n.setModified(d,h,u,l)}},n.add=function(c,h){var u=[].concat(h);i.trigger(c,"beforeAdd",{object:h});for(var l=0;l<u.length;l++){var f=u[l];switch(f.type){case"body":if(f.parent!==f){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(c,f);break;case"constraint":n.addConstraint(c,f);break;case"composite":n.addComposite(c,f);break;case"mouseConstraint":n.addConstraint(c,f.constraint);break}}return i.trigger(c,"afterAdd",{object:h}),c},n.remove=function(c,h,u){var l=[].concat(h);i.trigger(c,"beforeRemove",{object:h});for(var f=0;f<l.length;f++){var d=l[f];switch(d.type){case"body":n.removeBody(c,d,u);break;case"constraint":n.removeConstraint(c,d,u);break;case"composite":n.removeComposite(c,d,u);break;case"mouseConstraint":n.removeConstraint(c,d.constraint);break}}return i.trigger(c,"afterRemove",{object:h}),c},n.addComposite=function(c,h){return c.composites.push(h),h.parent=c,n.setModified(c,!0,!0,!1),c},n.removeComposite=function(c,h,u){var l=r.indexOf(c.composites,h);if(l!==-1){var f=n.allBodies(h);n.removeCompositeAt(c,l);for(var d=0;d<f.length;d++)f[d].sleepCounter=0}if(u)for(var d=0;d<c.composites.length;d++)n.removeComposite(c.composites[d],h,!0);return c},n.removeCompositeAt=function(c,h){return c.composites.splice(h,1),n.setModified(c,!0,!0,!1),c},n.addBody=function(c,h){return c.bodies.push(h),n.setModified(c,!0,!0,!1),c},n.removeBody=function(c,h,u){var l=r.indexOf(c.bodies,h);if(l!==-1&&(n.removeBodyAt(c,l),h.sleepCounter=0),u)for(var f=0;f<c.composites.length;f++)n.removeBody(c.composites[f],h,!0);return c},n.removeBodyAt=function(c,h){return c.bodies.splice(h,1),n.setModified(c,!0,!0,!1),c},n.addConstraint=function(c,h){return c.constraints.push(h),n.setModified(c,!0,!0,!1),c},n.removeConstraint=function(c,h,u){var l=r.indexOf(c.constraints,h);if(l!==-1&&n.removeConstraintAt(c,l),u)for(var f=0;f<c.composites.length;f++)n.removeConstraint(c.composites[f],h,!0);return c},n.removeConstraintAt=function(c,h){return c.constraints.splice(h,1),n.setModified(c,!0,!0,!1),c},n.clear=function(c,h,u){if(u)for(var l=0;l<c.composites.length;l++)n.clear(c.composites[l],h,!0);return h?c.bodies=c.bodies.filter(function(f){return f.isStatic}):c.bodies.length=0,c.constraints.length=0,c.composites.length=0,n.setModified(c,!0,!0,!1),c},n.allBodies=function(c){if(c.cache&&c.cache.allBodies)return c.cache.allBodies;for(var h=[].concat(c.bodies),u=0;u<c.composites.length;u++)h=h.concat(n.allBodies(c.composites[u]));return c.cache&&(c.cache.allBodies=h),h},n.allConstraints=function(c){if(c.cache&&c.cache.allConstraints)return c.cache.allConstraints;for(var h=[].concat(c.constraints),u=0;u<c.composites.length;u++)h=h.concat(n.allConstraints(c.composites[u]));return c.cache&&(c.cache.allConstraints=h),h},n.allComposites=function(c){if(c.cache&&c.cache.allComposites)return c.cache.allComposites;for(var h=[].concat(c.composites),u=0;u<c.composites.length;u++)h=h.concat(n.allComposites(c.composites[u]));return c.cache&&(c.cache.allComposites=h),h},n.get=function(c,h,u){var l,f;switch(u){case"body":l=n.allBodies(c);break;case"constraint":l=n.allConstraints(c);break;case"composite":l=n.allComposites(c).concat(c);break}return l?(f=l.filter(function(d){return d.id.toString()===h.toString()}),f.length===0?null:f[0]):null},n.move=function(c,h,u){return n.remove(c,h),n.add(u,h),c},n.rebase=function(c){for(var h=n.allBodies(c).concat(n.allConstraints(c)).concat(n.allComposites(c)),u=0;u<h.length;u++)h[u].id=r.nextId();return c},n.translate=function(c,h,u){for(var l=u?n.allBodies(c):c.bodies,f=0;f<l.length;f++)o.translate(l[f],h);return c},n.rotate=function(c,h,u,l){for(var f=Math.cos(h),d=Math.sin(h),p=l?n.allBodies(c):c.bodies,v=0;v<p.length;v++){var g=p[v],m=g.position.x-u.x,S=g.position.y-u.y;o.setPosition(g,{x:u.x+(m*f-S*d),y:u.y+(m*d+S*f)}),o.rotate(g,h)}return c},n.scale=function(c,h,u,l,f){for(var d=f?n.allBodies(c):c.bodies,p=0;p<d.length;p++){var v=d[p],g=v.position.x-l.x,m=v.position.y-l.y;o.setPosition(v,{x:l.x+g*h,y:l.y+m*u}),o.scale(v,h,u)}return c},n.bounds=function(c){for(var h=n.allBodies(c),u=[],l=0;l<h.length;l+=1){var f=h[l];u.push(f.bounds.min,f.bounds.max)}return a.create(u)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(4),r=t(5),a=t(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(o,c){for(var h=c/a._baseDelta,u=n._motionSleepThreshold,l=0;l<o.length;l++){var f=o[l],d=i.getSpeed(f),p=i.getAngularSpeed(f),v=d*d+p*p;if(f.force.x!==0||f.force.y!==0){n.set(f,!1);continue}var g=Math.min(f.motion,v),m=Math.max(f.motion,v);f.motion=n._minBias*g+(1-n._minBias)*m,f.sleepThreshold>0&&f.motion<u?(f.sleepCounter+=1,f.sleepCounter>=f.sleepThreshold/h&&n.set(f,!0)):f.sleepCounter>0&&(f.sleepCounter-=1)}},n.afterCollisions=function(o){for(var c=n._motionSleepThreshold,h=0;h<o.length;h++){var u=o[h];if(u.isActive){var l=u.collision,f=l.bodyA.parent,d=l.bodyB.parent;if(!(f.isSleeping&&d.isSleeping||f.isStatic||d.isStatic)&&(f.isSleeping||d.isSleeping)){var p=f.isSleeping&&!f.isStatic?f:d,v=p===f?d:f;!p.isStatic&&v.motion>c&&n.set(p,!1)}}}},n.set=function(o,c){var h=o.isSleeping;c?(o.isSleeping=!0,o.sleepCounter=o.sleepThreshold,o.positionImpulse.x=0,o.positionImpulse.y=0,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.anglePrev=o.angle,o.speed=0,o.angularSpeed=0,o.motion=0,h||r.trigger(o,"sleepStart")):(o.isSleeping=!1,o.sleepCounter=0,h&&r.trigger(o,"sleepEnd"))}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(9);(function(){var a=[],o={overlap:0,axis:null},c={overlap:0,axis:null};n.create=function(h,u){return{pair:null,collided:!1,bodyA:h,bodyB:u,parentA:h.parent,parentB:u.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},n.collides=function(h,u,l){if(n._overlapAxes(o,h.vertices,u.vertices,h.axes),o.overlap<=0||(n._overlapAxes(c,u.vertices,h.vertices,u.axes),c.overlap<=0))return null;var f=l&&l.table[r.id(h,u)],d;f?d=f.collision:(d=n.create(h,u),d.collided=!0,d.bodyA=h.id<u.id?h:u,d.bodyB=h.id<u.id?u:h,d.parentA=d.bodyA.parent,d.parentB=d.bodyB.parent),h=d.bodyA,u=d.bodyB;var p;o.overlap<c.overlap?p=o:p=c;var v=d.normal,g=d.tangent,m=d.penetration,S=d.supports,x=p.overlap,y=p.axis,w=y.x,M=y.y,T=u.position.x-h.position.x,E=u.position.y-h.position.y;w*T+M*E>=0&&(w=-w,M=-M),v.x=w,v.y=M,g.x=-M,g.y=w,m.x=w*x,m.y=M*x,d.depth=x;var _=n._findSupports(h,u,v,1),b=0;if(i.contains(h.vertices,_[0])&&(S[b++]=_[0]),i.contains(h.vertices,_[1])&&(S[b++]=_[1]),b<2){var A=n._findSupports(u,h,v,-1);i.contains(u.vertices,A[0])&&(S[b++]=A[0]),b<2&&i.contains(u.vertices,A[1])&&(S[b++]=A[1])}return b===0&&(S[b++]=_[0]),d.supportCount=b,d},n._overlapAxes=function(h,u,l,f){var d=u.length,p=l.length,v=u[0].x,g=u[0].y,m=l[0].x,S=l[0].y,x=f.length,y=Number.MAX_VALUE,w=0,M,T,E,_,b,A;for(b=0;b<x;b++){var I=f[b],D=I.x,N=I.y,F=v*D+g*N,z=m*D+S*N,X=F,W=z;for(A=1;A<d;A+=1)_=u[A].x*D+u[A].y*N,_>X?X=_:_<F&&(F=_);for(A=1;A<p;A+=1)_=l[A].x*D+l[A].y*N,_>W?W=_:_<z&&(z=_);if(T=X-z,E=W-F,M=T<E?T:E,M<y&&(y=M,w=b,M<=0))break}h.axis=f[w],h.overlap=y},n._findSupports=function(h,u,l,f){var d=u.vertices,p=d.length,v=h.position.x,g=h.position.y,m=l.x*f,S=l.y*f,x=d[0],y=x,w=m*(v-y.x)+S*(g-y.y),M,T,E;for(E=1;E<p;E+=1)y=d[E],T=m*(v-y.x)+S*(g-y.y),T<w&&(w=T,x=y);return M=d[(p+x.index-1)%p],w=m*(v-M.x)+S*(g-M.y),y=d[(x.index+1)%p],m*(v-y.x)+S*(g-y.y)<w?(a[0]=x,a[1]=y,a):(a[0]=x,a[1]=M,a)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(16);(function(){n.create=function(r,a){var o=r.bodyA,c=r.bodyB,h={id:n.id(o,c),bodyA:o,bodyB:c,collision:r,contacts:[i.create(),i.create()],contactCount:0,separation:0,isActive:!0,isSensor:o.isSensor||c.isSensor,timeCreated:a,timeUpdated:a,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(h,r,a),h},n.update=function(r,a,o){var c=a.supports,h=a.supportCount,u=r.contacts,l=a.parentA,f=a.parentB;r.isActive=!0,r.timeUpdated=o,r.collision=a,r.separation=a.depth,r.inverseMass=l.inverseMass+f.inverseMass,r.friction=l.friction<f.friction?l.friction:f.friction,r.frictionStatic=l.frictionStatic>f.frictionStatic?l.frictionStatic:f.frictionStatic,r.restitution=l.restitution>f.restitution?l.restitution:f.restitution,r.slop=l.slop>f.slop?l.slop:f.slop,r.contactCount=h,a.pair=r;var d=c[0],p=u[0],v=c[1],g=u[1];(g.vertex===d||p.vertex===v)&&(u[1]=p,u[0]=p=g,g=u[1]),p.vertex=d,g.vertex=v},n.setActive=function(r,a,o){a?(r.isActive=!0,r.timeUpdated=o):(r.isActive=!1,r.contactCount=0)},n.id=function(r,a){return r.id<a.id?r.id.toString(36)+":"+a.id.toString(36):a.id.toString(36)+":"+r.id.toString(36)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(2),a=t(7),o=t(1),c=t(11),h=t(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(u){var l=u;l.bodyA&&!l.pointA&&(l.pointA={x:0,y:0}),l.bodyB&&!l.pointB&&(l.pointB={x:0,y:0});var f=l.bodyA?r.add(l.bodyA.position,l.pointA):l.pointA,d=l.bodyB?r.add(l.bodyB.position,l.pointB):l.pointB,p=r.magnitude(r.sub(f,d));l.length=typeof l.length<"u"?l.length:p,l.id=l.id||h.nextId(),l.label=l.label||"Constraint",l.type="constraint",l.stiffness=l.stiffness||(l.length>0?1:.7),l.damping=l.damping||0,l.angularStiffness=l.angularStiffness||0,l.angleA=l.bodyA?l.bodyA.angle:l.angleA,l.angleB=l.bodyB?l.bodyB.angle:l.angleB,l.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return l.length===0&&l.stiffness>.1?(v.type="pin",v.anchors=!1):l.stiffness<.9&&(v.type="spring"),l.render=h.extend(v,l.render),l},n.preSolveAll=function(u){for(var l=0;l<u.length;l+=1){var f=u[l],d=f.constraintImpulse;f.isStatic||d.x===0&&d.y===0&&d.angle===0||(f.position.x+=d.x,f.position.y+=d.y,f.angle+=d.angle)}},n.solveAll=function(u,l){for(var f=h.clamp(l/h._baseDelta,0,1),d=0;d<u.length;d+=1){var p=u[d],v=!p.bodyA||p.bodyA&&p.bodyA.isStatic,g=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(v||g)&&n.solve(u[d],f)}for(d=0;d<u.length;d+=1)p=u[d],v=!p.bodyA||p.bodyA&&p.bodyA.isStatic,g=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!v&&!g&&n.solve(u[d],f)},n.solve=function(u,l){var f=u.bodyA,d=u.bodyB,p=u.pointA,v=u.pointB;if(!(!f&&!d)){f&&!f.isStatic&&(r.rotate(p,f.angle-u.angleA,p),u.angleA=f.angle),d&&!d.isStatic&&(r.rotate(v,d.angle-u.angleB,v),u.angleB=d.angle);var g=p,m=v;if(f&&(g=r.add(f.position,p)),d&&(m=r.add(d.position,v)),!(!g||!m)){var S=r.sub(g,m),x=r.magnitude(S);x<n._minLength&&(x=n._minLength);var y=(x-u.length)/x,w=u.stiffness>=1||u.length===0,M=w?u.stiffness*l:u.stiffness*l*l,T=u.damping*l,E=r.mult(S,y*M),_=(f?f.inverseMass:0)+(d?d.inverseMass:0),b=(f?f.inverseInertia:0)+(d?d.inverseInertia:0),A=_+b,I,D,N,F,z;if(T>0){var X=r.create();N=r.div(S,x),z=r.sub(d&&r.sub(d.position,d.positionPrev)||X,f&&r.sub(f.position,f.positionPrev)||X),F=r.dot(N,z)}f&&!f.isStatic&&(D=f.inverseMass/_,f.constraintImpulse.x-=E.x*D,f.constraintImpulse.y-=E.y*D,f.position.x-=E.x*D,f.position.y-=E.y*D,T>0&&(f.positionPrev.x-=T*N.x*F*D,f.positionPrev.y-=T*N.y*F*D),I=r.cross(p,E)/A*n._torqueDampen*f.inverseInertia*(1-u.angularStiffness),f.constraintImpulse.angle-=I,f.angle-=I),d&&!d.isStatic&&(D=d.inverseMass/_,d.constraintImpulse.x+=E.x*D,d.constraintImpulse.y+=E.y*D,d.position.x+=E.x*D,d.position.y+=E.y*D,T>0&&(d.positionPrev.x+=T*N.x*F*D,d.positionPrev.y+=T*N.y*F*D),I=r.cross(v,E)/A*n._torqueDampen*d.inverseInertia*(1-u.angularStiffness),d.constraintImpulse.angle+=I,d.angle+=I)}}},n.postSolveAll=function(u){for(var l=0;l<u.length;l++){var f=u[l],d=f.constraintImpulse;if(!(f.isStatic||d.x===0&&d.y===0&&d.angle===0)){a.set(f,!1);for(var p=0;p<f.parts.length;p++){var v=f.parts[p];i.translate(v.vertices,d),p>0&&(v.position.x+=d.x,v.position.y+=d.y),d.angle!==0&&(i.rotate(v.vertices,d.angle,f.position),c.rotate(v.axes,d.angle),p>0&&r.rotateAbout(v.position,d.angle,f.position,v.position)),o.update(v.bounds,v.vertices,f.velocity)}d.angle*=n._warming,d.x*=n._warming,d.y*=n._warming}}},n.pointAWorld=function(u){return{x:(u.bodyA?u.bodyA.position.x:0)+(u.pointA?u.pointA.x:0),y:(u.bodyA?u.bodyA.position.y:0)+(u.pointA?u.pointA.y:0)}},n.pointBWorld=function(u){return{x:(u.bodyB?u.bodyB.position.x:0)+(u.pointB?u.pointB.x:0),y:(u.bodyB?u.bodyB.position.y:0)+(u.pointB?u.pointB.y:0)}},n.currentLength=function(u){var l=(u.bodyA?u.bodyA.position.x:0)+(u.pointA?u.pointA.x:0),f=(u.bodyA?u.bodyA.position.y:0)+(u.pointA?u.pointA.y:0),d=(u.bodyB?u.bodyB.position.x:0)+(u.pointB?u.pointB.x:0),p=(u.bodyB?u.bodyB.position.y:0)+(u.pointB?u.pointB.y:0),v=l-d,g=f-p;return Math.sqrt(v*v+g*g)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(2),r=t(0);(function(){n.fromVertices=function(a){for(var o={},c=0;c<a.length;c++){var h=(c+1)%a.length,u=i.normalise({x:a[h].y-a[c].y,y:a[c].x-a[h].x}),l=u.y===0?1/0:u.x/u.y;l=l.toFixed(3).toString(),o[l]=u}return r.values(o)},n.rotate=function(a,o){if(o!==0)for(var c=Math.cos(o),h=Math.sin(o),u=0;u<a.length;u++){var l=a[u],f;f=l.x*c-l.y*h,l.y=l.x*h+l.y*c,l.x=f}}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(0),a=t(4),o=t(1),c=t(2);(function(){n.rectangle=function(h,u,l,f,d){d=d||{};var p={label:"Rectangle Body",position:{x:h,y:u},vertices:i.fromPath("L 0 0 L "+l+" 0 L "+l+" "+f+" L 0 "+f)};if(d.chamfer){var v=d.chamfer;p.vertices=i.chamfer(p.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete d.chamfer}return a.create(r.extend({},p,d))},n.trapezoid=function(h,u,l,f,d,p){p=p||{},d>=1&&r.warn("Bodies.trapezoid: slope parameter must be < 1."),d*=.5;var v=(1-d*2)*l,g=l*d,m=g+v,S=m+g,x;d<.5?x="L 0 0 L "+g+" "+-f+" L "+m+" "+-f+" L "+S+" 0":x="L 0 0 L "+m+" "+-f+" L "+S+" 0";var y={label:"Trapezoid Body",position:{x:h,y:u},vertices:i.fromPath(x)};if(p.chamfer){var w=p.chamfer;y.vertices=i.chamfer(y.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete p.chamfer}return a.create(r.extend({},y,p))},n.circle=function(h,u,l,f,d){f=f||{};var p={label:"Circle Body",circleRadius:l};d=d||25;var v=Math.ceil(Math.max(10,Math.min(d,l)));return v%2===1&&(v+=1),n.polygon(h,u,v,l,r.extend({},p,f))},n.polygon=function(h,u,l,f,d){if(d=d||{},l<3)return n.circle(h,u,f,d);for(var p=2*Math.PI/l,v="",g=p*.5,m=0;m<l;m+=1){var S=g+m*p,x=Math.cos(S)*f,y=Math.sin(S)*f;v+="L "+x.toFixed(3)+" "+y.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:h,y:u},vertices:i.fromPath(v)};if(d.chamfer){var M=d.chamfer;w.vertices=i.chamfer(w.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete d.chamfer}return a.create(r.extend({},w,d))},n.fromVertices=function(h,u,l,f,d,p,v,g){var m=r.getDecomp(),S,x,y,w,M,T,E,_,b,A,I;for(S=!!(m&&m.quickDecomp),f=f||{},y=[],d=typeof d<"u"?d:!1,p=typeof p<"u"?p:.01,v=typeof v<"u"?v:10,g=typeof g<"u"?g:.01,r.isArray(l[0])||(l=[l]),A=0;A<l.length;A+=1)if(T=l[A],w=i.isConvex(T),M=!w,M&&!S&&r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!S)w?T=i.clockwiseSort(T):T=i.hull(T),y.push({position:{x:h,y:u},vertices:T});else{var D=T.map(function(we){return[we.x,we.y]});m.makeCCW(D),p!==!1&&m.removeCollinearPoints(D,p),g!==!1&&m.removeDuplicatePoints&&m.removeDuplicatePoints(D,g);var N=m.quickDecomp(D);for(E=0;E<N.length;E++){var F=N[E],z=F.map(function(we){return{x:we[0],y:we[1]}});v>0&&i.area(z)<v||y.push({position:i.centre(z),vertices:z})}}for(E=0;E<y.length;E++)y[E]=a.create(r.extend(y[E],f));if(d){var X=5;for(E=0;E<y.length;E++){var W=y[E];for(_=E+1;_<y.length;_++){var se=y[_];if(o.overlaps(W.bounds,se.bounds)){var re=W.vertices,ue=se.vertices;for(b=0;b<W.vertices.length;b++)for(I=0;I<se.vertices.length;I++){var De=c.magnitudeSquared(c.sub(re[(b+1)%re.length],ue[I])),Oe=c.magnitudeSquared(c.sub(re[b],ue[(I+1)%ue.length]));De<X&&Oe<X&&(re[b].isInternal=!0,ue[I].isInternal=!0)}}}}}return y.length>1?(x=a.create(r.extend({parts:y.slice(0)},f)),a.setPosition(x,{x:h,y:u}),x):y[0]}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(0),r=t(8);(function(){n.create=function(a){var o={bodies:[],collisions:[],pairs:null};return i.extend(o,a)},n.setBodies=function(a,o){a.bodies=o.slice(0)},n.clear=function(a){a.bodies=[],a.collisions=[]},n.collisions=function(a){var o=a.pairs,c=a.bodies,h=c.length,u=n.canCollide,l=r.collides,f=a.collisions,d=0,p,v;for(c.sort(n._compareBoundsX),p=0;p<h;p++){var g=c[p],m=g.bounds,S=g.bounds.max.x,x=g.bounds.max.y,y=g.bounds.min.y,w=g.isStatic||g.isSleeping,M=g.parts.length,T=M===1;for(v=p+1;v<h;v++){var E=c[v],_=E.bounds;if(_.min.x>S)break;if(!(x<_.min.y||y>_.max.y)&&!(w&&(E.isStatic||E.isSleeping))&&u(g.collisionFilter,E.collisionFilter)){var b=E.parts.length;if(T&&b===1){var A=l(g,E,o);A&&(f[d++]=A)}else for(var I=M>1?1:0,D=b>1?1:0,N=I;N<M;N++)for(var F=g.parts[N],m=F.bounds,z=D;z<b;z++){var X=E.parts[z],_=X.bounds;if(!(m.min.x>_.max.x||m.max.x<_.min.x||m.max.y<_.min.y||m.min.y>_.max.y)){var A=l(F,X,o);A&&(f[d++]=A)}}}}}return f.length!==d&&(f.length=d),f},n.canCollide=function(a,o){return a.group===o.group&&a.group!==0?a.group>0:(a.mask&o.category)!==0&&(o.mask&a.category)!==0},n._compareBoundsX=function(a,o){return a.bounds.min.x-o.bounds.min.x}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(0);(function(){n.create=function(r){var a={};return r||i.log("Mouse.create: element was undefined, defaulting to document.body","warn"),a.element=r||document.body,a.absolute={x:0,y:0},a.position={x:0,y:0},a.mousedownPosition={x:0,y:0},a.mouseupPosition={x:0,y:0},a.offset={x:0,y:0},a.scale={x:1,y:1},a.wheelDelta=0,a.button=-1,a.pixelRatio=parseInt(a.element.getAttribute("data-pixel-ratio"),10)||1,a.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},a.mousemove=function(o){var c=n._getRelativeMousePosition(o,a.element,a.pixelRatio),h=o.changedTouches;h&&(a.button=0,o.preventDefault()),a.absolute.x=c.x,a.absolute.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y,a.sourceEvents.mousemove=o},a.mousedown=function(o){var c=n._getRelativeMousePosition(o,a.element,a.pixelRatio),h=o.changedTouches;h?(a.button=0,o.preventDefault()):a.button=o.button,a.absolute.x=c.x,a.absolute.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y,a.mousedownPosition.x=a.position.x,a.mousedownPosition.y=a.position.y,a.sourceEvents.mousedown=o},a.mouseup=function(o){var c=n._getRelativeMousePosition(o,a.element,a.pixelRatio),h=o.changedTouches;h&&o.preventDefault(),a.button=-1,a.absolute.x=c.x,a.absolute.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y,a.mouseupPosition.x=a.position.x,a.mouseupPosition.y=a.position.y,a.sourceEvents.mouseup=o},a.mousewheel=function(o){a.wheelDelta=Math.max(-1,Math.min(1,o.wheelDelta||-o.detail)),o.preventDefault(),a.sourceEvents.mousewheel=o},n.setElement(a,a.element),a},n.setElement=function(r,a){r.element=a,a.addEventListener("mousemove",r.mousemove,{passive:!0}),a.addEventListener("mousedown",r.mousedown,{passive:!0}),a.addEventListener("mouseup",r.mouseup,{passive:!0}),a.addEventListener("wheel",r.mousewheel,{passive:!1}),a.addEventListener("touchmove",r.mousemove,{passive:!1}),a.addEventListener("touchstart",r.mousedown,{passive:!1}),a.addEventListener("touchend",r.mouseup,{passive:!1})},n.clearSourceEvents=function(r){r.sourceEvents.mousemove=null,r.sourceEvents.mousedown=null,r.sourceEvents.mouseup=null,r.sourceEvents.mousewheel=null,r.wheelDelta=0},n.setOffset=function(r,a){r.offset.x=a.x,r.offset.y=a.y,r.position.x=r.absolute.x*r.scale.x+r.offset.x,r.position.y=r.absolute.y*r.scale.y+r.offset.y},n.setScale=function(r,a){r.scale.x=a.x,r.scale.y=a.y,r.position.x=r.absolute.x*r.scale.x+r.offset.x,r.position.y=r.absolute.y*r.scale.y+r.offset.y},n._getRelativeMousePosition=function(r,a,o){var c=a.getBoundingClientRect(),h=document.documentElement||document.body.parentNode||document.body,u=window.pageXOffset!==void 0?window.pageXOffset:h.scrollLeft,l=window.pageYOffset!==void 0?window.pageYOffset:h.scrollTop,f=r.changedTouches,d,p;return f?(d=f[0].pageX-c.left-u,p=f[0].pageY-c.top-l):(d=r.pageX-c.left-u,p=r.pageY-c.top-l),{x:d/(a.clientWidth/(a.width||a.clientWidth)*o),y:p/(a.clientHeight/(a.height||a.clientHeight)*o)}}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(0);(function(){n._registry={},n.register=function(r){if(n.isPlugin(r)||i.warn("Plugin.register:",n.toString(r),"does not implement all required fields."),r.name in n._registry){var a=n._registry[r.name],o=n.versionParse(r.version).number,c=n.versionParse(a.version).number;o>c?(i.warn("Plugin.register:",n.toString(a),"was upgraded to",n.toString(r)),n._registry[r.name]=r):o<c?i.warn("Plugin.register:",n.toString(a),"can not be downgraded to",n.toString(r)):r!==a&&i.warn("Plugin.register:",n.toString(r),"is already registered to different plugin object")}else n._registry[r.name]=r;return r},n.resolve=function(r){return n._registry[n.dependencyParse(r).name]},n.toString=function(r){return typeof r=="string"?r:(r.name||"anonymous")+"@"+(r.version||r.range||"0.0.0")},n.isPlugin=function(r){return r&&r.name&&r.version&&r.install},n.isUsed=function(r,a){return r.used.indexOf(a)>-1},n.isFor=function(r,a){var o=r.for&&n.dependencyParse(r.for);return!r.for||a.name===o.name&&n.versionSatisfies(a.version,o.range)},n.use=function(r,a){if(r.uses=(r.uses||[]).concat(a||[]),r.uses.length===0){i.warn("Plugin.use:",n.toString(r),"does not specify any dependencies to install.");return}for(var o=n.dependencies(r),c=i.topologicalSort(o),h=[],u=0;u<c.length;u+=1)if(c[u]!==r.name){var l=n.resolve(c[u]);if(!l){h.push("\u274C "+c[u]);continue}n.isUsed(r,l.name)||(n.isFor(l,r)||(i.warn("Plugin.use:",n.toString(l),"is for",l.for,"but installed on",n.toString(r)+"."),l._warned=!0),l.install?l.install(r):(i.warn("Plugin.use:",n.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(h.push("\u{1F536} "+n.toString(l)),delete l._warned):h.push("\u2705 "+n.toString(l)),r.used.push(l.name))}h.length>0&&i.info(h.join("  "))},n.dependencies=function(r,a){var o=n.dependencyParse(r),c=o.name;if(a=a||{},!(c in a)){r=n.resolve(r)||r,a[c]=i.map(r.uses||[],function(u){n.isPlugin(u)&&n.register(u);var l=n.dependencyParse(u),f=n.resolve(u);return f&&!n.versionSatisfies(f.version,l.range)?(i.warn("Plugin.dependencies:",n.toString(f),"does not satisfy",n.toString(l),"used by",n.toString(o)+"."),f._warned=!0,r._warned=!0):f||(i.warn("Plugin.dependencies:",n.toString(u),"used by",n.toString(o),"could not be resolved."),r._warned=!0),l.name});for(var h=0;h<a[c].length;h+=1)n.dependencies(a[c][h],a);return a}},n.dependencyParse=function(r){if(i.isString(r)){var a=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return a.test(r)||i.warn("Plugin.dependencyParse:",r,"is not a valid dependency string."),{name:r.split("@")[0],range:r.split("@")[1]||"*"}}return{name:r.name,range:r.range||r.version}},n.versionParse=function(r){var a=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;a.test(r)||i.warn("Plugin.versionParse:",r,"is not a valid version or range.");var o=a.exec(r),c=Number(o[4]),h=Number(o[5]),u=Number(o[6]);return{isRange:!!(o[1]||o[2]),version:o[3],range:r,operator:o[1]||o[2]||"",major:c,minor:h,patch:u,parts:[c,h,u],prerelease:o[7],number:c*1e8+h*1e4+u}},n.versionSatisfies=function(r,a){a=a||"*";var o=n.versionParse(a),c=n.versionParse(r);if(o.isRange){if(o.operator==="*"||r==="*")return!0;if(o.operator===">")return c.number>o.number;if(o.operator===">=")return c.number>=o.number;if(o.operator==="~")return c.major===o.major&&c.minor===o.minor&&c.patch>=o.patch;if(o.operator==="^")return o.major>0?c.major===o.major&&c.number>=o.number:o.minor>0?c.minor===o.minor&&c.patch>=o.patch:c.patch===o.patch}return r===a||r==="*"}})()}),(function(s,e){var t={};s.exports=t,(function(){t.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(7),r=t(18),a=t(13),o=t(19),c=t(5),h=t(6),u=t(10),l=t(0),f=t(4);(function(){n._deltaMax=1e3/60,n.create=function(d){d=d||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},v=l.extend(p,d);return v.world=d.world||h.create({label:"World"}),v.pairs=d.pairs||o.create(),v.detector=d.detector||a.create(),v.detector.pairs=v.pairs,v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},n.update=function(d,p){var v=l.now(),g=d.world,m=d.detector,S=d.pairs,x=d.timing,y=x.timestamp,w;p>n._deltaMax&&l.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",n._deltaMax.toFixed(3),"ms."),p=typeof p<"u"?p:l._baseDelta,p*=x.timeScale,x.timestamp+=p,x.lastDelta=p;var M={timestamp:x.timestamp,delta:p};c.trigger(d,"beforeUpdate",M);var T=h.allBodies(g),E=h.allConstraints(g);for(g.isModified&&(a.setBodies(m,T),h.setModified(g,!1,!1,!0)),d.enableSleeping&&i.update(T,p),n._bodiesApplyGravity(T,d.gravity),p>0&&n._bodiesUpdate(T,p),c.trigger(d,"beforeSolve",M),u.preSolveAll(T),w=0;w<d.constraintIterations;w++)u.solveAll(E,p);u.postSolveAll(T);var _=a.collisions(m);o.update(S,_,y),d.enableSleeping&&i.afterCollisions(S.list),S.collisionStart.length>0&&c.trigger(d,"collisionStart",{pairs:S.collisionStart,timestamp:x.timestamp,delta:p});var b=l.clamp(20/d.positionIterations,0,1);for(r.preSolvePosition(S.list),w=0;w<d.positionIterations;w++)r.solvePosition(S.list,p,b);for(r.postSolvePosition(T),u.preSolveAll(T),w=0;w<d.constraintIterations;w++)u.solveAll(E,p);for(u.postSolveAll(T),r.preSolveVelocity(S.list),w=0;w<d.velocityIterations;w++)r.solveVelocity(S.list,p);return n._bodiesUpdateVelocities(T),S.collisionActive.length>0&&c.trigger(d,"collisionActive",{pairs:S.collisionActive,timestamp:x.timestamp,delta:p}),S.collisionEnd.length>0&&c.trigger(d,"collisionEnd",{pairs:S.collisionEnd,timestamp:x.timestamp,delta:p}),n._bodiesClearForces(T),c.trigger(d,"afterUpdate",M),d.timing.lastElapsed=l.now()-v,d},n.merge=function(d,p){if(l.extend(d,p),p.world){d.world=p.world,n.clear(d);for(var v=h.allBodies(d.world),g=0;g<v.length;g++){var m=v[g];i.set(m,!1),m.id=l.nextId()}}},n.clear=function(d){o.clear(d.pairs),a.clear(d.detector)},n._bodiesClearForces=function(d){for(var p=d.length,v=0;v<p;v++){var g=d[v];g.force.x=0,g.force.y=0,g.torque=0}},n._bodiesApplyGravity=function(d,p){var v=typeof p.scale<"u"?p.scale:.001,g=d.length;if(!(p.x===0&&p.y===0||v===0))for(var m=0;m<g;m++){var S=d[m];S.isStatic||S.isSleeping||(S.force.y+=S.mass*p.y*v,S.force.x+=S.mass*p.x*v)}},n._bodiesUpdate=function(d,p){for(var v=d.length,g=0;g<v;g++){var m=d[g];m.isStatic||m.isSleeping||f.update(m,p)}},n._bodiesUpdateVelocities=function(d){for(var p=d.length,v=0;v<p;v++)f.updateVelocities(d[v])}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(0),a=t(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(o){var c,h,u,l=o.length;for(c=0;c<l;c++)h=o[c],h.isActive&&(u=h.contactCount,h.collision.parentA.totalContacts+=u,h.collision.parentB.totalContacts+=u)},n.solvePosition=function(o,c,h){var u,l,f,d,p,v,g,m,S=n._positionDampen*(h||1),x=r.clamp(c/r._baseDelta,0,1),y=o.length;for(u=0;u<y;u++)l=o[u],!(!l.isActive||l.isSensor)&&(f=l.collision,d=f.parentA,p=f.parentB,v=f.normal,l.separation=f.depth+v.x*(p.positionImpulse.x-d.positionImpulse.x)+v.y*(p.positionImpulse.y-d.positionImpulse.y));for(u=0;u<y;u++)l=o[u],!(!l.isActive||l.isSensor)&&(f=l.collision,d=f.parentA,p=f.parentB,v=f.normal,m=l.separation-l.slop*x,(d.isStatic||p.isStatic)&&(m*=2),d.isStatic||d.isSleeping||(g=S/d.totalContacts,d.positionImpulse.x+=v.x*m*g,d.positionImpulse.y+=v.y*m*g),p.isStatic||p.isSleeping||(g=S/p.totalContacts,p.positionImpulse.x-=v.x*m*g,p.positionImpulse.y-=v.y*m*g))},n.postSolvePosition=function(o){for(var c=n._positionWarming,h=o.length,u=i.translate,l=a.update,f=0;f<h;f++){var d=o[f],p=d.positionImpulse,v=p.x,g=p.y,m=d.velocity;if(d.totalContacts=0,v!==0||g!==0){for(var S=0;S<d.parts.length;S++){var x=d.parts[S];u(x.vertices,p),l(x.bounds,x.vertices,m),x.position.x+=v,x.position.y+=g}d.positionPrev.x+=v,d.positionPrev.y+=g,v*m.x+g*m.y<0?(p.x=0,p.y=0):(p.x*=c,p.y*=c)}}},n.preSolveVelocity=function(o){var c=o.length,h,u;for(h=0;h<c;h++){var l=o[h];if(!(!l.isActive||l.isSensor)){var f=l.contacts,d=l.contactCount,p=l.collision,v=p.parentA,g=p.parentB,m=p.normal,S=p.tangent;for(u=0;u<d;u++){var x=f[u],y=x.vertex,w=x.normalImpulse,M=x.tangentImpulse;if(w!==0||M!==0){var T=m.x*w+S.x*M,E=m.y*w+S.y*M;v.isStatic||v.isSleeping||(v.positionPrev.x+=T*v.inverseMass,v.positionPrev.y+=E*v.inverseMass,v.anglePrev+=v.inverseInertia*((y.x-v.position.x)*E-(y.y-v.position.y)*T)),g.isStatic||g.isSleeping||(g.positionPrev.x-=T*g.inverseMass,g.positionPrev.y-=E*g.inverseMass,g.anglePrev-=g.inverseInertia*((y.x-g.position.x)*E-(y.y-g.position.y)*T))}}}}},n.solveVelocity=function(o,c){var h=c/r._baseDelta,u=h*h,l=u*h,f=-n._restingThresh*h,d=n._restingThreshTangent,p=n._frictionNormalMultiplier*h,v=n._frictionMaxStatic,g=o.length,m,S,x,y;for(x=0;x<g;x++){var w=o[x];if(!(!w.isActive||w.isSensor)){var M=w.collision,T=M.parentA,E=M.parentB,_=M.normal.x,b=M.normal.y,A=M.tangent.x,I=M.tangent.y,D=w.inverseMass,N=w.friction*w.frictionStatic*p,F=w.contacts,z=w.contactCount,X=1/z,W=T.position.x-T.positionPrev.x,se=T.position.y-T.positionPrev.y,re=T.angle-T.anglePrev,ue=E.position.x-E.positionPrev.x,De=E.position.y-E.positionPrev.y,Oe=E.angle-E.anglePrev;for(y=0;y<z;y++){var we=F[y],Be=we.vertex,Z=Be.x-T.position.x,ee=Be.y-T.position.y,ge=Be.x-E.position.x,be=Be.y-E.position.y,ve=W-ee*re,Fe=se+Z*re,Ke=ue-be*Oe,L=De+ge*Oe,ne=ve-Ke,j=Fe-L,Q=_*ne+b*j,K=A*ne+I*j,fe=w.separation+Q,B=Math.min(fe,1);B=fe<0?0:B;var k=B*N;K<-k||K>k?(S=K>0?K:-K,m=w.friction*(K>0?1:-1)*l,m<-S?m=-S:m>S&&(m=S)):(m=K,S=v);var de=Z*b-ee*_,le=ge*b-be*_,P=X/(D+T.inverseInertia*de*de+E.inverseInertia*le*le),C=(1+w.restitution)*Q*P;if(m*=P,Q<f)we.normalImpulse=0;else{var G=we.normalImpulse;we.normalImpulse+=C,we.normalImpulse>0&&(we.normalImpulse=0),C=we.normalImpulse-G}if(K<-d||K>d)we.tangentImpulse=0;else{var $=we.tangentImpulse;we.tangentImpulse+=m,we.tangentImpulse<-S&&(we.tangentImpulse=-S),we.tangentImpulse>S&&(we.tangentImpulse=S),m=we.tangentImpulse-$}var ie=_*C+A*m,J=b*C+I*m;T.isStatic||T.isSleeping||(T.positionPrev.x+=ie*T.inverseMass,T.positionPrev.y+=J*T.inverseMass,T.anglePrev+=(Z*J-ee*ie)*T.inverseInertia),E.isStatic||E.isSleeping||(E.positionPrev.x-=ie*E.inverseMass,E.positionPrev.y-=J*E.inverseMass,E.anglePrev-=(ge*J-be*ie)*E.inverseInertia)}}}}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(9),r=t(0);(function(){n.create=function(a){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},a)},n.update=function(a,o,c){var h=i.update,u=i.create,l=i.setActive,f=a.table,d=a.list,p=d.length,v=p,g=a.collisionStart,m=a.collisionEnd,S=a.collisionActive,x=o.length,y=0,w=0,M=0,T,E,_;for(_=0;_<x;_++)T=o[_],E=T.pair,E?(E.isActive&&(S[M++]=E),h(E,T,c)):(E=u(T,c),f[E.id]=E,g[y++]=E,d[v++]=E);for(v=0,p=d.length,_=0;_<p;_++)E=d[_],E.timeUpdated>=c?d[v++]=E:(l(E,!1,c),E.collision.bodyA.sleepCounter>0&&E.collision.bodyB.sleepCounter>0?d[v++]=E:(m[w++]=E,delete f[E.id]));d.length!==v&&(d.length=v),g.length!==y&&(g.length=y),m.length!==w&&(m.length=w),S.length!==M&&(S.length=M)},n.clear=function(a){return a.table={},a.list.length=0,a.collisionStart.length=0,a.collisionActive.length=0,a.collisionEnd.length=0,a}})()}),(function(s,e,t){var n=s.exports=t(21);n.Axes=t(11),n.Bodies=t(12),n.Body=t(4),n.Bounds=t(1),n.Collision=t(8),n.Common=t(0),n.Composite=t(6),n.Composites=t(22),n.Constraint=t(10),n.Contact=t(16),n.Detector=t(13),n.Engine=t(17),n.Events=t(5),n.Grid=t(23),n.Mouse=t(14),n.MouseConstraint=t(24),n.Pair=t(9),n.Pairs=t(19),n.Plugin=t(15),n.Query=t(25),n.Render=t(26),n.Resolver=t(18),n.Runner=t(27),n.SAT=t(28),n.Sleeping=t(7),n.Svg=t(29),n.Vector=t(2),n.Vertices=t(3),n.World=t(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")}),(function(s,e,t){var n={};s.exports=n;var i=t(15),r=t(0);(function(){n.name="matter-js",n.version="0.20.0",n.uses=[],n.used=[],n.use=function(){i.use(n,Array.prototype.slice.call(arguments))},n.before=function(a,o){return a=a.replace(/^Matter./,""),r.chainPathBefore(n,a,o)},n.after=function(a,o){return a=a.replace(/^Matter./,""),r.chainPathAfter(n,a,o)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(6),r=t(10),a=t(0),o=t(4),c=t(12),h=a.deprecated;(function(){n.stack=function(u,l,f,d,p,v,g){for(var m=i.create({label:"Stack"}),S=u,x=l,y,w=0,M=0;M<d;M++){for(var T=0,E=0;E<f;E++){var _=g(S,x,E,M,y,w);if(_){var b=_.bounds.max.y-_.bounds.min.y,A=_.bounds.max.x-_.bounds.min.x;b>T&&(T=b),o.translate(_,{x:A*.5,y:b*.5}),S=_.bounds.max.x+p,i.addBody(m,_),y=_,w+=1}else S+=p}x+=T+v,S=u}return m},n.chain=function(u,l,f,d,p,v){for(var g=u.bodies,m=1;m<g.length;m++){var S=g[m-1],x=g[m],y=S.bounds.max.y-S.bounds.min.y,w=S.bounds.max.x-S.bounds.min.x,M=x.bounds.max.y-x.bounds.min.y,T=x.bounds.max.x-x.bounds.min.x,E={bodyA:S,pointA:{x:w*l,y:y*f},bodyB:x,pointB:{x:T*d,y:M*p}},_=a.extend(E,v);i.addConstraint(u,r.create(_))}return u.label+=" Chain",u},n.mesh=function(u,l,f,d,p){var v=u.bodies,g,m,S,x,y;for(g=0;g<f;g++){for(m=1;m<l;m++)S=v[m-1+g*l],x=v[m+g*l],i.addConstraint(u,r.create(a.extend({bodyA:S,bodyB:x},p)));if(g>0)for(m=0;m<l;m++)S=v[m+(g-1)*l],x=v[m+g*l],i.addConstraint(u,r.create(a.extend({bodyA:S,bodyB:x},p))),d&&m>0&&(y=v[m-1+(g-1)*l],i.addConstraint(u,r.create(a.extend({bodyA:y,bodyB:x},p)))),d&&m<l-1&&(y=v[m+1+(g-1)*l],i.addConstraint(u,r.create(a.extend({bodyA:y,bodyB:x},p))))}return u.label+=" Mesh",u},n.pyramid=function(u,l,f,d,p,v,g){return n.stack(u,l,f,d,p,v,function(m,S,x,y,w,M){var T=Math.min(d,Math.ceil(f/2)),E=w?w.bounds.max.x-w.bounds.min.x:0;if(!(y>T)){y=T-y;var _=y,b=f-1-y;if(!(x<_||x>b)){M===1&&o.translate(w,{x:(x+(f%2===1?1:-1))*E,y:0});var A=w?x*E:0;return g(u+A+x*p,S,x,y,w,M)}}})},n.newtonsCradle=function(u,l,f,d,p){for(var v=i.create({label:"Newtons Cradle"}),g=0;g<f;g++){var m=1.9,S=c.circle(u+g*(d*m),l+p,d,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=r.create({pointA:{x:u+g*(d*m),y:l},bodyB:S});i.addBody(v,S),i.addConstraint(v,x)}return v},h(n,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),n.car=function(u,l,f,d,p){var v=o.nextGroup(!0),g=20,m=-f*.5+g,S=f*.5-g,x=0,y=i.create({label:"Car"}),w=c.rectangle(u,l,f,d,{collisionFilter:{group:v},chamfer:{radius:d*.5},density:2e-4}),M=c.circle(u+m,l+x,p,{collisionFilter:{group:v},friction:.8}),T=c.circle(u+S,l+x,p,{collisionFilter:{group:v},friction:.8}),E=r.create({bodyB:w,pointB:{x:m,y:x},bodyA:M,stiffness:1,length:0}),_=r.create({bodyB:w,pointB:{x:S,y:x},bodyA:T,stiffness:1,length:0});return i.addBody(y,w),i.addBody(y,M),i.addBody(y,T),i.addConstraint(y,E),i.addConstraint(y,_),y},h(n,"car","Composites.car \u27A4 moved to car example"),n.softBody=function(u,l,f,d,p,v,g,m,S,x){S=a.extend({inertia:1/0},S),x=a.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var y=n.stack(u,l,f,d,p,v,function(w,M){return c.circle(w,M,m,S)});return n.mesh(y,f,d,g,x),y.label="Soft Body",y},h(n,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()}),(function(s,e,t){var n={};s.exports=n;var i=t(9),r=t(0),a=r.deprecated;(function(){n.create=function(o){var c={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return r.extend(c,o)},n.update=function(o,c,h,u){var l,f,d,p=h.world,v=o.buckets,g,m,S=!1;for(l=0;l<c.length;l++){var x=c[l];if(!(x.isSleeping&&!u)&&!(p.bounds&&(x.bounds.max.x<p.bounds.min.x||x.bounds.min.x>p.bounds.max.x||x.bounds.max.y<p.bounds.min.y||x.bounds.min.y>p.bounds.max.y))){var y=n._getRegion(o,x);if(!x.region||y.id!==x.region.id||u){(!x.region||u)&&(x.region=y);var w=n._regionUnion(y,x.region);for(f=w.startCol;f<=w.endCol;f++)for(d=w.startRow;d<=w.endRow;d++){m=n._getBucketId(f,d),g=v[m];var M=f>=y.startCol&&f<=y.endCol&&d>=y.startRow&&d<=y.endRow,T=f>=x.region.startCol&&f<=x.region.endCol&&d>=x.region.startRow&&d<=x.region.endRow;!M&&T&&T&&g&&n._bucketRemoveBody(o,g,x),(x.region===y||M&&!T||u)&&(g||(g=n._createBucket(v,m)),n._bucketAddBody(o,g,x))}x.region=y,S=!0}}}S&&(o.pairsList=n._createActivePairsList(o))},a(n,"update","Grid.update \u27A4 replaced by Matter.Detector"),n.clear=function(o){o.buckets={},o.pairs={},o.pairsList=[]},a(n,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),n._regionUnion=function(o,c){var h=Math.min(o.startCol,c.startCol),u=Math.max(o.endCol,c.endCol),l=Math.min(o.startRow,c.startRow),f=Math.max(o.endRow,c.endRow);return n._createRegion(h,u,l,f)},n._getRegion=function(o,c){var h=c.bounds,u=Math.floor(h.min.x/o.bucketWidth),l=Math.floor(h.max.x/o.bucketWidth),f=Math.floor(h.min.y/o.bucketHeight),d=Math.floor(h.max.y/o.bucketHeight);return n._createRegion(u,l,f,d)},n._createRegion=function(o,c,h,u){return{id:o+","+c+","+h+","+u,startCol:o,endCol:c,startRow:h,endRow:u}},n._getBucketId=function(o,c){return"C"+o+"R"+c},n._createBucket=function(o,c){var h=o[c]=[];return h},n._bucketAddBody=function(o,c,h){var u=o.pairs,l=i.id,f=c.length,d;for(d=0;d<f;d++){var p=c[d];if(!(h.id===p.id||h.isStatic&&p.isStatic)){var v=l(h,p),g=u[v];g?g[2]+=1:u[v]=[h,p,1]}}c.push(h)},n._bucketRemoveBody=function(o,c,h){var u=o.pairs,l=i.id,f;c.splice(r.indexOf(c,h),1);var d=c.length;for(f=0;f<d;f++){var p=u[l(h,c[f])];p&&(p[2]-=1)}},n._createActivePairsList=function(o){var c,h=o.pairs,u=r.keys(h),l=u.length,f=[],d;for(d=0;d<l;d++)c=h[u[d]],c[2]>0?f.push(c):delete h[u[d]];return f}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(7),a=t(14),o=t(5),c=t(13),h=t(10),u=t(6),l=t(0),f=t(1);(function(){n.create=function(d,p){var v=(d?d.mouse:null)||(p?p.mouse:null);v||(d&&d.render&&d.render.canvas?v=a.create(d.render.canvas):p&&p.element?v=a.create(p.element):(v=a.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var g=h.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),m={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:g,collisionFilter:{category:1,mask:4294967295,group:0}},S=l.extend(m,p);return o.on(d,"beforeUpdate",function(){var x=u.allBodies(d.world);n.update(S,x),n._triggerEvents(S)}),S},n.update=function(d,p){var v=d.mouse,g=d.constraint,m=d.body;if(v.button===0){if(g.bodyB)r.set(g.bodyB,!1),g.pointA=v.position;else for(var S=0;S<p.length;S++)if(m=p[S],f.contains(m.bounds,v.position)&&c.canCollide(m.collisionFilter,d.collisionFilter))for(var x=m.parts.length>1?1:0;x<m.parts.length;x++){var y=m.parts[x];if(i.contains(y.vertices,v.position)){g.pointA=v.position,g.bodyB=d.body=m,g.pointB={x:v.position.x-m.position.x,y:v.position.y-m.position.y},g.angleB=m.angle,r.set(m,!1),o.trigger(d,"startdrag",{mouse:v,body:m});break}}}else g.bodyB=d.body=null,g.pointB=null,m&&o.trigger(d,"enddrag",{mouse:v,body:m})},n._triggerEvents=function(d){var p=d.mouse,v=p.sourceEvents;v.mousemove&&o.trigger(d,"mousemove",{mouse:p}),v.mousedown&&o.trigger(d,"mousedown",{mouse:p}),v.mouseup&&o.trigger(d,"mouseup",{mouse:p}),a.clearSourceEvents(p)}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(2),r=t(8),a=t(1),o=t(12),c=t(3);(function(){n.collides=function(h,u){for(var l=[],f=u.length,d=h.bounds,p=r.collides,v=a.overlaps,g=0;g<f;g++){var m=u[g],S=m.parts.length,x=S===1?0:1;if(v(m.bounds,d))for(var y=x;y<S;y++){var w=m.parts[y];if(v(w.bounds,d)){var M=p(w,h);if(M){l.push(M);break}}}}return l},n.ray=function(h,u,l,f){f=f||1e-100;for(var d=i.angle(u,l),p=i.magnitude(i.sub(u,l)),v=(l.x+u.x)*.5,g=(l.y+u.y)*.5,m=o.rectangle(v,g,p,f,{angle:d}),S=n.collides(m,h),x=0;x<S.length;x+=1){var y=S[x];y.body=y.bodyB=y.bodyA}return S},n.region=function(h,u,l){for(var f=[],d=0;d<h.length;d++){var p=h[d],v=a.overlaps(p.bounds,u);(v&&!l||!v&&l)&&f.push(p)}return f},n.point=function(h,u){for(var l=[],f=0;f<h.length;f++){var d=h[f];if(a.contains(d.bounds,u))for(var p=d.parts.length===1?0:1;p<d.parts.length;p++){var v=d.parts[p];if(a.contains(v.bounds,u)&&c.contains(v.vertices,u)){l.push(d);break}}}return l}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(4),r=t(0),a=t(6),o=t(1),c=t(5),h=t(2),u=t(14);(function(){var l,f;typeof window<"u"&&(l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(r.now())},1e3/60)},f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(x){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=r.extend(y,x);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=x.mouse,w.engine=x.engine,w.canvas=w.canvas||v(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=n,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&n.setPixelRatio(w,w.options.pixelRatio),r.isElement(w.element)&&w.element.appendChild(w.canvas),w},n.run=function(x){(function y(w){x.frameRequestId=l(y),d(x,w),n.world(x,w),x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0),(x.options.showStats||x.options.showDebug)&&n.stats(x,x.context,w),(x.options.showPerformance||x.options.showDebug)&&n.performance(x,x.context,w),x.context.setTransform(1,0,0,1,0,0)})()},n.stop=function(x){f(x.frameRequestId)},n.setPixelRatio=function(x,y){var w=x.options,M=x.canvas;y==="auto"&&(y=g(M)),w.pixelRatio=y,M.setAttribute("data-pixel-ratio",y),M.width=w.width*y,M.height=w.height*y,M.style.width=w.width+"px",M.style.height=w.height+"px"},n.setSize=function(x,y,w){x.options.width=y,x.options.height=w,x.bounds.max.x=x.bounds.min.x+y,x.bounds.max.y=x.bounds.min.y+w,x.options.pixelRatio!==1?n.setPixelRatio(x,x.options.pixelRatio):(x.canvas.width=y,x.canvas.height=w)},n.lookAt=function(x,y,w,M){M=typeof M<"u"?M:!0,y=r.isArray(y)?y:[y],w=w||{x:0,y:0};for(var T={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},E=0;E<y.length;E+=1){var _=y[E],b=_.bounds?_.bounds.min:_.min||_.position||_,A=_.bounds?_.bounds.max:_.max||_.position||_;b&&A&&(b.x<T.min.x&&(T.min.x=b.x),A.x>T.max.x&&(T.max.x=A.x),b.y<T.min.y&&(T.min.y=b.y),A.y>T.max.y&&(T.max.y=A.y))}var I=T.max.x-T.min.x+2*w.x,D=T.max.y-T.min.y+2*w.y,N=x.canvas.height,F=x.canvas.width,z=F/N,X=I/D,W=1,se=1;X>z?se=X/z:W=z/X,x.options.hasBounds=!0,x.bounds.min.x=T.min.x,x.bounds.max.x=T.min.x+I*W,x.bounds.min.y=T.min.y,x.bounds.max.y=T.min.y+D*se,M&&(x.bounds.min.x+=I*.5-I*W*.5,x.bounds.max.x+=I*.5-I*W*.5,x.bounds.min.y+=D*.5-D*se*.5,x.bounds.max.y+=D*.5-D*se*.5),x.bounds.min.x-=w.x,x.bounds.max.x-=w.x,x.bounds.min.y-=w.y,x.bounds.max.y-=w.y,x.mouse&&(u.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),u.setOffset(x.mouse,x.bounds.min))},n.startViewTransform=function(x){var y=x.bounds.max.x-x.bounds.min.x,w=x.bounds.max.y-x.bounds.min.y,M=y/x.options.width,T=w/x.options.height;x.context.setTransform(x.options.pixelRatio/M,0,0,x.options.pixelRatio/T,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},n.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},n.world=function(x,y){var w=r.now(),M=x.engine,T=M.world,E=x.canvas,_=x.context,b=x.options,A=x.timing,I=a.allBodies(T),D=a.allConstraints(T),N=b.wireframes?b.wireframeBackground:b.background,F=[],z=[],X,W={timestamp:M.timing.timestamp};if(c.trigger(x,"beforeRender",W),x.currentBackground!==N&&S(x,N),_.globalCompositeOperation="source-in",_.fillStyle="transparent",_.fillRect(0,0,E.width,E.height),_.globalCompositeOperation="source-over",b.hasBounds){for(X=0;X<I.length;X++){var se=I[X];o.overlaps(se.bounds,x.bounds)&&F.push(se)}for(X=0;X<D.length;X++){var re=D[X],ue=re.bodyA,De=re.bodyB,Oe=re.pointA,we=re.pointB;ue&&(Oe=h.add(ue.position,re.pointA)),De&&(we=h.add(De.position,re.pointB)),!(!Oe||!we)&&(o.contains(x.bounds,Oe)||o.contains(x.bounds,we))&&z.push(re)}n.startViewTransform(x),x.mouse&&(u.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),u.setOffset(x.mouse,x.bounds.min))}else z=D,F=I,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!b.wireframes||M.enableSleeping&&b.showSleeping?n.bodies(x,F,_):(b.showConvexHulls&&n.bodyConvexHulls(x,F,_),n.bodyWireframes(x,F,_)),b.showBounds&&n.bodyBounds(x,F,_),(b.showAxes||b.showAngleIndicator)&&n.bodyAxes(x,F,_),b.showPositions&&n.bodyPositions(x,F,_),b.showVelocity&&n.bodyVelocity(x,F,_),b.showIds&&n.bodyIds(x,F,_),b.showSeparations&&n.separations(x,M.pairs.list,_),b.showCollisions&&n.collisions(x,M.pairs.list,_),b.showVertexNumbers&&n.vertexNumbers(x,F,_),b.showMousePosition&&n.mousePosition(x,x.mouse,_),n.constraints(z,_),b.hasBounds&&n.endViewTransform(x),c.trigger(x,"afterRender",W),A.lastElapsed=r.now()-w},n.stats=function(x,y,w){for(var M=x.engine,T=M.world,E=a.allBodies(T),_=0,b=55,A=44,I=0,D=0,N=0;N<E.length;N+=1)_+=E[N].parts.length;var F={Part:_,Body:E.length,Cons:a.allConstraints(T).length,Comp:a.allComposites(T).length,Pair:M.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(I,D,b*5.5,A),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var z in F){var X=F[z];y.fillStyle="#aaa",y.fillText(z,I+b,D+8),y.fillStyle="#eee",y.fillText(X,I+b,D+26),I+=b}},n.performance=function(x,y){var w=x.engine,M=x.timing,T=M.deltaHistory,E=M.elapsedHistory,_=M.timestampElapsedHistory,b=M.engineDeltaHistory,A=M.engineUpdatesHistory,I=M.engineElapsedHistory,D=w.timing.lastUpdatesPerFrame,N=w.timing.lastDelta,F=p(T),z=p(E),X=p(b),W=p(A),se=p(I),re=p(_),ue=re/F||0,De=Math.round(F/N),Oe=1e3/F||0,we=4,Be=12,Z=60,ee=34,ge=10,be=69;y.fillStyle="#0e0f19",y.fillRect(0,50,Be*5+Z*6+22,ee),n.status(y,ge,be,Z,we,T.length,Math.round(Oe)+" fps",Oe/n._goodFps,function(ve){return T[ve]/F-1}),n.status(y,ge+Be+Z,be,Z,we,b.length,N.toFixed(2)+" dt",n._goodDelta/N,function(ve){return b[ve]/X-1}),n.status(y,ge+(Be+Z)*2,be,Z,we,A.length,D+" upf",Math.pow(r.clamp(W/De||1,0,1),4),function(ve){return A[ve]/W-1}),n.status(y,ge+(Be+Z)*3,be,Z,we,I.length,se.toFixed(2)+" ut",1-D*se/n._goodFps,function(ve){return I[ve]/se-1}),n.status(y,ge+(Be+Z)*4,be,Z,we,E.length,z.toFixed(2)+" rt",1-z/n._goodFps,function(ve){return E[ve]/z-1}),n.status(y,ge+(Be+Z)*5,be,Z,we,_.length,ue.toFixed(2)+" x",ue*ue*ue,function(ve){return(_[ve]/T[ve]/ue||0)-1})},n.status=function(x,y,w,M,T,E,_,b,A){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(y,w+7,M,1),x.beginPath(),x.moveTo(y,w+7-T*r.clamp(.4*A(0),-2,2));for(var I=0;I<M;I+=1)x.lineTo(y+I,w+7-(I<E?T*r.clamp(.4*A(I),-2,2):0));x.stroke(),x.fillStyle="hsl("+r.clamp(25+95*b,0,120)+",100%,60%)",x.fillRect(y,w-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(_,y+M,w-5)},n.constraints=function(x,y){for(var w=y,M=0;M<x.length;M++){var T=x[M];if(!(!T.render.visible||!T.pointA||!T.pointB)){var E=T.bodyA,_=T.bodyB,b,A;if(E?b=h.add(E.position,T.pointA):b=T.pointA,T.render.type==="pin")w.beginPath(),w.arc(b.x,b.y,3,0,2*Math.PI),w.closePath();else{if(_?A=h.add(_.position,T.pointB):A=T.pointB,w.beginPath(),w.moveTo(b.x,b.y),T.render.type==="spring")for(var I=h.sub(A,b),D=h.perp(h.normalise(I)),N=Math.ceil(r.clamp(T.length/5,12,20)),F,z=1;z<N;z+=1)F=z%2===0?1:-1,w.lineTo(b.x+I.x*(z/N)+D.x*F*4,b.y+I.y*(z/N)+D.y*F*4);w.lineTo(A.x,A.y)}T.render.lineWidth&&(w.lineWidth=T.render.lineWidth,w.strokeStyle=T.render.strokeStyle,w.stroke()),T.render.anchors&&(w.fillStyle=T.render.strokeStyle,w.beginPath(),w.arc(b.x,b.y,3,0,2*Math.PI),w.arc(A.x,A.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},n.bodies=function(x,y,w){var M=w,T=x.engine,E=x.options,_=E.showInternalEdges||!E.wireframes,b,A,I,D;for(I=0;I<y.length;I++)if(b=y[I],!!b.render.visible){for(D=b.parts.length>1?1:0;D<b.parts.length;D++)if(A=b.parts[D],!!A.render.visible){if(E.showSleeping&&b.isSleeping?M.globalAlpha=.5*A.render.opacity:A.render.opacity!==1&&(M.globalAlpha=A.render.opacity),A.render.sprite&&A.render.sprite.texture&&!E.wireframes){var N=A.render.sprite,F=m(x,N.texture);M.translate(A.position.x,A.position.y),M.rotate(A.angle),M.drawImage(F,F.width*-N.xOffset*N.xScale,F.height*-N.yOffset*N.yScale,F.width*N.xScale,F.height*N.yScale),M.rotate(-A.angle),M.translate(-A.position.x,-A.position.y)}else{if(A.circleRadius)M.beginPath(),M.arc(A.position.x,A.position.y,A.circleRadius,0,2*Math.PI);else{M.beginPath(),M.moveTo(A.vertices[0].x,A.vertices[0].y);for(var z=1;z<A.vertices.length;z++)!A.vertices[z-1].isInternal||_?M.lineTo(A.vertices[z].x,A.vertices[z].y):M.moveTo(A.vertices[z].x,A.vertices[z].y),A.vertices[z].isInternal&&!_&&M.moveTo(A.vertices[(z+1)%A.vertices.length].x,A.vertices[(z+1)%A.vertices.length].y);M.lineTo(A.vertices[0].x,A.vertices[0].y),M.closePath()}E.wireframes?(M.lineWidth=1,M.strokeStyle=x.options.wireframeStrokeStyle,M.stroke()):(M.fillStyle=A.render.fillStyle,A.render.lineWidth&&(M.lineWidth=A.render.lineWidth,M.strokeStyle=A.render.strokeStyle,M.stroke()),M.fill())}M.globalAlpha=1}}},n.bodyWireframes=function(x,y,w){var M=w,T=x.options.showInternalEdges,E,_,b,A,I;for(M.beginPath(),b=0;b<y.length;b++)if(E=y[b],!!E.render.visible)for(I=E.parts.length>1?1:0;I<E.parts.length;I++){for(_=E.parts[I],M.moveTo(_.vertices[0].x,_.vertices[0].y),A=1;A<_.vertices.length;A++)!_.vertices[A-1].isInternal||T?M.lineTo(_.vertices[A].x,_.vertices[A].y):M.moveTo(_.vertices[A].x,_.vertices[A].y),_.vertices[A].isInternal&&!T&&M.moveTo(_.vertices[(A+1)%_.vertices.length].x,_.vertices[(A+1)%_.vertices.length].y);M.lineTo(_.vertices[0].x,_.vertices[0].y)}M.lineWidth=1,M.strokeStyle=x.options.wireframeStrokeStyle,M.stroke()},n.bodyConvexHulls=function(x,y,w){var M=w,T,E,_,b,A;for(M.beginPath(),_=0;_<y.length;_++)if(T=y[_],!(!T.render.visible||T.parts.length===1)){for(M.moveTo(T.vertices[0].x,T.vertices[0].y),b=1;b<T.vertices.length;b++)M.lineTo(T.vertices[b].x,T.vertices[b].y);M.lineTo(T.vertices[0].x,T.vertices[0].y)}M.lineWidth=1,M.strokeStyle="rgba(255,255,255,0.2)",M.stroke()},n.vertexNumbers=function(x,y,w){var M=w,T,E,_;for(T=0;T<y.length;T++){var b=y[T].parts;for(_=b.length>1?1:0;_<b.length;_++){var A=b[_];for(E=0;E<A.vertices.length;E++)M.fillStyle="rgba(255,255,255,0.2)",M.fillText(T+"_"+E,A.position.x+(A.vertices[E].x-A.position.x)*.8,A.position.y+(A.vertices[E].y-A.position.y)*.8)}}},n.mousePosition=function(x,y,w){var M=w;M.fillStyle="rgba(255,255,255,0.8)",M.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},n.bodyBounds=function(x,y,w){var M=w,T=x.engine,E=x.options;M.beginPath();for(var _=0;_<y.length;_++){var b=y[_];if(b.render.visible)for(var A=y[_].parts,I=A.length>1?1:0;I<A.length;I++){var D=A[I];M.rect(D.bounds.min.x,D.bounds.min.y,D.bounds.max.x-D.bounds.min.x,D.bounds.max.y-D.bounds.min.y)}}E.wireframes?M.strokeStyle="rgba(255,255,255,0.08)":M.strokeStyle="rgba(0,0,0,0.1)",M.lineWidth=1,M.stroke()},n.bodyAxes=function(x,y,w){var M=w,T=x.engine,E=x.options,_,b,A,I;for(M.beginPath(),b=0;b<y.length;b++){var D=y[b],N=D.parts;if(D.render.visible)if(E.showAxes)for(A=N.length>1?1:0;A<N.length;A++)for(_=N[A],I=0;I<_.axes.length;I++){var F=_.axes[I];M.moveTo(_.position.x,_.position.y),M.lineTo(_.position.x+F.x*20,_.position.y+F.y*20)}else for(A=N.length>1?1:0;A<N.length;A++)for(_=N[A],I=0;I<_.axes.length;I++)M.moveTo(_.position.x,_.position.y),M.lineTo((_.vertices[0].x+_.vertices[_.vertices.length-1].x)/2,(_.vertices[0].y+_.vertices[_.vertices.length-1].y)/2)}E.wireframes?(M.strokeStyle="indianred",M.lineWidth=1):(M.strokeStyle="rgba(255, 255, 255, 0.4)",M.globalCompositeOperation="overlay",M.lineWidth=2),M.stroke(),M.globalCompositeOperation="source-over"},n.bodyPositions=function(x,y,w){var M=w,T=x.engine,E=x.options,_,b,A,I;for(M.beginPath(),A=0;A<y.length;A++)if(_=y[A],!!_.render.visible)for(I=0;I<_.parts.length;I++)b=_.parts[I],M.arc(b.position.x,b.position.y,3,0,2*Math.PI,!1),M.closePath();for(E.wireframes?M.fillStyle="indianred":M.fillStyle="rgba(0,0,0,0.5)",M.fill(),M.beginPath(),A=0;A<y.length;A++)_=y[A],_.render.visible&&(M.arc(_.positionPrev.x,_.positionPrev.y,2,0,2*Math.PI,!1),M.closePath());M.fillStyle="rgba(255,165,0,0.8)",M.fill()},n.bodyVelocity=function(x,y,w){var M=w;M.beginPath();for(var T=0;T<y.length;T++){var E=y[T];if(E.render.visible){var _=i.getVelocity(E);M.moveTo(E.position.x,E.position.y),M.lineTo(E.position.x+_.x,E.position.y+_.y)}}M.lineWidth=3,M.strokeStyle="cornflowerblue",M.stroke()},n.bodyIds=function(x,y,w){var M=w,T,E;for(T=0;T<y.length;T++)if(y[T].render.visible){var _=y[T].parts;for(E=_.length>1?1:0;E<_.length;E++){var b=_[E];M.font="12px Arial",M.fillStyle="rgba(255,255,255,0.5)",M.fillText(b.id,b.position.x+10,b.position.y-10)}}},n.collisions=function(x,y,w){var M=w,T=x.options,E,_,b,A,I,D,N;for(M.beginPath(),D=0;D<y.length;D++)if(E=y[D],!!E.isActive)for(_=E.collision,N=0;N<E.contactCount;N++){var F=E.contacts[N],z=F.vertex;M.rect(z.x-1.5,z.y-1.5,3.5,3.5)}for(T.wireframes?M.fillStyle="rgba(255,255,255,0.7)":M.fillStyle="orange",M.fill(),M.beginPath(),D=0;D<y.length;D++)if(E=y[D],!!E.isActive&&(_=E.collision,E.contactCount>0)){var X=E.contacts[0].vertex.x,W=E.contacts[0].vertex.y;E.contactCount===2&&(X=(E.contacts[0].vertex.x+E.contacts[1].vertex.x)/2,W=(E.contacts[0].vertex.y+E.contacts[1].vertex.y)/2),_.bodyB===_.supports[0].body||_.bodyA.isStatic===!0?M.moveTo(X-_.normal.x*8,W-_.normal.y*8):M.moveTo(X+_.normal.x*8,W+_.normal.y*8),M.lineTo(X,W)}T.wireframes?M.strokeStyle="rgba(255,165,0,0.7)":M.strokeStyle="orange",M.lineWidth=1,M.stroke()},n.separations=function(x,y,w){var M=w,T=x.options,E,_,b,A,I,D,N;for(M.beginPath(),D=0;D<y.length;D++)if(E=y[D],!!E.isActive){_=E.collision,A=_.bodyA,I=_.bodyB;var F=1;!I.isStatic&&!A.isStatic&&(F=.5),I.isStatic&&(F=0),M.moveTo(I.position.x,I.position.y),M.lineTo(I.position.x-_.penetration.x*F,I.position.y-_.penetration.y*F),F=1,!I.isStatic&&!A.isStatic&&(F=.5),A.isStatic&&(F=0),M.moveTo(A.position.x,A.position.y),M.lineTo(A.position.x+_.penetration.x*F,A.position.y+_.penetration.y*F)}T.wireframes?M.strokeStyle="rgba(255,165,0,0.5)":M.strokeStyle="orange",M.stroke()},n.inspector=function(x,y){var w=x.engine,M=x.selected,T=x.render,E=T.options,_;if(E.hasBounds){var b=T.bounds.max.x-T.bounds.min.x,A=T.bounds.max.y-T.bounds.min.y,I=b/T.options.width,D=A/T.options.height;y.scale(1/I,1/D),y.translate(-T.bounds.min.x,-T.bounds.min.y)}for(var N=0;N<M.length;N++){var F=M[N].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),F.type){case"body":_=F.bounds,y.beginPath(),y.rect(Math.floor(_.min.x-3),Math.floor(_.min.y-3),Math.floor(_.max.x-_.min.x+6),Math.floor(_.max.y-_.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var z=F.pointA;F.bodyA&&(z=F.pointB),y.beginPath(),y.arc(z.x,z.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}x.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",_=x.selectBounds,y.beginPath(),y.rect(Math.floor(_.min.x),Math.floor(_.min.y),Math.floor(_.max.x-_.min.x),Math.floor(_.max.y-_.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),E.hasBounds&&y.setTransform(1,0,0,1,0,0)};var d=function(x,y){var w=x.engine,M=x.timing,T=M.historySize,E=w.timing.timestamp;M.delta=y-M.lastTime||n._goodDelta,M.lastTime=y,M.timestampElapsed=E-M.lastTimestamp||0,M.lastTimestamp=E,M.deltaHistory.unshift(M.delta),M.deltaHistory.length=Math.min(M.deltaHistory.length,T),M.engineDeltaHistory.unshift(w.timing.lastDelta),M.engineDeltaHistory.length=Math.min(M.engineDeltaHistory.length,T),M.timestampElapsedHistory.unshift(M.timestampElapsed),M.timestampElapsedHistory.length=Math.min(M.timestampElapsedHistory.length,T),M.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),M.engineUpdatesHistory.length=Math.min(M.engineUpdatesHistory.length,T),M.engineElapsedHistory.unshift(w.timing.lastElapsed),M.engineElapsedHistory.length=Math.min(M.engineElapsedHistory.length,T),M.elapsedHistory.unshift(M.lastElapsed),M.elapsedHistory.length=Math.min(M.elapsedHistory.length,T)},p=function(x){for(var y=0,w=0;w<x.length;w+=1)y+=x[w];return y/x.length||0},v=function(x,y){var w=document.createElement("canvas");return w.width=x,w.height=y,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},g=function(x){var y=x.getContext("2d"),w=window.devicePixelRatio||1,M=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return w/M},m=function(x,y){var w=x.textures[y];return w||(w=x.textures[y]=new Image,w.src=y,w)},S=function(x,y){var w=y;/(jpg|gif|png)$/.test(y)&&(w="url("+y+")"),x.canvas.style.background=w,x.canvas.style.backgroundSize="contain",x.currentBackground=y}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(5),r=t(17),a=t(0);(function(){n._maxFrameDelta=1e3/15,n._frameDeltaFallback=1e3/60,n._timeBufferMargin=1.5,n._elapsedNextEstimate=1,n._smoothingLowerBound=.1,n._smoothingUpperBound=.9,n.create=function(c){var h={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},u=a.extend(h,c);return u.fps=0,u},n.run=function(c,h){return c.timeBuffer=n._frameDeltaFallback,(function u(l){c.frameRequestId=n._onNextFrame(c,u),l&&c.enabled&&n.tick(c,h,l)})(),c},n.tick=function(c,h,u){var l=a.now(),f=c.delta,d=0,p=u-c.timeLastTick;if((!p||!c.timeLastTick||p>Math.max(n._maxFrameDelta,c.maxFrameTime))&&(p=c.frameDelta||n._frameDeltaFallback),c.frameDeltaSmoothing){c.frameDeltaHistory.push(p),c.frameDeltaHistory=c.frameDeltaHistory.slice(-c.frameDeltaHistorySize);var v=c.frameDeltaHistory.slice(0).sort(),g=c.frameDeltaHistory.slice(v.length*n._smoothingLowerBound,v.length*n._smoothingUpperBound),m=o(g);p=m||p}c.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),c.frameDelta=p,c.timeLastTick=u,c.timeBuffer+=c.frameDelta,c.timeBuffer=a.clamp(c.timeBuffer,0,c.frameDelta+f*n._timeBufferMargin),c.lastUpdatesDeferred=0;var S=c.maxUpdates||Math.ceil(c.maxFrameTime/f),x={timestamp:h.timing.timestamp};i.trigger(c,"beforeTick",x),i.trigger(c,"tick",x);for(var y=a.now();f>0&&c.timeBuffer>=f*n._timeBufferMargin;){i.trigger(c,"beforeUpdate",x),r.update(h,f),i.trigger(c,"afterUpdate",x),c.timeBuffer-=f,d+=1;var w=a.now()-l,M=a.now()-y,T=w+n._elapsedNextEstimate*M/d;if(d>=S||T>c.maxFrameTime){c.lastUpdatesDeferred=Math.round(Math.max(0,c.timeBuffer/f-n._timeBufferMargin));break}}h.timing.lastUpdatesPerFrame=d,i.trigger(c,"afterTick",x),c.frameDeltaHistory.length>=100&&(c.lastUpdatesDeferred&&Math.round(c.frameDelta/f)>S?a.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):c.lastUpdatesDeferred&&a.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof c.isFixed<"u"&&a.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(c.deltaMin||c.deltaMax)&&a.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),c.fps!==0&&a.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},n.stop=function(c){n._cancelNextFrame(c)},n._onNextFrame=function(c,h){if(typeof window<"u"&&window.requestAnimationFrame)c.frameRequestId=window.requestAnimationFrame(h);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return c.frameRequestId},n._cancelNextFrame=function(c){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(c.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var o=function(c){for(var h=0,u=c.length,l=0;l<u;l+=1)h+=c[l];return h/u||0}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(8),r=t(0),a=r.deprecated;(function(){n.collides=function(o,c){return i.collides(o,c)},a(n,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()}),(function(s,e,t){var n={};s.exports=n;var i=t(1),r=t(0);(function(){n.pathToVertices=function(a,o){typeof window<"u"&&!("SVGPathSeg"in window)&&r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var c,h,u,l,f,d,p,v,g,m,S=[],x,y,w=0,M=0,T=0;o=o||15;var E=function(b,A,I){var D=I%2===1&&I>1;if(!g||b!=g.x||A!=g.y){g&&D?(x=g.x,y=g.y):(x=0,y=0);var N={x:x+b,y:y+A};(D||!g)&&(g=N),S.push(N),M=x+b,T=y+A}},_=function(b){var A=b.pathSegTypeAsLetter.toUpperCase();if(A!=="Z"){switch(A){case"M":case"L":case"T":case"C":case"S":case"Q":M=b.x,T=b.y;break;case"H":M=b.x;break;case"V":T=b.y;break}E(M,T,b.pathSegType)}};for(n._svgPathToAbsolute(a),u=a.getTotalLength(),d=[],c=0;c<a.pathSegList.numberOfItems;c+=1)d.push(a.pathSegList.getItem(c));for(p=d.concat();w<u;){if(m=a.getPathSegAtLength(w),f=d[m],f!=v){for(;p.length&&p[0]!=f;)_(p.shift());v=f}switch(f.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":l=a.getPointAtLength(w),E(l.x,l.y,0);break}w+=o}for(c=0,h=p.length;c<h;++c)_(p[c]);return S},n._svgPathToAbsolute=function(a){for(var o,c,h,u,l,f,d=a.pathSegList,p=0,v=0,g=d.numberOfItems,m=0;m<g;++m){var S=d.getItem(m),x=S.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(x))"x"in S&&(p=S.x),"y"in S&&(v=S.y);else switch("x1"in S&&(h=p+S.x1),"x2"in S&&(l=p+S.x2),"y1"in S&&(u=v+S.y1),"y2"in S&&(f=v+S.y2),"x"in S&&(p+=S.x),"y"in S&&(v+=S.y),x){case"m":d.replaceItem(a.createSVGPathSegMovetoAbs(p,v),m);break;case"l":d.replaceItem(a.createSVGPathSegLinetoAbs(p,v),m);break;case"h":d.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(p),m);break;case"v":d.replaceItem(a.createSVGPathSegLinetoVerticalAbs(v),m);break;case"c":d.replaceItem(a.createSVGPathSegCurvetoCubicAbs(p,v,h,u,l,f),m);break;case"s":d.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(p,v,l,f),m);break;case"q":d.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(p,v,h,u),m);break;case"t":d.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(p,v),m);break;case"a":d.replaceItem(a.createSVGPathSegArcAbs(p,v,S.r1,S.r2,S.angle,S.largeArcFlag,S.sweepFlag),m);break;case"z":case"Z":p=o,v=c;break}(x=="M"||x=="m")&&(o=p,c=v)}}})()}),(function(s,e,t){var n={};s.exports=n;var i=t(6),r=t(0);(function(){n.create=i.create,n.add=i.add,n.remove=i.remove,n.clear=i.clear,n.addComposite=i.addComposite,n.addBody=i.addBody,n.addConstraint=i.addConstraint})()})])})});var bc=0,Xo=1,wc=2;var qo=1,na=2,tn=3,mn=0,At=1,nn=2,yn=0,Zn=1,Yo=2,$o=3,Zo=4,Tc=5,In=100,Ec=101,Ac=102,Cc=103,Rc=104,Pc=200,Ic=201,Lc=202,Dc=203,Tr=204,Er=205,Uc=206,Nc=207,Fc=208,Oc=209,Bc=210,zc=211,kc=212,Vc=213,Hc=214,ia=0,sa=1,ra=2,Jn=3,aa=4,oa=5,la=6,ca=7,Jo=0,Gc=1,Wc=2,_n=0,Xc=1,qc=2,Yc=3,ha=4,$c=5,Zc=6,Jc=7;var Ko=300,si=301,ri=302,ua=303,fa=304,ks=306,Ar=1e3,Pn=1001,Cr=1002,St=1003,Kc=1004;var Vs=1005;var Zt=1006,da=1007;var On=1008;var Kt=1009,Qo=1010,jo=1011,Hi=1012,pa=1013,Bn=1014,sn=1015,Gi=1016,ma=1017,ga=1018,Wi=1020,el=35902,tl=35899,nl=1021,il=1022,Gt=1023,Ci=1026,Xi=1027,Hs=1028,xa=1029,sl=1030,va=1031;var ya=1033,Gs=33776,Ws=33777,Xs=33778,qs=33779,_a=35840,Ma=35841,Sa=35842,ba=35843,wa=36196,Ta=37492,Ea=37496,Aa=37808,Ca=37809,Ra=37810,Pa=37811,Ia=37812,La=37813,Da=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Va=36492,Ha=36494,Ga=36495,Wa=36283,Xa=36284,qa=36285,Ya=36286;var os=2300,Rr=2301,wr=2302,Lo=2400,Do=2401,Uo=2402;var Qc=3200,jc=3201;var rl=0,eh=1,Mn="",Et="srgb",Kn="srgb-linear",ls="linear",et="srgb";var Yn=7680;var No=519,th=512,nh=513,ih=514,al=515,sh=516,rh=517,ah=518,oh=519,Fo=35044;var ol="300 es",$t=2e3,cs=2001;var gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,is=Math.PI/180,Ri=180/Math.PI;function ai(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[s&255]+_t[s>>8&255]+_t[s>>16&255]+_t[s>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function ll(s,e){return(s%e+e)%e}function pu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mu(s,e,t){return s!==e?(t-s)/(e-s):0}function ss(s,e,t){return(1-t)*s+t*e}function gu(s,e,t,n){return ss(s,e,1-Math.exp(-t*n))}function xu(s,e=1){return e-Math.abs(ll(s,e*2)-e)}function vu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _u(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mu(s,e){return s+Math.random()*(e-s)}function Su(s){return s*(.5-Math.random())}function bu(s){s!==void 0&&(Yl=s);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wu(s){return s*is}function Tu(s){return s*Ri}function Eu(s){return(s&s-1)===0&&s!==0}function Au(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ru(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),h=r((e+n)/2),u=a((e+n)/2),l=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*l,c*f,o*h);break;case"YZY":s.set(c*f,o*u,c*l,o*h);break;case"ZXZ":s.set(c*l,c*f,o*u,o*h);break;case"XZX":s.set(o*u,c*p,c*d,o*h);break;case"YXY":s.set(c*d,o*u,c*p,o*h);break;case"ZYZ":s.set(c*p,c*d,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var cl={DEG2RAD:is,RAD2DEG:Ri,generateUUID:ai,clamp:qe,euclideanModulo:ll,mapLinear:pu,inverseLerp:mu,lerp:ss,damp:gu,pingpong:xu,smoothstep:vu,smootherstep:yu,randInt:_u,randFloat:Mu,randFloatSpread:Su,seededRandom:bu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:Eu,ceilPowerOfTwo:Au,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Ru,normalize:Tt,denormalize:Ei},me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],h=n[i+1],u=n[i+2],l=n[i+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=l;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(l!==v||c!==f||h!==d||u!==p){let g=1-o,m=c*f+h*d+u*p+l*v,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let w=Math.sqrt(x),M=Math.atan2(w,m*S);g=Math.sin(g*M)/w,o=Math.sin(o*M)/w}let y=o*S;if(c=c*g+f*y,h=h*g+d*y,u=u*g+p*y,l=l*g+v*y,g===1-o){let w=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=w,h*=w,u*=w,l*=w}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],h=n[i+2],u=n[i+3],l=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*l+c*d-h*f,e[t+1]=c*p+u*f+h*l-o*d,e[t+2]=h*p+u*d+o*f-c*l,e[t+3]=u*p-o*l-c*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(i/2),l=o(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=f*u*l+h*d*p,this._y=h*d*l-f*u*p,this._z=h*u*p+f*d*l,this._w=h*u*l-f*d*p;break;case"YXZ":this._x=f*u*l+h*d*p,this._y=h*d*l-f*u*p,this._z=h*u*p-f*d*l,this._w=h*u*l+f*d*p;break;case"ZXY":this._x=f*u*l-h*d*p,this._y=h*d*l+f*u*p,this._z=h*u*p+f*d*l,this._w=h*u*l-f*d*p;break;case"ZYX":this._x=f*u*l-h*d*p,this._y=h*d*l+f*u*p,this._z=h*u*p-f*d*l,this._w=h*u*l+f*d*p;break;case"YZX":this._x=f*u*l+h*d*p,this._y=h*d*l+f*u*p,this._z=h*u*p-f*d*l,this._w=h*u*l-f*d*p;break;case"XZY":this._x=f*u*l-h*d*p,this._y=h*d*l-f*u*p,this._z=h*u*p+f*d*l,this._w=h*u*l+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],l=t[10],f=n+o+l;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-h)*d,this._z=(a-i)*d}else if(n>o&&n>l){let d=2*Math.sqrt(1+n-o-l);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+h)/d}else if(o>l){let d=2*Math.sqrt(1+o-n-l);this._w=(r-h)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+l-n-o);this._w=(a-i)/d,this._x=(r+h)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+i*h-r*c,this._y=i*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-i*o,this._w=a*u-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),l=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=a*l+this._w*f,this._x=n*l+this._x*f,this._y=i*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*i-o*n),u=2*(o*t-r*i),l=2*(r*n-a*t);return this.x=t+c*h+a*l-o*u,this.y=n+c*u+o*h-r*l,this.z=i+c*l+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ro=new U,$l=new xn,Ge=class s{constructor(e,t,n,i,r,a,o,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h)}set(e,t,n,i,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],l=n[7],f=n[2],d=n[5],p=n[8],v=i[0],g=i[3],m=i[6],S=i[1],x=i[4],y=i[7],w=i[2],M=i[5],T=i[8];return r[0]=a*v+o*S+c*w,r[3]=a*g+o*x+c*M,r[6]=a*m+o*y+c*T,r[1]=h*v+u*S+l*w,r[4]=h*g+u*x+l*M,r[7]=h*m+u*y+l*T,r[2]=f*v+d*S+p*w,r[5]=f*g+d*x+p*M,r[8]=f*m+d*y+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+i*r*h-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],l=u*a-o*h,f=o*c-u*r,d=h*r-a*c,p=t*l+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=l*v,e[1]=(i*h-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=d*v,e[7]=(n*c-h*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ao=new Ge;function hl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lh(){let s=hs("canvas");return s.style.display="block",s}var Zl={};function Pi(s){s in Zl||(Zl[s]=!0,console.warn(s))}function ch(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Jl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){let s={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?ls:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Pi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Pi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Kn]:{primaries:e,whitePoint:n,transfer:ls,toXYZ:Jl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Jl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),s}var Ze=Pu();function pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ai(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var pi,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pi===void 0&&(pi=hs("canvas")),pi.width=e.width,pi.height=e.height;let i=pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iu=0,Ii=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(oo(i[a].image)):r.push(oo(i[a]))}else r=oo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function oo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,lo=new U,Pt=class s extends gn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Pn,i=Pn,r=Zt,a=On,o=Gt,c=Kt,h=s.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ai(),this.name="",this.source=new Ii(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ko;Pt.DEFAULT_ANISOTROPY=1;var ht=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,h=c[0],u=c[4],l=c[8],f=c[1],d=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(l-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+v)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(h+1)/2,y=(d+1)/2,w=(m+1)/2,M=(u+f)/4,T=(l+v)/4,E=(p+g)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=M/n,r=T/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=E/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=E/r),this.set(n,i,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(l-v)*(l-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(l-v)/S,this.z=(f-u)/S,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ir=class extends gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Pt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ii(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Ir{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},us=class extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),nr.subVectors(this.max,Ki),mi.subVectors(e.a,Ki),gi.subVectors(e.b,Ki),xi.subVectors(e.c,Ki),bn.subVectors(gi,mi),wn.subVectors(xi,gi),Gn.subVectors(mi,xi);let t=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!co(t,mi,gi,xi,nr)||(t=[1,0,0,0,1,0,0,0,1],!co(t,mi,gi,xi,nr))?!1:(ir.crossVectors(bn,wn),t=[ir.x,ir.y,ir.z],co(t,mi,gi,xi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cn=[new U,new U,new U,new U,new U,new U,new U,new U],Xt=new U,tr=new Ln,mi=new U,gi=new U,xi=new U,bn=new U,wn=new U,Gn=new U,Ki=new U,nr=new U,ir=new U,Wn=new U;function co(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);let o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),c=e.dot(Wn),h=t.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Du=new Ln,Qi=new U,ho=new U,Qn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Du.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(ho)),this.expandByPoint(Qi.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hn=new U,uo=new U,sr=new U,Tn=new U,fo=new U,rr=new U,po=new U,Li=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(uo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=Tn.dot(this.direction),c=-Tn.dot(sr),h=Tn.lengthSq(),u=Math.abs(1-a*a),l,f,d,p;if(u>0)if(l=a*c-o,f=a*o-c,p=r*u,l>=0)if(f>=-p)if(f<=p){let v=1/u;l*=v,f*=v,d=l*(l+a*f+2*o)+f*(a*l+f+2*c)+h}else f=r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+h;else f=-r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+h;else f<=-p?(l=Math.max(0,-(-a*r+o)),f=l>0?-r:Math.min(Math.max(-r,-c),r),d=-l*l+f*(f+2*c)+h):f<=p?(l=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+h):(l=Math.max(0,-(a*r+o)),f=l>0?r:Math.min(Math.max(-r,-c),r),d=-l*l+f*(f+2*c)+h);else f=a>0?-r:r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(uo).addScaledVector(sr,f),d}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),l>=0?(o=(e.min.z-f.z)*l,c=(e.max.z-f.z)*l):(o=(e.max.z-f.z)*l,c=(e.min.z-f.z)*l),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,i,r){fo.subVectors(t,e),rr.subVectors(n,e),po.crossVectors(fo,rr);let a=this.direction.dot(po),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);let c=o*this.direction.dot(rr.crossVectors(Tn,rr));if(c<0)return null;let h=o*this.direction.dot(fo.cross(Tn));if(h<0||c+h>a)return null;let u=-o*Tn.dot(po);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class s{constructor(e,t,n,i,r,a,o,c,h,u,l,f,d,p,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h,u,l,f,d,p,v,g)}set(e,t,n,i,r,a,o,c,h,u,l,f,d,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=l,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),l=Math.sin(r);if(e.order==="XYZ"){let f=a*u,d=a*l,p=o*u,v=o*l;t[0]=c*u,t[4]=-c*l,t[8]=h,t[1]=d+p*h,t[5]=f-v*h,t[9]=-o*c,t[2]=v-f*h,t[6]=p+d*h,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*l,p=h*u,v=h*l;t[0]=f+v*o,t[4]=p*o-d,t[8]=a*h,t[1]=a*l,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*l,p=h*u,v=h*l;t[0]=f-v*o,t[4]=-a*l,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*l,p=o*u,v=o*l;t[0]=c*u,t[4]=p*h-d,t[8]=f*h+v,t[1]=c*l,t[5]=v*h+f,t[9]=d*h-p,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*h,p=o*c,v=o*h;t[0]=c*u,t[4]=v-f*l,t[8]=p*l+d,t[1]=l,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*l+p,t[10]=f-v*l}else if(e.order==="XZY"){let f=a*c,d=a*h,p=o*c,v=o*h;t[0]=c*u,t[4]=-l,t[8]=h*u,t[1]=f*l+v,t[5]=a*u,t[9]=d*l-p,t[2]=p*l-d,t[6]=o*u,t[10]=v*l+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Nu)}lookAt(e,t,n){let i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),En.crossVectors(n,Ut),En.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),En.crossVectors(n,Ut)),En.normalize(),ar.crossVectors(Ut,En),i[0]=En.x,i[4]=ar.x,i[8]=Ut.x,i[1]=En.y,i[5]=ar.y,i[9]=Ut.y,i[2]=En.z,i[6]=ar.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],l=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],x=n[7],y=n[11],w=n[15],M=i[0],T=i[4],E=i[8],_=i[12],b=i[1],A=i[5],I=i[9],D=i[13],N=i[2],F=i[6],z=i[10],X=i[14],W=i[3],se=i[7],re=i[11],ue=i[15];return r[0]=a*M+o*b+c*N+h*W,r[4]=a*T+o*A+c*F+h*se,r[8]=a*E+o*I+c*z+h*re,r[12]=a*_+o*D+c*X+h*ue,r[1]=u*M+l*b+f*N+d*W,r[5]=u*T+l*A+f*F+d*se,r[9]=u*E+l*I+f*z+d*re,r[13]=u*_+l*D+f*X+d*ue,r[2]=p*M+v*b+g*N+m*W,r[6]=p*T+v*A+g*F+m*se,r[10]=p*E+v*I+g*z+m*re,r[14]=p*_+v*D+g*X+m*ue,r[3]=S*M+x*b+y*N+w*W,r[7]=S*T+x*A+y*F+w*se,r[11]=S*E+x*I+y*z+w*re,r[15]=S*_+x*D+y*X+w*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],l=e[6],f=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*c*l-i*h*l-r*o*f+n*h*f+i*o*d-n*c*d)+v*(+t*c*d-t*h*f+r*a*f-i*a*d+i*h*u-r*c*u)+g*(+t*h*l-t*o*d-r*a*l+n*a*d+r*o*u-n*h*u)+m*(-i*o*u-t*c*l+t*o*f+i*a*l-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],l=e[9],f=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],S=l*g*h-v*f*h+v*c*d-o*g*d-l*c*m+o*f*m,x=p*f*h-u*g*h-p*c*d+a*g*d+u*c*m-a*f*m,y=u*v*h-p*l*h+p*o*d-a*v*d-u*o*m+a*l*m,w=p*l*c-u*v*c-p*o*f+a*v*f+u*o*g-a*l*g,M=t*S+n*x+i*y+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=S*T,e[1]=(v*f*r-l*g*r-v*i*d+n*g*d+l*i*m-n*f*m)*T,e[2]=(o*g*r-v*c*r+v*i*h-n*g*h-o*i*m+n*c*m)*T,e[3]=(l*c*r-o*f*r-l*i*h+n*f*h+o*i*d-n*c*d)*T,e[4]=x*T,e[5]=(u*g*r-p*f*r+p*i*d-t*g*d-u*i*m+t*f*m)*T,e[6]=(p*c*r-a*g*r-p*i*h+t*g*h+a*i*m-t*c*m)*T,e[7]=(a*f*r-u*c*r+u*i*h-t*f*h-a*i*d+t*c*d)*T,e[8]=y*T,e[9]=(p*l*r-u*v*r-p*n*d+t*v*d+u*n*m-t*l*m)*T,e[10]=(a*v*r-p*o*r+p*n*h-t*v*h-a*n*m+t*o*m)*T,e[11]=(u*o*r-a*l*r-u*n*h+t*l*h+a*n*d-t*o*d)*T,e[12]=w*T,e[13]=(u*v*i-p*l*i+p*n*f-t*v*f-u*n*g+t*l*g)*T,e[14]=(p*o*i-a*v*i-p*n*c+t*v*c+a*n*g-t*o*g)*T,e[15]=(a*l*i-u*o*i+u*n*c-t*l*c-a*n*f+t*o*f)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+n,u*c-i*a,0,h*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,l=o+o,f=r*h,d=r*u,p=r*l,v=a*u,g=a*l,m=o*l,S=c*h,x=c*u,y=c*l,w=n.x,M=n.y,T=n.z;return i[0]=(1-(v+m))*w,i[1]=(d+y)*w,i[2]=(p-x)*w,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(f+m))*M,i[6]=(g+S)*M,i[7]=0,i[8]=(p+x)*T,i[9]=(g-S)*T,i[10]=(1-(f+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=vi.set(i[0],i[1],i[2]).length(),a=vi.set(i[4],i[5],i[6]).length(),o=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);let h=1/r,u=1/a,l=1/o;return qt.elements[0]*=h,qt.elements[1]*=h,qt.elements[2]*=h,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=l,qt.elements[9]*=l,qt.elements[10]*=l,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=$t,c=!1){let h=this.elements,u=2*r/(t-e),l=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,v;if(c)p=r/(a-r),v=a*r/(a-r);else if(o===$t)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===cs)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=l,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=$t,c=!1){let h=this.elements,u=2/(t-e),l=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,v;if(c)p=1/(a-r),v=a/(a-r);else if(o===$t)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===cs)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=l,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vi=new U,qt=new at,Uu=new U(0,0,0),Nu=new U(1,1,1),En=new U,ar=new U,Ut=new U,Ql=new at,jl=new xn,en=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],u=i[9],l=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Di=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fu=0,ec=new U,yi=new xn,un=new at,or=new U,ji=new U,Ou=new U,Bu=new xn,tc=new U(1,0,0),nc=new U(0,1,0),ic=new U(0,0,1),sc={type:"added"},zu={type:"removed"},_i={type:"childadded",child:null},mo={type:"childremoved",child:null},vt=class s extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new en,n=new xn,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Di,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(ji,or,this.up):un.lookAt(or,ji,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(un),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let l=c[h];r(e.shapes,l)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),l=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};vt.DEFAULT_UP=new U(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=new U,fn=new U,go=new U,dn=new U,Mi=new U,Si=new U,rc=new U,xo=new U,vo=new U,yo=new U,_o=new ht,Mo=new ht,So=new ht,Rn=class s{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),fn.subVectors(n,t),go.subVectors(e,t);let a=Yt.dot(Yt),o=Yt.dot(fn),c=Yt.dot(go),h=fn.dot(fn),u=fn.dot(go),l=a*h-o*o;if(l===0)return r.set(0,0,0),null;let f=1/l,d=(h*c-o*u)*f,p=(a*u-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return _o.setScalar(0),Mo.setScalar(0),So.setScalar(0),_o.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),fn.subVectors(e,t),Yt.cross(fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Yt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Mi.subVectors(i,n),Si.subVectors(r,n),xo.subVectors(e,n);let c=Mi.dot(xo),h=Si.dot(xo);if(c<=0&&h<=0)return t.copy(n);vo.subVectors(e,i);let u=Mi.dot(vo),l=Si.dot(vo);if(u>=0&&l<=u)return t.copy(i);let f=c*l-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);yo.subVectors(e,r);let d=Mi.dot(yo),p=Si.dot(yo);if(p>=0&&d<=p)return t.copy(r);let v=d*h-c*p;if(v<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(n).addScaledVector(Si,o);let g=u*p-d*l;if(g<=0&&l-u>=0&&d-p>=0)return rc.subVectors(r,i),o=(l-u)/(l-u+(d-p)),t.copy(i).addScaledVector(rc,o);let m=1/(g+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},lr={h:0,s:0,l:0};function bo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=ll(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ze.workingToColorSpace(Mt.copy(this),e),Math.round(qe(Mt.r*255,0,255))*65536+Math.round(qe(Mt.g*255,0,255))*256+Math.round(qe(Mt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Mt.copy(this),t);let n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let l=a-o;switch(h=u<=.5?l/(a+o):l/(2-a-o),a){case n:c=(i-r)/l+(i<r?6:0);break;case i:c=(r-n)/l+2;break;case r:c=(n-i)/l+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Et){Ze.workingToColorSpace(Mt.copy(this),e);let t=Mt.r,n=Mt.g,i=Mt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(lr);let n=ss(An.h,lr.h,t),i=ss(An.s,lr.s,t),r=ss(An.l,lr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Ye;Ye.NAMES=hh;var ku=0,vn=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Zn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=Er,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fs=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ft=new U,cr=new me,Vu=0,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}};var ds=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ps=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hu=0,Vt=new at,wo=new vt,bi=new U,Nt=new Ln,es=new Ln,mt=new U,gt=class s extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?ps:ds)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Nt.min,es.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,es.max),Nt.expandByPoint(mt)):(Nt.expandByPoint(es.min),Nt.expandByPoint(es.max))}Nt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)mt.fromBufferAttribute(o,h),c&&(bi.fromBufferAttribute(e,h),mt.add(bi)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new U,c[E]=new U;let h=new U,u=new U,l=new U,f=new me,d=new me,p=new me,v=new U,g=new U;function m(E,_,b){h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,b),u.sub(h),l.sub(h),d.sub(f),p.sub(f);let A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(l,-d.y).multiplyScalar(A),g.copy(l).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(A),o[E].add(v),o[_].add(v),o[b].add(v),c[E].add(g),c[_].add(g),c[b].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let E=0,_=S.length;E<_;++E){let b=S[E],A=b.start,I=b.count;for(let D=A,N=A+I;D<N;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let x=new U,y=new U,w=new U,M=new U;function T(E){w.fromBufferAttribute(i,E),M.copy(w);let _=o[E];x.copy(_),x.sub(w.multiplyScalar(w.dot(_))).normalize(),y.crossVectors(M,_);let A=y.dot(c[E])<0?-1:1;a.setXYZW(E,x.x,x.y,x.z,A)}for(let E=0,_=S.length;E<_;++E){let b=S[E],A=b.start,I=b.count;for(let D=A,N=A+I;D<N;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,a=new U,o=new U,c=new U,h=new U,u=new U,l=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),l.subVectors(i,r),u.cross(l),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),l.subVectors(i,r),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){let h=o.array,u=o.itemSize,l=o.normalized,f=new h.constructor(c.length*u),d=0,p=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let m=0;m<u;m++)f[p++]=h[d++]}return new Ft(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,l=h.length;u<l;u++){let f=h[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let l=0,f=h.length;l<f;l++){let d=h[l];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let h in i){let u=i[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],l=r[h];for(let f=0,d=l.length;f<d;f++)u.push(l[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let l=a[h];this.addGroup(l.start,l.count,l.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ac=new at,Xn=new Li,hr=new Qn,oc=new U,ur=new U,fr=new U,dr=new U,To=new U,pr=new U,lc=new U,mr=new U,It=class extends vt{constructor(e=new gt,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],l=r[c];u!==0&&(To.fromBufferAttribute(l,e),a?pr.addScaledVector(To,u):pr.addScaledVector(To.sub(t),u))}t.add(pr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(hr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(hr,oc)===null||Xn.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(ac.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,w=x;y<w;y+=3){let M=o.getX(y),T=o.getX(y+1),E=o.getX(y+2);i=gr(this,m,e,n,h,u,l,M,T,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let S=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);i=gr(this,a,e,n,h,u,l,S,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,w=x;y<w;y+=3){let M=y,T=y+1,E=y+2;i=gr(this,m,e,n,h,u,l,M,T,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let S=g,x=g+1,y=g+2;i=gr(this,a,e,n,h,u,l,S,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Gu(s,e,t,n,i,r,a,o){let c;if(e.side===At?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===mn,o),c===null)return null;mr.copy(o),mr.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(mr);return h<t.near||h>t.far?null:{distance:h,point:mr.clone(),object:s}}function gr(s,e,t,n,i,r,a,o,c,h){s.getVertexPosition(o,ur),s.getVertexPosition(c,fr),s.getVertexPosition(h,dr);let u=Gu(s,e,t,n,ur,fr,dr,lc);if(u){let l=new U;Rn.getBarycoord(lc,ur,fr,dr,l),i&&(u.uv=Rn.getInterpolatedAttribute(i,o,c,h,l,new me)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,o,c,h,l,new me)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,c,h,l,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new U,materialIndex:0};Rn.getNormal(ur,fr,dr,f.normal),u.face=f,u.barycoord=l}return u}var Dn=class s extends gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],l=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(l,2));function p(v,g,m,S,x,y,w,M,T,E,_){let b=y/T,A=w/E,I=y/2,D=w/2,N=M/2,F=T+1,z=E+1,X=0,W=0,se=new U;for(let re=0;re<z;re++){let ue=re*A-D;for(let De=0;De<F;De++){let Oe=De*b-I;se[v]=Oe*S,se[g]=ue*x,se[m]=N,h.push(se.x,se.y,se.z),se[v]=0,se[g]=0,se[m]=M>0?1:-1,u.push(se.x,se.y,se.z),l.push(De/T),l.push(1-re/E),X+=1}}for(let re=0;re<E;re++)for(let ue=0;ue<T;ue++){let De=f+ue+F*re,Oe=f+ue+F*(re+1),we=f+(ue+1)+F*(re+1),Be=f+(ue+1)+F*re;c.push(De,Oe,Be),c.push(Oe,we,Be),W+=6}o.addGroup(d,W,_),d+=W,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function oi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){let e={};for(let t=0;t<s.length;t++){let n=oi(s[t]);for(let i in n)e[i]=n[i]}return e}function Wu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ul(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var uh={clone:oi,merge:bt},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=Wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ms=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cn=new U,cc=new me,hc=new me,Rt=class extends ms{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,cc,hc),t.subVectors(hc,cc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wi=-90,Ti=1,Dr=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Rt(wi,Ti,e,t);i.layers=this.layers,this.add(i);let r=new Rt(wi,Ti,e,t);r.layers=this.layers,this.add(r);let a=new Rt(wi,Ti,e,t);a.layers=this.layers,this.add(a);let o=new Rt(wi,Ti,e,t);o.layers=this.layers,this.add(o);let c=new Rt(wi,Ti,e,t);c.layers=this.layers,this.add(c);let h=new Rt(wi,Ti,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,l=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(l,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gs=class extends Pt{constructor(e=[],t=si,n,i,r,a,o,c,h,u){super(e,t,n,i,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ur=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Dn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:yn});r.uniforms.tEquirect.value=t;let a=new It(i,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Zt),new Dr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},xt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yu={type:"move"},Ui=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=u.position.distanceTo(l.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var xs=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var vs=class extends Pt{constructor(e=null,t=1,n=1,i,r,a,o,c,h=St,u=St,l,f){super(null,a,o,c,h,u,i,r,l,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eo=new U,$u=new U,Zu=new Ge,Ht=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Eo.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zu.getNormalMatrix(e),i=this.coplanarPoint(Eo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Qn,Ju=new me(.5,.5),xr=new U,Ni=class{constructor(e=new Ht,t=new Ht,n=new Ht,i=new Ht,r=new Ht,a=new Ht){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],l=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],S=r[12],x=r[13],y=r[14],w=r[15];if(i[0].setComponents(h-a,d-u,m-p,w-S).normalize(),i[1].setComponents(h+a,d+u,m+p,w+S).normalize(),i[2].setComponents(h+o,d+l,m+v,w+x).normalize(),i[3].setComponents(h-o,d-l,m-v,w-x).normalize(),n)i[4].setComponents(c,f,g,y).normalize(),i[5].setComponents(h-c,d-f,m-g,w-y).normalize();else if(i[4].setComponents(h-c,d-f,m-g,w-y).normalize(),t===$t)i[5].setComponents(h+c,d+f,m+g,w+y).normalize();else if(t===cs)i[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);let t=Ju.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xr.x=i.normal.x>0?e.max.x:e.min.x,xr.y=i.normal.y>0?e.max.y:e.min.y,xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jn=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nr=new U,Fr=new U,uc=new at,ts=new Li,vr=new Qn,Ao=new U,fc=new U,Fi=class extends vt{constructor(e=new gt,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nr.fromBufferAttribute(t,i-1),Fr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(i),vr.radius+=r,e.ray.intersectsSphere(vr)===!1)return;uc.copy(i).invert(),ts.copy(e.ray).applyMatrix4(uc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=h){let m=u.getX(v),S=u.getX(v+1),x=yr(this,e,ts,c,m,S,v);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(d),m=yr(this,e,ts,c,v,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=h){let m=yr(this,e,ts,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=yr(this,e,ts,c,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yr(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Nr.fromBufferAttribute(o,i),Fr.fromBufferAttribute(o,r),t.distanceSqToSegment(Nr,Fr,Ao,fc)>n)return;Ao.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Ao);if(!(h<e.near||h>e.far))return{distance:h,point:fc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var dc=new U,pc=new U,ys=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)dc.fromBufferAttribute(t,i),pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dc.distanceTo(pc);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends Pt{constructor(e,t,n=Bn,i,r,a,o=St,c=St,h,u=Ci,l=1){if(u!==Ci&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:l};super(f,i,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ii(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ms=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Oi=class s extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],h=new U,u=new me;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let l=0,f=3;l<=t;l++,f+=3){let d=n+l/t*i;h.x=e*Math.cos(d),h.y=e*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let l=1;l<=t;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ss=class s extends gt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let u=[],l=[],f=[],d=[],p=0,v=[],g=n/2,m=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function S(){let y=new U,w=new U,M=0,T=(t-e)/n;for(let E=0;E<=r;E++){let _=[],b=E/r,A=b*(t-e)+e;for(let I=0;I<=i;I++){let D=I/i,N=D*c+o,F=Math.sin(N),z=Math.cos(N);w.x=A*F,w.y=-b*n+g,w.z=A*z,l.push(w.x,w.y,w.z),y.set(F,T,z).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-b),_.push(p++)}v.push(_)}for(let E=0;E<i;E++)for(let _=0;_<r;_++){let b=v[_][E],A=v[_+1][E],I=v[_+1][E+1],D=v[_][E+1];(e>0||_!==0)&&(u.push(b,A,D),M+=3),(t>0||_!==r-1)&&(u.push(A,I,D),M+=3)}h.addGroup(m,M,0),m+=M}function x(y){let w=p,M=new me,T=new U,E=0,_=y===!0?e:t,b=y===!0?1:-1;for(let I=1;I<=i;I++)l.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let A=p;for(let I=0;I<=i;I++){let N=I/i*c+o,F=Math.cos(N),z=Math.sin(N);T.x=_*z,T.y=g*b,T.z=_*F,l.push(T.x,T.y,T.z),f.push(0,b,0),M.x=F*.5+.5,M.y=z*.5*b+.5,d.push(M.x,M.y),p++}for(let I=0;I<i;I++){let D=w+I,N=A+I;y===!0?u.push(N,N+1,D):u.push(N+1,N,D),E+=3}h.addGroup(m,E,y===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Or=class s extends gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),h(n),u(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let x=new U,y=new U,w=new U;for(let M=0;M<t.length;M+=3)d(t[M+0],x),d(t[M+1],y),d(t[M+2],w),c(x,y,w,S)}function c(S,x,y,w){let M=w+1,T=[];for(let E=0;E<=M;E++){T[E]=[];let _=S.clone().lerp(y,E/M),b=x.clone().lerp(y,E/M),A=M-E;for(let I=0;I<=A;I++)I===0&&E===M?T[E][I]=_:T[E][I]=_.clone().lerp(b,I/A)}for(let E=0;E<M;E++)for(let _=0;_<2*(M-E)-1;_++){let b=Math.floor(_/2);_%2===0?(f(T[E][b+1]),f(T[E+1][b]),f(T[E][b])):(f(T[E][b+1]),f(T[E+1][b+1]),f(T[E+1][b]))}}function h(S){let x=new U;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(S),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){let S=new U;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];let y=g(S)/2/Math.PI+.5,w=m(S)/Math.PI+.5;a.push(y,1-w)}p(),l()}function l(){for(let S=0;S<a.length;S+=6){let x=a[S+0],y=a[S+2],w=a[S+4],M=Math.max(x,y,w),T=Math.min(x,y,w);M>.9&&T<.1&&(x<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,x){let y=S*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function p(){let S=new U,x=new U,y=new U,w=new U,M=new me,T=new me,E=new me;for(let _=0,b=0;_<r.length;_+=9,b+=6){S.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),M.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),E.set(a[b+4],a[b+5]),w.copy(S).add(x).add(y).divideScalar(3);let A=g(w);v(M,b+0,S,A),v(T,b+2,x,A),v(E,b+4,y,A)}}function v(S,x,y,w){w<0&&S.x===1&&(a[x]=S.x-1),y.x===0&&y.z===0&&(a[x]=w/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},bs=class s extends Or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new me:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,i=[],r=[],a=[],o=new U,c=new at;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let h=Number.MAX_VALUE,u=Math.abs(i[0].x),l=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),l<=h&&(h=l,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(qe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(qe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bi=class extends Ot{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new me){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*u-d*l+this.aX,h=f*l+d*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Br=class extends Bi{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fl(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){i(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,l){let f=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+l)+(c-o)/l;f*=u,d*=u,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var _r=new U,Co=new fl,Ro=new fl,Po=new fl,zr=class extends Ot{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=i[(o-1)%r]:(_r.subVectors(i[0],i[1]).add(i[0]),h=_r);let l=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(_r.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=_r),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(l),d),v=Math.pow(l.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Co.initNonuniformCatmullRom(h.x,l.x,f.x,u.x,p,v,g),Ro.initNonuniformCatmullRom(h.y,l.y,f.y,u.y,p,v,g),Po.initNonuniformCatmullRom(h.z,l.z,f.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(h.x,l.x,f.x,u.x,this.tension),Ro.initCatmullRom(h.y,l.y,f.y,u.y,this.tension),Po.initCatmullRom(h.z,l.z,f.z,u.z,this.tension));return n.set(Co.calc(c),Ro.calc(c),Po.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mc(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Ku(s,e){let t=1-s;return t*t*e}function Qu(s,e){return 2*(1-s)*s*e}function ju(s,e){return s*s*e}function rs(s,e,t,n){return Ku(s,e)+Qu(s,t)+ju(s,n)}function ef(s,e){let t=1-s;return t*t*t*e}function tf(s,e){let t=1-s;return 3*t*t*s*e}function nf(s,e){return 3*(1-s)*s*s*e}function sf(s,e){return s*s*s*e}function as(s,e,t,n,i){return ef(s,e)+tf(s,t)+nf(s,n)+sf(s,i)}var ws=class extends Ot{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(e,i.x,r.x,a.x,o.x),as(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kr=class extends Ot{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(e,i.x,r.x,a.x,o.x),as(e,i.y,r.y,a.y,o.y),as(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ts=class extends Ot{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Ot{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends Ot{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(rs(e,i.x,r.x,a.x),rs(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends Ot{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(rs(e,i.x,r.x,a.x),rs(e,i.y,r.y,a.y),rs(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},As=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],h=i[a],u=i[a>i.length-2?i.length-1:a+1],l=i[a>i.length-3?i.length-1:a+2];return n.set(mc(o,c.x,h.x,u.x,l.x),mc(o,c.y,h.y,u.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new me().fromArray(i))}return this}},Oo=Object.freeze({__proto__:null,ArcCurve:Br,CatmullRomCurve3:zr,CubicBezierCurve:ws,CubicBezierCurve3:kr,EllipseCurve:Bi,LineCurve:Ts,LineCurve3:Vr,QuadraticBezierCurve:Es,QuadraticBezierCurve3:Hr,SplineCurve:As}),Gr=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Oo[i.type]().fromJSON(i))}return this}},Cs=class extends Gr{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ts(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Es(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new ws(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new As(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let h=new Bi(e,t,n,i,r,a,o,c);if(this.curves.length>0){let l=h.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ei=class extends Cs{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Cs().fromJSON(i))}return this}};function rf(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=fh(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=hf(s,e,r,t)),s.length>80*t){o=1/0,c=1/0;let u=-1/0,l=-1/0;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<o&&(o=d),p<c&&(c=p),d>u&&(u=d),p>l&&(l=p)}h=Math.max(u-o,l-c),h=h!==0?32767/h:0}return Rs(r,a,t,o,c,h,0),a}function fh(s,e,t,n,i){let r;if(i===Mf(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=gc(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=gc(a/n|0,s[a],s[a+1],r);return r&&zi(r,r.next)&&(Is(r),r=r.next),r}function ti(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(zi(t,t.next)||ct(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rs(s,e,t,n,i,r,a){if(!s)return;!a&&r&&mf(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,h=s.next;if(r?of(s,n,i,r):af(s)){e.push(c.i,s.i,h.i),Is(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=lf(ti(s),e),Rs(s,e,t,n,i,r,2)):a===2&&cf(s,e,t,n,i,r):Rs(ti(s),e,t,n,i,r,1);break}}}function af(s){let e=s.prev,t=s,n=s.next;if(ct(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,h=n.y,u=Math.min(i,r,a),l=Math.min(o,c,h),f=Math.max(i,r,a),d=Math.max(o,c,h),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=l&&p.y<=d&&ns(i,o,r,c,a,h,p.x,p.y)&&ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function of(s,e,t,n){let i=s.prev,r=s,a=s.next;if(ct(i,r,a)>=0)return!1;let o=i.x,c=r.x,h=a.x,u=i.y,l=r.y,f=a.y,d=Math.min(o,c,h),p=Math.min(u,l,f),v=Math.max(o,c,h),g=Math.max(u,l,f),m=Bo(d,p,e,t,n),S=Bo(v,g,e,t,n),x=s.prevZ,y=s.nextZ;for(;x&&x.z>=m&&y&&y.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ns(o,u,c,l,h,f,x.x,x.y)&&ct(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&ns(o,u,c,l,h,f,y.x,y.y)&&ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ns(o,u,c,l,h,f,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&ns(o,u,c,l,h,f,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lf(s,e){let t=s;do{let n=t.prev,i=t.next.next;!zi(n,i)&&ph(n,t,t.next,i)&&Ps(n,i)&&Ps(i,n)&&(e.push(n.i,t.i,i.i),Is(t),Is(t.next),t=s=i),t=t.next}while(t!==s);return ti(t)}function cf(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vf(a,o)){let c=mh(a,o);a=ti(a,a.next),c=ti(c,c.next),Rs(a,e,t,n,i,r,0),Rs(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function hf(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,h=fh(s,o,c,n,!1);h===h.next&&(h.steiner=!0),i.push(xf(h))}i.sort(uf);for(let r=0;r<i.length;r++)t=ff(i[r],t);return t}function uf(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function ff(s,e){let t=df(s,e);if(!t)return e;let n=mh(t,s);return ti(n,n.next),ti(t,t.next)}function df(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(zi(s,t))return t;do{if(zi(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let l=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(l<=n&&l>r&&(r=l,a=t.x<t.next.x?t:t.next,l===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&dh(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)){let l=Math.abs(i-t.y)/(n-t.x);Ps(t,s)&&(l<u||l===u&&(t.x>a.x||t.x===a.x&&pf(a,t)))&&(a=t,u=l)}t=t.next}while(t!==o);return a}function pf(s,e){return ct(s.prev,s,e.prev)<0&&ct(e.next,s,s.next)<0}function mf(s,e,t,n){let i=s;do i.z===0&&(i.z=Bo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gf(i)}function gf(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Bo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function xf(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function dh(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ns(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&dh(s,e,t,n,i,r,a,o)}function vf(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yf(s,e)&&(Ps(s,e)&&Ps(e,s)&&_f(s,e)&&(ct(s.prev,s,e.prev)||ct(s,e.prev,e))||zi(s,e)&&ct(s.prev,s,s.next)>0&&ct(e.prev,e,e.next)>0)}function ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function zi(s,e){return s.x===e.x&&s.y===e.y}function ph(s,e,t,n){let i=Sr(ct(s,e,t)),r=Sr(ct(s,e,n)),a=Sr(ct(t,n,s)),o=Sr(ct(t,n,e));return!!(i!==r&&a!==o||i===0&&Mr(s,t,e)||r===0&&Mr(s,n,e)||a===0&&Mr(t,s,n)||o===0&&Mr(t,e,n))}function Mr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Sr(s){return s>0?1:s<0?-1:0}function yf(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ph(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ps(s,e){return ct(s.prev,s,s.next)<0?ct(s,e,s.next)>=0&&ct(s,s.prev,e)>=0:ct(s,e,s.prev)<0||ct(s,s.next,e)<0}function _f(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mh(s,e){let t=zo(s.i,s.x,s.y),n=zo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gc(s,e,t,n){let i=zo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zo(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mf(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ko=class{static triangulate(e,t,n=2){return rf(e,t,n)}},$n=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];xc(e),vc(n,e);let a=e.length;t.forEach(xc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,vc(n,t[c]);let o=ko.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function xc(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function vc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ki=class s extends gt{constructor(e=new ei([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o];a(h)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){let c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,l=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Sf,x,y=!1,w,M,T,E;m&&(x=m.getSpacedPoints(u),y=!0,f=!1,w=m.computeFrenetFrames(u,!1),M=new U,T=new U,E=new U),f||(g=0,d=0,p=0,v=0);let _=o.extractPoints(h),b=_.shape,A=_.holes;if(!$n.isClockWise(b)){b=b.reverse();for(let ne=0,j=A.length;ne<j;ne++){let Q=A[ne];$n.isClockWise(Q)&&(A[ne]=Q.reverse())}}function D(ne){let Q=10000000000000001e-36,K=ne[0];for(let fe=1;fe<=ne.length;fe++){let B=fe%ne.length,k=ne[B],de=k.x-K.x,le=k.y-K.y,P=de*de+le*le,C=Math.max(Math.abs(k.x),Math.abs(k.y),Math.abs(K.x),Math.abs(K.y)),G=Q*C*C;if(P<=G){ne.splice(B,1),fe--;continue}K=k}}D(b),A.forEach(D);let N=A.length,F=b;for(let ne=0;ne<N;ne++){let j=A[ne];b=b.concat(j)}function z(ne,j,Q){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(j,Q)}let X=b.length;function W(ne,j,Q){let K,fe,B,k=ne.x-j.x,de=ne.y-j.y,le=Q.x-ne.x,P=Q.y-ne.y,C=k*k+de*de,G=k*P-de*le;if(Math.abs(G)>Number.EPSILON){let $=Math.sqrt(C),ie=Math.sqrt(le*le+P*P),J=j.x-de/$,Ie=j.y+k/$,pe=Q.x-P/ie,Ce=Q.y+le/ie,Re=((pe-J)*P-(Ce-Ie)*le)/(k*P-de*le);K=J+k*Re-ne.x,fe=Ie+de*Re-ne.y;let ae=K*K+fe*fe;if(ae<=2)return new me(K,fe);B=Math.sqrt(ae/2)}else{let $=!1;k>Number.EPSILON?le>Number.EPSILON&&($=!0):k<-Number.EPSILON?le<-Number.EPSILON&&($=!0):Math.sign(de)===Math.sign(P)&&($=!0),$?(K=-de,fe=k,B=Math.sqrt(C)):(K=k,fe=de,B=Math.sqrt(C/2))}return new me(K/B,fe/B)}let se=[];for(let ne=0,j=F.length,Q=j-1,K=ne+1;ne<j;ne++,Q++,K++)Q===j&&(Q=0),K===j&&(K=0),se[ne]=W(F[ne],F[Q],F[K]);let re=[],ue,De=se.concat();for(let ne=0,j=N;ne<j;ne++){let Q=A[ne];ue=[];for(let K=0,fe=Q.length,B=fe-1,k=K+1;K<fe;K++,B++,k++)B===fe&&(B=0),k===fe&&(k=0),ue[K]=W(Q[K],Q[B],Q[k]);re.push(ue),De=De.concat(ue)}let Oe;if(g===0)Oe=$n.triangulateShape(F,A);else{let ne=[],j=[];for(let Q=0;Q<g;Q++){let K=Q/g,fe=d*Math.cos(K*Math.PI/2),B=p*Math.sin(K*Math.PI/2)+v;for(let k=0,de=F.length;k<de;k++){let le=z(F[k],se[k],B);be(le.x,le.y,-fe),K===0&&ne.push(le)}for(let k=0,de=N;k<de;k++){let le=A[k];ue=re[k];let P=[];for(let C=0,G=le.length;C<G;C++){let $=z(le[C],ue[C],B);be($.x,$.y,-fe),K===0&&P.push($)}K===0&&j.push(P)}}Oe=$n.triangulateShape(ne,j)}let we=Oe.length,Be=p+v;for(let ne=0;ne<X;ne++){let j=f?z(b[ne],De[ne],Be):b[ne];y?(T.copy(w.normals[0]).multiplyScalar(j.x),M.copy(w.binormals[0]).multiplyScalar(j.y),E.copy(x[0]).add(T).add(M),be(E.x,E.y,E.z)):be(j.x,j.y,0)}for(let ne=1;ne<=u;ne++)for(let j=0;j<X;j++){let Q=f?z(b[j],De[j],Be):b[j];y?(T.copy(w.normals[ne]).multiplyScalar(Q.x),M.copy(w.binormals[ne]).multiplyScalar(Q.y),E.copy(x[ne]).add(T).add(M),be(E.x,E.y,E.z)):be(Q.x,Q.y,l/u*ne)}for(let ne=g-1;ne>=0;ne--){let j=ne/g,Q=d*Math.cos(j*Math.PI/2),K=p*Math.sin(j*Math.PI/2)+v;for(let fe=0,B=F.length;fe<B;fe++){let k=z(F[fe],se[fe],K);be(k.x,k.y,l+Q)}for(let fe=0,B=A.length;fe<B;fe++){let k=A[fe];ue=re[fe];for(let de=0,le=k.length;de<le;de++){let P=z(k[de],ue[de],K);y?be(P.x,P.y+x[u-1].y,x[u-1].x+Q):be(P.x,P.y,l+Q)}}}Z(),ee();function Z(){let ne=i.length/3;if(f){let j=0,Q=X*j;for(let K=0;K<we;K++){let fe=Oe[K];ve(fe[2]+Q,fe[1]+Q,fe[0]+Q)}j=u+g*2,Q=X*j;for(let K=0;K<we;K++){let fe=Oe[K];ve(fe[0]+Q,fe[1]+Q,fe[2]+Q)}}else{for(let j=0;j<we;j++){let Q=Oe[j];ve(Q[2],Q[1],Q[0])}for(let j=0;j<we;j++){let Q=Oe[j];ve(Q[0]+X*u,Q[1]+X*u,Q[2]+X*u)}}n.addGroup(ne,i.length/3-ne,0)}function ee(){let ne=i.length/3,j=0;ge(F,j),j+=F.length;for(let Q=0,K=A.length;Q<K;Q++){let fe=A[Q];ge(fe,j),j+=fe.length}n.addGroup(ne,i.length/3-ne,1)}function ge(ne,j){let Q=ne.length;for(;--Q>=0;){let K=Q,fe=Q-1;fe<0&&(fe=ne.length-1);for(let B=0,k=u+g*2;B<k;B++){let de=X*B,le=X*(B+1),P=j+K+de,C=j+fe+de,G=j+fe+le,$=j+K+le;Fe(P,C,G,$)}}}function be(ne,j,Q){c.push(ne),c.push(j),c.push(Q)}function ve(ne,j,Q){Ke(ne),Ke(j),Ke(Q);let K=i.length/3,fe=S.generateTopUV(n,i,K-3,K-2,K-1);L(fe[0]),L(fe[1]),L(fe[2])}function Fe(ne,j,Q,K){Ke(ne),Ke(j),Ke(K),Ke(j),Ke(Q),Ke(K);let fe=i.length/3,B=S.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);L(B[0]),L(B[1]),L(B[3]),L(B[1]),L(B[2]),L(B[3])}function Ke(ne){i.push(c[ne*3+0]),i.push(c[ne*3+1]),i.push(c[ne*3+2])}function L(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Oo[i.type]().fromJSON(i)),new s(n,e.options)}},Sf={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[i*3],u=e[i*3+1];return[new me(r,a),new me(o,c),new me(h,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],u=e[n*3+1],l=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new me(a,1-c),new me(h,1-l),new me(f,1-p),new me(v,1-m)]:[new me(o,1-c),new me(u,1-l),new me(d,1-p),new me(g,1-m)]}};function bf(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ls=class s extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,u=c+1,l=e/o,f=t/c,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let S=m*f-a;for(let x=0;x<h;x++){let y=x*l-r;p.push(y,-S,0),v.push(0,0,1),g.push(x/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let x=S+h*m,y=S+h*(m+1),w=S+1+h*(m+1),M=S+1+h*m;d.push(x,y,M),d.push(y,w,M)}this.setIndex(d),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Un=class s extends gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],l=new U,f=new U,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let S=[],x=m/n,y=0;m===0&&a===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let M=w/t;l.x=-e*Math.cos(i+M*r)*Math.sin(a+x*o),l.y=e*Math.cos(a+x*o),l.z=e*Math.sin(i+M*r)*Math.sin(a+x*o),p.push(l.x,l.y,l.z),f.copy(l).normalize(),v.push(f.x,f.y,f.z),g.push(M+y,1-x),S.push(h++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let x=u[m][S+1],y=u[m][S],w=u[m+1][S],M=u[m+1][S+1];(m!==0||a>0)&&d.push(x,y,M),(m!==n-1||c<Math.PI)&&d.push(y,w,M)}this.setIndex(d),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ds=class s extends gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],h=[],u=new U,l=new U,f=new U;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let v=p/i*r,g=d/n*Math.PI*2;l.x=(e+t*Math.cos(g))*Math.cos(v),l.y=(e+t*Math.cos(g))*Math.sin(v),l.z=t*Math.sin(g),o.push(l.x,l.y,l.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(l,u).normalize(),c.push(f.x,f.y,f.z),h.push(p/i),h.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let v=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,S=(i+1)*d+p;a.push(v,g,S),a.push(g,m,S)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Us=class extends vn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wr=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xr=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ns=class extends jn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function br(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function wf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ni=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qr=class extends ni{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lo,endingEnd:Lo}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Do:r=e,o=2*t-n;break;case Uo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Do:a=e,c=2*n-t;break;case Uo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,l=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,S=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,x=(-1-d)*g+(1.5+d)*v+.5*p,y=d*g-d*v;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+S*a[h+w]+x*a[c+w]+y*a[l+w];return r}},Yr=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(i-t),l=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*l+a[c+f]*u;return r}},$r=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case wr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return wr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&wf(i))for(let o=0,c=i.length;o!==c;++o){let h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(i)c=!0;else{let l=o*n,f=l-n,d=l+n;for(let p=0;p!==n;++p){let v=t[l+p];if(v!==t[f+p]||v!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let l=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[l+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Bt.prototype.ValueTypeName="";Bt.prototype.TimeBufferType=Float32Array;Bt.prototype.ValueBufferType=Float32Array;Bt.prototype.DefaultInterpolation=Rr;var Nn=class extends Bt{constructor(e,t,n){super(e,t,n)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=os;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}};Zr.prototype.ValueTypeName="color";var Jr=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}};Jr.prototype.ValueTypeName="number";var Kr=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),h=e*o;for(let u=h+o;h!==u;h+=4)xn.slerpFlat(r,0,a,h-o,a,h,c);return r}},Fs=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Kr(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends Bt{constructor(e,t,n){super(e,t,n)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=os;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}};Qr.prototype.ValueTypeName="vector";var jr=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return h.push(u,l),this},this.removeHandler=function(u){let l=h.indexOf(u);return l!==-1&&h.splice(l,2),this},this.getHandler=function(u){for(let l=0,f=h.length;l<f;l+=2){let d=h[l],p=h[l+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gh=new jr,ea=class{constructor(e){this.manager=e!==void 0?e:gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bs=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Io=new at,yc=new U,_c=new U,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ii=class extends ms{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ho=class extends Vo{constructor(){super(new ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Ho}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ta=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dl="\\[\\]\\.:\\/",Tf=new RegExp("["+dl+"]","g"),pl="[^"+dl+"]",Ef="[^"+dl.replace("\\.","")+"]",Af=/((?:WC+[\/:])*)/.source.replace("WC",pl),Cf=/(WCOD+)?/.source.replace("WCOD",Ef),Rf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),Pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),If=new RegExp("^"+Af+Cf+Rf+Pf+"$"),Lf=["material","materials","bones","map"],Go=class{constructor(e,t,n){let i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tf,"")}static parseTrackName(e){let t=If.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Lf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[i];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Go;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p0=new Float32Array(1);var Mc=new at,zs=class{constructor(e,t,n=0,i=1/0){this.ray=new Li(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Di,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(e,t=!0,n=[]){return Wo(e,this,n,t),n.sort(Sc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Wo(e[i],this,n,t);return n.sort(Sc),n}};function Sc(s,e){return s.distance-e.distance}function Wo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Wo(r[a],e,t,!0)}}function ml(s,e,t,n){let i=Df(n);switch(t){case nl:return s*e;case Hs:return s*e/i.components*i.byteLength;case xa:return s*e/i.components*i.byteLength;case sl:return s*e*2/i.components*i.byteLength;case va:return s*e*2/i.components*i.byteLength;case il:return s*e*3/i.components*i.byteLength;case Gt:return s*e*4/i.components*i.byteLength;case ya:return s*e*4/i.components*i.byteLength;case Gs:case Ws:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(s,16)*Math.max(e,8)/4;case _a:case Sa:return Math.max(s,8)*Math.max(e,8)/2;case wa:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Va:case Ha:case Ga:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qa:case Ya:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Df(s){switch(s){case Kt:case Qo:return{byteLength:1,components:1};case Hi:case jo:case Gi:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case Bn:case pa:case sn:return{byteLength:4,components:1};case el:case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Nf(s){let e=new WeakMap;function t(o,c){let h=o.array,u=o.usage,l=h.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=s.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=s.SHORT;else if(h instanceof Uint32Array)d=s.UNSIGNED_INT;else if(h instanceof Int32Array)d=s.INT;else if(h instanceof Int8Array)d=s.BYTE;else if(h instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,h){let u=c.array,l=c.updateRanges;if(s.bindBuffer(h,o),l.length===0)s.bufferSubData(h,0,u);else{l.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<l.length;d++){let p=l[f],v=l[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,l[f]=v)}l.length=f+1;for(let d=0,p=l.length;d<p;d++){let v=l[d];s.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
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
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
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
#endif`,Ud=`struct PhysicalMaterial {
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
}`,Nd=`
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xd=`#if defined( USE_POINTS_UV )
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
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,em=`#define MATCAP
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
}`,tm=`#define NORMAL
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
}`,nm=`#define NORMAL
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
}`,im=`#define PHONG
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
}`,sm=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,am=`#define STANDARD
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
}`,om=`#define TOON
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
}`,lm=`#define TOON
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
}`,cm=`uniform float size;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,pm=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:Bf,alphamap_pars_fragment:zf,alphatest_fragment:kf,alphatest_pars_fragment:Vf,aomap_fragment:Hf,aomap_pars_fragment:Gf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:$f,iridescence_fragment:Zf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:ed,color_fragment:td,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:fd,colorspace_pars_fragment:dd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Cd,envmap_vertex:vd,fog_vertex:yd,fog_pars_vertex:_d,fog_fragment:Md,fog_pars_fragment:Sd,gradientmap_pars_fragment:bd,lightmap_pars_fragment:wd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ed,lights_pars_begin:Ad,lights_toon_fragment:Rd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ld,lights_physical_fragment:Dd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Od,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Vd,map_fragment:Hd,map_pars_fragment:Gd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:$d,morphcolor_vertex:Zd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Kd,morphtarget_vertex:Qd,normal_fragment_begin:jd,normal_fragment_maps:ep,normal_pars_fragment:tp,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:fp,dithering_fragment:dp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:vp,shadowmap_vertex:yp,shadowmask_pars_fragment:_p,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:bp,skinnormal_vertex:wp,specularmap_fragment:Tp,specularmap_pars_fragment:Ep,tonemapping_fragment:Ap,tonemapping_pars_fragment:Cp,transmission_fragment:Rp,transmission_pars_fragment:Pp,uv_pars_fragment:Ip,uv_pars_vertex:Lp,uv_vertex:Dp,worldpos_vertex:Up,background_vert:Np,background_frag:Fp,backgroundCube_vert:Op,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:kp,depth_vert:Vp,depth_frag:Hp,distanceRGBA_vert:Gp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:$p,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:Kp,meshlambert_frag:Qp,meshmatcap_vert:jp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:fm,sprite_vert:dm,sprite_frag:pm},ye={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},rn={basic:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:bt([ye.points,ye.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:bt([ye.common,ye.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:bt([ye.sprite,ye.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:bt([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:bt([ye.lights,ye.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};rn.physical={uniforms:bt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var $a={r:0,b:0,g:0},li=new en,mm=new at;function gm(s,e,t,n,i,r,a){let o=new Ye(0),c=r===!0?0:1,h,u,l=null,f=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1,w=p(x);w===null?m(o,c):w&&w.isColor&&(m(w,1),y=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,y){let w=p(y);w&&(w.isCubeTexture||w.mapping===ks)?(u===void 0&&(u=new It(new Dn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:oi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),li.copy(y.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(li)),u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==et,(l!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,l=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new It(new Ls(2,2),new Jt({name:"BackgroundMaterial",uniforms:oi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(w.colorSpace)!==et,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||f!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,l=w,f=w.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function m(x,y){x.getRGB($a,ul(s)),n.buffers.color.setClear($a.r,$a.g,$a.b,y,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(o,c)},render:v,addToRenderList:g,dispose:S}}function xm(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(b,A,I,D,N){let F=!1,z=l(D,I,A);r!==z&&(r=z,h(r.object)),F=d(b,D,I,N),F&&p(b,D,I,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(b,A,I,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return s.createVertexArray()}function h(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function l(b,A,I){let D=I.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let F=N[A.id];F===void 0&&(F={},N[A.id]=F);let z=F[D];return z===void 0&&(z=f(c()),F[D]=z),z}function f(b){let A=[],I=[],D=[];for(let N=0;N<t;N++)A[N]=0,I[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,A,I,D){let N=r.attributes,F=A.attributes,z=0,X=I.getAttributes();for(let W in X)if(X[W].location>=0){let re=N[W],ue=F[W];if(ue===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function p(b,A,I,D){let N={},F=A.attributes,z=0,X=I.getAttributes();for(let W in X)if(X[W].location>=0){let re=F[W];re===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));let ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),N[W]=ue,z++}r.attributes=N,r.attributesNum=z,r.index=D}function v(){let b=r.newAttributes;for(let A=0,I=b.length;A<I;A++)b[A]=0}function g(b){m(b,0)}function m(b,A){let I=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;I[b]=1,D[b]===0&&(s.enableVertexAttribArray(b),D[b]=1),N[b]!==A&&(s.vertexAttribDivisor(b,A),N[b]=A)}function S(){let b=r.newAttributes,A=r.enabledAttributes;for(let I=0,D=A.length;I<D;I++)A[I]!==b[I]&&(s.disableVertexAttribArray(I),A[I]=0)}function x(b,A,I,D,N,F,z){z===!0?s.vertexAttribIPointer(b,A,I,N,F):s.vertexAttribPointer(b,A,I,D,N,F)}function y(b,A,I,D){v();let N=D.attributes,F=I.getAttributes(),z=A.defaultAttributeValues;for(let X in F){let W=F[X];if(W.location>=0){let se=N[X];if(se===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let re=se.normalized,ue=se.itemSize,De=e.get(se);if(De===void 0)continue;let Oe=De.buffer,we=De.type,Be=De.bytesPerElement,Z=we===s.INT||we===s.UNSIGNED_INT||se.gpuType===pa;if(se.isInterleavedBufferAttribute){let ee=se.data,ge=ee.stride,be=se.offset;if(ee.isInstancedInterleavedBuffer){for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve,ee.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<W.locationSize;ve++)g(W.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let ve=0;ve<W.locationSize;ve++)x(W.location+ve,ue/W.locationSize,we,re,ge*Be,(be+ue/W.locationSize*ve)*Be,Z)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee,se.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let ee=0;ee<W.locationSize;ee++)x(W.location+ee,ue/W.locationSize,we,re,ue*Be,ue/W.locationSize*ee*Be,Z)}}else if(z!==void 0){let re=z[X];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(W.location,re);break;case 3:s.vertexAttrib3fv(W.location,re);break;case 4:s.vertexAttrib4fv(W.location,re);break;default:s.vertexAttrib1fv(W.location,re)}}}}S()}function w(){E();for(let b in n){let A=n[b];for(let I in A){let D=A[I];for(let N in D)u(D[N].object),delete D[N];delete A[I]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;let A=n[b.id];for(let I in A){let D=A[I];for(let N in D)u(D[N].object),delete D[N];delete A[I]}delete n[b.id]}function T(b){for(let A in n){let I=n[A];if(I[b.id]===void 0)continue;let D=I[b.id];for(let N in D)u(D[N].object),delete D[N];delete I[b.id]}}function E(){_(),a=!0,r!==i&&(r=i,h(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function vm(s,e,t){let n;function i(h){n=h}function r(h,u){s.drawArrays(n,h,u),t.update(u,n,1)}function a(h,u,l){l!==0&&(s.drawArraysInstanced(n,h,u,l),t.update(u,n,l))}function o(h,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,l);let d=0;for(let p=0;p<l;p++)d+=u[p];t.update(d,n,1)}function c(h,u,l,f){if(l===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)a(h[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,l);let p=0;for(let v=0;v<l;v++)p+=u[v]*f[v];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ym(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Gt&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let E=T===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kt&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==sn&&!E)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let l=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:w,maxSamples:M}}function _m(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ht,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){let d=l.length!==0||f||n!==0||i;return i=f,n=l.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){t=u(l,f,0)},this.setState=function(l,f,d){let p=l.clippingPlanes,v=l.clipIntersection,g=l.clipShadows,m=s.get(l);if(!i||p===null||p.length===0||r&&!g)r?u(null):h();else{let S=r?0:n,x=S*4,y=m.clippingState||null;c.value=y,y=u(p,f,x,d);for(let w=0;w!==x;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(l,f,d,p){let v=l!==null?l.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=d;x!==v;++x,y+=4)a.copy(l[x]).applyMatrix4(S,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Mm(s){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=si:o===fa&&(a.mapping=ri),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ua||o===fa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new Ur(c.height);return h.fromEquirectangularTexture(s,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yi=4,xh=[.125,.215,.35,.446,.526,.582],ui=20,gl=new ii,vh=new Ye,xl=null,vl=0,yl=0,_l=!1,hi=(1+Math.sqrt(5))/2,qi=1/hi,yh=[new U(-hi,qi,0),new U(hi,qi,0),new U(-qi,0,hi),new U(qi,0,hi),new U(0,hi,-qi),new U(0,hi,qi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Sm=new U,Ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Sm}=r;xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,vl,yl),this._renderer.xr.enabled=_l,e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Gi,format:Gt,colorSpace:Kn,depthBuffer:!1},i=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(r)),this._blurMaterial=wm(r,e,t)}return i}_compileMaterial(e){let t=new It(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,i,r){let c=new Rt(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(vh),l.toneMapping=_n,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let v=new fs({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new It(new Dn,v),m=!1,S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,m=!0):(v.color.copy(vh),m=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(c.up.set(0,h[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):y===1?(c.up.set(0,0,h[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,h[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));let w=this._cubeSize;Za(i,y*w,x>2?w:0,w,w),l.setRenderTarget(i),m&&l.render(g,c),l.render(e,c)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===si||e.mapping===ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yh[(i-r-1)%yh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new It(this._lodPlanes[i],h),f=h.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ui-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):ui;g>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ui}`);let m=[],S=0;for(let T=0;T<ui;++T){let E=T/v,_=Math.exp(-E*E/2);m.push(_),T===0?S+=_:T<g&&(S+=2*_)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;let y=this._sizeLods[i],w=3*y*(i>x-Yi?i-x+Yi:0),M=4*(this._cubeSize-y);Za(t,w,M,3*y,2*y),c.setRenderTarget(t),c.render(l,gl)}};function bm(s){let e=[],t=[],n=[],i=s,r=s-Yi+1+xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Yi?c=xh[a-s+Yi-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,l=1+h,f=[u,u,l,u,l,l,u,u,l,l,u,l],d=6,p=6,v=3,g=2,m=1,S=new Float32Array(v*p*d),x=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let M=0;M<d;M++){let T=M%3*2/3-1,E=M>2?0:-1,_=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];S.set(_,v*p*M),x.set(f,g*p*M);let b=[M,M,M,M,M,M];y.set(b,m*p*M)}let w=new gt;w.setAttribute("position",new Ft(S,v)),w.setAttribute("uv",new Ft(x,g)),w.setAttribute("faceIndex",new Ft(y,m)),e.push(w),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(s,e,t){let n=new jt(s,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function wm(s,e,t){let n=new Float32Array(ui),i=new U(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Mh(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Sh(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function Tm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===ua||c===fa,u=c===si||c===ri;if(h||u){let l=e.get(o),f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ka(s)),l=h?t.fromEquirectangular(o,l):t.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),l.texture;if(l!==void 0)return l.texture;{let d=o.image;return h&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Ka(s)),l=h?t.fromEquirectangular(o):t.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function i(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Em(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Am(s,e,t,n){let i={},r=new WeakMap;function a(l){let f=l.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(l,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(l){let f=l.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function h(l){let f=[],d=l.index,p=l.attributes.position,v=0;if(d!==null){let S=d.array;v=d.version;for(let x=0,y=S.length;x<y;x+=3){let w=S[x+0],M=S[x+1],T=S[x+2];f.push(w,M,M,T,T,w)}}else if(p!==void 0){let S=p.array;v=p.version;for(let x=0,y=S.length/3-1;x<y;x+=3){let w=x+0,M=x+1,T=x+2;f.push(w,M,M,T,T,w)}}else return;let g=new(hl(f)?ps:ds)(f,1);g.version=v;let m=r.get(l);m&&e.remove(m),r.set(l,g)}function u(l){let f=r.get(l);if(f){let d=l.index;d!==null&&f.version<d.version&&h(l)}else h(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function Cm(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function h(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function l(f,d,p,v){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)h(f[m]/a,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,p);let m=0;for(let S=0;S<p;S++)m+=d[S]*v[S];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function Rm(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pm(s,e,t){let n=new WeakMap,i=new ht;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==l){let _=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],x=0;d===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*w*4*l),T=new us(M,y,w,l);T.type=sn,T.needsUpdate=!0;let E=x*4;for(let b=0;b<l;b++){let A=g[b],I=m[b],D=S[b],N=y*w*4*b;for(let F=0;F<A.count;F++){let z=F*E;d===!0&&(i.fromBufferAttribute(A,F),M[N+z+0]=i.x,M[N+z+1]=i.y,M[N+z+2]=i.z,M[N+z+3]=0),p===!0&&(i.fromBufferAttribute(I,F),M[N+z+4]=i.x,M[N+z+5]=i.y,M[N+z+6]=i.z,M[N+z+7]=0),v===!0&&(i.fromBufferAttribute(D,F),M[N+z+8]=i.x,M[N+z+9]=i.y,M[N+z+10]=i.z,M[N+z+11]=D.itemSize===4?i.w:1)}}f={count:l,texture:T,size:new me(y,w)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let p=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Im(s,e,t,n){let i=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,l=e.get(c,u);if(i.get(l)!==h&&(e.update(l),i.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return l}function a(){i=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var Vh=new Pt,bh=new _s(1,1),Hh=new us,Gh=new Lr,Wh=new gs,wh=[],Th=[],Eh=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function Zi(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=wh[i];if(r===void 0&&(r=new Float32Array(i),wh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ja(s,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Lm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Um(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Nm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function Fm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ch.set(n),s.uniformMatrix2fv(this.addr,!1,Ch),pt(t,n)}}function Om(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ah.set(n),s.uniformMatrix3fv(this.addr,!1,Ah),pt(t,n)}}function Bm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Eh.set(n),s.uniformMatrix4fv(this.addr,!1,Eh),pt(t,n)}}function zm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function km(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function Vm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function Hm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function Gm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function Xm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function qm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Ym(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bh.compareFunction=al,r=bh):r=Vh,t.setTexture2D(e||r,i)}function $m(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gh,i)}function Zm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wh,i)}function Jm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hh,i)}function Km(s){switch(s){case 5126:return Lm;case 35664:return Dm;case 35665:return Um;case 35666:return Nm;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function Qm(s,e){s.uniform1fv(this.addr,e)}function jm(s,e){let t=Zi(e,this.size,2);s.uniform2fv(this.addr,t)}function eg(s,e){let t=Zi(e,this.size,3);s.uniform3fv(this.addr,t)}function tg(s,e){let t=Zi(e,this.size,4);s.uniform4fv(this.addr,t)}function ng(s,e){let t=Zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ig(s,e){let t=Zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sg(s,e){let t=Zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rg(s,e){s.uniform1iv(this.addr,e)}function ag(s,e){s.uniform2iv(this.addr,e)}function og(s,e){s.uniform3iv(this.addr,e)}function lg(s,e){s.uniform4iv(this.addr,e)}function cg(s,e){s.uniform1uiv(this.addr,e)}function hg(s,e){s.uniform2uiv(this.addr,e)}function ug(s,e){s.uniform3uiv(this.addr,e)}function fg(s,e){s.uniform4uiv(this.addr,e)}function dg(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vh,r[a])}function pg(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gh,r[a])}function mg(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Wh,r[a])}function gg(s,e,t){let n=this.cache,i=e.length,r=ja(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hh,r[a])}function xg(s){switch(s){case 5126:return Qm;case 35664:return jm;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Km(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xg(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function Rh(s,e){s.seq.push(e),s.map[e.id]=e}function vg(s,e,t){let n=s.name,i=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),a=Ml.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){Rh(t,h===void 0?new Sl(o,s,e):new bl(o,s,e));break}else{let l=t.map[o];l===void 0&&(l=new wl(o),Rh(t,l)),t=l}}}var $i=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);vg(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ph(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var yg=37297,_g=0;function Mg(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ih=new Ge;function Sg(s){Ze._getMatrix(Ih,Ze.workingColorSpace,s);let e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case ls:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Mg(s.getShaderSource(e),o)}else return r}function bg(s,e){let t=Sg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wg(s,e){let t;switch(e){case Xc:t="Linear";break;case qc:t="Reinhard";break;case Yc:t="Cineon";break;case ha:t="ACESFilmic";break;case Zc:t="AgX";break;case Jc:t="Neutral";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new U;function Tg(){Ze.getLuminanceCoefficients(Ja);let s=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Ag(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cg(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ys(s){return s!==""}function Dh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(s){return s.replace(Rg,Ig)}var Pg=new Map;function Ig(s,e){let t=Xe[e];if(t===void 0){let n=Pg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(s){return s.replace(Lg,Dg)}function Dg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ug(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===na?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ng(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case si:case ri:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Og(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case Wc:e="ENVMAP_BLENDING_ADD";break}return e}function Bg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zg(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ug(t),h=Ng(t),u=Fg(t),l=Og(t),f=Bg(t),d=Eg(t),p=Ag(r),v=i.createProgram(),g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ys).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ys).join(`
`),m.length>0&&(m+=`
`)):(g=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_n?wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),Tg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Tl(a),a=Dh(a,t),a=Uh(a,t),o=Tl(o),o=Dh(o,t),o=Uh(o,t),a=Nh(a),o=Nh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=S+g+a,y=S+m+o,w=Ph(i,i.VERTEX_SHADER,x),M=Ph(i,i.FRAGMENT_SHADER,y);i.attachShader(v,w),i.attachShader(v,M),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(A){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(w)||"",N=i.getShaderInfoLog(M)||"",F=I.trim(),z=D.trim(),X=N.trim(),W=!0,se=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,w,M);else{let re=Lh(i,w,"vertex"),ue=Lh(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+re+`
`+ue)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||X==="")&&(se=!1);se&&(A.diagnostics={runnable:W,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(w),i.deleteShader(M),E=new $i(i,v),_=Cg(i,v)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,yg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}var kg=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}};function Vg(s,e,t,n,i,r,a){let o=new Di,c=new El,h=new Set,u=[],l=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return h.add(_),_===0?"uv":`uv${_}`}function g(_,b,A,I,D){let N=I.fog,F=D.geometry,z=_.isMeshStandardMaterial?I.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),W=X&&X.mapping===ks?X.image.height:null,se=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=re!==void 0?re.length:0,De=0;F.morphAttributes.position!==void 0&&(De=1),F.morphAttributes.normal!==void 0&&(De=2),F.morphAttributes.color!==void 0&&(De=3);let Oe,we,Be,Z;if(se){let je=rn[se];Oe=je.vertexShader,we=je.fragmentShader}else Oe=_.vertexShader,we=_.fragmentShader,c.update(_),Be=c.getVertexShaderID(_),Z=c.getFragmentShaderID(_);let ee=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),be=D.isInstancedMesh===!0,ve=D.isBatchedMesh===!0,Fe=!!_.map,Ke=!!_.matcap,L=!!X,ne=!!_.aoMap,j=!!_.lightMap,Q=!!_.bumpMap,K=!!_.normalMap,fe=!!_.displacementMap,B=!!_.emissiveMap,k=!!_.metalnessMap,de=!!_.roughnessMap,le=_.anisotropy>0,P=_.clearcoat>0,C=_.dispersion>0,G=_.iridescence>0,$=_.sheen>0,ie=_.transmission>0,J=le&&!!_.anisotropyMap,Ie=P&&!!_.clearcoatMap,pe=P&&!!_.clearcoatNormalMap,Ce=P&&!!_.clearcoatRoughnessMap,Re=G&&!!_.iridescenceMap,ae=G&&!!_.iridescenceThicknessMap,Se=$&&!!_.sheenColorMap,ke=$&&!!_.sheenRoughnessMap,Le=!!_.specularMap,_e=!!_.specularColorMap,We=!!_.specularIntensityMap,O=ie&&!!_.transmissionMap,he=ie&&!!_.thicknessMap,xe=!!_.gradientMap,Ee=!!_.alphaMap,oe=_.alphaTest>0,te=!!_.alphaHash,Pe=!!_.extensions,He=_n;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=s.toneMapping);let it={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:we,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ve,batchingColor:ve&&D._colorsTexture!==null,instancing:be,instancingColor:be&&D.instanceColor!==null,instancingMorph:be&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Kn,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:Ke,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:W,aoMap:ne,lightMap:j,bumpMap:Q,normalMap:K,displacementMap:f&&fe,emissiveMap:B,normalMapObjectSpace:K&&_.normalMapType===eh,normalMapTangentSpace:K&&_.normalMapType===rl,metalnessMap:k,roughnessMap:de,anisotropy:le,anisotropyMap:J,clearcoat:P,clearcoatMap:Ie,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ce,dispersion:C,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:ae,sheen:$,sheenColorMap:Se,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:_e,specularIntensityMap:We,transmission:ie,transmissionMap:O,thicknessMap:he,gradientMap:xe,opaque:_.transparent===!1&&_.blending===Zn&&_.alphaToCoverage===!1,alphaMap:Ee,alphaTest:oe,alphaHash:te,combine:_.combine,mapUv:Fe&&v(_.map.channel),aoMapUv:ne&&v(_.aoMap.channel),lightMapUv:j&&v(_.lightMap.channel),bumpMapUv:Q&&v(_.bumpMap.channel),normalMapUv:K&&v(_.normalMap.channel),displacementMapUv:fe&&v(_.displacementMap.channel),emissiveMapUv:B&&v(_.emissiveMap.channel),metalnessMapUv:k&&v(_.metalnessMap.channel),roughnessMapUv:de&&v(_.roughnessMap.channel),anisotropyMapUv:J&&v(_.anisotropyMap.channel),clearcoatMapUv:Ie&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(_.sheenRoughnessMap.channel),specularMapUv:Le&&v(_.specularMap.channel),specularColorMapUv:_e&&v(_.specularColorMap.channel),specularIntensityMapUv:We&&v(_.specularIntensityMap.channel),transmissionMapUv:O&&v(_.transmissionMap.channel),thicknessMapUv:he&&v(_.thicknessMap.channel),alphaMapUv:Ee&&v(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(K||le),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Fe||Ee),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:B&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===At,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&_.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return it.vertexUv1s=h.has(1),it.vertexUv2s=h.has(2),it.vertexUv3s=h.has(3),h.clear(),it}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(S(b,_),x(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function S(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function x(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){let b=p[_.type],A;if(b){let I=rn[b];A=uh.clone(I.uniforms)}else A=_.uniforms;return A}function w(_,b){let A;for(let I=0,D=u.length;I<D;I++){let N=u[I];if(N.cacheKey===b){A=N,++A.usedTimes;break}}return A===void 0&&(A=new zg(s,b,_,r),u.push(A)),A}function M(_){if(--_.usedTimes===0){let b=u.indexOf(_);u[b]=u[u.length-1],u.pop(),_.destroy()}}function T(_){c.remove(_)}function E(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:E}}function Hg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Gg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Oh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bh(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(l,f,d,p,v,g){let m=s[e];return m===void 0?(m={id:l.id,object:l,geometry:f,material:d,groupOrder:p,renderOrder:l.renderOrder,z:v,group:g},s[e]=m):(m.id=l.id,m.object=l,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=l.renderOrder,m.z=v,m.group=g),e++,m}function o(l,f,d,p,v,g){let m=a(l,f,d,p,v,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(l,f,d,p,v,g){let m=a(l,f,d,p,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function h(l,f){t.length>1&&t.sort(l||Gg),n.length>1&&n.sort(f||Oh),i.length>1&&i.sort(f||Oh)}function u(){for(let l=e,f=s.length;l<f;l++){let d=s[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:h}}function Wg(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Bh,s.set(n,[a])):i>=r.length?(a=new Bh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Xg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function qg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Yg=0;function $g(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zg(s){let e=new Xg,t=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);let i=new U,r=new at,a=new at;function o(h){let u=0,l=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,S=0,x=0,y=0,w=0,M=0,T=0;h.sort($g);for(let _=0,b=h.length;_<b;_++){let A=h[_],I=A.color,D=A.intensity,N=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*D,l+=I.g*D,f+=I.b*D;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],D);T++}else if(A.isDirectionalLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let X=A.shadow,W=t.get(A);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=A.shadow.matrix,S++}n.directional[d]=z,d++}else if(A.isSpotLight){let z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(I).multiplyScalar(D),z.distance=N,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[v]=z;let X=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,X.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[v]=X.matrix,A.castShadow){let W=t.get(A);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=F,y++}v++}else if(A.isRectAreaLight){let z=e.get(A);z.color.copy(I).multiplyScalar(D),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=z,g++}else if(A.isPointLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){let X=A.shadow,W=t.get(A);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=A.shadow.matrix,x++}n.point[p]=z,p++}else if(A.isHemisphereLight){let z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(D),z.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[m]=z,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=f;let E=n.hash;(E.directionalLength!==d||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==S||E.numPointShadows!==x||E.numSpotShadows!==y||E.numSpotMaps!==w||E.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,E.directionalLength=d,E.pointLength=p,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=S,E.numPointShadows=x,E.numSpotShadows=y,E.numSpotMaps=w,E.numLightProbes=T,n.version=Yg++)}function c(h,u){let l=0,f=0,d=0,p=0,v=0,g=u.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){let x=h[m];if(x.isDirectionalLight){let y=n.directional[l];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),l++}else if(x.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function zh(s){let e=new Zg(s),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Jg(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new zh(s),e.set(i,[o])):r>=a.length?(o=new zh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function jg(s,e,t){let n=new Ni,i=new me,r=new me,a=new ht,o=new Wr({depthPacking:jc}),c=new Xr,h={},u=t.maxTextureSize,l={[mn]:At,[At]:mn,[nn]:nn},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Kg,fragmentShader:Qg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new gt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new It(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let m=this.type;this.render=function(M,T,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let _=s.getRenderTarget(),b=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),I=s.state;I.setBlending(yn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=m!==tn&&this.type===tn,N=m===tn&&this.type!==tn;for(let F=0,z=M.length;F<z;F++){let X=M[F],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let se=W.getFrameExtents();if(i.multiply(se),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/se.x),i.x=r.x*se.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/se.y),i.y=r.y*se.y,W.mapSize.y=r.y)),W.map===null||D===!0||N===!0){let ue=this.type!==tn?{minFilter:St,magFilter:St}:{};W.map!==null&&W.map.dispose(),W.map=new jt(i.x,i.y,ue),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let re=W.getViewportCount();for(let ue=0;ue<re;ue++){let De=W.getViewport(ue);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),I.viewport(a),W.updateMatrices(X,ue),n=W.getFrustum(),y(T,E,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===tn&&S(W,E),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(_,b,A)};function S(M,T){let E=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new jt(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,E,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,E,d,v,null)}function x(M,T,E,_){let b=null,A=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)b=A;else if(b=E.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let I=b.uuid,D=T.uuid,N=h[I];N===void 0&&(N={},h[I]=N);let F=N[D];F===void 0&&(F=b.clone(),N[D]=F,T.addEventListener("dispose",w)),b=F}if(b.visible=T.visible,b.wireframe=T.wireframe,_===tn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:l[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let I=s.properties.get(b);I.light=E}return b}function y(M,T,E,_,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===tn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);let D=e.update(M),N=M.material;if(Array.isArray(N)){let F=D.groups;for(let z=0,X=F.length;z<X;z++){let W=F[z],se=N[W.materialIndex];if(se&&se.visible){let re=x(M,se,_,b);M.onBeforeShadow(s,M,T,E,D,re,W),s.renderBufferDirect(E,null,D,re,M,W),M.onAfterShadow(s,M,T,E,D,re,W)}}}else if(N.visible){let F=x(M,N,_,b);M.onBeforeShadow(s,M,T,E,D,F,null),s.renderBufferDirect(E,null,D,F,M,null),M.onAfterShadow(s,M,T,E,D,F,null)}}let I=M.children;for(let D=0,N=I.length;D<N;D++)y(I[D],T,E,_,b)}function w(M){M.target.removeEventListener("dispose",w);for(let E in h){let _=h[E],b=M.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var e0={[ia]:sa,[ra]:la,[aa]:ca,[Jn]:oa,[sa]:ia,[la]:ra,[ca]:aa,[oa]:Jn};function t0(s,e){function t(){let O=!1,he=new ht,xe=null,Ee=new ht(0,0,0,0);return{setMask:function(oe){xe!==oe&&!O&&(s.colorMask(oe,oe,oe,oe),xe=oe)},setLocked:function(oe){O=oe},setClear:function(oe,te,Pe,He,it){it===!0&&(oe*=He,te*=He,Pe*=He),he.set(oe,te,Pe,He),Ee.equals(he)===!1&&(s.clearColor(oe,te,Pe,He),Ee.copy(he))},reset:function(){O=!1,xe=null,Ee.set(-1,0,0,0)}}}function n(){let O=!1,he=!1,xe=null,Ee=null,oe=null;return{setReversed:function(te){if(he!==te){let Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=te;let He=oe;oe=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(te){te?ee(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(te){xe!==te&&!O&&(s.depthMask(te),xe=te)},setFunc:function(te){if(he&&(te=e0[te]),Ee!==te){switch(te){case ia:s.depthFunc(s.NEVER);break;case sa:s.depthFunc(s.ALWAYS);break;case ra:s.depthFunc(s.LESS);break;case Jn:s.depthFunc(s.LEQUAL);break;case aa:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case la:s.depthFunc(s.GREATER);break;case ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=te}},setLocked:function(te){O=te},setClear:function(te){oe!==te&&(he&&(te=1-te),s.clearDepth(te),oe=te)},reset:function(){O=!1,xe=null,Ee=null,oe=null,he=!1}}}function i(){let O=!1,he=null,xe=null,Ee=null,oe=null,te=null,Pe=null,He=null,it=null;return{setTest:function(je){O||(je?ee(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(je){he!==je&&!O&&(s.stencilMask(je),he=je)},setFunc:function(je,ln,Qt){(xe!==je||Ee!==ln||oe!==Qt)&&(s.stencilFunc(je,ln,Qt),xe=je,Ee=ln,oe=Qt)},setOp:function(je,ln,Qt){(te!==je||Pe!==ln||He!==Qt)&&(s.stencilOp(je,ln,Qt),te=je,Pe=ln,He=Qt)},setLocked:function(je){O=je},setClear:function(je){it!==je&&(s.clearStencil(je),it=je)},reset:function(){O=!1,he=null,xe=null,Ee=null,oe=null,te=null,Pe=null,He=null,it=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,h=new WeakMap,u={},l={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,S=null,x=null,y=null,w=null,M=null,T=new Ye(0,0,0),E=0,_=!1,b=null,A=null,I=null,D=null,N=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,X=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=X>=2);let se=null,re={},ue=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),Oe=new ht().fromArray(ue),we=new ht().fromArray(De);function Be(O,he,xe,Ee){let oe=new Uint8Array(4),te=s.createTexture();s.bindTexture(O,te),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<xe;Pe++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(he+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return te}let Z={};Z[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Jn),Q(!1),K(Xo),ee(s.CULL_FACE),ne(yn);function ee(O){u[O]!==!0&&(s.enable(O),u[O]=!0)}function ge(O){u[O]!==!1&&(s.disable(O),u[O]=!1)}function be(O,he){return l[O]!==he?(s.bindFramebuffer(O,he),l[O]=he,O===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=he),O===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(O,he){let xe=d,Ee=!1;if(O){xe=f.get(he),xe===void 0&&(xe=[],f.set(he,xe));let oe=O.textures;if(xe.length!==oe.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Pe=oe.length;te<Pe;te++)xe[te]=s.COLOR_ATTACHMENT0+te;xe.length=oe.length,Ee=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(xe)}function Fe(O){return p!==O?(s.useProgram(O),p=O,!0):!1}let Ke={[In]:s.FUNC_ADD,[Ec]:s.FUNC_SUBTRACT,[Ac]:s.FUNC_REVERSE_SUBTRACT};Ke[Cc]=s.MIN,Ke[Rc]=s.MAX;let L={[Pc]:s.ZERO,[Ic]:s.ONE,[Lc]:s.SRC_COLOR,[Tr]:s.SRC_ALPHA,[Bc]:s.SRC_ALPHA_SATURATE,[Fc]:s.DST_COLOR,[Uc]:s.DST_ALPHA,[Dc]:s.ONE_MINUS_SRC_COLOR,[Er]:s.ONE_MINUS_SRC_ALPHA,[Oc]:s.ONE_MINUS_DST_COLOR,[Nc]:s.ONE_MINUS_DST_ALPHA,[zc]:s.CONSTANT_COLOR,[kc]:s.ONE_MINUS_CONSTANT_COLOR,[Vc]:s.CONSTANT_ALPHA,[Hc]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(O,he,xe,Ee,oe,te,Pe,He,it,je){if(O===yn){v===!0&&(ge(s.BLEND),v=!1);return}if(v===!1&&(ee(s.BLEND),v=!0),O!==Tc){if(O!==g||je!==_){if((m!==In||y!==In)&&(s.blendEquation(s.FUNC_ADD),m=In,y=In),je)switch(O){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yo:s.blendFunc(s.ONE,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $o:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,x=null,w=null,M=null,T.set(0,0,0),E=0,g=O,_=je}return}oe=oe||he,te=te||xe,Pe=Pe||Ee,(he!==m||oe!==y)&&(s.blendEquationSeparate(Ke[he],Ke[oe]),m=he,y=oe),(xe!==S||Ee!==x||te!==w||Pe!==M)&&(s.blendFuncSeparate(L[xe],L[Ee],L[te],L[Pe]),S=xe,x=Ee,w=te,M=Pe),(He.equals(T)===!1||it!==E)&&(s.blendColor(He.r,He.g,He.b,it),T.copy(He),E=it),g=O,_=!1}function j(O,he){O.side===nn?ge(s.CULL_FACE):ee(s.CULL_FACE);let xe=O.side===At;he&&(xe=!xe),Q(xe),O.blending===Zn&&O.transparent===!1?ne(yn):ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Ee=O.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),B(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function K(O){O!==bc?(ee(s.CULL_FACE),O!==A&&(O===Xo?s.cullFace(s.BACK):O===wc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),A=O}function fe(O){O!==I&&(z&&s.lineWidth(O),I=O)}function B(O,he,xe){O?(ee(s.POLYGON_OFFSET_FILL),(D!==he||N!==xe)&&(s.polygonOffset(he,xe),D=he,N=xe)):ge(s.POLYGON_OFFSET_FILL)}function k(O){O?ee(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function de(O){O===void 0&&(O=s.TEXTURE0+F-1),se!==O&&(s.activeTexture(O),se=O)}function le(O,he,xe){xe===void 0&&(se===null?xe=s.TEXTURE0+F-1:xe=se);let Ee=re[xe];Ee===void 0&&(Ee={type:void 0,texture:void 0},re[xe]=Ee),(Ee.type!==O||Ee.texture!==he)&&(se!==xe&&(s.activeTexture(xe),se=xe),s.bindTexture(O,he||Z[O]),Ee.type=O,Ee.texture=he)}function P(){let O=re[se];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){Oe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function ke(O){we.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function Le(O,he){let xe=h.get(he);xe===void 0&&(xe=new WeakMap,h.set(he,xe));let Ee=xe.get(O);Ee===void 0&&(Ee=s.getUniformBlockIndex(he,O.name),xe.set(O,Ee))}function _e(O,he){let Ee=h.get(he).get(O);c.get(he)!==Ee&&(s.uniformBlockBinding(he,Ee,O.__bindingPointIndex),c.set(he,Ee))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},se=null,re={},l={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,S=null,x=null,y=null,w=null,M=null,T=new Ye(0,0,0),E=0,_=!1,b=null,A=null,I=null,D=null,N=null,Oe.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:be,drawBuffers:ve,useProgram:Fe,setBlending:ne,setMaterial:j,setFlipSided:Q,setCullFace:K,setLineWidth:fe,setPolygonOffset:B,setScissorTest:k,activeTexture:de,bindTexture:le,unbindTexture:P,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:Re,texImage3D:ae,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:Ie,scissor:Se,viewport:ke,reset:We}}function n0(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new me,u=new WeakMap,l,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,C){return d?new OffscreenCanvas(P,C):hs("canvas")}function v(P,C,G){let $=1,ie=le(P);if((ie.width>G||ie.height>G)&&($=G/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor($*ie.width),Ie=Math.floor($*ie.height);l===void 0&&(l=p(J,Ie));let pe=C?p(J,Ie):l;return pe.width=J,pe.height=Ie,pe.getContext("2d").drawImage(P,0,0,J,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ie+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,C,G,$,ie=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=C;if(C===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8)),C===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),C===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8)),C===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),C===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),C===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),C===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),C===s.RGBA){let Ie=ie?ls:Ze.getTransfer($);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=Ie===et?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(P,C){let G;return P?C===null||C===Bn||C===Wi?G=s.DEPTH24_STENCIL8:C===sn?G=s.DEPTH32F_STENCIL8:C===Hi&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Bn||C===Wi?G=s.DEPTH_COMPONENT24:C===sn?G=s.DEPTH_COMPONENT32F:C===Hi&&(G=s.DEPTH_COMPONENT16),G}function w(P,C){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==St&&P.minFilter!==Zt?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function M(P){let C=P.target;C.removeEventListener("dispose",M),E(C),C.isVideoTexture&&u.delete(C)}function T(P){let C=P.target;C.removeEventListener("dispose",T),b(C)}function E(P){let C=n.get(P);if(C.__webglInit===void 0)return;let G=P.source,$=f.get(G);if($){let ie=$[C.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&_(P),Object.keys($).length===0&&f.delete(G)}n.remove(P)}function _(P){let C=n.get(P);s.deleteTexture(C.__webglTexture);let G=P.source,$=f.get(G);delete $[C.__cacheKey],a.memory.textures--}function b(P){let C=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(C.__webglFramebuffer[$]))for(let ie=0;ie<C.__webglFramebuffer[$].length;ie++)s.deleteFramebuffer(C.__webglFramebuffer[$][ie]);else s.deleteFramebuffer(C.__webglFramebuffer[$]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[$])}else{if(Array.isArray(C.__webglFramebuffer))for(let $=0;$<C.__webglFramebuffer.length;$++)s.deleteFramebuffer(C.__webglFramebuffer[$]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let $=0;$<C.__webglColorRenderbuffer.length;$++)C.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[$]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let G=P.textures;for(let $=0,ie=G.length;$<ie;$++){let J=n.get(G[$]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(P)}let A=0;function I(){A=0}function D(){let P=A;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),A+=1,P}function N(P){let C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function F(P,C){let G=n.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,P,C);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+C)}function z(P,C){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Z(G,P,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+C)}function X(P,C){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Z(G,P,C);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+C)}function W(P,C){let G=n.get(P);if(P.version>0&&G.__version!==P.version){ee(G,P,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+C)}let se={[Ar]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[Cr]:s.MIRRORED_REPEAT},re={[St]:s.NEAREST,[Kc]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[da]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},ue={[th]:s.NEVER,[oh]:s.ALWAYS,[nh]:s.LESS,[al]:s.LEQUAL,[ih]:s.EQUAL,[ah]:s.GEQUAL,[sh]:s.GREATER,[rh]:s.NOTEQUAL};function De(P,C){if(C.type===sn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Zt||C.magFilter===da||C.magFilter===Vs||C.magFilter===On||C.minFilter===Zt||C.minFilter===da||C.minFilter===Vs||C.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,se[C.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,se[C.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,se[C.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,re[C.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,re[C.minFilter]),C.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ue[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===St||C.minFilter!==Vs&&C.minFilter!==On||C.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Oe(P,C){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",M));let $=C.source,ie=f.get($);ie===void 0&&(ie={},f.set($,ie));let J=N(C);if(J!==P.__cacheKey){ie[J]===void 0&&(ie[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[J].usedTimes++;let Ie=ie[P.__cacheKey];Ie!==void 0&&(ie[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&_(C)),P.__cacheKey=J,P.__webglTexture=ie[J].texture}return G}function we(P,C,G){return Math.floor(Math.floor(P/G)/C)}function Be(P,C,G,$){let J=P.updateRanges;if(J.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,G,$,C.data);else{J.sort((ae,Se)=>ae.start-Se.start);let Ie=0;for(let ae=1;ae<J.length;ae++){let Se=J[Ie],ke=J[ae],Le=Se.start+Se.count,_e=we(ke.start,C.width,4),We=we(Se.start,C.width,4);ke.start<=Le+1&&_e===We&&we(ke.start+ke.count-1,C.width,4)===_e?Se.count=Math.max(Se.count,ke.start+ke.count-Se.start):(++Ie,J[Ie]=ke)}J.length=Ie+1;let pe=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),Re=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let ae=0,Se=J.length;ae<Se;ae++){let ke=J[ae],Le=Math.floor(ke.start/4),_e=Math.ceil(ke.count/4),We=Le%C.width,O=Math.floor(Le/C.width),he=_e,xe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,We,O,he,xe,G,$,C.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Z(P,C,G){let $=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&($=s.TEXTURE_3D);let ie=Oe(P,C),J=C.source;t.bindTexture($,P.__webglTexture,s.TEXTURE0+G);let Ie=n.get(J);if(J.version!==Ie.__version||ie===!0){t.activeTexture(s.TEXTURE0+G);let pe=Ze.getPrimaries(Ze.workingColorSpace),Ce=C.colorSpace===Mn?null:Ze.getPrimaries(C.colorSpace),Re=C.colorSpace===Mn||pe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ae=v(C.image,!1,i.maxTextureSize);ae=de(C,ae);let Se=r.convert(C.format,C.colorSpace),ke=r.convert(C.type),Le=x(C.internalFormat,Se,ke,C.colorSpace,C.isVideoTexture);De($,C);let _e,We=C.mipmaps,O=C.isVideoTexture!==!0,he=Ie.__version===void 0||ie===!0,xe=J.dataReady,Ee=w(C,ae);if(C.isDepthTexture)Le=y(C.format===Xi,C.type),he&&(O?t.texStorage2D(s.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Le,ae.width,ae.height,0,Se,ke,null));else if(C.isDataTexture)if(We.length>0){O&&he&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,We[0].width,We[0].height);for(let oe=0,te=We.length;oe<te;oe++)_e=We[oe],O?xe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,_e.width,_e.height,Se,ke,_e.data):t.texImage2D(s.TEXTURE_2D,oe,Le,_e.width,_e.height,0,Se,ke,_e.data);C.generateMipmaps=!1}else O?(he&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,ae.width,ae.height),xe&&Be(C,ae,Se,ke)):t.texImage2D(s.TEXTURE_2D,0,Le,ae.width,ae.height,0,Se,ke,ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){O&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Le,We[0].width,We[0].height,ae.depth);for(let oe=0,te=We.length;oe<te;oe++)if(_e=We[oe],C.format!==Gt)if(Se!==null)if(O){if(xe)if(C.layerUpdates.size>0){let Pe=ml(_e.width,_e.height,C.format,C.type);for(let He of C.layerUpdates){let it=_e.data.subarray(He*Pe/_e.data.BYTES_PER_ELEMENT,(He+1)*Pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,He,_e.width,_e.height,1,Se,it)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,ae.depth,Se,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Le,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,ae.depth,Se,ke,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Le,_e.width,_e.height,ae.depth,0,Se,ke,_e.data)}else{O&&he&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,We[0].width,We[0].height);for(let oe=0,te=We.length;oe<te;oe++)_e=We[oe],C.format!==Gt?Se!==null?O?xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?xe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,_e.width,_e.height,Se,ke,_e.data):t.texImage2D(s.TEXTURE_2D,oe,Le,_e.width,_e.height,0,Se,ke,_e.data)}else if(C.isDataArrayTexture)if(O){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Le,ae.width,ae.height,ae.depth),xe)if(C.layerUpdates.size>0){let oe=ml(ae.width,ae.height,C.format,C.type);for(let te of C.layerUpdates){let Pe=ae.data.subarray(te*oe/ae.data.BYTES_PER_ELEMENT,(te+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Se,ke,Pe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,ke,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,Se,ke,ae.data);else if(C.isData3DTexture)O?(he&&t.texStorage3D(s.TEXTURE_3D,Ee,Le,ae.width,ae.height,ae.depth),xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,ke,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,Se,ke,ae.data);else if(C.isFramebufferTexture){if(he)if(O)t.texStorage2D(s.TEXTURE_2D,Ee,Le,ae.width,ae.height);else{let oe=ae.width,te=ae.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Le,oe,te,0,Se,ke,null),oe>>=1,te>>=1}}else if(We.length>0){if(O&&he){let oe=le(We[0]);t.texStorage2D(s.TEXTURE_2D,Ee,Le,oe.width,oe.height)}for(let oe=0,te=We.length;oe<te;oe++)_e=We[oe],O?xe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Se,ke,_e):t.texImage2D(s.TEXTURE_2D,oe,Le,Se,ke,_e);C.generateMipmaps=!1}else if(O){if(he){let oe=le(ae);t.texStorage2D(s.TEXTURE_2D,Ee,Le,oe.width,oe.height)}xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,ke,ae)}else t.texImage2D(s.TEXTURE_2D,0,Le,Se,ke,ae);g(C)&&m($),Ie.__version=J.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ee(P,C,G){if(C.image.length!==6)return;let $=Oe(P,C),ie=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let J=n.get(ie);if(ie.version!==J.__version||$===!0){t.activeTexture(s.TEXTURE0+G);let Ie=Ze.getPrimaries(Ze.workingColorSpace),pe=C.colorSpace===Mn?null:Ze.getPrimaries(C.colorSpace),Ce=C.colorSpace===Mn||Ie===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Re=C.isCompressedTexture||C.image[0].isCompressedTexture,ae=C.image[0]&&C.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!Re&&!ae?Se[te]=v(C.image[te],!0,i.maxCubemapSize):Se[te]=ae?C.image[te].image:C.image[te],Se[te]=de(C,Se[te]);let ke=Se[0],Le=r.convert(C.format,C.colorSpace),_e=r.convert(C.type),We=x(C.internalFormat,Le,_e,C.colorSpace),O=C.isVideoTexture!==!0,he=J.__version===void 0||$===!0,xe=ie.dataReady,Ee=w(C,ke);De(s.TEXTURE_CUBE_MAP,C);let oe;if(Re){O&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,We,ke.width,ke.height);for(let te=0;te<6;te++){oe=Se[te].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){let He=oe[Pe];C.format!==Gt?Le!==null?O?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,He.width,He.height,Le,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,He.width,He.height,Le,_e,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,We,He.width,He.height,0,Le,_e,He.data)}}}else{if(oe=C.mipmaps,O&&he){oe.length>0&&Ee++;let te=le(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,We,te.width,te.height)}for(let te=0;te<6;te++)if(ae){O?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Le,_e,Se[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Se[te].width,Se[te].height,0,Le,_e,Se[te].data);for(let Pe=0;Pe<oe.length;Pe++){let it=oe[Pe].image[te].image;O?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,it.width,it.height,Le,_e,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,We,it.width,it.height,0,Le,_e,it.data)}}else{O?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,_e,Se[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Le,_e,Se[te]);for(let Pe=0;Pe<oe.length;Pe++){let He=oe[Pe];O?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Le,_e,He.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,We,Le,_e,He.image[te])}}}g(C)&&m(s.TEXTURE_CUBE_MAP),J.__version=ie.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ge(P,C,G,$,ie,J){let Ie=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),Ce=x(G.internalFormat,Ie,pe,G.colorSpace),Re=n.get(C),ae=n.get(G);if(ae.__renderTarget=C,!Re.__hasExternalTextures){let Se=Math.max(1,C.width>>J),ke=Math.max(1,C.height>>J);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Ce,Se,ke,C.depth,0,Ie,pe,null):t.texImage2D(ie,J,Ce,Se,ke,0,Ie,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),B(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ie,ae.__webglTexture,0,fe(C)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ie,ae.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(P,C,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),C.depthBuffer){let $=C.depthTexture,ie=$&&$.isDepthTexture?$.type:null,J=y(C.stencilBuffer,ie),Ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=fe(C);B(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,J,C.width,C.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,J,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,J,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,P)}else{let $=C.textures;for(let ie=0;ie<$.length;ie++){let J=$[ie],Ie=r.convert(J.format,J.colorSpace),pe=r.convert(J.type),Ce=x(J.internalFormat,Ie,pe,J.colorSpace),Re=fe(C);G&&B(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Ce,C.width,C.height):B(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,Ce,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(C.depthTexture);$.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);let ie=$.__webglTexture,J=fe(C);if(C.depthTexture.format===Ci)B(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(C.depthTexture.format===Xi)B(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(P){let C=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),$){let ie=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),C.__depthDisposeCallback=ie}C.__boundDepthTexture=$}if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let $=P.texture.mipmaps;$&&$.length>0?ve(C.__webglFramebuffer[0],P):ve(C.__webglFramebuffer,P)}else if(G){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]===void 0)C.__webglDepthbuffer[$]=s.createRenderbuffer(),be(C.__webglDepthbuffer[$],P,!1);else{let ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,J)}}else{let $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),be(C.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,J)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(P,C,G){let $=n.get(P);C!==void 0&&ge($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Fe(P)}function L(P){let C=P.texture,G=n.get(P),$=n.get(C);P.addEventListener("dispose",T);let ie=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=C.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)G.__webglFramebuffer[pe][Ce]=s.createFramebuffer()}else G.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<C.mipmaps.length;pe++)G.__webglFramebuffer[pe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let pe=0,Ce=ie.length;pe<Ce;pe++){let Re=n.get(ie[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&B(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){let Ce=ie[pe];G.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);let Re=r.convert(Ce.format,Ce.colorSpace),ae=r.convert(Ce.type),Se=x(Ce.internalFormat,Re,ae,Ce.colorSpace,P.isXRRenderTarget===!0),ke=fe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Se,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),be(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),De(s.TEXTURE_CUBE_MAP,C);for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ce=0;Ce<C.mipmaps.length;Ce++)ge(G.__webglFramebuffer[pe][Ce],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else ge(G.__webglFramebuffer[pe],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(C)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,Ce=ie.length;pe<Ce;pe++){let Re=ie[pe],ae=n.get(Re),Se=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),De(Se,Re),ge(G.__webglFramebuffer,P,Re,s.COLOR_ATTACHMENT0+pe,Se,0),g(Re)&&m(Se)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),De(pe,C),C.mipmaps&&C.mipmaps.length>0)for(let Ce=0;Ce<C.mipmaps.length;Ce++)ge(G.__webglFramebuffer[Ce],P,C,s.COLOR_ATTACHMENT0,pe,Ce);else ge(G.__webglFramebuffer,P,C,s.COLOR_ATTACHMENT0,pe,0);g(C)&&m(pe),t.unbindTexture()}P.depthBuffer&&Fe(P)}function ne(P){let C=P.textures;for(let G=0,$=C.length;G<$;G++){let ie=C[G];if(g(ie)){let J=S(P),Ie=n.get(ie).__webglTexture;t.bindTexture(J,Ie),m(J),t.unbindTexture()}}}let j=[],Q=[];function K(P){if(P.samples>0){if(B(P)===!1){let C=P.textures,G=P.width,$=P.height,ie=s.COLOR_BUFFER_BIT,J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(P),pe=C.length>1;if(pe)for(let Re=0;Re<C.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ce=P.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<C.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);let ae=n.get(C[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,ie,s.NEAREST),c===!0&&(j.length=0,Q.length=0,j.push(s.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(j.push(J),Q.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<C.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);let ae=n.get(C[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let C=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function fe(P){return Math.min(i.maxSamples,P.samples)}function B(P){let C=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function k(P){let C=a.render.frame;u.get(P)!==C&&(u.set(P,C),P.update())}function de(P,C){let G=P.colorSpace,$=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Kn&&G!==Mn&&(Ze.getTransfer(G)===et?($!==Gt||ie!==Kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}function le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Ke,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=B}function i0(s,e){function t(n,i=Mn){let r,a=Ze.getTransfer(i);if(n===Kt)return s.UNSIGNED_BYTE;if(n===ma)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return s.UNSIGNED_SHORT_5_5_5_1;if(n===el)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qo)return s.BYTE;if(n===jo)return s.SHORT;if(n===Hi)return s.UNSIGNED_SHORT;if(n===pa)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===Gi)return s.HALF_FLOAT;if(n===nl)return s.ALPHA;if(n===il)return s.RGB;if(n===Gt)return s.RGBA;if(n===Ci)return s.DEPTH_COMPONENT;if(n===Xi)return s.DEPTH_STENCIL;if(n===Hs)return s.RED;if(n===xa)return s.RED_INTEGER;if(n===sl)return s.RG;if(n===va)return s.RG_INTEGER;if(n===ya)return s.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===qs)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===Ma||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ta)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ca||n===Ra||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ha||n===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
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

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ms(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:s0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends gn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,l=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new Cl,m={},S=t.getContextAttributes(),x=null,y=null,w=[],M=[],T=new me,E=null,_=new Rt;_.viewport=new ht;let b=new Rt;b.viewport=new ht;let A=[_,b],I=new ta,D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=w[Z];return ee===void 0&&(ee=new Ui,w[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=w[Z];return ee===void 0&&(ee=new Ui,w[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=w[Z];return ee===void 0&&(ee=new Ui,w[Z]=ee),ee.getHandSpace()};function F(Z){let ee=M.indexOf(Z.inputSource);if(ee===-1)return;let ge=w[ee];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,h||a),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let Z=0;Z<w.length;Z++){let ee=M[Z];ee!==null&&(M[Z]=null,w[Z].disconnect(ee))}D=null,N=null,g.reset();for(let Z in m)delete m[Z];e.setRenderTarget(x),d=null,f=null,l=null,i=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return l===null&&v&&(l=new XRWebGLBinding(i,t)),l},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,be=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?Xi:Ci,be=S.stencil?Wi:Bn);let Fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};l=this.getBinding(),f=l.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new jt(f.textureWidth,f.textureHeight,{format:Gt,type:Kt,depthTexture:new _s(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new jt(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(Z){for(let ee=0;ee<Z.removed.length;ee++){let ge=Z.removed[ee],be=M.indexOf(ge);be>=0&&(M[be]=null,w[be].disconnect(ge))}for(let ee=0;ee<Z.added.length;ee++){let ge=Z.added[ee],be=M.indexOf(ge);if(be===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=M.length){M.push(ge),be=Fe;break}else if(M[Fe]===null){M[Fe]=ge,be=Fe;break}if(be===-1)break}let ve=w[be];ve&&ve.connect(ge)}}let W=new U,se=new U;function re(Z,ee,ge){W.setFromMatrixPosition(ee.matrixWorld),se.setFromMatrixPosition(ge.matrixWorld);let be=W.distanceTo(se),ve=ee.projectionMatrix.elements,Fe=ge.projectionMatrix.elements,Ke=ve[14]/(ve[10]-1),L=ve[14]/(ve[10]+1),ne=(ve[9]+1)/ve[5],j=(ve[9]-1)/ve[5],Q=(ve[8]-1)/ve[0],K=(Fe[8]+1)/Fe[0],fe=Ke*Q,B=Ke*K,k=be/(-Q+K),de=k*-Q;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(de),Z.translateZ(k),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ve[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let le=Ke+k,P=L+k,C=fe-de,G=B+(be-de),$=ne*L/P*le,ie=j*L/P*le;Z.projectionMatrix.makePerspective(C,G,$,ie,le,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,ge=Z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),I.near=b.near=_.near=ee,I.far=b.far=_.far=ge,(D!==I.near||N!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,N=I.far),I.layers.mask=Z.layers.mask|6,_.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;let be=Z.parent,ve=I.cameras;ue(I,be);for(let Fe=0;Fe<ve.length;Fe++)ue(ve[Fe],be);ve.length===2?re(I,_,b):I.projectionMatrix.copy(_.projectionMatrix),De(Z,I,be)};function De(Z,ee,ge){ge===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ri*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Z){return m[Z]};let Oe=null;function we(Z,ee){if(u=ee.getViewerPose(h||a),p=ee,u!==null){let ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let be=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,be=!0);for(let L=0;L<ge.length;L++){let ne=ge[L],j=null;if(d!==null)j=d.getViewport(ne);else{let K=l.getViewSubImage(f,ne);j=K.viewport,L===0&&(e.setRenderTargetTextures(y,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(y))}let Q=A[L];Q===void 0&&(Q=new Rt,Q.layers.enable(L),Q.viewport=new ht,A[L]=Q),Q.matrix.fromArray(ne.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ne.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(j.x,j.y,j.width,j.height),L===0&&(I.matrix.copy(Q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),be===!0&&I.cameras.push(Q)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){l=n.getBinding();let L=l.getDepthInformation(ge[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),l=n.getBinding();for(let L=0;L<ge.length;L++){let ne=ge[L].camera;if(ne){let j=m[ne];j||(j=new Ms,m[ne]=j);let Q=l.getCameraImage(ne);j.sourceTexture=Q}}}}for(let ge=0;ge<w.length;ge++){let be=M[ge],ve=w[ge];be!==null&&ve!==void 0&&ve.update(be,ee,h||a)}Oe&&Oe(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let Be=new kh;Be.setAnimationLoop(we),this.setAnimationLoop=function(Z){Oe=Z},this.dispose=function(){}}},ci=new en,a0=new at;function o0(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ul(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),l(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,x):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===At&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===At&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),x=S.envMap,y=S.envMapRotation;x&&(g.envMap.value=x,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),g.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(ci)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function l(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===At&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l0(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){let y=x.program;n.uniformBlockBinding(S,y)}function h(S,x){let y=i[S.id];y===void 0&&(p(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",g));let w=x.program;n.updateUBOMapping(S,w);let M=e.render.frame;r[S.id]!==M&&(f(S),r[S.id]=M)}function u(S){let x=l();S.__bindingPointIndex=x;let y=s.createBuffer(),w=S.__size,M=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function l(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let x=i[S.id],y=S.uniforms,w=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let M=0,T=y.length;M<T;M++){let E=Array.isArray(y[M])?y[M]:[y[M]];for(let _=0,b=E.length;_<b;_++){let A=E[_];if(d(A,M,_,w)===!0){let I=A.__offset,D=Array.isArray(A.value)?A.value:[A.value],N=0;for(let F=0;F<D.length;F++){let z=D[F],X=v(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,I+N,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,x,y,w){let M=S.value,T=x+"_"+y;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:w[T]=M.clone(),!0;{let E=w[T];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return w[T]=M,!0}else if(E.equals(M)===!1)return E.copy(M),!0}return!1}function p(S){let x=S.uniforms,y=0,w=16;for(let T=0,E=x.length;T<E;T++){let _=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,A=_.length;b<A;b++){let I=_[b],D=Array.isArray(I.value)?I.value:[I.value];for(let N=0,F=D.length;N<F;N++){let z=D[N],X=v(z),W=y%w,se=W%X.boundary,re=W+se;y+=se,re!==0&&w-re<X.storage&&(y+=w-re),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=X.storage}}}let M=y%w;return M>0&&(y+=w-M),S.__size=y,S.__cache={},this}function v(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function g(S){let x=S.target;x.removeEventListener("dispose",g);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(let S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:h,dispose:m}}var Qa=class{constructor(e={}){let{canvas:t=lh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Et;let M=0,T=0,E=null,_=-1,b=null,A=new ht,I=new ht,D=null,N=new Ye(0),F=0,z=t.width,X=t.height,W=1,se=null,re=null,ue=new ht(0,0,z,X),De=new ht(0,0,z,X),Oe=!1,we=new Ni,Be=!1,Z=!1,ee=new at,ge=new U,be=new ht,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ke(){return E===null?W:1}let L=n;function ne(R,V){return t.getContext(R,V)}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){let V="webgl2";if(L=ne(V,R),L===null)throw ne(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let j,Q,K,fe,B,k,de,le,P,C,G,$,ie,J,Ie,pe,Ce,Re,ae,Se,ke,Le,_e,We;function O(){j=new Em(L),j.init(),Le=new i0(L,j),Q=new ym(L,j,e,Le),K=new t0(L,j),Q.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),fe=new Rm(L),B=new Hg,k=new n0(L,j,K,B,Q,Le,fe),de=new Mm(y),le=new Tm(y),P=new Nf(L),_e=new xm(L,P),C=new Am(L,P,fe,_e),G=new Im(L,C,P,fe),ae=new Pm(L,Q,k),pe=new _m(B),$=new Vg(y,de,le,j,Q,_e,pe),ie=new o0(y,B),J=new Wg,Ie=new Jg(j),Re=new gm(y,de,le,K,G,d,c),Ce=new jg(y,G,Q),We=new l0(L,fe,Q,K),Se=new vm(L,j,fe),ke=new Cm(L,j,fe),fe.programs=$.programs,y.capabilities=Q,y.extensions=j,y.properties=B,y.renderLists=J,y.shadowMap=Ce,y.state=K,y.info=fe}O();let he=new Rl(y,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=j.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=j.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(z,X,!1))},this.getSize=function(R){return R.set(z,X)},this.setSize=function(R,V,q=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,X=V,t.width=Math.floor(R*W),t.height=Math.floor(V*W),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(z*W,X*W).floor()},this.setDrawingBufferSize=function(R,V,q){z=R,X=V,W=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,V,q,Y){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,V,q,Y),K.viewport(A.copy(ue).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(De)},this.setScissor=function(R,V,q,Y){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,V,q,Y),K.scissor(I.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){K.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,q=!0){let Y=0;if(R){let H=!1;if(E!==null){let ce=E.texture.format;H=ce===ya||ce===va||ce===xa}if(H){let ce=E.texture.type,Me=ce===Kt||ce===Bn||ce===Hi||ce===Wi||ce===ma||ce===ga,Ae=Re.getClearColor(),Te=Re.getClearAlpha(),ze=Ae.r,Ve=Ae.g,Ue=Ae.b;Me?(p[0]=ze,p[1]=Ve,p[2]=Ue,p[3]=Te,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=ze,v[1]=Ve,v[2]=Ue,v[3]=Te,L.clearBufferiv(L.COLOR,0,v))}else Y|=L.COLOR_BUFFER_BIT}V&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Re.dispose(),J.dispose(),Ie.dispose(),B.dispose(),de.dispose(),le.dispose(),G.dispose(),_e.dispose(),We.dispose(),$.dispose(),he.dispose(),he.removeEventListener("sessionstart",Qt),he.removeEventListener("sessionend",kl),Vn.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let R=fe.autoReset,V=Ce.enabled,q=Ce.autoUpdate,Y=Ce.needsUpdate,H=Ce.type;O(),fe.autoReset=R,Ce.enabled=V,Ce.autoUpdate=q,Ce.needsUpdate=Y,Ce.type=H}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){let V=R.target;V.removeEventListener("dispose",te),Pe(V)}function Pe(R){He(R),B.remove(R)}function He(R){let V=B.get(R).programs;V!==void 0&&(V.forEach(function(q){$.releaseProgram(q)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,Y,H,ce){V===null&&(V=ve);let Me=H.isMesh&&H.matrixWorld.determinant()<0,Ae=eu(R,V,q,Y,H);K.setMaterial(Y,Me);let Te=q.index,ze=1;if(Y.wireframe===!0){if(Te=C.getWireframeAttribute(q),Te===void 0)return;ze=2}let Ve=q.drawRange,Ue=q.attributes.position,$e=Ve.start*ze,tt=(Ve.start+Ve.count)*ze;ce!==null&&($e=Math.max($e,ce.start*ze),tt=Math.min(tt,(ce.start+ce.count)*ze)),Te!==null?($e=Math.max($e,0),tt=Math.min(tt,Te.count)):Ue!=null&&($e=Math.max($e,0),tt=Math.min(tt,Ue.count));let ut=tt-$e;if(ut<0||ut===1/0)return;_e.setup(H,Y,Ae,q,Te);let st,nt=Se;if(Te!==null&&(st=P.get(Te),nt=ke,nt.setIndex(st)),H.isMesh)Y.wireframe===!0?(K.setLineWidth(Y.wireframeLinewidth*Ke()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(H.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),K.setLineWidth(Ne*Ke()),H.isLineSegments?nt.setMode(L.LINES):H.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else H.isPoints?nt.setMode(L.POINTS):H.isSprite&&nt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ne=H._multiDrawStarts,ot=H._multiDrawCounts,Je=H._multiDrawCount,Lt=Te?P.get(Te).bytesPerElement:1,di=B.get(Y).currentProgram.getUniforms();for(let Dt=0;Dt<Je;Dt++)di.setValue(L,"_gl_DrawID",Dt),nt.render(Ne[Dt]/Lt,ot[Dt])}else if(H.isInstancedMesh)nt.renderInstances($e,ut,H.count);else if(q.isInstancedBufferGeometry){let Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ot=Math.min(q.instanceCount,Ne);nt.renderInstances($e,ut,ot)}else nt.render($e,ut)};function it(R,V,q){R.transparent===!0&&R.side===nn&&R.forceSinglePass===!1?(R.side=At,R.needsUpdate=!0,er(R,V,q),R.side=mn,R.needsUpdate=!0,er(R,V,q),R.side=nn):er(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),m=Ie.get(q),m.init(V),x.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==q&&R.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let Y=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ce=H.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){let Ae=ce[Me];it(Ae,q,H),Y.add(Ae)}else it(ce,q,H),Y.add(ce)}),m=x.pop(),Y},this.compileAsync=function(R,V,q=null){let Y=this.compile(R,V,q);return new Promise(H=>{function ce(){if(Y.forEach(function(Me){B.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){H(R);return}setTimeout(ce,10)}j.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let je=null;function ln(R){je&&je(R)}function Qt(){Vn.stop()}function kl(){Vn.start()}let Vn=new kh;Vn.setAnimationLoop(ln),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(R){je=R,he.setAnimationLoop(R),R===null?Vn.stop():Vn.start()},he.addEventListener("sessionstart",Qt),he.addEventListener("sessionend",kl),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,V,E),m=Ie.get(R,x.length),m.init(V),x.push(m),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),we.setFromProjectionMatrix(ee,$t,V.reversedDepth),Z=this.localClippingEnabled,Be=pe.init(this.clippingPlanes,Z),g=J.get(R,S.length),g.init(),S.push(g),he.enabled===!0&&he.isPresenting===!0){let ce=y.xr.getDepthSensingMesh();ce!==null&&io(ce,V,-1/0,y.sortObjects)}io(R,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(se,re),Fe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Fe&&Re.addToRenderList(g,R),this.info.render.frame++,Be===!0&&pe.beginShadows();let q=m.state.shadowsArray;Ce.render(q,R,V),Be===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,H=g.transmissive;if(m.setupLights(),V.isArrayCamera){let ce=V.cameras;if(H.length>0)for(let Me=0,Ae=ce.length;Me<Ae;Me++){let Te=ce[Me];Hl(Y,H,R,Te)}Fe&&Re.render(R);for(let Me=0,Ae=ce.length;Me<Ae;Me++){let Te=ce[Me];Vl(g,R,Te,Te.viewport)}}else H.length>0&&Hl(Y,H,R,V),Fe&&Re.render(R),Vl(g,R,V);E!==null&&T===0&&(k.updateMultisampleRenderTarget(E),k.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(y,R,V),_e.resetDefaultState(),_=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],Be===!0&&pe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function io(R,V,q,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){Y&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);let Me=G.update(R),Ae=R.material;Ae.visible&&g.push(R,Me,Ae,q,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){let Me=G.update(R),Ae=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),be.copy(Me.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(ee)),Array.isArray(Ae)){let Te=Me.groups;for(let ze=0,Ve=Te.length;ze<Ve;ze++){let Ue=Te[ze],$e=Ae[Ue.materialIndex];$e&&$e.visible&&g.push(R,Me,$e,q,be.z,Ue)}}else Ae.visible&&g.push(R,Me,Ae,q,be.z,null)}}let ce=R.children;for(let Me=0,Ae=ce.length;Me<Ae;Me++)io(ce[Me],V,q,Y)}function Vl(R,V,q,Y){let H=R.opaque,ce=R.transmissive,Me=R.transparent;m.setupLightsView(q),Be===!0&&pe.setGlobalState(y.clippingPlanes,q),Y&&K.viewport(A.copy(Y)),H.length>0&&js(H,V,q),ce.length>0&&js(ce,V,q),Me.length>0&&js(Me,V,q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Hl(R,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new jt(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Gi:Kt,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ce=m.state.transmissionRenderTarget[Y.id],Me=Y.viewport||A;ce.setSize(Me.z*y.transmissionResolutionScale,Me.w*y.transmissionResolutionScale);let Ae=y.getRenderTarget(),Te=y.getActiveCubeFace(),ze=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(N),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&Re.render(q);let Ve=y.toneMapping;y.toneMapping=_n;let Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Be===!0&&pe.setGlobalState(y.clippingPlanes,Y),js(R,q,Y),k.updateMultisampleRenderTarget(ce),k.updateRenderTargetMipmap(ce),j.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let tt=0,ut=V.length;tt<ut;tt++){let st=V[tt],nt=st.object,Ne=st.geometry,ot=st.material,Je=st.group;if(ot.side===nn&&nt.layers.test(Y.layers)){let Lt=ot.side;ot.side=At,ot.needsUpdate=!0,Gl(nt,q,Y,Ne,ot,Je),ot.side=Lt,ot.needsUpdate=!0,$e=!0}}$e===!0&&(k.updateMultisampleRenderTarget(ce),k.updateRenderTargetMipmap(ce))}y.setRenderTarget(Ae,Te,ze),y.setClearColor(N,F),Ue!==void 0&&(Y.viewport=Ue),y.toneMapping=Ve}function js(R,V,q){let Y=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ce=R.length;H<ce;H++){let Me=R[H],Ae=Me.object,Te=Me.geometry,ze=Me.group,Ve=Me.material;Ve.allowOverride===!0&&Y!==null&&(Ve=Y),Ae.layers.test(q.layers)&&Gl(Ae,V,q,Te,Ve,ze)}}function Gl(R,V,q,Y,H,ce){R.onBeforeRender(y,V,q,Y,H,ce),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(y,V,q,Y,R,ce),H.transparent===!0&&H.side===nn&&H.forceSinglePass===!1?(H.side=At,H.needsUpdate=!0,y.renderBufferDirect(q,V,Y,H,R,ce),H.side=mn,H.needsUpdate=!0,y.renderBufferDirect(q,V,Y,H,R,ce),H.side=nn):y.renderBufferDirect(q,V,Y,H,R,ce),R.onAfterRender(y,V,q,Y,H,ce)}function er(R,V,q){V.isScene!==!0&&(V=ve);let Y=B.get(R),H=m.state.lights,ce=m.state.shadowsArray,Me=H.state.version,Ae=$.getParameters(R,H.state,ce,V,q),Te=$.getProgramCacheKey(Ae),ze=Y.programs;Y.environment=R.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(R.isMeshStandardMaterial?le:de).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",te),ze=new Map,Y.programs=ze);let Ve=ze.get(Te);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===Me)return Xl(R,Ae),Ve}else Ae.uniforms=$.getUniforms(R),R.onBeforeCompile(Ae,y),Ve=$.acquireProgram(Ae,Te),ze.set(Te,Ve),Y.uniforms=Ae.uniforms;let Ue=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),Xl(R,Ae),Y.needsLights=nu(R),Y.lightsStateVersion=Me,Y.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function Wl(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=$i.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Xl(R,V){let q=B.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function eu(R,V,q,Y,H){V.isScene!==!0&&(V=ve),k.resetTextureUnits();let ce=V.fog,Me=Y.isMeshStandardMaterial?V.environment:null,Ae=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Kn,Te=(Y.isMeshStandardMaterial?le:de).get(Y.envMap||Me),ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,tt=!!q.morphAttributes.color,ut=_n;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ut=y.toneMapping);let st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=st!==void 0?st.length:0,Ne=B.get(Y),ot=m.state.lights;if(Be===!0&&(Z===!0||R!==b)){let wt=R===b&&Y.id===_;pe.setState(Y,R,wt)}let Je=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ot.state.version||Ne.outputColorSpace!==Ae||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==Te||Y.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==pe.numPlanes||Ne.numIntersection!==pe.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Ve||Ne.morphTargets!==Ue||Ne.morphNormals!==$e||Ne.morphColors!==tt||Ne.toneMapping!==ut||Ne.morphTargetsCount!==nt)&&(Je=!0):(Je=!0,Ne.__version=Y.version);let Lt=Ne.currentProgram;Je===!0&&(Lt=er(Y,V,H));let di=!1,Dt=!1,Ji=!1,lt=Lt.getUniforms(),zt=Ne.uniforms;if(K.useProgram(Lt.program)&&(di=!0,Dt=!0,Ji=!0),Y.id!==_&&(_=Y.id,Dt=!0),di||b!==R){K.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),lt.setValue(L,"projectionMatrix",R.projectionMatrix),lt.setValue(L,"viewMatrix",R.matrixWorldInverse);let Ct=lt.map.cameraPosition;Ct!==void 0&&Ct.setValue(L,ge.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Dt=!0,Ji=!0)}if(H.isSkinnedMesh){lt.setOptional(L,H,"bindMatrix"),lt.setOptional(L,H,"bindMatrixInverse");let wt=H.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),lt.setValue(L,"boneTexture",wt.boneTexture,k))}H.isBatchedMesh&&(lt.setOptional(L,H,"batchingTexture"),lt.setValue(L,"batchingTexture",H._matricesTexture,k),lt.setOptional(L,H,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",H._indirectTexture,k),lt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",H._colorsTexture,k));let kt=q.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&ae.update(H,q,Lt),(Dt||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,lt.setValue(L,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zt.envMap.value=Te,zt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(zt.envMapIntensity.value=V.environmentIntensity),Dt&&(lt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&tu(zt,Ji),ce&&Y.fog===!0&&ie.refreshFogUniforms(zt,ce),ie.refreshMaterialUniforms(zt,Y,W,X,m.state.transmissionRenderTarget[R.id]),$i.upload(L,Wl(Ne),zt,k)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($i.upload(L,Wl(Ne),zt,k),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(L,"center",H.center),lt.setValue(L,"modelViewMatrix",H.modelViewMatrix),lt.setValue(L,"normalMatrix",H.normalMatrix),lt.setValue(L,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let wt=Y.uniformsGroups;for(let Ct=0,so=wt.length;Ct<so;Ct++){let Hn=wt[Ct];We.update(Hn,Lt),We.bind(Hn,Lt)}}return Lt}function tu(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function nu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,V,q){let Y=B.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),B.get(R.texture).__webglTexture=V,B.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){let q=B.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};let iu=L.createFramebuffer();this.setRenderTarget=function(R,V=0,q=0){E=R,M=V,T=q;let Y=!0,H=null,ce=!1,Me=!1;if(R){let Te=B.get(R);if(Te.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Te.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(Te.__hasExternalTextures)k.rebindTextures(R,B.get(R.texture).__webglTexture,B.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ue=R.depthTexture;if(Te.__boundDepthTexture!==Ue){if(Ue!==null&&B.has(Ue)&&(R.width!==Ue.image.width||R.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}let ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);let Ve=B.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?H=Ve[V][q]:H=Ve[V],ce=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?H=B.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[q]:H=Ve,A.copy(R.viewport),I.copy(R.scissor),D=R.scissorTest}else A.copy(ue).multiplyScalar(W).floor(),I.copy(De).multiplyScalar(W).floor(),D=Oe;if(q!==0&&(H=iu),K.bindFramebuffer(L.FRAMEBUFFER,H)&&Y&&K.drawBuffers(R,H),K.viewport(A),K.scissor(I),K.setScissorTest(D),ce){let Te=B.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,q)}else if(Me){let Te=V;for(let ze=0;ze<R.textures.length;ze++){let Ve=B.get(R.textures[ze]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,q,Te)}}else if(R!==null&&q!==0){let Te=B.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,q)}_=-1},this.readRenderTargetPixels=function(R,V,q,Y,H,ce,Me,Ae=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=B.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){K.bindFramebuffer(L.FRAMEBUFFER,Te);try{let ze=R.textures[Ae],Ve=ze.format,Ue=ze.type;if(!Q.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-H&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ae),L.readPixels(V,q,Y,H,Le.convert(Ve),Le.convert(Ue),ce))}finally{let ze=E!==null?B.get(E).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,V,q,Y,H,ce,Me,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=B.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-H){K.bindFramebuffer(L.FRAMEBUFFER,Te);let ze=R.textures[Ae],Ve=ze.format,Ue=ze.type;if(!Q.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ae),L.readPixels(V,q,Y,H,Le.convert(Ve),Le.convert(Ue),0);let tt=E!==null?B.get(E).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,tt);let ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ch(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer($e),L.deleteSync(ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,q=0){let Y=Math.pow(2,-q),H=Math.floor(R.image.width*Y),ce=Math.floor(R.image.height*Y),Me=V!==null?V.x:0,Ae=V!==null?V.y:0;k.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Me,Ae,H,ce),K.unbindTexture()};let su=L.createFramebuffer(),ru=L.createFramebuffer();this.copyTextureToTexture=function(R,V,q=null,Y=null,H=0,ce=null){ce===null&&(H!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let Me,Ae,Te,ze,Ve,Ue,$e,tt,ut,st=R.isCompressedTexture?R.mipmaps[ce]:R.image;if(q!==null)Me=q.max.x-q.min.x,Ae=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,Ve=q.min.y,Ue=q.isBox3?q.min.z:0;else{let kt=Math.pow(2,-H);Me=Math.floor(st.width*kt),Ae=Math.floor(st.height*kt),R.isDataArrayTexture?Te=st.depth:R.isData3DTexture?Te=Math.floor(st.depth*kt):Te=1,ze=0,Ve=0,Ue=0}Y!==null?($e=Y.x,tt=Y.y,ut=Y.z):($e=0,tt=0,ut=0);let nt=Le.convert(V.format),Ne=Le.convert(V.type),ot;V.isData3DTexture?(k.setTexture3D(V,0),ot=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),ot=L.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),ot=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let Je=L.getParameter(L.UNPACK_ROW_LENGTH),Lt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),di=L.getParameter(L.UNPACK_SKIP_PIXELS),Dt=L.getParameter(L.UNPACK_SKIP_ROWS),Ji=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);let lt=R.isDataArrayTexture||R.isData3DTexture,zt=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){let kt=B.get(R),wt=B.get(V),Ct=B.get(kt.__renderTarget),so=B.get(wt.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,Ct.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let Hn=0;Hn<Te;Hn++)lt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(R).__webglTexture,H,Ue+Hn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(V).__webglTexture,ce,ut+Hn)),L.blitFramebuffer(ze,Ve,Me,Ae,$e,tt,Me,Ae,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||R.isRenderTargetTexture||B.has(R)){let kt=B.get(R),wt=B.get(V);K.bindFramebuffer(L.READ_FRAMEBUFFER,su),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,ru);for(let Ct=0;Ct<Te;Ct++)lt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,H,Ue+Ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,H),zt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,ce,ut+Ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,ce),H!==0?L.blitFramebuffer(ze,Ve,Me,Ae,$e,tt,Me,Ae,L.COLOR_BUFFER_BIT,L.NEAREST):zt?L.copyTexSubImage3D(ot,ce,$e,tt,ut+Ct,ze,Ve,Me,Ae):L.copyTexSubImage2D(ot,ce,$e,tt,ze,Ve,Me,Ae);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(ot,ce,$e,tt,ut,Me,Ae,Te,nt,Ne,st.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(ot,ce,$e,tt,ut,Me,Ae,Te,nt,st.data):L.texSubImage3D(ot,ce,$e,tt,ut,Me,Ae,Te,nt,Ne,st):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ce,$e,tt,Me,Ae,nt,Ne,st.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ce,$e,tt,st.width,st.height,nt,st.data):L.texSubImage2D(L.TEXTURE_2D,ce,$e,tt,Me,Ae,nt,Ne,st);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,di),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ji),ce===0&&V.generateMipmaps&&L.generateMipmap(ot),K.unbindTexture()},this.initRenderTarget=function(R){B.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,K.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var $s=new U;function Wt(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;$s.copy(e),$s[n]=0,$s.normalize();let h=.5*a/(a+o),u=1-$s.angleTo(s)/c;return Math.sign($s[t])===1?u*h:o/(a+o)+h+h*(1-u)}var eo=class s extends Dn{constructor(e=1,t=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,h=new U,u=new U(e,t,n).divideScalar(2).subScalar(r),l=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=l.length/6,v=new U,g=.5/a;for(let m=0,S=0;m<l.length;m+=3,S+=2)switch(c.fromArray(l,m),h.copy(c),h.x-=Math.sign(h.x)*g,h.y-=Math.sign(h.y)*g,h.z-=Math.sign(h.z)*g,h.normalize(),l[m+0]=u.x*Math.sign(c.x)+h.x*r,l[m+1]=u.y*Math.sign(c.y)+h.y*r,l[m+2]=u.z*Math.sign(c.z)+h.z*r,f[m+0]=h.x,f[m+1]=h.y,f[m+2]=h.z,Math.floor(m/p)){case 0:v.set(1,0,0),d[S+0]=Wt(v,h,"z","y",r,n),d[S+1]=1-Wt(v,h,"y","z",r,t);break;case 1:v.set(-1,0,0),d[S+0]=1-Wt(v,h,"z","y",r,n),d[S+1]=1-Wt(v,h,"y","z",r,t);break;case 2:v.set(0,1,0),d[S+0]=1-Wt(v,h,"x","z",r,e),d[S+1]=Wt(v,h,"z","x",r,n);break;case 3:v.set(0,-1,0),d[S+0]=1-Wt(v,h,"x","z",r,e),d[S+1]=1-Wt(v,h,"z","x",r,n);break;case 4:v.set(0,0,1),d[S+0]=1-Wt(v,h,"x","y",r,e),d[S+1]=1-Wt(v,h,"y","x",r,t);break;case 5:v.set(0,0,-1),d[S+0]=Wt(v,h,"x","y",r,e),d[S+1]=1-Wt(v,h,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Sn=["#32b8bc","#ffce62","#ed886e"],Ll=["Azul","Amarelo","Coral"],on={cube:{name:"Bloco",w:1,h:1,icon:"\u25A3"},beam:{name:"Viga",w:3,h:1,icon:"\u2501"},long:{name:"Ponte",w:5,h:1,icon:"\u2550"},pillar:{name:"Coluna",w:1,h:3,icon:"\u25A5"},wedge:{name:"Rampa",w:2,h:1,icon:"\u25E2"}},zn=[{id:"garden",name:"Jardim suspenso",price:0,sky:"#cbdff1",ground:"#8ebc8c",rock:"#a28271",colors:Sn},{id:"space",name:"Esta\xE7\xE3o lunar",price:120,sky:"#262d58",ground:"#aaa6d6",rock:"#696b91",colors:["#7ce4df","#c6a1ff","#ffaccc"]},{id:"candy",name:"Mundo doce",price:180,sky:"#f6d7e5",ground:"#b6dba7",rock:"#ba89a3",colors:["#91d4f5","#ffafd1","#ebce8e"]},{id:"sunset",name:"Templo dourado",price:240,sky:"#f7c2a0",ground:"#e7bd7a",rock:"#a97066",colors:["#54c9b8","#ffdb7d","#f19f85"]}],h0=[{x:0,y:-.5,w:10,h:1}],an=(s,e,t,n,i,r={})=>({id:s,name:e,goal:t,height:n,inventory:i,floor:h0.map(a=>({...a})),targets:[],wind:0,par:10,...r}),Il=(s,e=0,t=0)=>Array.from({length:s},(n,i)=>({type:"cube",x:e,y:i+.5,r:0,color:t})),Zs=[an(1,"Primeiros encaixes","Alcance a estrela com 3 blocos.",3,{cube:3},{par:3,solution:Il(3),hint:"Toque em Bloco, escolha uma casa e confirme no \u2713. Empilhe no centro."}),an(2,"Pense na vertical","Chegue a 4 m com apenas 2 pe\xE7as.",4,{cube:1,pillar:1},{par:2,solution:[{type:"pillar",x:0,y:1.5},{type:"cube",x:0,y:3.5}],hint:"Uma coluna vale tr\xEAs blocos de altura."}),an(3,"Mude de dire\xE7\xE3o","Gire uma viga e alcance 3 m.",3,{beam:1},{par:1,solution:[{type:"beam",x:0,y:1.5,r:1}],hint:"A viga come\xE7a deitada. O bot\xE3o Girar muda sua orienta\xE7\xE3o."}),an(4,"Um passo a mais","Construa at\xE9 5 m usando at\xE9 3 pe\xE7as.",5,{pillar:1,cube:2},{par:3,solution:[{type:"pillar",x:0,y:1.5},{type:"cube",x:0,y:3.5},{type:"cube",x:0,y:4.5}],hint:"Coloque a coluna na base e os dois blocos no topo."}),...[3,4,5,6].map((s,e)=>an(5+e,["Duas cores","O padr\xE3o continua","Tr\xEAs em tr\xEAs","Mem\xF3ria das cores"][e],"Cubra os sinais com a sequ\xEAncia de cores indicada.",s,{cube:s,beam:1},{par:s,targets:Il(s).map((t,n)=>({x:0,y:t.y,color:n%(e<2?2:3)})),solution:Il(s).map((t,n)=>({...t,color:n%(e<2?2:3)})),hint:"As marcas mostram a cor de cada andar. Selecione a cor antes de encaixar."})),...[0,1,2,3].map(s=>{let e=1+s;return an(9+s,["A primeira ponte","Sobre o vazio","Ponte elevada","Entre duas ilhas"][s],"Ligue as duas ilhas e alcance a estrela central.",e,{long:1,cube:s,pillar:2},{floor:[{x:-3.75,y:-.5,w:3.5,h:1},{x:3.75,y:-.5,w:3.5,h:1}],targets:[{x:0,y:.5}],par:s+1,solution:[{type:"long",x:0,y:.5},...Array.from({length:s},(t,n)=>({type:"cube",x:0,y:n+1.5}))],hint:"A ponte longa deve apoiar as duas pontas nas ilhas. Depois construa no centro."})}),...[3,4,5,6].map((s,e)=>an(13+e,["Brisa leve","Vento nas alturas","Base larga","Resista \xE0 rajada"][e],"Alcance a estrela e resista a 5 segundos de vento.",s,{beam:s,cube:4,pillar:2},{wind:1e-4+e*45e-6,par:s,solution:Array.from({length:s},(t,n)=>({type:"beam",x:0,y:n+.5})),hint:"Pe\xE7as largas na horizontal distribuem o peso e resistem melhor ao vento."})),...[0,1,2,3].map(s=>an(17+s,["Dois far\xF3is","Apoio duplo","Torres irm\xE3s","Ponte dos far\xF3is"][s],"Acenda os dois far\xF3is mantendo toda a estrutura est\xE1vel.",3+s,{pillar:2,cube:2*s,beam:2,long:1},{targets:[{x:-2,y:2.5+s},{x:2,y:2.5+s}],par:2+2*s,solution:[{type:"pillar",x:-2,y:1.5},{type:"pillar",x:2,y:1.5},...Array.from({length:s},(e,t)=>[{type:"cube",x:-2,y:3.5+t},{type:"cube",x:2,y:3.5+t}]).flat()],hint:"Construa uma coluna sob cada farol; complete os andares que faltarem."})),...[0,1,2,3].map(s=>an(21+s,["Engenheiro de cores","Arquiteto das nuvens","\xDAltima rajada","A grande TOWER"][s],"Combine a sequ\xEAncia de cores, a altura e a resist\xEAncia ao vento.",4+s,{beam:4+s,cube:5,pillar:2},{wind:14e-5,targets:Array.from({length:4+s},(e,t)=>({x:0,y:t+.5,color:t%3})),par:4+s,solution:Array.from({length:4+s},(e,t)=>({type:"beam",x:0,y:t+.5,color:t%3})),hint:"Empilhe vigas deitadas e siga a cor das marcas, de baixo para cima."}))],Xh=an(0,"Constru\xE7\xE3o livre","Crie, teste e experimente. Sua constru\xE7\xE3o fica salva.",0,{cube:80,beam:80,long:80,pillar:80,wedge:80},{par:80,hint:"Experimente pontes, rampas e torres. M\xE1ximo de 80 pe\xE7as por projeto."});function fi(s){let e=on[s.type];return s.r%2?{w:e.h,h:e.w}:{w:e.w,h:e.h}}function Dl(s,e,t,n){let i=fi({type:s,r:e});return{type:s,r:e,x:Math.round(t-(i.w%2?0:.5))+(i.w%2?0:.5),y:Math.max(i.h/2,Math.round(n-i.h/2)+i.h/2)}}function u0(s,e){let t=fi(s),n=e.type?fi(e):e;return Math.abs(s.x-e.x)<(t.w+n.w)/2-.02&&Math.abs(s.y-e.y)<(t.h+n.h)/2-.02}function Js(s,e,t){if(!on[s.type]||!Number.isFinite(s.x)||!Number.isFinite(s.y))return{ok:!1,reason:"Escolha uma casa da grade."};let n=fi(s);return s.x-n.w/2<-5||s.x+n.w/2>5||s.y-n.h/2<0||s.y+n.h/2>16?{ok:!1,reason:"Construa dentro da grade."}:e.length>=80?{ok:!1,reason:"Limite de 80 pe\xE7as atingido."}:e.filter(i=>i.type===s.type).length>=(t.inventory[s.type]||0)?{ok:!1,reason:"Voc\xEA j\xE1 usou todas as pe\xE7as desse tipo."}:e.some(i=>u0(s,i))?{ok:!1,reason:"J\xE1 existe uma pe\xE7a nesse espa\xE7o."}:{ok:!0}}function Ul(s){let e;try{e=typeof s=="string"?JSON.parse(s):s}catch{}e=e&&typeof e=="object"?e:{};let t={};for(let i of Zs)t[i.id]=Math.max(0,Math.min(3,Math.floor(Number(e.stars?.[i.id])||0)));let n=zn.filter(i=>i.price===0||e.owned?.includes?.(i.id)).map(i=>i.id);return{version:1,stars:t,coins:Math.max(0,Math.min(99999,Math.floor(Number(e.coins)||0))),owned:n,theme:n.includes(e.theme)?e.theme:"garden",drafts:e.drafts&&typeof e.drafts=="object"?e.drafts:{},last:Math.max(1,Math.min(24,Math.floor(Number(e.last)||1))),sound:e.sound!==!1}}function qh(s,e){let t=[];if(!Array.isArray(s))return t;for(let n of s.slice(0,80)){if(!n||!on[n.type])continue;let i={type:n.type,x:Number(n.x),y:Number(n.y),r:(Math.floor(Number(n.r)||0)%4+4)%4,color:Math.max(0,Math.min(2,Math.floor(Number(n.color)||0)))};Js(i,t,e).ok&&t.push(i)}return t}function Ks(s,e){return e===0||e===1||!!s.stars[e-1]}function Yh(s,e,t){if(!e.id)return{stars:0,coins:0};let n=t<=e.par?3:t<=e.par+2?2:1,i=s.stars[e.id]||0,r=Math.max(0,n-i)*15;return s.stars[e.id]=Math.max(i,n),s.coins+=r,s.last=Math.min(24,e.id+1),{stars:n,coins:r}}function $h(s,e){let t=zn.find(n=>n.id===e);if(!t)return!1;if(!s.owned.includes(e)){if(s.coins<t.price)return!1;s.coins-=t.price,s.owned.push(e)}return s.theme=e,!0}var to=new vs(new Uint8Array([100,180,235,255]),4,1,Hs);to.needsUpdate=!0;to.minFilter=to.magFilter=St;var no=class{constructor(e){this.canvas=e,this.renderer=new Qa({canvas:e,antialias:!0,alpha:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7)),this.renderer.outputColorSpace=Et,this.renderer.toneMapping=ha,this.renderer.toneMappingExposure=1.2,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=na,this.scene=new xs,this.camera=new ii(-6,6,6,-6,.1,100),this.ray=new zs,this.plane=new Ht(new U(0,0,1),0),this.zoom=1,this.theme=zn[0],this.meshes=[],this.assets=new Set,this.scene.add(new Bs(16777215,7627914,2.1));let t=new Vi(16773590,3.1);t.position.set(-9,18,12),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),Object.assign(t.shadow.camera,{left:-12,right:12,top:18,bottom:-5}),t.shadow.bias=-.001,this.scene.add(t);let n=new Vi(11004159,.8);n.position.set(7,3,-5),this.scene.add(n),this.stage=new xt,this.building=new xt,this.marks=new xt,this.scene.add(this.stage,this.building,this.marks),this.ghost=null,this.clouds=[],this.time=0,this.makeClouds(),this.makeRobot(),this.resize()}material(e,t={}){let n=new Us({color:e,gradientMap:to,...t});return this.assets.add(n),n}mesh(e,t,n,i=0,r=0,a=0){this.assets.add(e);let o=new It(e,t);return o.position.set(i,r,a),o.castShadow=!0,o.receiveShadow=!0,n.add(o),o}rounded(e,t,n,i=.08){return new eo(e,t,n,2,i)}clearGroup(e){for(;e.children.length;){let t=e.children[0];e.remove(t),t.traverse(n=>{if(n.geometry&&(n.geometry.dispose(),this.assets.delete(n.geometry)),n.material){let i=Array.isArray(n.material)?n.material:[n.material];for(let r of i)r.dispose(),this.assets.delete(r)}})}}setLevel(e,t){this.level=e,this.theme=t,this.clearGroup(this.stage),this.clearGroup(this.marks),this.canvas.style.background=`linear-gradient(${t.sky},${t.id==="space"?"#555b85":"#eef4f3"})`;for(let a of e.floor){let o=this.mesh(this.rounded(a.w,1.25,2.8,.2),this.material(t.rock),this.stage,a.x,-.78,-.5);this.mesh(this.rounded(a.w+.08,.25,2.9,.1),this.material(t.ground),this.stage,a.x,-.12,-.5);for(let c=0;c<Math.floor(a.w);c++)this.mesh(new bs(.13,0),this.material(c%2?"#fff0b5":"#f1b4be"),this.stage,a.x-a.w/2+.5+c,.04,-1.7)}let n=new gt,i=[];for(let a=-4.5;a<=4.5;a++)i.push(a,0,-.52,a,16,-.52);for(let a=0;a<=16;a++)i.push(-5,a,-.52,5,a,-.52);n.setAttribute("position",new Qe(i,3));let r=new jn({color:t.id==="space"?13027071:5341842,transparent:!0,opacity:.18});this.assets.add(n),this.assets.add(r),this.stage.add(new ys(n,r));for(let a of e.targets){let o=new xt;o.position.set(a.x,a.y,.56);let c=this.mesh(new Ds(.24,.035,6,24),this.material(a.color===void 0?"#fff4b3":Sn[a.color],{emissive:a.color===void 0?"#5e460d":Sn[a.color],emissiveIntensity:.12}),o);if(c.castShadow=!1,this.marks.add(o),a.color!==void 0){let h=this.mesh(new Oi(.07,a.color===0?16:a.color===1?4:3),this.material(Sn[a.color]),o);h.position.z=.02}}if(e.height){let a=new xt;a.position.set(0,e.height+.38,.4);let o=new ei;for(let l=0;l<10;l++){let f=Math.PI/2+l*Math.PI/5,d=l%2?.17:.35;l===0?o.moveTo(Math.cos(f)*d,Math.sin(f)*d):o.lineTo(Math.cos(f)*d,Math.sin(f)*d)}o.closePath(),this.mesh(new ki(o,{depth:.12,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:1,steps:1}),this.material("#ffcf5e",{emissive:7951366,emissiveIntensity:.2}),a),this.marks.add(a);let c=new gt().setFromPoints([new U(-5,e.height,-.5),new U(5,e.height,-.5)]),h=new Ns({color:13279306,dashSize:.15,gapSize:.12,transparent:!0,opacity:.6}),u=new Fi(c,h);u.computeLineDistances(),this.marks.add(u),this.assets.add(c),this.assets.add(h)}this.robot.position.set(-2.8,.4,1),this.robot.visible=e.id<5,this.zoom=1,this.resize()}makePiece(e,t=!1){let n=on[e.type],i=new xt,r=Sn[e.color||0],a;if(e.type==="wedge"){let h=new ei;h.moveTo(-1,-.5),h.lineTo(1,-.5),h.lineTo(1,.5),h.closePath(),a=new ki(h,{depth:.8,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1}),a.translate(0,0,-.4)}else a=this.rounded(n.w-.025,n.h-.025,.84,.075);let o=this.material(r,{transparent:t,opacity:t?.52:1,depthWrite:!t}),c=this.mesh(a,o,i);if(c.castShadow=!t,!t){let h=this.material(new Ye(r).multiplyScalar(.78)),u=this.material("#fff5d4");for(let f=0;f<Math.min(n.w,5);f++){let d=this.mesh(new Ss(.055,.055,.035,8),u,i,-n.w/2+.22+f*.9,-n.h/2+.18,.44);d.rotation.x=Math.PI/2}let l=this.mesh(new Oi(.09,(e.color||0)===0?16:e.color===1?4:3),h,i,0,0,.45);if(l.castShadow=!1,e.color===2&&(l.rotation.z=Math.PI/2),e.type!=="wedge"){let f=this.mesh(this.rounded(Math.max(.25,n.w-.35),.045,.02,.012),h,i,0,n.h/2-.16,.435);f.castShadow=!1}}return i.position.set(e.x,e.y,0),i.rotation.z=(e.r||0)*Math.PI/2,i}setPieces(e){this.clearGroup(this.building),this.meshes=e.map(t=>{let n=this.makePiece(t);return this.building.add(n),n}),this.hideGhost()}showGhost(e,t){this.hideGhost(),this.ghost=this.makePiece(e,!0),t||this.ghost.traverse(n=>{n.material&&n.material.color.set("#e65d69")}),this.scene.add(this.ghost)}hideGhost(){if(this.ghost){let e=new xt;this.scene.remove(this.ghost),e.add(this.ghost),this.clearGroup(e),this.ghost=null}}updateBodies(e){e.forEach((t,n)=>{let i=this.meshes[n];i&&(i.position.set(t.x,t.y,0),i.rotation.z=t.angle)})}hit(e,t){let n=this.canvas.getBoundingClientRect();this.ray.setFromCamera(new me((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),this.camera);let i=new U;return this.ray.ray.intersectPlane(this.plane,i)?{x:i.x,y:i.y}:null}resize(){let e=this.canvas.clientWidth||600,t=this.canvas.clientHeight||500;this.renderer.setSize(e,t,!1);let n=e/t,i=this.level?.id===0||this.level?.id>=9?11.6:8,r=Math.max(7,(this.level?.height||8)+2.7),a=Math.max(r,i/n)/this.zoom;this.camera.left=-a*n/2,this.camera.right=a*n/2,this.camera.top=a/2,this.camera.bottom=-a/2;let o=a*.5-.9;this.camera.position.set(2.6,o+2.6,28),this.camera.lookAt(0,o,0),this.camera.updateProjectionMatrix()}setZoom(e){this.zoom=cl.clamp(this.zoom+e,.65,1.65),this.resize()}makeClouds(){for(let e=0;e<13;e++){let t=new xt,n=this.material("#ffffff",{transparent:!0,opacity:.52});for(let i=0;i<3;i++)this.mesh(new Un(1,10,7),n,t,i*.7,Math.sin(i)*.25,0).scale.set(1,.42,.55);t.position.set((e%5-2)*6,Math.floor(e/5)*5+2,-10-Math.random()*3),t.scale.setScalar(.7+Math.random()*.7),this.scene.add(t),this.clouds.push(t)}}makeRobot(){let e=new xt,t=this.material("#32b8bc"),n=this.material("#f7f6e8"),i=this.material("#173b54"),r=this.material("#ffce62");this.mesh(this.rounded(.65,.65,.55,.17),t,e,0,.6,0),this.mesh(this.rounded(.72,.62,.55,.19),r,e,0,1.22,0),this.mesh(this.rounded(.57,.4,.12,.14),n,e,0,1.16,.3);for(let a of[-1,1])this.mesh(new Un(.085,10,8),i,e,a*.13,1.19,.39),this.mesh(new Un(.025,8,6),n,e,a*.13-.02,1.22,.46),this.mesh(this.rounded(.22,.3,.32,.08),i,e,a*.2,.15,0),this.mesh(new Un(.15,10,8),r,e,a*.49,.65,0);e.scale.setScalar(.65),this.robot=e,this.scene.add(e)}render(e){this.time+=e,this.robot.rotation.y=Math.sin(this.time*.6)*.1;for(let t=0;t<this.clouds.length;t++)this.clouds[t].position.x+=Math.sin(this.time*.1+t)*e*.04;this.renderer.render(this.scene,this.camera)}dispose(){for(let e of this.assets)e.dispose();this.assets.clear(),this.renderer.dispose()}};var Jh=du(Zh(),1);var{Engine:Fl,Bodies:Ol,Body:Bl,Composite:zl,Vertices:f0}=Jh.default,yt=40;function Kh(s,e){let t=Fl.create({enableSleeping:!1,positionIterations:10,velocityIterations:10});t.gravity.y=-1,t.gravity.scale=.001;let n=e.floor.map(o=>Ol.rectangle(o.x*yt,o.y*yt,o.w*yt,o.h*yt,{isStatic:!0,friction:.85}));zl.add(t.world,n);let i=s.map(o=>{let c=on[o.type],h={friction:.8,frictionStatic:1,restitution:0,density:.002,slop:.015,frictionAir:.025},u;if(o.type==="wedge"){let f=[{x:-40,y:-20},{x:40,y:-20},{x:40,y:20}];u=Ol.fromVertices(o.x*yt,o.y*yt,f,h)}else u=Ol.rectangle(o.x*yt,o.y*yt,c.w*yt,c.h*yt,h);Bl.setAngle(u,(o.r||0)*Math.PI/2),u.plugin.towerOffset=o.type==="wedge"?{x:yt/3,y:-yt/6}:{x:0,y:0};let l=u.plugin.towerOffset;return Bl.translate(u,{x:l.x*Math.cos(u.angle)-l.y*Math.sin(u.angle),y:l.x*Math.sin(u.angle)+l.y*Math.cos(u.angle)}),zl.add(t.world,u),u}),r=o=>{let c=o.plugin.towerOffset;return{x:(o.position.x-c.x*Math.cos(o.angle)+c.y*Math.sin(o.angle))/yt,y:(o.position.y-c.x*Math.sin(o.angle)-c.y*Math.cos(o.angle))/yt}},a=0;return{engine:t,bodies:i,step(){if(e.wind&&a>60)for(let o of i)Bl.applyForce(o,o.position,{x:o.mass*e.wind*(.65+.35*Math.sin(a*.035)),y:0});Fl.update(t,1e3/60),a++},get seconds(){return a/60},snapshot(){return i.map(o=>({...r(o),angle:o.angle}))},result(){if(!s.length)return{ok:!1,message:"Encaixe algumas pe\xE7as antes de testar."};let o=0;for(let h=0;h<i.length;h++){let u=i[h],l=s[h],f=Math.atan2(Math.sin(u.angle-(l.r||0)*Math.PI/2),Math.cos(u.angle-(l.r||0)*Math.PI/2));(Math.hypot(r(u).x-l.x,r(u).y-l.y)>.42||Math.abs(f)>.18||u.speed>.35)&&o++}if(o)return{ok:!1,message:`${o===1?"Uma pe\xE7a perdeu o apoio":o+" pe\xE7as perderam o apoio"}. Reforce a base e tente de novo.`};let c=Math.max(...i.flatMap(h=>h.vertices.map(u=>u.y/yt)));if(e.height&&c<e.height-.18)return{ok:!1,message:`Sua torre chegou a ${Math.max(0,c).toFixed(1)} m. A estrela est\xE1 em ${e.height} m.`};for(let h of e.targets)if(i.findIndex((l,f)=>f0.contains(l.vertices,{x:h.x*yt,y:h.y*yt})&&(h.color===void 0||s[f].color===h.color))<0)return{ok:!1,message:h.color===void 0?"Falta alcan\xE7ar um dos far\xF3is. Veja as marcas na grade.":"Uma marca ainda est\xE1 sem a cor certa. Confira a sequ\xEAncia de baixo para cima."};return{ok:!0,message:e.id?"Constru\xE7\xE3o aprovada!":"Sua constru\xE7\xE3o ficou est\xE1vel!",height:c}},dispose(){zl.clear(t.world,!1),Fl.clear(t)}}}var Qh="tower-build-v1",jh={menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',rotate:'<path d="M5 8a8 8 0 1 1-1 8M5 3v5h5"/>',undo:'<path d="m8 4-5 5 5 5M3 9h11a6 6 0 0 1 0 12"/>',erase:'<path d="m4 13 9-9 8 8-9 9H7l-5-5 2-3Zm4-4 8 8M12 21h10"/>',check:'<path d="m4 12 5 5L20 6"/>',play:'<path d="m8 4 12 8-12 8Z"/>',palette:'<circle cx="12" cy="12" r="9"/><circle cx="8" cy="8" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="13" r="1"/><path d="M8 16h4"/>',cube:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5M12 13 3 8m9 5v9"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 1 1 4 3c-1 1-1 2-1 3m0 3v.1"/>'},kn=s=>`<svg viewBox="0 0 24 24" aria-hidden="true">${jh[s]||jh.cube}</svg>`;function Py(s,e,{Scene:t=no}={}){let n=B=>s.querySelector("#"+B),i;try{i=Ul(window.BoxStorage.getItem(Qh))}catch{i=Ul(null)}let r=!1,a=!1,o=null,c=Zs[0],h=[],u=[],l="cube",f=0,d=0,p=null,v=!1,g="home",m="build",S=null,x=0,y=0,w=0,M=null,T=null,E=0,_=null;s.innerHTML=`<div class="tw-atmosphere"></div><canvas id="towerCanvas" tabindex="0" aria-label="\xC1rea de constru\xE7\xE3o 3D. Selecione uma pe\xE7a, toque na grade e confirme. Setas movem a pe\xE7a; Enter encaixa; R gira; U desfaz; espa\xE7o testa."></canvas>
 <header class="tw-top"><button id="towerMenu" class="tw-icon" aria-label="Pausar e abrir menu">${kn("menu")}</button><div class="tw-heading"><b>TOWER</b><span id="towerPhase">OFICINA DE IDEIAS</span></div><span class="tw-wallet" title="Moedas do TOWER">\u25C8 <b id="towerCoins">0</b></span><button id="towerHelp" class="tw-icon" aria-label="Como construir">${kn("help")}</button></header>
 <button id="towerObjective" class="tw-objective" aria-label="Ver objetivo e dica"><span class="tw-objective-icon">\u2726</span><span><b id="towerGoal"></b><small id="towerBrief"></small></span><span class="tw-objective-more">\u24D8</span><i id="towerTestProgress"></i></button>
 <div class="tw-zoom"><button data-zoom="-.15" aria-label="Afastar c\xE2mera">\u2212</button><button data-zoom="fit" aria-label="Enquadrar constru\xE7\xE3o">\u2316</button><button data-zoom=".15" aria-label="Aproximar c\xE2mera">+</button></div>
 <div class="tw-dock"><div class="tw-inventory" id="towerInventory" aria-label="Pe\xE7as dispon\xEDveis"></div><div class="tw-actions"><button id="towerRotate" class="tw-icon" aria-label="Girar pe\xE7a 90 graus" title="Girar \xB7 R">${kn("rotate")}</button><button id="towerUndo" class="tw-icon" aria-label="Desfazer \xFAltima altera\xE7\xE3o" title="Desfazer \xB7 U">${kn("undo")}</button><button id="towerErase" class="tw-icon" aria-label="Remover uma pe\xE7a" aria-pressed="false" title="Remover">${kn("erase")}</button><button id="towerColor" class="tw-icon tw-color" aria-label="Escolher cor" title="Cor">${kn("palette")}</button><button id="towerPlace" class="tw-icon tw-place" aria-label="Confirmar posi\xE7\xE3o da pe\xE7a" title="Encaixar \xB7 Enter">${kn("check")}</button><button id="towerTest" class="tw-test">${kn("play")}<span>Testar</span></button></div><div id="towerColors" class="tw-colors" hidden>${Sn.map((B,k)=>`<button data-color="${k}" style="--swatch:${B}" aria-label="Cor ${Ll[k]}"><i>${["\u25CF","\u25C6","\u25B2"][k]}</i>${Ll[k]}</button>`).join("")}</div><div class="tw-build-note" id="towerBuildNote">Escolha uma pe\xE7a \xB7 toque na grade \xB7 confirme \u2713</div></div>
 <div id="towerToast" role="status" aria-live="polite"></div><div id="towerModal"><section id="towerSheet" role="dialog" aria-modal="true" aria-labelledby="towerHeading" tabindex="-1"></section></div>`;let b=n("towerCanvas"),A=n("towerSheet"),I=(B,k,de=!1)=>`<button class="tw-button${de?" primary":""}" ${k}>${B}</button>`;function D(){r&&(i.drafts[c.id]=h);try{window.BoxStorage.setItem(Qh,JSON.stringify(i))}catch{N("N\xE3o foi poss\xEDvel salvar neste navegador.")}}function N(B){n("towerToast").textContent=B,n("towerToast").classList.add("visible"),E=performance.now()+3e3}function F(B=!1){if(i.sound)try{_||=new(window.AudioContext||window.webkitAudioContext),_.resume().catch(()=>{});let k=_.createOscillator(),de=_.createGain();k.type="sine",k.frequency.setValueAtTime(B?660:340,_.currentTime),k.frequency.exponentialRampToValueAtTime(B?990:510,_.currentTime+.12),de.gain.setValueAtTime(.035,_.currentTime),de.gain.exponentialRampToValueAtTime(.001,_.currentTime+.2),k.connect(de),de.connect(_.destination),k.start(),k.stop(_.currentTime+.2)}catch{}}function z(){if(o)return!0;try{return o=new t(b),!0}catch(B){return console.error("Tower renderer",B),Fe("error"),!1}}function X(){let B=h.length;n("towerPhase").textContent=c.id?`FASE ${String(c.id).padStart(2,"0")} / 24`:"CONSTRU\xC7\xC3O LIVRE",n("towerCoins").textContent=i.coins.toLocaleString("pt-BR"),n("towerGoal").textContent=m==="test"?"Testando a estabilidade\u2026":c.name,n("towerBrief").textContent=m==="test"?`${Math.min(5,S?.seconds||0).toFixed(1)} / 5 s${c.wind?" \xB7 vento ligado":""}`:c.id?`${c.height} m de altura \xB7 ${B} pe\xE7as${c.wind?" \xB7 vento":""}`:`${B} / 80 pe\xE7as \xB7 projeto salvo`,n("towerUndo").disabled=!u.length||m!=="build",n("towerPlace").disabled=!p||!Js(p,h,c).ok||m!=="build",n("towerRotate").disabled=m!=="build"||v,n("towerErase").disabled=m!=="build",n("towerColor").disabled=m!=="build",n("towerTest").disabled=m!=="build"||!h.length,n("towerErase").setAttribute("aria-pressed",String(v)),n("towerColor").style.setProperty("--color",Sn[d]),n("towerBuildNote").textContent=m==="test"?"Observe os apoios durante o teste":v?"Toque na pe\xE7a que deseja remover":p?"Ajuste a posi\xE7\xE3o ou confirme no \u2713":"Escolha uma pe\xE7a \xB7 toque na grade \xB7 confirme \u2713",n("towerTestProgress").style.width=m==="test"?Math.min(100,(S?.seconds||0)*20)+"%":"0";for(let k of n("towerInventory").querySelectorAll("[data-piece]")){let de=k.dataset.piece,le=c.inventory[de]-h.filter(P=>P.type===de).length;k.querySelector("small").textContent=c.id?`\xD7${le}`:"\u221E",k.disabled=m!=="build"||le<=0,k.setAttribute("aria-pressed",String(de===l&&!v)),k.setAttribute("aria-label",`${on[de].name}, ${c.id?le+" dispon\xEDveis":"constru\xE7\xE3o livre"}`)}}function W(){n("towerInventory").innerHTML=Object.keys(c.inventory).map(B=>`<button data-piece="${B}" draggable="false"><span class="tw-piece-shape tw-piece-${B}"></span><b>${on[B].name}</b><small></small></button>`).join(""),X()}function se(){u.push(h.map(B=>({...B}))),u.length>80&&u.shift()}function re(){o?.setPieces(h),p=null,D(),X()}function ue(B,k){if(m!=="build"||g||v)return;p={...Dl(l,f,B,k),color:d};let de=Js(p,h,c);o.showGhost(p,de.ok),X()}function De(){if(!p||g||m!=="build")return;let B=Js(p,h,c);if(!B.ok){N(B.reason);return}se(),h.push({...p}),F(),re()}function Oe(){m!=="build"||g||v||(f=(f+1)%4,p?ue(p.x,p.y):N("Pe\xE7a girada. Toque na grade para posicionar."))}function we(){g||m!=="build"||!u.length||(h=u.pop(),re())}function Be(B){m!=="build"||g||(l=B,v=!1,p=null,o?.hideGhost(),X())}function Z(B){if(!Ks(i,B)){N("Conclua a fase anterior para abrir esta.");return}D(),S?.dispose(),S=null,m="build",c=B?Zs[B-1]:Xh,h=qh(i.drafts[B],c),r=!0,u=[],l=Object.keys(c.inventory)[0],f=0,d=0,v=!1,p=null,z()&&(o.setLevel(c,zn.find(k=>k.id===i.theme)),o.setPieces(h),B&&(i.last=B),W(),ee(),D(),B===1&&!h.length&&N("Toque em uma casa da grade e confirme no \u2713."))}function ee(){g="",s.classList.remove("tower-menu","tower-home"),n("towerModal").hidden=!0,n("towerColors").hidden=!0,X(),o?.resize(),b.focus({preventScroll:!0})}function ge(){S?.dispose(),S=null,m="build",M=null,o?.setPieces(h),ee()}function be(){g||m!=="build"||!h.length||(p=null,o.hideGhost(),n("towerColors").hidden=!0,S?.dispose(),S=Kh(h,c),m="test",w=0,X())}function ve(){M=S.result(),m="result",M.ok&&(M.reward=Yh(i,c,h.length),D(),F(!0)),Fe("result")}function Fe(B){g=B,T=null,s.classList.add("tower-menu"),s.classList.toggle("tower-home",B==="home"),n("towerColors").hidden=!0,n("towerModal").hidden=!1;let k="",de=Object.values(i.stars).reduce((le,P)=>le+P,0);if(B==="home"&&(k=`<div class="tw-cover"><img src="./assets/catalog-v1/tower.webp?v=20261021-tower1" alt="TOWER: um rob\xF4 construtor montando uma torre de blocos coloridos em uma ilha flutuante"></div><div class="tw-home-copy"><span class="tw-kicker">INTEGRO BOX \xB7 CONSTRU\xC7\xC3O & L\xD3GICA</span><h1 id="towerHeading">Grandes ideias.<br><em>Pe\xE7a por pe\xE7a.</em></h1><p>Encaixe, equilibre e descubra sua solu\xE7\xE3o. Uma torre de possibilidades espera por voc\xEA.</p><div class="tw-home-stats"><span><b>24</b> desafios</span><span><b>${de}/72</b> estrelas</span><span><b>\u221E</b> criatividade</span></div><div class="tw-home-actions">${I(de?"Continuar constru\xE7\xE3o":"Come\xE7ar a construir",`data-start="${Ks(i,i.last)?i.last:1}"`,!0)}${I("Escolher fase",'data-panel="levels"')}${I("Constru\xE7\xE3o livre",'data-start="0"')}${I("Temas da oficina",'data-panel="shop"')}</div>${I("Voltar ao cat\xE1logo","data-exit")}<small class="tw-save-note">Progresso por conta neste navegador.</small></div>`),B==="levels"&&(k=`<span class="tw-kicker">SUA JORNADA DE CONSTRU\xC7\xC3O</span><h2 id="towerHeading">Uma ideia de cada vez.</h2><p>Conclua uma fase para abrir a pr\xF3xima. Ganhe at\xE9 tr\xEAs estrelas usando poucas pe\xE7as.</p><div class="tw-levels">${Zs.map(le=>`<button data-start="${le.id}" ${Ks(i,le.id)?"":"disabled"}><span>${Ks(i,le.id)?String(le.id).padStart(2,"0"):"\u2311"}</span><b>${le.name}</b><small>${"\u2605".repeat(i.stars[le.id])+"\u2606".repeat(3-i.stars[le.id])}</small></button>`).join("")}</div>${I("Voltar","data-back")}`),B==="pause"&&(k=`<span class="tw-kicker">RESPIRA. IMAGINA. CONSTR\xD3I.</span><h2 id="towerHeading">Sua oficina est\xE1 salva.</h2><p>${c.id?"Fase "+c.id+" \xB7 ":""}${c.name}</p><div class="tw-menu-grid">${I("Continuar","data-resume",!0)}${I("Escolher fase",'data-panel="levels"')}${I("Constru\xE7\xE3o livre",'data-start="0"')}${I("Temas da oficina",'data-panel="shop"')}${I("Como construir",'data-panel="help"')}${I("Limpar constru\xE7\xE3o",'data-panel="reset"')}${I(i.sound?"\u266B Som ligado":"\u266A Som desligado","data-sound")}${I("Tela cheia","data-full")}${I("Voltar ao cat\xE1logo","data-exit")}</div><p class="tw-save-note">As moedas do TOWER s\xE3o conquistadas nas fases e usadas apenas nos temas deste jogo.</p>`),B==="help"&&(k=`<span class="tw-kicker">SEU LABORAT\xD3RIO DE IDEIAS</span><h2 id="towerHeading">Encaixe. Teste. Descubra.</h2><div class="tw-help-grid"><div><b>01 \xB7 Escolha</b><p>Toque em uma pe\xE7a na bandeja. Use Girar para mudar sua orienta\xE7\xE3o e a paleta para escolher a cor.</p></div><div><b>02 \xB7 Encaixe</b><p>Toque na grade para ver a posi\xE7\xE3o. Confirme no \u2713. Voc\xEA tamb\xE9m pode arrastar uma pe\xE7a da bandeja para a grade.</p></div><div><b>03 \xB7 Teste</b><p>Toque em Testar. A gravidade entra em a\xE7\xE3o durante 5 segundos. Nas fases com vento, a torre tamb\xE9m recebe rajadas.</p></div><div><b>04 \xB7 Aprenda</b><p>Se cair, volte \xE0 montagem. Desfa\xE7a ou remova pe\xE7as e melhore os apoios. N\xE3o h\xE1 perda de moedas por tentar.</p></div></div><p><b>Objetivos:</b> alcance a estrela, cubra os far\xF3is e siga as marcas de cor. Para tr\xEAs estrelas, use at\xE9 o n\xFAmero ideal de pe\xE7as indicado na dica.</p><p class="tw-save-note">Teclado: 1\u20135 selecionam pe\xE7as; setas posicionam; Enter encaixa; R gira; U desfaz; Delete remove; espa\xE7o testa; Esc pausa. As cores tamb\xE9m t\xEAm s\xEDmbolos \u25CF \u25C6 \u25B2.</p>${I(o?"Voltar \xE0 constru\xE7\xE3o":"Voltar","data-back",!0)}`),B==="objective"&&(k=`<span class="tw-kicker">${c.id?"DESAFIO "+c.id:"LABORAT\xD3RIO LIVRE"}</span><h2 id="towerHeading">${c.name}</h2><p>${c.goal}</p><div class="tw-hint"><b>Uma pista</b><p>${c.hint}</p></div>${c.id?`<p>\u2605\u2605\u2605 \xB7 at\xE9 ${c.par} pe\xE7as<br>\u2605\u2605 \xB7 at\xE9 ${c.par+2} pe\xE7as<br>\u2605 \xB7 qualquer solu\xE7\xE3o v\xE1lida com as pe\xE7as dispon\xEDveis.</p>`:""}${I("Vamos construir","data-resume",!0)}`),B==="shop"&&(k=`<span class="tw-kicker">SEU JEITO DE CONSTRUIR</span><h2 id="towerHeading">Temas da oficina</h2><p>Ganhe 15 moedas por cada nova estrela. Seu saldo: <b>\u25C8 ${i.coins}</b>.</p><div class="tw-shop">${zn.map(le=>`<article style="--theme:${le.sky}"><div class="tw-theme-art">${le.colors.map(P=>`<i style="background:${P}"></i>`).join("")}</div><h3>${le.name}</h3><p>${i.owned.includes(le.id)?"Seu tema":"\u25C8 "+le.price+" moedas"}</p>${I(i.theme===le.id?"Em uso":i.owned.includes(le.id)?"Usar tema":"Desbloquear",`data-theme="${le.id}" ${i.theme===le.id||!i.owned.includes(le.id)&&i.coins<le.price?"disabled":""}`,i.theme!==le.id)}</article>`).join("")}</div>${I("Voltar","data-back")}`),B==="reset"&&(k=`<h2 id="towerHeading">Limpar esta constru\xE7\xE3o?</h2><p>As pe\xE7as voltam \xE0 bandeja. Suas estrelas, moedas e temas continuam salvos.</p><div class="tw-menu-grid">${I("Continuar construindo","data-resume",!0)}${I("Limpar pe\xE7as","data-reset")}</div>`),B==="result"){let le=M.ok;k=`<span class="tw-kicker">${le?"IDEIA APROVADA":"CADA TENTATIVA ENSINA"}</span><div class="tw-result-stars">${le&&c.id?"\u2605".repeat(M.reward.stars)+"\u2606".repeat(3-M.reward.stars):le?"\u2726":"\u21BB"}</div><h2 id="towerHeading">${le?"Ficou de p\xE9!":"Vamos ajustar?"}</h2><p>${M.message}</p>${le&&c.id?`<p>${h.length} pe\xE7as \xB7 +${M.reward.coins} moedas${M.reward.coins===0?" \xB7 recompensa desta pontua\xE7\xE3o j\xE1 recebida":""}</p>`:""}<div class="tw-menu-grid">${le&&c.id&&c.id<24?I("Pr\xF3xima fase",`data-start="${c.id+1}"`,!0):""}${I(le?"Continuar criando":"Voltar e melhorar","data-edit",!le)}${I("Ver as fases",'data-panel="levels"')}${le&&c.id===24?I("Constru\xE7\xE3o livre",'data-start="0"',!0):""}</div>${le&&c.id===24?"<p>Voc\xEA concluiu as 24 fases! Agora crie suas pr\xF3prias torres na oficina livre.</p>":""}`}B==="error"&&(k=`<h2 id="towerHeading">N\xE3o foi poss\xEDvel abrir a oficina 3D.</h2><p>O navegador precisa oferecer WebGL. Feche outras abas e tente novamente.</p>${I("Tentar novamente","data-retry",!0)}${I("Voltar ao cat\xE1logo","data-exit")}`),A.innerHTML=k,A.scrollTop=0,A.focus({preventScroll:!0}),D()}function Ke(){o?m==="result"?ge():ee():Fe("home")}function L(B){if(!a)return;let k=Math.min(.05,(B-y)/1e3||0);if(y=B,o){if(!g&&m==="test"){for(w+=k;w>=1/60&&S.seconds<5;)S.step(),w-=1/60;o.updateBodies(S.snapshot()),X(),S.seconds>=5&&ve()}o.render(k)}B>E&&n("towerToast").classList.remove("visible"),x=requestAnimationFrame(L)}function ne(){a&&(D(),a=!1,cancelAnimationFrame(x),S?.dispose(),S=null,o?.dispose(),o=null,m="build",s.hidden=!0,document.body.classList.remove("tower-playing"),_?.state==="running"&&_.suspend().catch(()=>{}))}function j(){ne(),document.fullscreenElement===s&&document.exitFullscreen?.().catch(()=>{}),e()}function Q(){a||(a=!0,s.hidden=!1,document.body.classList.add("tower-playing"),Fe("home"),y=performance.now(),x=requestAnimationFrame(L))}function K(){a&&!g&&Fe("pause")}s.addEventListener("click",B=>{let k=B.target.closest("button");if(k){if(k.dataset.start!==void 0){Z(Number(k.dataset.start));return}if(k.dataset.panel){Fe(k.dataset.panel);return}if(k.dataset.piece){Be(k.dataset.piece);return}if(k.dataset.color!==void 0){d=Number(k.dataset.color),n("towerColors").hidden=!0,p&&ue(p.x,p.y),X();return}if(k.dataset.theme){$h(i,k.dataset.theme)&&(D(),o&&(o.setLevel(c,zn.find(de=>de.id===i.theme)),o.setPieces(h)),Fe("shop"));return}if(k.dataset.zoom){k.dataset.zoom==="fit"?(o.zoom=1,o.resize()):o?.setZoom(Number(k.dataset.zoom));return}if(k.hasAttribute("data-resume")){m==="result"?ge():ee();return}if(k.hasAttribute("data-back")){Ke();return}if(k.hasAttribute("data-edit")){ge();return}if(k.hasAttribute("data-reset")){se(),h=[],re(),m="build",S?.dispose(),S=null,ee();return}if(k.hasAttribute("data-exit")){j();return}if(k.hasAttribute("data-sound")){i.sound=!i.sound,D(),Fe("pause");return}if(k.hasAttribute("data-full")){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):s.requestFullscreen?.().catch(()=>N("Tela cheia indispon\xEDvel neste navegador."));return}k.hasAttribute("data-retry")&&Z(c.id)}}),n("towerMenu").onclick=K,n("towerHelp").onclick=()=>Fe("help"),n("towerObjective").onclick=()=>Fe("objective"),n("towerRotate").onclick=Oe,n("towerUndo").onclick=we,n("towerPlace").onclick=De,n("towerTest").onclick=be,n("towerColor").onclick=()=>{n("towerColors").hidden=!n("towerColors").hidden},n("towerErase").onclick=()=>{v=!v,p=null,o?.hideGhost(),X()};function fe(B){let k=o?.hit(B.clientX,B.clientY);if(!(!k||g||m!=="build"))if(v){let de=h.findLastIndex(le=>{let P=fi(le);return Math.abs(k.x-le.x)<P.w/2&&Math.abs(k.y-le.y)<P.h/2});de>=0?(se(),h.splice(de,1),re()):N("Toque sobre a pe\xE7a que deseja remover.")}else ue(k.x,k.y)}b.addEventListener("pointerdown",B=>{g||(B.preventDefault(),fe(B),b.focus({preventScroll:!0}))}),n("towerInventory").addEventListener("pointerdown",B=>{let k=B.target.closest("[data-piece]");!k||k.disabled||g||(Be(k.dataset.piece),T={id:B.pointerId,x:B.clientX,y:B.clientY,moved:!1},n("towerInventory").setPointerCapture(B.pointerId))}),n("towerInventory").addEventListener("pointermove",B=>{if(!(!T||T.id!==B.pointerId||!o)&&(T.moved||=Math.hypot(B.clientX-T.x,B.clientY-T.y)>9,T.moved)){let k=b.getBoundingClientRect();if(B.clientY>=k.top&&B.clientY<=k.bottom){let de=o.hit(B.clientX,B.clientY);de&&ue(de.x,de.y)}}}),n("towerInventory").addEventListener("pointerup",B=>{if(!T||T.id!==B.pointerId)return;let k=b.getBoundingClientRect();T.moved&&B.clientY>=k.top&&B.clientY<=k.bottom&&De(),T=null});for(let B of["pointercancel","lostpointercapture"])n("towerInventory").addEventListener(B,()=>{T=null});return document.addEventListener("keydown",B=>{if(!a||B.target.closest?.("input,textarea,select,[contenteditable=true]"))return;let k=B.key.toLowerCase();if(k==="escape"){B.preventDefault(),g?Ke():K();return}if(g){if(k==="tab"){let de=[...A.querySelectorAll("button:not(:disabled)")];de.length&&(B.shiftKey&&(document.activeElement===de[0]||document.activeElement===A)||!B.shiftKey&&document.activeElement===de.at(-1))&&(B.preventDefault(),(B.shiftKey?de.at(-1):de[0]).focus())}return}if(["arrowup","arrowdown","arrowleft","arrowright","enter"," ","r","u","delete","1","2","3","4","5"].includes(k)&&B.preventDefault(),k==="r")Oe();else if(k==="u")we();else if(k===" ")be();else if(k==="enter")De();else if(k==="delete")n("towerErase").click();else if(/^[1-5]$/.test(k)){let de=Object.keys(c.inventory)[Number(k)-1];de&&Be(de)}else if(k.startsWith("arrow")){let de=p||Dl(l,f,0,fi({type:l,r:f}).h/2);ue(de.x+(k==="arrowright"?1:k==="arrowleft"?-1:0),de.y+(k==="arrowup"?1:k==="arrowdown"?-1:0))}}),window.addEventListener("resize",()=>o?.resize()),window.addEventListener("blur",K),document.addEventListener("visibilitychange",()=>{document.hidden&&K()}),window.addEventListener("pagehide",D),b.addEventListener("webglcontextlost",B=>{a&&(B.preventDefault(),S?.dispose(),S=null,m="build",o?.dispose(),o=null,Fe("error"))}),{open:Q,hide:ne,stop:ne,pause:K,save:D,state:()=>({active:a,mode:g,stage:m,level:c.id,progress:JSON.parse(JSON.stringify(i)),pieces:h.map(B=>({...B}))})}}export{Py as createTowerGame};
/*! Bundled license information:

matter-js/build/matter.js:
  (*!
   * matter-js 0.20.0 by @liabru
   * http://brm.io/matter-js/
   * License MIT
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) Liam Brummitt and contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
