import{S as W,o as B,v as A,t as y,T as k,I as c,J as E,D as P,A as U,K as q,n as z,W as H,l as T}from"./three.module-BFXwU2lw.js";import{O as j}from"./OrbitControls-DempRipX.js";import{G}from"./GLTFLoader-D5b5PMca.js";import{R as O}from"./RGBELoader-Bqz9v6F1.js";import{D as F}from"./DRACOLoader-CLxLRZfq.js";import{g as I}from"./index-DjKJqAo0.js";import{r as J,o as X,f as K,c as N,a as Q}from"./index-DicIsl7R.js";const ne={__name:"Bone",setup(V){let p=document.querySelector(".left-menu").offsetWidth||180,o=window.innerWidth-p,i=window.innerHeight,n=new W,a=new B(90,o/i,.1,1e5);a.position.set(0,2,2),a.aspect=o/i,a.updateProjectionMatrix(),n.add(a);let v=new A(5);n.add(v);let x=new O,D=new URL("/assets/Dosch-Space_0026_4k-D05PfXp4.hdr",import.meta.url).href;x.load(D,e=>{e.mapping=y,n.background=e,n.environment=e});let M=new URL("/assets/cloth_pos-BBd7vi8q.png",import.meta.url).href,_=new URL("/assets/cloth_norm-BvXndDAR.png",import.meta.url).href,f=new k,r=f.load(M),s=f.load(_);r.wrapS=c,r.wrapT=c,r.repeat.set(.2,.2),s.wrapS=c,s.wrapT=c,s.repeat.set(.2,.2),r.offset.set(0,0),I.to(r.offset,{x:3,y:1,duration:1,repeat:-1,onUpdate:function(){r.needsUpdate=!0}});let l,u=new G,d=new F;d.setDecoderPath("/draco/gltf/"),d.setDecoderConfig({type:"js"}),d.preload(),u.setDRACOLoader(d);let b=new URL("/assets/jianshen-min-C3R3nWJB.glb",import.meta.url).href;u.load(b,e=>{n.add(e.scene),e.scene.traverse(R=>{R.isMesh&&(R.material=new E({map:r,normalMap:s,side:P,transparent:!0,blending:U,depthWrite:!1,emissiveMap:r}))}),l=new q(e.scene);let m=l.clipAction(e.animations[0]);m.play(),m.timeScale=2;const L=new z(16777215,2);L.position.set(0,100,100),n.add(L)},e=>{console.log(e.loaded/e.total*100+"% loaded")});let t=new H;t.setSize(o,i),t.shadowMap.enabled=!0,t.physicallyCorrectLights=!0,t.setClearColor(13421772,1),p=document.querySelector(".left-menu").offsetWidth||180;let w=()=>{o=window.innerWidth-p,i=window.innerHeight,a.aspect=o/i,a.updateProjectionMatrix(),t.setSize(o,i),t.setPixelRatio(window.devicePixelRatio)};window.addEventListener("resize",w);let h=new j(a,t.domElement);h.enableDamping=!0;let C=new T,g=()=>{let e=C.getDelta();l&&l.update(e),h.update(),requestAnimationFrame(g),t.render(n,a)};g();let S=J(null);return X(()=>{S.value.appendChild(t.domElement)}),K(()=>{window.removeEventListener("resize",w)}),(e,m)=>(Q(),N("div",{id:"bone",ref_key:"boneScene",ref:S},null,512))}};export{ne as default};
