import{c as k,t as I,Q,O as Y,S as Z,u as j,q as $,r as ee,W as te,s as se,V as ne,R as ie,T as oe,G as re,e as ae,a as le,f as ce,A as de,P as ue,l as pe}from"./three.module-BoKgPBlm.js";import{R as he}from"./RGBELoader-CPUFUoIW.js";import{e as u,a as me}from"./eventHub-Xoa0odAB.js";import{O as fe}from"./OrbitControls-CSmSuB8c.js";import"./init-CUT_EQ9q.js";import{G as ve}from"./GLTFLoader-CKpm-FJk.js";import{D as ge}from"./DRACOLoader-DMj1rCJ2.js";import{g as E}from"./index-DjKJqAo0.js";import{r as O,o as ye,a as R,c as F,b as o,F as we,_ as _e,u as A,p as Ce,e as xe,f as U}from"./index-DiAP8KEY.js";const V=new k,Se=new Q,N=new k;class Ae extends Y{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(t,n){return super.copy(t,n),this.element=t.element.cloneNode(!0),this}}const y=new I,Ge=new I;class Me{constructor(t={}){const n=this;let r,c,m,v;const p={camera:{style:""},objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const d=document.createElement("div");d.style.transformOrigin="0 0",d.style.pointerEvents="none",a.appendChild(d);const g=document.createElement("div");g.style.transformStyle="preserve-3d",d.appendChild(g),this.getSize=function(){return{width:r,height:c}},this.render=function(i,e){const f=e.projectionMatrix.elements[5]*v;e.view&&e.view.enabled?(d.style.transform=`translate( ${-e.view.offsetX*(r/e.view.width)}px, ${-e.view.offsetY*(c/e.view.height)}px )`,d.style.transform+=`scale( ${e.view.fullWidth/e.view.width}, ${e.view.fullHeight/e.view.height} )`):d.style.transform="",i.matrixWorldAutoUpdate===!0&&i.updateMatrixWorld(),e.parent===null&&e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld();let P,w;e.isOrthographicCamera&&(P=-(e.right+e.left)/2,w=(e.top+e.bottom)/2);const _=e.view&&e.view.enabled?e.view.height/e.view.fullHeight:1,x=e.isOrthographicCamera?`scale( ${_} )scale(`+f+")translate("+s(P)+"px,"+s(w)+"px)"+T(e.matrixWorldInverse):`scale( ${_} )translateZ(`+f+"px)"+T(e.matrixWorldInverse),M=(e.isPerspectiveCamera?"perspective("+f+"px) ":"")+x+"translate("+m+"px,"+v+"px)";p.camera.style!==M&&(g.style.transform=M,p.camera.style=M),z(i,i,e)},this.setSize=function(i,e){r=i,c=e,m=r/2,v=c/2,a.style.width=i+"px",a.style.height=e+"px",d.style.width=i+"px",d.style.height=e+"px",g.style.width=i+"px",g.style.height=e+"px"};function s(i){return Math.abs(i)<1e-10?0:i}function T(i){const e=i.elements;return"matrix3d("+s(e[0])+","+s(-e[1])+","+s(e[2])+","+s(e[3])+","+s(e[4])+","+s(-e[5])+","+s(e[6])+","+s(e[7])+","+s(e[8])+","+s(-e[9])+","+s(e[10])+","+s(e[11])+","+s(e[12])+","+s(-e[13])+","+s(e[14])+","+s(e[15])+")"}function W(i){const e=i.elements;return"translate(-50%,-50%)"+("matrix3d("+s(e[0])+","+s(e[1])+","+s(e[2])+","+s(e[3])+","+s(-e[4])+","+s(-e[5])+","+s(-e[6])+","+s(-e[7])+","+s(e[8])+","+s(e[9])+","+s(e[10])+","+s(e[11])+","+s(e[12])+","+s(e[13])+","+s(e[14])+","+s(e[15])+")")}function H(i){i.isCSS3DObject&&(i.element.style.display="none");for(let e=0,f=i.children.length;e<f;e++)H(i.children[e])}function z(i,e,f,P){if(i.visible===!1){H(i);return}if(i.isCSS3DObject){const w=i.layers.test(f.layers)===!0,_=i.element;if(_.style.display=w===!0?"":"none",w===!0){i.onBeforeRender(n,e,f);let x;i.isCSS3DSprite?(y.copy(f.matrixWorldInverse),y.transpose(),i.rotation2D!==0&&y.multiply(Ge.makeRotationZ(i.rotation2D)),i.matrixWorld.decompose(V,Se,N),y.setPosition(V),y.scale(N),y.elements[3]=0,y.elements[7]=0,y.elements[11]=0,y.elements[15]=1,x=W(y)):x=W(i.matrixWorld);const b=p.objects.get(i);if(b===void 0||b.style!==x){_.style.transform=x;const M={style:x};p.objects.set(i,M)}_.parentNode!==g&&g.appendChild(_),i.onAfterRender(n,e,f)}}for(let w=0,_=i.children.length;w<_;w++)z(i.children[w],e,f)}}}let C=new Z,Be=new he,Ee=new URL("/assets/2k-CzDr2HGN.hdr",import.meta.url).href;Be.loadAsync(Ee).then(l=>{l.mapping=j,C.background=l,C.environment=l});const q=new $(16777215,1);q.position.set(10,100,10);C.add(q);let D=new ee(75,window.innerWidth/window.innerHeight,.1,1e5);D.position.set(100,100,300);class Pe{constructor(){this.activeCamera=D,this.cameraCollect={default:D},u.on("toggleCamera",t=>{this.setActiveCamera(t)})}addCamera(t,n){this.cameraCollect[t]=n}setActiveCamera(t){this.activeCamera=this.cameraCollect[t]}}const G=new Pe;let B=new te({antialias:!0,physicallyCorrectLights:!0,logarithmicDepthBuffer:!0});B.setSize(window.innerWidth,window.innerHeight);B.shadowMap.enabled=!0;B.toneMapping=se;B.toneMappingExposure=.8;const X=new Me;X.setSize(window.innerWidth,window.innerHeight);const S={renderer:B,css3drender:X},J=new fe(G.activeCamera,S.renderer.domElement);J.enableDamping=!0;class be{constructor(){this.controls=J}}const Oe=new be;var De=`uniform sampler2D uTexture;
uniform vec3 uColor;
void main(){
    vec4 uTextureColor = texture2D(uTexture, gl_PointCoord);
    gl_FragColor = vec4(uColor, uTextureColor.x);
}`,Le=`attribute vec3 aPosition; 
uniform float uTime;
void main(){
    vec4 currentPosition = modelMatrix * vec4(position, 1.0);
    vec3 direction = aPosition - currentPosition.xyz;
    

    vec3 targetPosition = currentPosition.xyz + direction * 0.1 * uTime;
    vec4 vPosition = viewMatrix * vec4(targetPosition, 1.0);
    gl_Position = projectionMatrix*vPosition;
    
    gl_PointSize = -100.0/vPosition.z;
}`;class ke{constructor(t){let n=new ve,r=new ge;r.setDecoderPath("/draco/"),r.setDecoderConfig({type:"js"}),r.preload(),n.setDRACOLoader(r),this.scene=t,this.floor1Group,this.floor2Group,this.wallGroup,this.floor2Tags=[];let c=["小型会议室","核心科技室","科技展台","设计总监办公室"],m=new URL("/assets/floor2-qUgHYOA0.glb",import.meta.url).href;n.load(m,p=>{this.floor2Group=p.scene,p.scene.traverse(a=>{if(a.isMesh&&(a.material.emissiveIntensity=15),c.indexOf(a.name)!=-1){let d=this.createTag(a);this.floor2Tags.push(d),this.floor2Group.add(d)}}),t.add(this.floor2Group)});let v=new URL("/assets/Fighter1-CSGuFXbK.glb",import.meta.url).href;n.load(v,p=>{this.fighterGroup=p.scene,t.add(this.fighterGroup),this.fighterGroup.position.set(3,42,68),this.fighterGroup.traverse(a=>{a.isMesh&&(a.material.emissiveIntensity=15,a.position2=a.position.clone())}),this.mouse=new ne,this.raycaster=new ie,window.addEventListener("click",a=>{a.mesh=this,this.mouse.x=a.clientX/window.innerWidth*2-1,this.mouse.y=-(a.clientY/window.innerHeight*2-1),this.raycaster.setFromCamera(this.mouse,G.activeCamera),this.raycaster.intersectObject(this.fighterGroup).length>0&&console.log("点击了飞机")})}),this.initEvent()}update(t){this.mixer&&this.mixer.update(t)}createTag(t){const n=document.createElement("div");n.className="elementTag",n.innerHTML=`
        <div class="elementContent">
            <h3>${t.name}</h3>
            <p>温度：30℃</p>
            <p>湿度：40%</p>
        </div>
        `;const r=new Ae(n);return t.position,r.position.copy(t.position),r.scale.set(.2,.2,.2),r}initEvent(){u.on("flatFighter",()=>{let t=[];for(var n=0;n<5;n++)for(var r=0;r<5;r++)t.push(new k(n*2-2,r*2-2,0));let c=0;this.fighterGroup.traverse(m=>{m.isMesh&&(t[c].multiplyScalar(10),E.to(m.position,{x:"+="+t[c].x,y:"+="+t[c].y,z:"+="+t[c].z,duration:1}),c++)})}),u.on("recoverFighter",()=>{this.fighterGroup.traverse(t=>{t.isMesh&&E.to(t.position,{x:t.position2.x,y:t.position2.y,z:t.position2.z,duration:1})})}),u.on("pointsFighter",()=>{this.createPoints(this.fighterGroup),this.fighterPointsGroup&&(this.fighterPointsGroup.visible=!0),this.floor2Group.visible=!1,this.fighterGroup.visible=!1}),u.on("pointsBlast",()=>{this.pointsBlast()}),u.on("pointsBack",()=>{this.pointsBack()}),u.on("pointsRemove",()=>{this.fighterPointsGroup.visible=!1,this.floor2Group.visible=!0,this.fighterGroup.visible=!0})}createPoints(t){this.fighterPointsGroup||(this.fighterPointsGroup=this.transformPoints(t),this.scene.add(this.fighterPointsGroup))}transformPoints(t){let n=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAq1BMVEUAAAAGBgYLCwsQEBAYGBggICAcHBwUFBQnJyckJCQxMTHh4eHa2to+Pj7q6urKysqqqqouLi7n5+fk5ORiYmLt7e3X19fR0dG9vb25ubmenp6MjIx/f39HR0c6OjpdXV3v7+97e3tPT08rKys2NjbOzs7Dw8O0tLSWlpaSkpJ3d3d1dXVvb29sbGxbW1tXV1dUVFRMTExERERBQUGgoKA1NTXx8fHc3NyhoaGopjlnAAAB/ElEQVRIx+3WyZKbMBAG4CQTh1UGgcy+BIz3fZuZ93+ytBuqL4JiHF3nP/nyVbeMpNaP77yen5T/UJRX2C/KVympNwzZLzBCmkZ4jLYMjfYbAz+IjrgnA/GnyxMjlaTkNFSTLmi1To44VIahQwwDrSRlB+WAAeLchHAOGCgUHZTkgM3NpmC36/XGioc5B0pywL21jjcsr0/Hsjye6pw1vJVtt30Q1ofOLPKzOOyqLKt2B3HOCxOlBhKhXLBz7FLus3Sd3O/JOs325YV1EktKEBudTMDVYpsm7iqOonjlJulW1CixWYD9BXVeXES1ceOlswjDhbOM3U0lLgXXqaRcEJwxb/Jyu3EjJwxsSBA6kbvZlnkzh2axpAyxoMnO+xRcYFsYOwCZ7s+sLSlB6vSRiyyJneDD8n3P833rI3DiJBP5g3rtWSJ0WtSH1F2GtuV7U4jnW3a4dNNDXUCvtEh5iZydduuVEzzdDPKUgbNa706M0yJ7oG7ejlUSL6DgdPYXMptCyUWcVMebqQ9ADeG1zO4RdOoBfH8H6EGv0T0rrwg1ZTjeqie1qvDnKHyOsQ3g9WwAhS2nssnVjxUdZGPwIFPB8avj87Pv6lC4rEavRyGGr0f1C1keASZGGgEKQ0dpzKkPVnmUA8BIo1zh8aD0XFF/IKk/yciS+s7L+QfFrE8fdgvs9QAAAABJRU5ErkJggg==",import.meta.url).href;const r=new oe().load(n),c=new re;function m(v,p){v.children.length>0&&v.children.forEach(a=>{if(a.isMesh){const d=new le(Math.random(),Math.random(),Math.random()),g=new ce({uniforms:{uColor:{value:d},uTexture:{value:r},uTime:{value:0}},vertexShader:Le,fragmentShader:De,blending:de,transparent:!0,depthTest:!1}),s=new ue(a.geometry,g);s.position.copy(a.position),s.rotation.copy(a.rotation),s.scale.copy(a.scale),p.add(s),m(a,s)}})}return m(t,c),c}pointsBlast(){this.fighterPointsGroup.traverse(t=>{if(t.isPoints){let n=new Float32Array(t.geometry.attributes.position.count*3);for(let r=0;r<t.geometry.attributes.position.count;r++)n[r*3+0]=(Math.random()*2-1)*10,n[r*3+1]=(Math.random()*2-1)*10,n[r*3+2]=(Math.random()*2-1)*10;t.geometry.setAttribute("aPosition",new ae(n,3)),E.to(t.material.uniforms.uTime,{value:10,duration:5})}})}pointsBack(){this.fighterPointsGroup.traverse(t=>{t.isPoints&&E.to(t.material.uniforms.uTime,{value:0,duration:5})})}}let L;const Re=()=>(L=new ke(C),L);function Fe(l){L.update(l)}const Te=new pe;function K(l,t){let n=Te.getDelta();Oe.controls.update(),l(n),requestAnimationFrame(()=>{K(l)}),S.renderer.render(C,G.activeCamera),S.css3drender.render(C,G.activeCamera)}u.on("toggleCamera",()=>{});const We={__name:"FactoryScene",setup(l){let t=O(null),n=O(null);return C.add(G.activeCamera),C.add(me),Re(),S.renderer.render(C,G.activeCamera),ye(()=>{t.value.appendChild(S.renderer.domElement),t.value.appendChild(S.renderer.domElement),n.value.appendChild(S.css3drender.domElement),K(Fe)}),(r,c)=>(R(),F(we,null,[o("div",{class:"scene",ref_key:"sceneDiv",ref:t},null,512),o("div",{class:"cssrender",ref_key:"cssrenderScene",ref:n},null,512)],64))}},h=l=>(Ce("data-v-944fcb9d"),l=l(),xe(),l),He={id:"bigScreen"},ze=h(()=>o("div",{class:"header"},"超宇智慧工厂系统管理平台",-1)),Ue={class:"main"},Ve={class:"right"},Ne=["src"],Ie=h(()=>o("span",null," 展开飞机 ",-1)),qe=h(()=>o("div",{class:"footerBorder"},null,-1)),Xe=["src"],Je=h(()=>o("span",null," 恢复飞机 ",-1)),Ke=h(()=>o("div",{class:"footerBorder"},null,-1)),Qe=["src"],Ye=h(()=>o("span",null," 粒子特效 ",-1)),Ze=h(()=>o("div",{class:"footerBorder"},null,-1)),je=["src"],$e=h(()=>o("span",null," 粒子爆炸 ",-1)),et=h(()=>o("div",{class:"footerBorder"},null,-1)),tt=["src"],st=h(()=>o("span",null," 粒子复原 ",-1)),nt=h(()=>o("div",{class:"footerBorder"},null,-1)),it=["src"],ot=h(()=>o("span",null," 移除粒子 ",-1)),rt=h(()=>o("div",{class:"footerBorder"},null,-1)),at={__name:"BigScreenFactory",setup(l){let t=new URL("/assets/bar-LCN0kkKR.svg",import.meta.url).href,n=O(null);u.on("spriteClick",d=>{n.value=d.i});const r=()=>{u.emit("flatFighter")},c=()=>{u.emit("recoverFighter")},m=()=>{u.emit("pointsFighter")},v=()=>{u.emit("pointsBlast")},p=()=>{u.emit("pointsBack")},a=()=>{u.emit("pointsRemove")};return(d,g)=>(R(),F("div",He,[ze,o("div",Ue,[o("div",Ve,[o("div",{class:"cityEvent",onClick:r},[o("h3",null,[o("img",{class:"icon",src:A(t),alt:""},null,8,Ne),Ie]),qe]),o("div",{class:"cityEvent",onClick:c},[o("h3",null,[o("img",{class:"icon",src:A(t),alt:""},null,8,Xe),Je]),Ke]),o("div",{class:"cityEvent",onClick:m},[o("h3",null,[o("img",{class:"icon",src:A(t),alt:""},null,8,Qe),Ye]),Ze]),o("div",{class:"cityEvent",onClick:v},[o("h3",null,[o("img",{class:"icon",src:A(t),alt:""},null,8,je),$e]),et]),o("div",{class:"cityEvent",onClick:p},[o("h3",null,[o("img",{class:"icon",src:A(t),alt:""},null,8,tt),st]),nt]),o("div",{class:"cityEvent",onClick:a},[o("h3",null,[o("img",{class:"icon",src:A(t),alt:""},null,8,it),ot]),rt])])])]))}},lt=_e(at,[["__scopeId","data-v-944fcb9d"]]),yt={__name:"Factory",setup(l){return(t,n)=>(R(),F("div",null,[U(We),U(lt)]))}};export{yt as default};
