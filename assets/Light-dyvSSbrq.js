import{S as u,o as P,f as x,D as _,t as M,W as y,s as C,l as S}from"./three.module-DxqIPYNp.js";import{O as L}from"./OrbitControls-UtDBv3EV.js";import{g as E}from"./index-DjKJqAo0.js";import{R as b}from"./RGBELoader-D3K8c0oI.js";import{G as z}from"./GLTFLoader-CeTFqpKO.js";import{_ as R,r as k,o as F,f as W,c as A,a as B}from"./index-Dg4VZWRd.js";var D=`precision lowp float;

varying vec4 vPosition;
varying vec4 gPosition;

void main(){

    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );

    vPosition = modelPosition;
    gPosition = vec4( position, 1.0 );
    gl_Position = projectionMatrix * viewMatrix * modelPosition ;
}`,G=`precision lowp float;
varying vec4 vPosition;
varying vec4 gPosition;
void main(){
    vec4 redColor = vec4(1.0,0.0,0.0,1.0);
    vec4 yellowColor = vec4(1.0,1.0,0.5,1.0);

    vec4 mixColor = mix(yellowColor, redColor, gPosition.y/3.0);
    

    if(gl_FrontFacing) {
        gl_FragColor = vec4(mixColor.xyz - ((vPosition.y-20.0)/80.0 - 0.1), 1.0);
    } else {
        gl_FragColor = vec4(mixColor.xyz, 1.0);
    }
}`;const H={__name:"Light",setup(I){let l=k();const i=new u,o=new P(90,window.innerWidth/window.innerHeight,.1,1e3);o.position.set(0,0,6),i.add(o);let m=new x({vertexShader:D,fragmentShader:G,side:_}),g=new URL("/assets/2k-CzDr2HGN.hdr",import.meta.url).href;new b().loadAsync(g).then(n=>{n.mapping=M,i.background=n,i.environment=n});let s=null,p=new URL("/assets/flyLight-zDy0P3lX.glb",import.meta.url).href;new z().load(p,n=>{s=n.scene.children[0],s.material=m;for(let r=0;r<150;r++){let a=n.scene.clone(!0),w=(Math.random()-.5)*300,h=(Math.random()-.5)*300,f=Math.random()*60+25;a.position.set(w,f,h),i.add(a),E.to(a.rotation,{y:"+="+Math.random()*20,yoyo:!0,duration:5+Math.random()*10,repeat:-1})}});const e=new y({alpha:!0});e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.outputEncoding=void 0,e.toneMapping=C,e.toneMappingExposure=.4,F(()=>{l.value.appendChild(e.domElement)});const t=new L(o,e.domElement);t.enableDamping=!0,t.autoRotate=!0,t.autoRotateSpeed=.5,t.maxPolarAngle=Math.PI/3*2,t.minPolarAngle=Math.PI/3*2;const v=new S;function d(){v.getElapsedTime(),t.update(),e.render(i,o),requestAnimationFrame(d)}d();let c=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio)};return window.addEventListener("resize",c),W(()=>{window.removeEventListener("resize",c)}),(n,r)=>(B(),A("div",{id:"box1",class:"light",ref_key:"light",ref:l},null,512))}},K=R(H,[["__scopeId","data-v-c0df5675"]]);export{K as default};
