import{O as z,V as A,c as p,t as w}from"./three.module-A37dimS0.js";class q extends z{constructor(l=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=l,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new A(.5,.5),this.addEventListener("removed",function(){this.traverse(function(s){s.element instanceof Element&&s.element.parentNode!==null&&s.element.parentNode.removeChild(s.element)})})}copy(l,s){return super.copy(l,s),this.element=l.element.cloneNode(!0),this.center=l.center,this}}const d=new p,S=new w,v=new w,O=new p,g=new p;class T{constructor(l={}){const s=this;let a,u,c,h;const f={objects:new WeakMap},o=l.element!==void 0?l.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.getSize=function(){return{width:a,height:u}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),S.copy(t.matrixWorldInverse),v.multiplyMatrices(t.projectionMatrix,S),y(e,e,t),D(e)},this.setSize=function(e,t){a=e,u=t,c=a/2,h=u/2,o.style.width=e+"px",o.style.height=t+"px"};function x(e){e.isCSS2DObject&&(e.element.style.display="none");for(let t=0,r=e.children.length;t<r;t++)x(e.children[t])}function y(e,t,r){if(e.visible===!1){x(e);return}if(e.isCSS2DObject){d.setFromMatrixPosition(e.matrixWorld),d.applyMatrix4(v);const n=d.z>=-1&&d.z<=1&&e.layers.test(r.layers)===!0,i=e.element;i.style.display=n===!0?"":"none",n===!0&&(e.onBeforeRender(s,t,r),i.style.transform="translate("+-100*e.center.x+"%,"+-100*e.center.y+"%)translate("+(d.x*c+c)+"px,"+(-d.y*h+h)+"px)",i.parentNode!==o&&o.appendChild(i),e.onAfterRender(s,t,r));const m={distanceToCameraSquared:C(r,e)};f.objects.set(e,m)}for(let n=0,i=e.children.length;n<i;n++)y(e.children[n],t,r)}function C(e,t){return O.setFromMatrixPosition(e.matrixWorld),g.setFromMatrixPosition(t.matrixWorld),O.distanceToSquared(g)}function _(e){const t=[];return e.traverseVisible(function(r){r.isCSS2DObject&&t.push(r)}),t}function D(e){const t=_(e).sort(function(n,i){if(n.renderOrder!==i.renderOrder)return i.renderOrder-n.renderOrder;const m=f.objects.get(n).distanceToCameraSquared,W=f.objects.get(i).distanceToCameraSquared;return m-W}),r=t.length;for(let n=0,i=t.length;n<i;n++)t[n].element.style.zIndex=r-n}}}export{q as C,T as a};
