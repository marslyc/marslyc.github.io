import{S as h,r as g,v as S,u as L,T as R,z as s,H as x,D,A as _,I as b,q as v,W as C,l as M}from"./three.module-BUZdne6h.js";import{O as W}from"./OrbitControls-UBkTBaol.js";import{G as A}from"./GLTFLoader-DwfIB8W0.js";import{R as B}from"./RGBELoader-C_APSFo0.js";import{D as H}from"./DRACOLoader-DJwBgP83.js";import{S as k}from"./stats.module--VATS4Kh.js";import{g as P}from"./index-DjKJqAo0.js";import{r as y,o as E,c as U,a as T}from"./index-E0VyOJT8.js";let j=new k,r=new h,a=new g(90,window.innerWidth/window.innerHeight,.1,1e5);a.position.set(0,2,2);a.aspect=window.innerWidth/window.innerHeight;a.updateProjectionMatrix();r.add(a);let q=new S(5);r.add(q);let z=new B,G=new URL("/assets/Dosch-Space_0026_4k-D05PfXp4.hdr",import.meta.url).href;z.load(G,e=>{e.mapping=L,r.background=e,r.environment=e});let O=new URL("/assets/cloth_pos-BBd7vi8q.png",import.meta.url).href,F=new URL("/assets/cloth_norm-BvXndDAR.png",import.meta.url).href,m=new R,n=m.load(O),d=m.load(F);n.wrapS=s;n.wrapT=s;n.repeat.set(.2,.2);d.wrapS=s;d.wrapT=s;d.repeat.set(.2,.2);n.offset.set(0,0);P.to(n.offset,{x:3,y:1,duration:1,repeat:-1,onUpdate:function(){n.needsUpdate=!0}});let i,w=new A,l=new H;l.setDecoderPath("/draco/gltf/");l.setDecoderConfig({type:"js"});l.preload();w.setDRACOLoader(l);let X=new URL("/assets/jianshen-min-C3R3nWJB.glb",import.meta.url).href;w.load(X,e=>{r.add(e.scene),e.scene.traverse(c=>{c.isMesh&&(c.material=new x({map:n,normalMap:d,side:D,transparent:!0,blending:_,depthWrite:!1,emissiveMap:n}))}),i=new b(e.scene);let o=i.clipAction(e.animations[0]);o.play(),o.timeScale=2;const p=new v(16777215,2);p.position.set(0,100,100),r.add(p)},e=>{console.log(e.loaded/e.total*100+"% loaded")});let t=new C;t.setSize(window.innerWidth,window.innerHeight);t.shadowMap.enabled=!0;t.physicallyCorrectLights=!0;t.setClearColor(13421772,1);window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)});let f=new W(a,t.domElement);f.enableDamping=!0;let I=new M,u=()=>{let e=I.getDelta();i&&i.update(e),f.update(),j.update(),requestAnimationFrame(u),t.render(r,a)};u();const ee={__name:"Bone",setup(e){let o=y(null);return E(()=>{o.value.appendChild(t.domElement)}),(p,c)=>(T(),U("div",{id:"bone",ref_key:"boneScene",ref:o},null,512))}};export{ee as default};
