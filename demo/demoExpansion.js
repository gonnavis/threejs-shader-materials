(()=>{"use strict";var e,n={746:(e,n,t)=>{var i,a=t(75),r=t(12),s=t(659);class o{static getChunkName(){return""}static getChunk(){return""}static getDefines(){return{}}static registerChunk(){a.WdD&&null==a.WdD[this.getChunkName()]&&(a.WdD[this.getChunkName()]=this.getChunk())}static getUniform(){return{}}}class l extends o{static registerChunk(){u.registerChunk(),c.registerChunk()}static getDefines(){return{USE_EXPANSION:!1}}static getUniform(){return{expansionStrength:{value:0}}}}class u extends o{static getChunkName(){return"__expansion_uniform_chunk"}static getChunk(){return"\n    #ifdef USE_EXPANSION\n      uniform float expansionStrength;\n    #endif\n    "}}class c extends o{static getChunkName(){return"__expansion_vertex_chunk"}static getChunk(){return"\n    #ifdef USE_EXPANSION\n      transformed += normal * expansionStrength;\n    #endif\n    "}}class d extends o{static registerChunk(){super.registerChunk(),p.registerChunk(),m.registerChunk(),h.registerChunk()}static getUniform(){return a.rDY.merge([super.getUniform(),{hasMap:{value:!1},map:{value:null}}])}static getMap(e){return e.uniforms.map.value}static setMap(e,n){e.uniforms.map.value=n,e.uniforms.hasMap.value=null!=n}}class p extends o{static getChunkName(){return"map_uniform_chunk"}static getChunk(){return"\n      uniform bool hasMap;\n      uniform sampler2D map;\n    "}}class m extends o{static getChunkName(){return"map_fragment_chunk"}static getChunk(){return"\n      if( hasMap ){\n        vec4 texelColor = texture2D( map, mapUV );\n        diffuseColor *= texelColor;\n      }\n    "}}class h extends o{static getChunkName(){return"__ShaderMaterial__map_fragment_begin_chunk"}static getChunk(){return"\n      vec2 mapUV = uvPosition;\n    "}}class g extends o{static registerChunk(){_.registerChunk(),f.registerChunk(),v.registerChunk(),x.registerChunk(),C.registerChunk()}static getDefines(){return{USE_MESH_POSITION:!1}}}class _ extends o{static getChunkName(){return"mesh_phong_uniform"}static getChunk(){return"\n      uniform vec3 diffuse;\n      uniform vec3 emissive;\n      uniform vec3 specular;\n      uniform float shininess;\n      uniform float opacity;\n      uniform bool hasAlphaMap;\n      uniform sampler2D alphaMap;\n    "}}class f extends o{static getChunkName(){return"mesh_phong_diffuse_color"}static getChunk(){return"\n      vec4 diffuseColor = vec4( diffuse, opacity );\n      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n      vec3 totalEmissiveRadiance = emissive;\n    "}}class v extends o{static getChunkName(){return"mesh_phong_switching_alpha_map"}static getChunk(){return"\n      if( hasAlphaMap ){\n        diffuseColor.a *= texture2D( alphaMap, mapUV ).g;\n      }\n    "}}class x extends o{static getChunkName(){return"mesh_position_varying"}static getChunk(){return"\n    #ifdef USE_MESH_POSITION\n    varying vec3 meshPosition;\n    #endif\n    "}}class C extends o{static getChunkName(){return"mesh_position_vertex"}static getChunk(){return"\n    #ifdef USE_MESH_POSITION\n    meshPosition = position;\n    #endif\n    "}}class k extends o{static registerChunk(){M.registerChunk(),U.registerChunk()}static getDefines(){return{USE_SURFACE_NORMAL:!1}}static getUniform(){return{}}}class M extends o{static getChunkName(){return"surface_normal_varying_chunk"}static getChunk(){return"\n    #ifdef USE_SURFACE_NORMAL\n      varying vec3 surfaceNormal;\n    #endif\n    "}}class U extends o{static getChunkName(){return"surface_normal_vertex_chunk"}static getChunk(){return"\n    #ifdef USE_SURFACE_NORMAL\n      surfaceNormal = normalize( transformedNormal );\n    #endif\n    "}}!function(e){e[e.vertical=4]="vertical",e[e.horizontal=3]="horizontal",e[e.radial=5]="radial"}(i||(i={}));class y extends a.jyz{constructor(e,n,t){super(t),this._opacity=1,null!=t||(t={}),null!=e||(e="\n#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n#include <surface_normal_varying_chunk>\n#include <__expansion_uniform_chunk>\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n    #include <mesh_position_vertex>\n    uvPosition = uv;\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n    \n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n    #include <surface_normal_vertex_chunk>\n    #include <normal_vertex>\n    \n    #include <begin_vertex>\n    \n    #include <__expansion_vertex_chunk>\n    \n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <displacementmap_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n    \n    vViewPosition = - mvPosition.xyz;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n}\n"),null!=n||(n="\n#define PHONG\n\n#include <mesh_phong_uniform>\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n  \n    #include <mesh_phong_diffuse_color>\n    \n    #include <logdepthbuf_fragment>\n    #include <__ShaderMaterial__map_fragment_begin_chunk>\n    #include <map_fragment>\n    #include <color_fragment>\n    #include <mesh_phong_switching_alpha_map>\n    \n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_fragment_begin>\n    #include <normal_fragment_maps>\n    #include <emissivemap_fragment>\n    \n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_fragment_begin>\n    #include <lights_fragment_maps>\n    #include <lights_fragment_end>\n    \n    // modulation\n    #include <aomap_fragment>\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n    #include <envmap_fragment>\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n    #include <dithering_fragment>\n}"),this.initChunks(),this.initUniforms(),this.initDefines(),this.vertexShader=e,this.fragmentShader=n,this.initDefaultSetting(t)}static getBasicUniforms(){return a.rDY.merge([a.rBU.common,a.rBU.specularmap,a.rBU.envmap,a.rBU.aomap,a.rBU.lightmap,a.rBU.emissivemap,a.rBU.bumpmap,a.rBU.normalmap,a.rBU.displacementmap,a.rBU.gradientmap,a.rBU.fog,a.rBU.lights,{emissive:{value:new a.Ilk(0)},specular:{value:new a.Ilk(1118481)},shininess:{value:30},hasAlphaMap:{value:!1}},k.getUniform(),l.getUniform(),d.getUniform()])}initChunks(){g.registerChunk(),k.registerChunk(),l.registerChunk(),d.registerChunk()}initUniforms(){this.uniforms=a.rDY.merge([y.getBasicUniforms(),l.getUniform(),{}])}initDefines(){this.defines=Object.assign({},g.getDefines(),k.getDefines(),l.getDefines(),this.defines)}initDefaultSetting(e){this.uniformOpacity=this._opacity,this.lights=!0}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get opacity(){return this.uniformOpacity}get uniformOpacity(){return this._opacity}set opacity(e){this.uniformOpacity=e}set uniformOpacity(e){var n;this._opacity=e,(null===(n=this.uniforms)||void 0===n?void 0:n.opacity)&&(this.uniforms.opacity.value=e)}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get map(){return d.getMap(this)}set map(e){d.setMap(this,e),this.onSetMap(e)}onSetMap(e){}get alphaMap(){return this.uniforms.alphaMap.value}set alphaMap(e){this.uniforms.alphaMap.value=e,this.uniforms.hasAlphaMap.value=null!=e,this.onSetAlphaMap(e)}onSetAlphaMap(e){}startGlow(){this.alphaTest=0,this.depthWrite=!1,this.blending=a.WMw}}var S=t(163);class w extends y{get expansionStrength(){return this.uniforms.expansionStrength.value}set expansionStrength(e){this.uniforms.expansionStrength.value=e}constructor(e){super(null,null,e)}initDefines(){super.initDefines(),this.defines.USE_EXPANSION=!0}}class I{static initColorGUI(e,n,t="color"){const i={},a=n[t];return i[t]=a.getHex(),e.addColor(i,t).onChange((e=>{a.setHex(e)})),i}static initBasicMaterialGUI(e,n,t="Material"){const i=e.addFolder(t);return this.initMaterialFolder(i,n),i.open(),i}static initMaterialGUI(e,n,t="Material"){const i=this.initBasicMaterialGUI(e,n,t);this.initColorGUI(i,n,"emissive")}static initMaterialFolder(e,n){this.initColorGUI(e,n),e.add(n,"transparent"),e.add(n,"uniformOpacity",0,1)}static initSpriteMaterialGUI(e,n,t="Material"){const i=e.addFolder(t);this.initMaterialFolder(i,n),i.open()}static initGridMaterialGUI(e,n){this.initMaterialGUI(e,n);const t={mask:"",alphaMap:""},i=e.addFolder("WavyGridMaterial");return i.add(n,"isReversed"),i.add(n,"division",2,256).step(1),i.add(n,"divisionScaleX",0,4).step(1),i.add(t,"mask",{none:"",earth:"./textures/landmask.png"}).onChange((e=>{n.maskTexture=""===e?null:(new a.dpR).load(e)})),i.add(t,"alphaMap",{none:"",earth:"./textures/landmask.png"}).onChange((e=>{n.alphaMap=""===e?null:(new a.dpR).load(e)})),i.open(),i}static initWavyMaterialGUI(e,n){const t=this.initGridMaterialGUI(e,n).addFolder("WavyAnimation");t.add(n,"isAnimate"),t.add(n,"speed",-2,2),t.add(n,"waveFrequency",0,1),t.add(n,"wavePow",0,4),t.add(n,"direction",{horizontal:i.horizontal,vertical:i.vertical,radial:i.radial}),t.add(n,"raisedBottom",0,1),t.open()}static initAnimationGUI(e,n,t="Animation"){const i=e.addFolder(t);i.add(n,"isAnimate"),i.add(n,"speed",-2,2),i.open()}static initRimGUI(e,n,t="Rim Effect Material"){const i=e.addFolder(t);I.initColorGUI(i,n,"rimColor"),i.add(n,"rimStrength",0,4).step(.01),i.add(n,"rimPow",0,4).step(.01),I.initColorGUI(i,n,"insideColor"),i.add(n,"insideStrength",0,4).step(.01),i.add(n,"insidePow",0,8).step(.01),i.open()}static initExpansionGUI(e,n,t="ExpansionMaterial"){const i=e.addFolder("ExpansionMaterial");i.add(n,"expansionStrength",-12,12).step(.01),i.open()}static initFBMTilingGUI(e,n,t="FBM Tiling"){const i=e.addFolder("FBM Tiling");i.add(n,"tiles",1,8).step(1),i.add(n,"hashLoop",2,16).step(1),i.add(n,"amp",0,2).step(.01),i.open()}static initSkyGUI(e,n,t,i){const a={turbidity:10,rayleigh:.15,mieCoefficient:.005,mieDirectionalG:.8,inclination:.07,azimuth:.25,exposure:.75},r=4e5;function s(){const e=n.material.uniforms;e.turbidity.value=a.turbidity,e.rayleigh.value=a.rayleigh,e.mieCoefficient.value=a.mieCoefficient,e.mieDirectionalG.value=a.mieDirectionalG;const s=Math.PI*(a.inclination-.5),o=2*Math.PI*(a.azimuth-.5);t.position.x=r*Math.cos(o),t.position.y=r*Math.sin(o)*Math.sin(s),t.position.z=r*Math.sin(o)*Math.cos(s),e.sunPosition.value.copy(t.position),i.toneMappingExposure=a.exposure}s();const o=e.addFolder("Sky");o.add(a,"turbidity",1,20,.1).onChange(s),o.add(a,"rayleigh",0,4,.001).onChange(s),o.add(a,"mieCoefficient",0,.1,.001).onChange(s),o.add(a,"mieDirectionalG",0,1,.001).onChange(s),o.add(a,"inclination",0,1,1e-4).onChange(s),o.add(a,"azimuth",0,1,1e-4).onChange(s),o.add(a,"exposure",0,1,1e-4).onChange(s),o.open()}}class b{static initScene(){return new a.xsS}static initLight(e){const n=new a.Mig(16777215,1);return e.add(n),n}static initCamera(e,n,t,i=400){const r=new a.cPb(45,n/t,1,i);return r.position.set(0,0,100),r.updateMatrixWorld(!1),e.add(r),r}static initControl(e,n){let t;null!=n&&(t=n.domElement);const i=new r.z(e,t);return i.update(),i}static initRenderer(e,n,t=0,i="webgl-canvas",r=!0){const s=document.getElementById(i);s.style.zIndex=0,s.style.position="absolute";const o=new a.CP7({canvas:s,antialias:r});return o.setClearColor(new a.Ilk(t)),o.setSize(e,n),o.setPixelRatio(window.devicePixelRatio),o}static initHelper(e){const n=new a.y8_(30);e.add(n)}static initSky(e,n,t){t.toneMapping=a.LY2;const i=new a.Kj0(new a.Aip(2e4,16,8),new a.vBJ({color:16777215}));i.position.y=-7e5,i.visible=!1,e.add(i);const r=new s.q;r.scale.setScalar(45e3),e.add(r),I.initSkyGUI(n,r,i,t)}}var O=t(899);class G{constructor(){const e=b.initScene();e.fog=new a.ybr(0,80,160),b.initLight(e);const n=b.initCamera(e,640,480),t=b.initRenderer(640,480);b.initControl(n,t),b.initHelper(e);const i=this.initObject(e);S.Fz.addEventListener(S.M9.tick,(i=>{t.render(e,n)})),this.initGUI(i)}initObject(e){const n=new a.cek(65535,3,0,2);n.position.set(10,20,30),e.add(n);const t=new a.xG9(n);e.add(t);const i=new a.XvJ(10,4,32,32),r=new a.XvJ(10,4,32,32),s=new w({fog:void 0!==e.fog});s.color=new a.Ilk(16711680);const o=new a.Kj0(i,s),l=new a.Kj0(r,s);return o.position.x=-25,l.position.x=25,e.add(o),e.add(l),s}initGUI(e){const n=new O.ZP;I.initMaterialGUI(n,e),I.initExpansionGUI(n,e)}}window.onload=()=>{new G}}},t={};function i(e){var a=t[e];if(void 0!==a)return a.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,a,r)=>{if(!t){var s=1/0;for(c=0;c<e.length;c++){for(var[t,a,r]=e[c],o=!0,l=0;l<t.length;l++)(!1&r||s>=r)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(o=!1,r<s&&(s=r));if(o){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,a,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.j=201,(()=>{var e={201:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var a,r,[s,o,l]=t,u=0;if(s.some((n=>0!==e[n]))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var c=l(i)}for(n&&n(t);u<s.length;u++)r=s[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},t=self.webpackChunkthreejs_shader_materials=self.webpackChunkthreejs_shader_materials||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var a=i.O(void 0,[736],(()=>i(746)));a=i.O(a)})();