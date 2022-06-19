(()=>{"use strict";var e,n={550:(e,n,i)=>{var t,a=i(899),r=i(75),s=i(12),u=i(659);class o{static getChunkName(){return""}static getChunk(){return""}static getDefines(){return{}}static registerChunk(){r.WdD&&null==r.WdD[this.getChunkName()]&&(r.WdD[this.getChunkName()]=this.getChunk())}static getUniform(){return{}}}class l extends o{static registerChunk(){c.registerChunk()}static getUniform(){return{time:{value:0},isAnimate:{value:!0}}}static addTime(e,n){e.uniforms.time.value+=n*e.speed}}class c extends o{static getChunkName(){return"time_animation_uniform_chunk"}static getChunk(){return"\n    uniform float time;\n    uniform bool isAnimate;\n    "}}class d extends o{static registerChunk(){m.registerChunk(),g.registerChunk()}static getDefines(){return{USE_EXPANSION:!1}}static getUniform(){return{expansionStrength:{value:0}}}}class m extends o{static getChunkName(){return"__expansion_uniform_chunk"}static getChunk(){return"\n    #ifdef USE_EXPANSION\n      uniform float expansionStrength;\n    #endif\n    "}}class g extends o{static getChunkName(){return"__expansion_vertex_chunk"}static getChunk(){return"\n    #ifdef USE_EXPANSION\n      transformed += normal * expansionStrength;\n    #endif\n    "}}class _ extends o{static registerChunk(){super.registerChunk(),p.registerChunk(),h.registerChunk(),f.registerChunk()}static getUniform(){return r.rDY.merge([super.getUniform(),{hasMap:{value:!1},map:{value:null}}])}static getMap(e){return e.uniforms.map.value}static setMap(e,n){e.uniforms.map.value=n,e.uniforms.hasMap.value=null!=n}}class p extends o{static getChunkName(){return"map_uniform_chunk"}static getChunk(){return"\n      uniform bool hasMap;\n      uniform sampler2D map;\n    "}}class h extends o{static getChunkName(){return"map_fragment_chunk"}static getChunk(){return"\n      if( hasMap ){\n        vec4 texelColor = texture2D( map, mapUV );\n        diffuseColor *= texelColor;\n      }\n    "}}class f extends o{static getChunkName(){return"__ShaderMaterial__map_fragment_begin_chunk"}static getChunk(){return"\n      vec2 mapUV = uvPosition;\n    "}}class v extends o{static registerChunk(){k.registerChunk(),x.registerChunk()}static getUniform(){return{division:{value:32},divisionScaleX:{value:1}}}}class k extends o{static getChunkName(){return"repeat_pattern_uniform_chunk"}static getChunk(){return"\n      uniform float division;\n      uniform float divisionScaleX;\n    "}}class x extends o{static getChunkName(){return"repeat_pattern_fragment_chunk"}static getChunk(){return"\n      vec2 uv =\n        uvPosition\n        * vec2( division * divisionScaleX, division);\n    "}}class C extends v{static registerChunk(){super.registerChunk(),w.registerChunk(),y.registerChunk()}static getUniform(){return r.rDY.merge([super.getUniform(),{hasMaskTexture:{value:!1},maskTexture:{value:null}}])}static getMaskTexture(e){return e.uniforms.maskTexture.value}static setMaskTexture(e,n){e.uniforms.maskTexture.value=n,e.uniforms.hasMaskTexture.value=null!=n}}class w extends o{static getChunkName(){return"mask_map_uniform_chunk"}static getChunk(){return"\n      uniform bool hasMaskTexture;\n      uniform sampler2D maskTexture;\n    "}}class y extends o{static getChunkName(){return"mask_map_fragment_chunk"}static getChunk(){return"\n      float mask = 1.0;\n      if( hasMaskTexture ){\n        vec2 uVm = id / vec2( division * divisionScaleX, division);\n        mask = texture2D( maskTexture, uVm ).g;\n      }\n    "}}class M extends o{static registerChunk(){U.registerChunk(),S.registerChunk(),b.registerChunk(),P.registerChunk(),L.registerChunk()}static getDefines(){return{USE_MESH_POSITION:!1}}}class U extends o{static getChunkName(){return"mesh_phong_uniform"}static getChunk(){return"\n      uniform vec3 diffuse;\n      uniform vec3 emissive;\n      uniform vec3 specular;\n      uniform float shininess;\n      uniform float opacity;\n      uniform bool hasAlphaMap;\n      uniform sampler2D alphaMap;\n    "}}class S extends o{static getChunkName(){return"mesh_phong_diffuse_color"}static getChunk(){return"\n      vec4 diffuseColor = vec4( diffuse, opacity );\n      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n      vec3 totalEmissiveRadiance = emissive;\n    "}}class b extends o{static getChunkName(){return"mesh_phong_switching_alpha_map"}static getChunk(){return"\n      if( hasAlphaMap ){\n        diffuseColor.a *= texture2D( alphaMap, mapUV ).g;\n      }\n    "}}class P extends o{static getChunkName(){return"mesh_position_varying"}static getChunk(){return"\n    #ifdef USE_MESH_POSITION\n    varying vec3 meshPosition;\n    #endif\n    "}}class L extends o{static getChunkName(){return"mesh_position_vertex"}static getChunk(){return"\n    #ifdef USE_MESH_POSITION\n    meshPosition = position;\n    #endif\n    "}}class N extends o{static registerChunk(){I.registerChunk()}static getUniform(){return{isReversed:{value:!1}}}}class I extends o{static getChunkName(){return"reversible_uniform_chunk"}static getChunk(){return"\n      uniform bool isReversed;\n    "}}class D extends o{static registerChunk(){G.registerChunk(),B.registerChunk()}static getDefines(){return{USE_SURFACE_NORMAL:!1}}static getUniform(){return{}}}class G extends o{static getChunkName(){return"surface_normal_varying_chunk"}static getChunk(){return"\n    #ifdef USE_SURFACE_NORMAL\n      varying vec3 surfaceNormal;\n    #endif\n    "}}class B extends o{static getChunkName(){return"surface_normal_vertex_chunk"}static getChunk(){return"\n    #ifdef USE_SURFACE_NORMAL\n      surfaceNormal = normalize( transformedNormal );\n    #endif\n    "}}class O extends l{static registerChunk(){super.registerChunk(),A.registerChunk(),F.registerChunk()}static getUniform(){return r.rDY.merge([super.getUniform(),{raisedBottom:{value:.05},waveFrequency:{value:.2},wavePow:{value:4},direction:{value:t.vertical}}])}}class A extends o{static getChunkName(){return"wavy_animation_fragment_chunk"}static getChunk(){return`\n    float distance = id.y;\n    if( direction == ${t.horizontal}){\n      distance = id.x;\n    }else if( direction == ${t.radial} ){\n      distance = length(id.xy);\n    }\n\n    float wavy = isAnimate\n      ? pow( sin( (distance * waveFrequency - time) ), wavePow) + raisedBottom\n      : 1.0;\n  \n    diffuseColor.a *= wavy;\n    `}}class F extends o{static getChunkName(){return"wavy_animation_uniform_chunk"}static getChunk(){return"\n    uniform float raisedBottom;\n    uniform float waveFrequency;\n    uniform float wavePow;\n    uniform int direction;\n    "}}!function(e){e[e.vertical=4]="vertical",e[e.horizontal=3]="horizontal",e[e.radial=5]="radial"}(t||(t={}));class E extends r.jyz{constructor(e,n,i){super(i),this._opacity=1,null!=i||(i={}),null!=e||(e="\n#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n#include <surface_normal_varying_chunk>\n#include <__expansion_uniform_chunk>\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n    #include <mesh_position_vertex>\n    uvPosition = uv;\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n    \n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n    #include <surface_normal_vertex_chunk>\n    #include <normal_vertex>\n    \n    #include <begin_vertex>\n    \n    #include <__expansion_vertex_chunk>\n    \n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <displacementmap_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n    \n    vViewPosition = - mvPosition.xyz;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n}\n"),null!=n||(n="\n#define PHONG\n\n#include <mesh_phong_uniform>\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n  \n    #include <mesh_phong_diffuse_color>\n    \n    #include <logdepthbuf_fragment>\n    #include <__ShaderMaterial__map_fragment_begin_chunk>\n    #include <map_fragment>\n    #include <color_fragment>\n    #include <mesh_phong_switching_alpha_map>\n    \n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_fragment_begin>\n    #include <normal_fragment_maps>\n    #include <emissivemap_fragment>\n    \n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_fragment_begin>\n    #include <lights_fragment_maps>\n    #include <lights_fragment_end>\n    \n    // modulation\n    #include <aomap_fragment>\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n    #include <envmap_fragment>\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n    #include <dithering_fragment>\n}"),this.initChunks(),this.initUniforms(),this.initDefines(),this.vertexShader=e,this.fragmentShader=n,this.initDefaultSetting(i)}static getBasicUniforms(){return r.rDY.merge([r.rBU.common,r.rBU.specularmap,r.rBU.envmap,r.rBU.aomap,r.rBU.lightmap,r.rBU.emissivemap,r.rBU.bumpmap,r.rBU.normalmap,r.rBU.displacementmap,r.rBU.gradientmap,r.rBU.fog,r.rBU.lights,{emissive:{value:new r.Ilk(0)},specular:{value:new r.Ilk(1118481)},shininess:{value:30},hasAlphaMap:{value:!1}},D.getUniform(),d.getUniform(),_.getUniform()])}initChunks(){M.registerChunk(),D.registerChunk(),d.registerChunk(),_.registerChunk()}initUniforms(){this.uniforms=r.rDY.merge([E.getBasicUniforms(),d.getUniform(),{}])}initDefines(){this.defines=Object.assign({},M.getDefines(),D.getDefines(),d.getDefines(),this.defines)}initDefaultSetting(e){this.uniformOpacity=this._opacity,this.lights=!0}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get opacity(){return this.uniformOpacity}get uniformOpacity(){return this._opacity}set opacity(e){this.uniformOpacity=e}set uniformOpacity(e){var n;this._opacity=e,(null===(n=this.uniforms)||void 0===n?void 0:n.opacity)&&(this.uniforms.opacity.value=e)}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get map(){return _.getMap(this)}set map(e){_.setMap(this,e),this.onSetMap(e)}onSetMap(e){}get alphaMap(){return this.uniforms.alphaMap.value}set alphaMap(e){this.uniforms.alphaMap.value=e,this.uniforms.hasAlphaMap.value=null!=e,this.onSetAlphaMap(e)}onSetAlphaMap(e){}startGlow(){this.alphaTest=0,this.depthWrite=!1,this.blending=r.WMw}}var T=i(163);class R extends E{get division(){return this.uniforms.division.value}set division(e){this.uniforms.division.value=e}get divisionScaleX(){return this.uniforms.divisionScaleX.value}set divisionScaleX(e){this.uniforms.divisionScaleX.value=e}get isReversed(){return this.uniforms.isReversed.value}set isReversed(e){this.uniforms.isReversed.value=e}get maskTexture(){return C.getMaskTexture(this)}set maskTexture(e){C.setMaskTexture(this,e)}initChunks(){super.initChunks(),C.registerChunk(),N.registerChunk()}static getBasicUniforms(){return r.rDY.merge([E.getBasicUniforms(),N.getUniform(),C.getUniform()])}initDefaultSetting(e){super.initDefaultSetting(e),null==e.transparent&&(this.transparent=!0)}}class z extends R{constructor(e,n,i){super(e,n,i),this.speed=-.5,this.animationListener=e=>{this.addTime(e.delta/1e3)},this.isAnimate=this.isAnimate}addTime(e){l.addTime(this,e)}get isAnimate(){return this.uniforms.isAnimate.value}set isAnimate(e){this.uniforms.isAnimate.value=e,this.isAnimate?this.startAnimation():this.stopAnimation()}get waveFrequency(){return this.uniforms.waveFrequency.value}set waveFrequency(e){this.uniforms.waveFrequency.value=e}get wavePow(){return this.uniforms.wavePow.value}set wavePow(e){this.uniforms.wavePow.value=e}get raisedBottom(){return this.uniforms.raisedBottom.value}set raisedBottom(e){this.uniforms.raisedBottom.value=e}get direction(){return this.uniforms.direction.value}set direction(e){this.uniforms.direction.value=e}initChunks(){super.initChunks(),O.registerChunk()}static getBasicUniforms(){return r.rDY.merge([super.getBasicUniforms(),N.getUniform(),O.getUniform(),C.getUniform()])}initDefaultSetting(e){super.initDefaultSetting(e)}startAnimation(){T.Fz.on(T.M9.onBeforeTick,this.animationListener)}stopAnimation(){T.Fz.off(T.M9.onBeforeTick,this.animationListener)}}class W extends z{get gridWeight(){return this.uniforms.gridWeight.value}set gridWeight(e){this.uniforms.gridWeight.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}constructor(e){super("\n#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n#include <surface_normal_varying_chunk>\n#include <__expansion_uniform_chunk>\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n    #include <mesh_position_vertex>\n    uvPosition = uv;\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n    \n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n    #include <surface_normal_vertex_chunk>\n    #include <normal_vertex>\n    \n    #include <begin_vertex>\n    \n    #include <__expansion_vertex_chunk>\n    \n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <displacementmap_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n    \n    vViewPosition = - mvPosition.xyz;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n}\n","\n#define PHONG\n\n#include <mesh_phong_uniform>\nvarying vec2 uvPosition;\n#include <mesh_position_varying>\n\n//user settings\n#include <time_animation_uniform_chunk>\n#include <wavy_animation_uniform_chunk>\n#include <repeat_pattern_uniform_chunk>\n#include <mask_map_uniform_chunk>\n#include <reversible_uniform_chunk>\nuniform float gridWeight;\nuniform float radius;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n  \n    #include <mesh_phong_diffuse_color>\n    \n    #include <logdepthbuf_fragment>\n    #include <__ShaderMaterial__map_fragment_begin_chunk>\n    #include <map_fragment>\n    #include <color_fragment>\n\n    #include <repeat_pattern_fragment_chunk>    \n    vec2 localPos = mod(uv, 1.0) - 0.5;\n    vec2 id = uv - localPos;\n    #include <wavy_animation_fragment_chunk>\n\n    #include <mask_map_fragment_chunk>\n    float w = gridWeight;\n    w = clamp( w, 0.0, 1.0);\n    \n    float margin = clamp ( w * 0.33, 0.00, 0.05 );\n    \n    //十字を描画\n    float gridLine;\n    gridLine  = smoothstep ( -w-margin, -w, localPos.x );\n    gridLine -= smoothstep ( w, w+margin, localPos.x );\n    gridLine += smoothstep ( -w-margin, -w, localPos.y );\n    gridLine -= smoothstep ( w, w+margin, localPos.y );\n    gridLine  = clamp( gridLine, 0.0, 1.0 ); \n\n    //半径でマスク\n    float r = radius - (1.0-mask);\n    gridLine -= smoothstep( r, r+margin, localPos.x);\n    gridLine -= smoothstep( -r, -r-margin, localPos.x);\n    gridLine -= smoothstep( r, r+margin, localPos.y);\n    gridLine -= smoothstep( -r, -r-margin, localPos.y);\n    gridLine = clamp( gridLine, 0.0, 1.0 );\n    \n    gridLine = isReversed\n        ? 1.0 - gridLine\n        : gridLine;\n    diffuseColor.a *= gridLine;\n\n    #include <mesh_phong_switching_alpha_map>\n    \n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_fragment_begin>\n    #include <normal_fragment_maps>\n    #include <emissivemap_fragment>\n    \n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_fragment_begin>\n    #include <lights_fragment_maps>\n    #include <lights_fragment_end>\n    \n    // modulation\n    #include <aomap_fragment>\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n    #include <envmap_fragment>\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n    #include <dithering_fragment>\n}",e)}initUniforms(){this.uniforms=r.rDY.merge([z.getBasicUniforms(),{gridWeight:{value:.03},radius:{value:.15}}])}}class j{static initColorGUI(e,n,i="color"){const t={},a=n[i];return t[i]=a.getHex(),e.addColor(t,i).onChange((e=>{a.setHex(e)})),t}static initBasicMaterialGUI(e,n,i="Material"){const t=e.addFolder(i);return this.initMaterialFolder(t,n),t.open(),t}static initMaterialGUI(e,n,i="Material"){const t=this.initBasicMaterialGUI(e,n,i);this.initColorGUI(t,n,"emissive")}static initMaterialFolder(e,n){this.initColorGUI(e,n),e.add(n,"transparent"),e.add(n,"uniformOpacity",0,1)}static initSpriteMaterialGUI(e,n,i="Material"){const t=e.addFolder(i);this.initMaterialFolder(t,n),t.open()}static initGridMaterialGUI(e,n){this.initMaterialGUI(e,n);const i={mask:"",alphaMap:""},t=e.addFolder("WavyGridMaterial");return t.add(n,"isReversed"),t.add(n,"division",2,256).step(1),t.add(n,"divisionScaleX",0,4).step(1),t.add(i,"mask",{none:"",earth:"./textures/landmask.png"}).onChange((e=>{n.maskTexture=""===e?null:(new r.dpR).load(e)})),t.add(i,"alphaMap",{none:"",earth:"./textures/landmask.png"}).onChange((e=>{n.alphaMap=""===e?null:(new r.dpR).load(e)})),t.open(),t}static initWavyMaterialGUI(e,n){const i=this.initGridMaterialGUI(e,n).addFolder("WavyAnimation");i.add(n,"isAnimate"),i.add(n,"speed",-2,2),i.add(n,"waveFrequency",0,1),i.add(n,"wavePow",0,4),i.add(n,"direction",{horizontal:t.horizontal,vertical:t.vertical,radial:t.radial}),i.add(n,"raisedBottom",0,1),i.open()}static initAnimationGUI(e,n,i="Animation"){const t=e.addFolder(i);t.add(n,"isAnimate"),t.add(n,"speed",-2,2),t.open()}static initRimGUI(e,n,i="Rim Effect Material"){const t=e.addFolder(i);j.initColorGUI(t,n,"rimColor"),t.add(n,"rimStrength",0,4).step(.01),t.add(n,"rimPow",0,4).step(.01),j.initColorGUI(t,n,"insideColor"),t.add(n,"insideStrength",0,4).step(.01),t.add(n,"insidePow",0,8).step(.01),t.open()}static initExpansionGUI(e,n,i="ExpansionMaterial"){const t=e.addFolder("ExpansionMaterial");t.add(n,"expansionStrength",-12,12).step(.01),t.open()}static initFBMTilingGUI(e,n,i="FBM Tiling"){const t=e.addFolder("FBM Tiling");t.add(n,"tiles",1,8).step(1),t.add(n,"hashLoop",2,16).step(1),t.add(n,"amp",0,2).step(.01),t.open()}static initSkyGUI(e,n,i,t){const a={turbidity:10,rayleigh:.15,mieCoefficient:.005,mieDirectionalG:.8,inclination:.07,azimuth:.25,exposure:.75},r=4e5;function s(){const e=n.material.uniforms;e.turbidity.value=a.turbidity,e.rayleigh.value=a.rayleigh,e.mieCoefficient.value=a.mieCoefficient,e.mieDirectionalG.value=a.mieDirectionalG;const s=Math.PI*(a.inclination-.5),u=2*Math.PI*(a.azimuth-.5);i.position.x=r*Math.cos(u),i.position.y=r*Math.sin(u)*Math.sin(s),i.position.z=r*Math.sin(u)*Math.cos(s),e.sunPosition.value.copy(i.position),t.toneMappingExposure=a.exposure}s();const u=e.addFolder("Sky");u.add(a,"turbidity",1,20,.1).onChange(s),u.add(a,"rayleigh",0,4,.001).onChange(s),u.add(a,"mieCoefficient",0,.1,.001).onChange(s),u.add(a,"mieDirectionalG",0,1,.001).onChange(s),u.add(a,"inclination",0,1,1e-4).onChange(s),u.add(a,"azimuth",0,1,1e-4).onChange(s),u.add(a,"exposure",0,1,1e-4).onChange(s),u.open()}}class X{static initScene(){return new r.xsS}static initLight(e){const n=new r.Mig(16777215,1);return e.add(n),n}static initCamera(e,n,i,t=400){const a=new r.cPb(45,n/i,1,t);return a.position.set(0,0,100),a.updateMatrixWorld(!1),e.add(a),a}static initControl(e,n){let i;null!=n&&(i=n.domElement);const t=new s.z(e,i);return t.update(),t}static initRenderer(e,n,i=0,t="webgl-canvas",a=!0){const s=document.getElementById(t);s.style.zIndex=0,s.style.position="absolute";const u=new r.CP7({canvas:s,antialias:a});return u.setClearColor(new r.Ilk(i)),u.setSize(e,n),u.setPixelRatio(window.devicePixelRatio),u}static initHelper(e){const n=new r.y8_(30);e.add(n)}static initSky(e,n,i){i.toneMapping=r.LY2;const t=new r.Kj0(new r.Aip(2e4,16,8),new r.vBJ({color:16777215}));t.position.y=-7e5,t.visible=!1,e.add(t);const a=new u.q;a.scale.setScalar(45e3),e.add(a),j.initSkyGUI(n,a,t,i)}}class H{constructor(){const e=X.initScene();e.fog=new r.ybr(0,80,160),X.initLight(e);const n=X.initCamera(e,640,480),i=X.initRenderer(640,480);X.initControl(n,i),X.initHelper(e);const t=this.initObject(e);T.Fz.addEventListener(T.M9.tick,(t=>{i.render(e,n)})),this.initGUI(t)}initObject(e){const n=new r.cek(16777215,1,0,2);n.position.set(10,20,30),e.add(n);const i=new r.xG9(n);e.add(i);const a=new r.xo$(10,64,64),s=new W({fog:void 0!==e.fog});s.color=new r.Ilk(16737894),s.direction=t.vertical;const u=new r.Kj0(a,s);return e.add(u),s}initGUI(e){const n=new a.ZP;j.initWavyMaterialGUI(n,e),this.initGUIMaterial(n,e)}initGUIMaterial(e,n){const i=e.addFolder("CrossGridMaterial");i.add(n,"gridWeight",0,.5),i.add(n,"radius",0,.5),i.open()}}window.onload=()=>{new H}}},i={};function t(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,t),r.exports}t.m=n,e=[],t.O=(n,i,a,r)=>{if(!i){var s=1/0;for(c=0;c<e.length;c++){for(var[i,a,r]=e[c],u=!0,o=0;o<i.length;o++)(!1&r||s>=r)&&Object.keys(t.O).every((e=>t.O[e](i[o])))?i.splice(o--,1):(u=!1,r<s&&(s=r));if(u){e.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,a,r]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.j=54,(()=>{var e={54:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var a,r,[s,u,o]=i,l=0;if(s.some((n=>0!==e[n]))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(o)var c=o(t)}for(n&&n(i);l<s.length;l++)r=s[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},i=self.webpackChunkthreejs_shader_materials=self.webpackChunkthreejs_shader_materials||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var a=t.O(void 0,[736],(()=>t(550)));a=t.O(a)})();