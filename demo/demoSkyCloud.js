(()=>{"use strict";var n,e={671:(n,e,i)=>{var t,a=i(899),r=i(75),s=i(12),o=i(659);class l{static getChunkName(){return""}static getChunk(){return""}static getDefines(){return{}}static registerChunk(){r.WdD&&null==r.WdD[this.getChunkName()]&&(r.WdD[this.getChunkName()]=this.getChunk())}static getUniform(){return{}}}class u extends l{static registerChunk(){c.registerChunk(),d.registerChunk()}static getDefines(){return{USE_EXPANSION:!1}}static getUniform(){return{expansionStrength:{value:0}}}}class c extends l{static getChunkName(){return"__expansion_uniform_chunk"}static getChunk(){return"\n    #ifdef USE_EXPANSION\n      uniform float expansionStrength;\n    #endif\n    "}}class d extends l{static getChunkName(){return"__expansion_vertex_chunk"}static getChunk(){return"\n    #ifdef USE_EXPANSION\n      transformed += normal * expansionStrength;\n    #endif\n    "}}class m extends l{static registerChunk(){super.registerChunk(),p.registerChunk(),_.registerChunk(),f.registerChunk()}static getUniform(){return r.rDY.merge([super.getUniform(),{hasMap:{value:!1},map:{value:null}}])}static getMap(n){return n.uniforms.map.value}static setMap(n,e){n.uniforms.map.value=e,n.uniforms.hasMap.value=null!=e}}class p extends l{static getChunkName(){return"map_uniform_chunk"}static getChunk(){return"\n      uniform bool hasMap;\n      uniform sampler2D map;\n    "}}class _ extends l{static getChunkName(){return"map_fragment_chunk"}static getChunk(){return"\n      if( hasMap ){\n        vec4 texelColor = texture2D( map, mapUV );\n        diffuseColor *= texelColor;\n      }\n    "}}class f extends l{static getChunkName(){return"__ShaderMaterial__map_fragment_begin_chunk"}static getChunk(){return"\n      vec2 mapUV = uvPosition;\n    "}}class g extends l{static registerChunk(){h.registerChunk(),v.registerChunk(),x.registerChunk(),k.registerChunk(),C.registerChunk()}static getDefines(){return{USE_MESH_POSITION:!1}}}class h extends l{static getChunkName(){return"mesh_phong_uniform"}static getChunk(){return"\n      uniform vec3 diffuse;\n      uniform vec3 emissive;\n      uniform vec3 specular;\n      uniform float shininess;\n      uniform float opacity;\n      uniform bool hasAlphaMap;\n      uniform sampler2D alphaMap;\n    "}}class v extends l{static getChunkName(){return"mesh_phong_diffuse_color"}static getChunk(){return"\n      vec4 diffuseColor = vec4( diffuse, opacity );\n      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n      vec3 totalEmissiveRadiance = emissive;\n    "}}class x extends l{static getChunkName(){return"mesh_phong_switching_alpha_map"}static getChunk(){return"\n      if( hasAlphaMap ){\n        diffuseColor.a *= texture2D( alphaMap, mapUV ).g;\n      }\n    "}}class k extends l{static getChunkName(){return"mesh_position_varying"}static getChunk(){return"\n    #ifdef USE_MESH_POSITION\n    varying vec3 meshPosition;\n    #endif\n    "}}class C extends l{static getChunkName(){return"mesh_position_vertex"}static getChunk(){return"\n    #ifdef USE_MESH_POSITION\n    meshPosition = position;\n    #endif\n    "}}class y extends l{static registerChunk(){S.registerChunk(),M.registerChunk()}static getDefines(){return{USE_SURFACE_NORMAL:!1}}static getUniform(){return{}}}class S extends l{static getChunkName(){return"surface_normal_varying_chunk"}static getChunk(){return"\n    #ifdef USE_SURFACE_NORMAL\n      varying vec3 surfaceNormal;\n    #endif\n    "}}class M extends l{static getChunkName(){return"surface_normal_vertex_chunk"}static getChunk(){return"\n    #ifdef USE_SURFACE_NORMAL\n      surfaceNormal = normalize( transformedNormal );\n    #endif\n    "}}!function(n){n[n.vertical=4]="vertical",n[n.horizontal=3]="horizontal",n[n.radial=5]="radial"}(t||(t={}));class U extends r.jyz{constructor(n,e,i){super(i),this._opacity=1,null!=i||(i={}),null!=n||(n="\n#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n#include <surface_normal_varying_chunk>\n#include <__expansion_uniform_chunk>\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n    #include <mesh_position_vertex>\n    uvPosition = uv;\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n    \n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n    #include <surface_normal_vertex_chunk>\n    #include <normal_vertex>\n    \n    #include <begin_vertex>\n    \n    #include <__expansion_vertex_chunk>\n    \n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <displacementmap_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n    \n    vViewPosition = - mvPosition.xyz;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n}\n"),null!=e||(e="\n#define PHONG\n\n#include <mesh_phong_uniform>\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n  \n    #include <mesh_phong_diffuse_color>\n    \n    #include <logdepthbuf_fragment>\n    #include <__ShaderMaterial__map_fragment_begin_chunk>\n    #include <map_fragment>\n    #include <color_fragment>\n    #include <mesh_phong_switching_alpha_map>\n    \n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_fragment_begin>\n    #include <normal_fragment_maps>\n    #include <emissivemap_fragment>\n    \n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_fragment_begin>\n    #include <lights_fragment_maps>\n    #include <lights_fragment_end>\n    \n    // modulation\n    #include <aomap_fragment>\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n    #include <envmap_fragment>\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n    #include <dithering_fragment>\n}"),this.initChunks(),this.initUniforms(),this.initDefines(),this.vertexShader=n,this.fragmentShader=e,this.initDefaultSetting(i)}static getBasicUniforms(){return r.rDY.merge([r.rBU.common,r.rBU.specularmap,r.rBU.envmap,r.rBU.aomap,r.rBU.lightmap,r.rBU.emissivemap,r.rBU.bumpmap,r.rBU.normalmap,r.rBU.displacementmap,r.rBU.gradientmap,r.rBU.fog,r.rBU.lights,{emissive:{value:new r.Ilk(0)},specular:{value:new r.Ilk(1118481)},shininess:{value:30},hasAlphaMap:{value:!1}},y.getUniform(),u.getUniform(),m.getUniform()])}initChunks(){g.registerChunk(),y.registerChunk(),u.registerChunk(),m.registerChunk()}initUniforms(){this.uniforms=r.rDY.merge([U.getBasicUniforms(),u.getUniform(),{}])}initDefines(){this.defines=Object.assign({},g.getDefines(),y.getDefines(),u.getDefines(),this.defines)}initDefaultSetting(n){this.uniformOpacity=this._opacity,this.lights=!0}get color(){return this.uniforms.diffuse.value}set color(n){this.uniforms.diffuse.value=n}get opacity(){return this.uniformOpacity}get uniformOpacity(){return this._opacity}set opacity(n){this.uniformOpacity=n}set uniformOpacity(n){var e;this._opacity=n,(null===(e=this.uniforms)||void 0===e?void 0:e.opacity)&&(this.uniforms.opacity.value=n)}get emissive(){return this.uniforms.emissive.value}set emissive(n){this.uniforms.emissive.value=n}get map(){return m.getMap(this)}set map(n){m.setMap(this,n),this.onSetMap(n)}onSetMap(n){}get alphaMap(){return this.uniforms.alphaMap.value}set alphaMap(n){this.uniforms.alphaMap.value=n,this.uniforms.hasAlphaMap.value=null!=n,this.onSetAlphaMap(n)}onSetAlphaMap(n){}startGlow(){this.alphaTest=0,this.depthWrite=!1,this.blending=r.WMw}}var b=i(163);class w extends l{static registerChunk(){I.registerChunk()}static getUniform(){return{time:{value:0},isAnimate:{value:!0}}}static addTime(n,e){n.uniforms.time.value+=e*n.speed}}class I extends l{static getChunkName(){return"time_animation_uniform_chunk"}static getChunk(){return"\n    uniform float time;\n    uniform bool isAnimate;\n    "}}class B extends U{constructor(n){super("\n#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n#include <surface_normal_varying_chunk>\n#include <__expansion_uniform_chunk>\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n    #include <mesh_position_vertex>\n    uvPosition = uv;\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n    \n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n    #include <surface_normal_vertex_chunk>\n    #include <normal_vertex>\n    \n    #include <begin_vertex>\n    \n    #include <__expansion_vertex_chunk>\n    \n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <displacementmap_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n    \n    vViewPosition = - mvPosition.xyz;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n}\n","\n#define PHONG\n\n#include <mesh_phong_uniform>\n\n//varying\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n\n//user settings\n#include <time_animation_uniform_chunk>\nuniform float scale;\nuniform float cloudVolume;\nuniform float cloudTransformSpeed;\nuniform vec3 skyColor;\nuniform float cloudBottomVolume;\nuniform float cloudBottomSaturation;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// <https://www.shadertoy.com/view/4dS3Wd>\n// <https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83>\n// By Morgan McGuire @morgan3d, http://graphicscodex.com\n// Reuse permitted under the BSD license.\nfloat hash(vec2 p)\n{\n  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x))));\n}\n\n/**\n * Based on Morgan McGuire @morgan3d\n * https://www.shadertoy.com/view/4dS3Wd\n */ \nfloat noise (in vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = hash(i);\n    float b = hash(i + vec2(1.0, 0.0));\n    float c = hash(i + vec2(0.0, 1.0));\n    float d = hash(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\n#define NUM_OCTAVES 7\n\nfloat fbm ( in vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\n\n\nvoid main() {\n    #include <clipping_planes_fragment>\n  \n    #include <mesh_phong_diffuse_color>\n    \n    #include <logdepthbuf_fragment>\n    #include <__ShaderMaterial__map_fragment_begin_chunk>\n    #include <map_fragment>\n    #include <color_fragment>\n    \n    vec2 st = uvPosition * scale;\n    st += time;\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.0);\n    r.x = fbm( st + q + vec2(1.7,9.2)+ 0.15*time * cloudTransformSpeed);\n    r.y = fbm( st + q + vec2(8.3,2.8)+ 0.126*time * cloudTransformSpeed);\n    float f = fbm(st+r);\n\n    vec3 cloudColor = diffuseColor.rgb;\n    \n    float volume;\n    float alpha = 0.0;\n    volume = (f*f)*cloudVolume*0.03;\n    alpha += volume;\n    volume = (f*f*f*f*f)*cloudVolume;\n    alpha += volume;\n    alpha = clamp(alpha,0.0,1.0);\n    \n    cloudColor = mix(cloudColor,\n                skyColor*cloudBottomSaturation,\n                clamp(volume*cloudBottomVolume,0.0,1.0));\n\n    diffuseColor.rgb = cloudColor;\n    diffuseColor.a *= alpha;\n    \n    #include <mesh_phong_switching_alpha_map>\n    \n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_fragment_begin>\n    #include <normal_fragment_maps>\n    #include <emissivemap_fragment>\n    \n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_fragment_begin>\n    #include <lights_fragment_maps>\n    #include <lights_fragment_end>\n    \n    // modulation\n    #include <aomap_fragment>\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n    #include <envmap_fragment>\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n    #include <dithering_fragment>\n}",n),this.speed=-.02,this.animationListener=n=>{this.addTime(n.delta/1e3)},this.isAnimate=this.isAnimate}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}addTime(n){w.addTime(this,n)}get isAnimate(){return this.uniforms.isAnimate.value}set isAnimate(n){this.uniforms.isAnimate.value=n,this.isAnimate?this.startAnimation():this.stopAnimation()}get skyColor(){return this.uniforms.skyColor.value}set skyColor(n){this.uniforms.skyColor.value=n}get cloudVolume(){return this.uniforms.cloudVolume.value}set cloudVolume(n){this.uniforms.cloudVolume.value=n}get cloudBottomVolume(){return this.uniforms.cloudBottomVolume.value}set cloudBottomVolume(n){this.uniforms.cloudBottomVolume.value=n}get cloudBottomSaturation(){return this.uniforms.cloudBottomSaturation.value}set cloudBottomSaturation(n){this.uniforms.cloudBottomSaturation.value=n}get cloudTransformSpeed(){return this.uniforms.cloudTransformSpeed.value}set cloudTransformSpeed(n){this.uniforms.cloudTransformSpeed.value=n}initChunks(){super.initChunks(),w.registerChunk()}initUniforms(){this.uniforms=r.rDY.merge([U.getBasicUniforms(),w.getUniform(),{scale:{value:3},cloudTransformSpeed:{value:.15},cloudVolume:{value:16},cloudBottomVolume:{value:.08},cloudBottomSaturation:{value:.5},skyColor:{value:new r.Ilk(.101961,.619608,.666667)}}])}initDefaultSetting(n){super.initDefaultSetting(n),null==n.transparent?this.transparent=!0:this.transparent=n.transparent}startAnimation(){b.Fz.on(b.M9.onBeforeTick,this.animationListener)}stopAnimation(){b.Fz.off(b.M9.onBeforeTick,this.animationListener)}}class G{static initColorGUI(n,e,i="color"){const t={},a=e[i];return t[i]=a.getHex(),n.addColor(t,i).onChange((n=>{a.setHex(n)})),t}static initBasicMaterialGUI(n,e,i="Material"){const t=n.addFolder(i);return this.initMaterialFolder(t,e),t.open(),t}static initMaterialGUI(n,e,i="Material"){const t=this.initBasicMaterialGUI(n,e,i);this.initColorGUI(t,e,"emissive")}static initMaterialFolder(n,e){this.initColorGUI(n,e),n.add(e,"transparent"),n.add(e,"uniformOpacity",0,1)}static initSpriteMaterialGUI(n,e,i="Material"){const t=n.addFolder(i);this.initMaterialFolder(t,e),t.open()}static initGridMaterialGUI(n,e){this.initMaterialGUI(n,e);const i={mask:"",alphaMap:""},t=n.addFolder("WavyGridMaterial");return t.add(e,"isReversed"),t.add(e,"division",2,256).step(1),t.add(e,"divisionScaleX",0,4).step(1),t.add(i,"mask",{none:"",earth:"./textures/landmask.png"}).onChange((n=>{e.maskTexture=""===n?null:(new r.dpR).load(n)})),t.add(i,"alphaMap",{none:"",earth:"./textures/landmask.png"}).onChange((n=>{e.alphaMap=""===n?null:(new r.dpR).load(n)})),t.open(),t}static initWavyMaterialGUI(n,e){const i=this.initGridMaterialGUI(n,e).addFolder("WavyAnimation");i.add(e,"isAnimate"),i.add(e,"speed",-2,2),i.add(e,"waveFrequency",0,1),i.add(e,"wavePow",0,4),i.add(e,"direction",{horizontal:t.horizontal,vertical:t.vertical,radial:t.radial}),i.add(e,"raisedBottom",0,1),i.open()}static initAnimationGUI(n,e,i="Animation"){const t=n.addFolder(i);t.add(e,"isAnimate"),t.add(e,"speed",-2,2),t.open()}static initRimGUI(n,e,i="Rim Effect Material"){const t=n.addFolder(i);G.initColorGUI(t,e,"rimColor"),t.add(e,"rimStrength",0,4).step(.01),t.add(e,"rimPow",0,4).step(.01),G.initColorGUI(t,e,"insideColor"),t.add(e,"insideStrength",0,4).step(.01),t.add(e,"insidePow",0,8).step(.01),t.open()}static initExpansionGUI(n,e,i="ExpansionMaterial"){const t=n.addFolder("ExpansionMaterial");t.add(e,"expansionStrength",-12,12).step(.01),t.open()}static initFBMTilingGUI(n,e,i="FBM Tiling"){const t=n.addFolder("FBM Tiling");t.add(e,"tiles",1,8).step(1),t.add(e,"hashLoop",2,16).step(1),t.add(e,"amp",0,2).step(.01),t.open()}static initSkyGUI(n,e,i,t){const a={turbidity:10,rayleigh:.15,mieCoefficient:.005,mieDirectionalG:.8,inclination:.07,azimuth:.25,exposure:.75},r=4e5;function s(){const n=e.material.uniforms;n.turbidity.value=a.turbidity,n.rayleigh.value=a.rayleigh,n.mieCoefficient.value=a.mieCoefficient,n.mieDirectionalG.value=a.mieDirectionalG;const s=Math.PI*(a.inclination-.5),o=2*Math.PI*(a.azimuth-.5);i.position.x=r*Math.cos(o),i.position.y=r*Math.sin(o)*Math.sin(s),i.position.z=r*Math.sin(o)*Math.cos(s),n.sunPosition.value.copy(i.position),t.toneMappingExposure=a.exposure}s();const o=n.addFolder("Sky");o.add(a,"turbidity",1,20,.1).onChange(s),o.add(a,"rayleigh",0,4,.001).onChange(s),o.add(a,"mieCoefficient",0,.1,.001).onChange(s),o.add(a,"mieDirectionalG",0,1,.001).onChange(s),o.add(a,"inclination",0,1,1e-4).onChange(s),o.add(a,"azimuth",0,1,1e-4).onChange(s),o.add(a,"exposure",0,1,1e-4).onChange(s),o.open()}}class A{static initScene(){return new r.xsS}static initLight(n){const e=new r.Mig(16777215,1);return n.add(e),e}static initCamera(n,e,i,t=400){const a=new r.cPb(45,e/i,1,t);return a.position.set(0,0,100),a.updateMatrixWorld(!1),n.add(a),a}static initControl(n,e){let i;null!=e&&(i=e.domElement);const t=new s.z(n,i);return t.update(),t}static initRenderer(n,e,i=0,t="webgl-canvas",a=!0){const s=document.getElementById(t);s.style.zIndex=0,s.style.position="absolute";const o=new r.CP7({canvas:s,antialias:a});return o.setClearColor(new r.Ilk(i)),o.setSize(n,e),o.setPixelRatio(window.devicePixelRatio),o}static initHelper(n){const e=new r.y8_(30);n.add(e)}static initSky(n,e,i){i.toneMapping=r.LY2;const t=new r.Kj0(new r.Aip(2e4,16,8),new r.vBJ({color:16777215}));t.position.y=-7e5,t.visible=!1,n.add(t);const a=new o.q;a.scale.setScalar(45e3),n.add(a),G.initSkyGUI(e,a,t,i)}}class P{constructor(){const n=A.initScene();A.initLight(n),n.fog=new r.ybr(5601177,2e3,1e4);const e=A.initCamera(n,1024,768,2e4),i=A.initRenderer(1024,768,0,"webgl-canvas",!1);A.initControl(e,i),A.initHelper(n);const t=new a.ZP;A.initSky(n,t,i);const s=this.initObject(n);b.Fz.addEventListener(b.M9.tick,(t=>{i.render(n,e)})),this.initGUI(t,s)}initObject(n){const e=new r._12(2e4,2e4),i=new B({fog:void 0!==n.fog}),t=new r.Kj0(e,i);return t.position.y=800,t.rotation.x=Math.PI/2,i.scale=24,i.skyColor=new r.Ilk(1136042),i.cloudVolume=4,n.add(t),i}initGUI(n,e){G.initMaterialGUI(n,e),this.initGUIMaterial(n,e),this.initGUISkyAnimation(n,e),this.initGUISkyColor(n,e)}initGUIMaterial(n,e){const i=n.addFolder("SkyCloudMaterial");i.add(e,"scale",.1,128).step(.1),i.add(e,"cloudVolume",1,128),i.open()}initGUISkyAnimation(n,e){const i=n.addFolder("SkyCloudMaterial - Animation");i.add(e,"isAnimate"),i.add(e,"speed",-2,2),i.add(e,"cloudTransformSpeed",0,20),i.open()}initGUISkyColor(n,e){const i=n.addFolder("SkyCloudMaterial - Color");G.initColorGUI(i,e,"skyColor"),i.add(e,"cloudBottomVolume",0,.3).step(.01),i.add(e,"cloudBottomSaturation",0,.7).step(.01),i.open()}}window.onload=()=>{new P}}},i={};function t(n){var a=i[n];if(void 0!==a)return a.exports;var r=i[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,n=[],t.O=(e,i,a,r)=>{if(!i){var s=1/0;for(c=0;c<n.length;c++){for(var[i,a,r]=n[c],o=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((n=>t.O[n](i[l])))?i.splice(l--,1):(o=!1,r<s&&(s=r));if(o){n.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=n.length;c>0&&n[c-1][2]>r;c--)n[c]=n[c-1];n[c]=[i,a,r]},t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.j=635,(()=>{var n={635:0};t.O.j=e=>0===n[e];var e=(e,i)=>{var a,r,[s,o,l]=i,u=0;if(s.some((e=>0!==n[e]))){for(a in o)t.o(o,a)&&(t.m[a]=o[a]);if(l)var c=l(t)}for(e&&e(i);u<s.length;u++)r=s[u],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(c)},i=self.webpackChunkthreejs_shader_materials=self.webpackChunkthreejs_shader_materials||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var a=t.O(void 0,[736],(()=>t(671)));a=t.O(a)})();