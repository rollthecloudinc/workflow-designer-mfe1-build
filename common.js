(self.webpackChunkmfe1=self.webpackChunkmfe1||[]).push([[592],{9395:(C,d,e)=>{e.d(d,{j:()=>c});var o=e(1212),r=e(2836);const c=({handler:f})=>new o.ContentPlugin({id:"mfe1_download",title:"Mfe1 Download",selectionComponent:void 0,editorComponent:void 0,renderComponent:r.DownloadComponent,handler:f})},2836:(C,d,e)=>{e.r(d),e.d(d,{DownloadComponent:()=>f});var o=e(6718),r=e(1212);let f=/^(179|291)$/.test(e.j)?(()=>{class a{constructor(p){this.cpm=p,console.log("download component constructor")}ngOnInit(){}static#n=this.\u0275fac=function(s){return new(s||a)(o.\u0275\u0275directiveInject(r.ContentPluginManager))};static#t=this.\u0275cmp=o.\u0275\u0275defineComponent({type:a,selectors:[["mfe1-download"]],decls:4,vars:0,consts:[[1,"task"],["src","https://d8em0358gicmm.cloudfront.net/assets/download.png"]],template:function(s,m){1&s&&(o.\u0275\u0275elementStart(0,"div",0),o.\u0275\u0275element(1,"img",1),o.\u0275\u0275elementStart(2,"p"),o.\u0275\u0275text(3,"Download"),o.\u0275\u0275elementEnd()())},encapsulation:2})}return a})():null},3903:(C,d,e)=>{e.d(d,{L:()=>a});var o=e(1212);if(/^(179|291)$/.test(e.j))var r=e(4945);var c=e(6718);let a=/^(179|291)$/.test(e.j)?(()=>{class h{constructor(){}handleFile(s){return(0,r.of)()}handlesType(s){return!1}implementsRendererOverride(){return!1}hasRendererOverride(s){return(0,r.of)(!1)}isDynamic(s){return!1}isData(s){return!1}getBindings(s,m,v){return(0,r.of)([])}fetchDynamicData(s,m){return(0,r.of)()}buildDynamicItems(s,m){return(0,r.of)([])}stateDefinition(s){return(0,r.of)({})}editorOptions(s){return(0,r.of)(new o.ContentPluginEditorOptions({fullscreen:!0}))}static#n=this.\u0275fac=function(m){return new(m||h)};static#t=this.\u0275prov=c.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac})}return h})():null},3272:(C,d,e)=>{e.r(d),e.d(d,{CONTENT_PLUGIN:()=>E,ContentBinding:()=>s,ContentInstance:()=>m,ContentModule:()=>h,ContentPlugin:()=>p,ContentPluginEditorOptions:()=>v,ContentPluginManager:()=>I});var o=e(6718),P=e(4055),r=e(4278),c=e(2008),f=e(4945),a=e(8270);let h=(()=>{class u{static#n=this.\u0275fac=function(i){return new(i||u)};static#t=this.\u0275mod=o.\u0275\u0275defineNgModule({type:u});static#e=this.\u0275inj=o.\u0275\u0275defineInjector({imports:[P.CommonModule]})}return u})();class p extends c.Plugin{constructor(n){super(n),this.fileTypes=[],n&&(this.name=this.id,this.handler=void 0!==n.handler?n.handler:void 0,this.selectionComponent=n.selectionComponent?n.selectionComponent:void 0,this.renderComponent=n.renderComponent?n.renderComponent:void 0,this.editorComponent=n.editorComponent?n.editorComponent:void 0)}}class s{constructor(n){n&&(this.type=n.type,this.id=n.id)}}class m{constructor(n){this.settings=[],n&&(this.pluginName=n.pluginName,n.settings&&(this.settings=n.settings.map(t=>new r.AttributeValue(t))))}}class v{constructor(n){this.fullscreen=!1,n&&(this.fullscreen=n.fullscreen)}}const E=new o.InjectionToken("ContentPlugin");let I=(()=>{class u extends c.BasePluginManager{constructor(t,i){super(t,i)}pluginDef(){return(0,f.of)(new c.PluginDef({name:"content"}))}static#n=this.\u0275fac=function(i){return new(i||u)(o.\u0275\u0275inject(c.PluginConfigurationManager),o.\u0275\u0275inject(a.ModuleLoaderService))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},5645:(C,d,e)=>{e.r(d),e.d(d,{BasePluginManager:()=>m,ConfigDiscovery:()=>s,Plugin:()=>E,PluginConfig:()=>v,PluginConfigModule:()=>u,PluginConfigurationManager:()=>p,PluginDef:()=>I,PluginModule:()=>h});var o=e(6718),P=e(8270),r=e(4945),c=e(4967),f=e(7969),a=e(1528);let h=(()=>{class n{static#n=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=o.\u0275\u0275defineNgModule({type:n});static#e=this.\u0275inj=o.\u0275\u0275defineInjector({imports:[P.UtilsModule]})}return n})(),p=(()=>{class n{constructor(){this.configs=[]}addConfig(i){this.configs.push(i)}getConfigs(){return this.configs}static#n=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),s=(()=>{class n{constructor(i,l){this.pcm=i,this.moduleLoader=l}loadPlugins(i,l=[]){const g=this.pcm.getConfigs(),y=g.length,O=[];for(let M=0;M<y;M++){const _=g[M].modules.length;for(let D=0;D<_;D++)g[M].modules[D].plugins.has(i.name)&&(0===l.length||l.some(L=>g[M].modules[D].plugins.get(i.name).findIndex(T=>T===L)>-1))&&O.push(this.moduleLoader.loadModule(g[M].modules[D].module))}return 0===O.length?(0,r.of)(!0):(0,c.D)(O).pipe((0,f.U)(()=>!0))}static#n=this.\u0275fac=function(l){return new(l||n)(o.\u0275\u0275inject(p),o.\u0275\u0275inject(P.ModuleLoaderService))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class m{constructor(t,i){this.pcm=t,this.moduleLoader=i,this.pluginInstances=new Map,this.discoveryPipeline=[],this.discovery()}discovery(){this.discoveryPipeline.push(new s(this.pcm,this.moduleLoader))}addDiscovery(t){this.discoveryPipeline.push(t)}register(t){this.pluginInstances.set(t.id,t)}getPlugins(t){const i=t?t.filter(l=>!this.pluginInstances.has(l)):[];return t&&0===i.length?(0,r.of)(new Map(t.map(l=>[l,this.pluginInstances.get(l)]))):this.pluginDef().pipe((0,a.w)(l=>(0,c.D)(this.discoveryPipeline.map(g=>g.loadPlugins(l,i))).pipe((0,f.U)(()=>t?new Map(t.map(g=>[g,this.pluginInstances.get(g)])):this.pluginInstances))))}getPlugin(t){return this.pluginInstances.has(t)?(0,r.of)(this.pluginInstances.get(t)):this.pluginDef().pipe((0,a.w)(i=>(0,c.D)(this.discoveryPipeline.map(l=>l.loadPlugins(i,[t]))).pipe((0,f.U)(()=>this.pluginInstances.get(t)))))}}class v{constructor(t){this.modules=[],t&&t.modules&&(this.modules=t.modules.map(i=>new u(i)))}}class E{constructor(t){t&&(this.id=t.id,this.title=t.title)}}class I{constructor(t){t&&(this.name=t.name)}}class u{constructor(t){t&&(this.module=t.module,t.plugins&&(this.plugins=new Map([...t.plugins])))}}}}]);