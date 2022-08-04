(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([[592],{

/***/ 5249:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "of": () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 9674);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 388);


function of(...args) {
    const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
    return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
}


/***/ }),

/***/ 9395:
/*!************************************************!*\
  !*** ./projects/mfe1/src/app/app.factories.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mfe1DownloadContentPluginFactory": () => (/* binding */ mfe1DownloadContentPluginFactory)
/* harmony export */ });
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rollthecloudinc/content */ 644);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.component */ 2836);


const mfe1DownloadContentPluginFactory = ({ handler }) => {
    return new _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__.ContentPlugin({
        id: 'mfe1_download',
        title: 'Mfe1 Download',
        selectionComponent: undefined,
        editorComponent: undefined,
        renderComponent: _download_component__WEBPACK_IMPORTED_MODULE_1__.DownloadComponent,
        handler
    });
};


/***/ }),

/***/ 2836:
/*!*****************************************************!*\
  !*** ./projects/mfe1/src/app/download.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadComponent": () => (/* binding */ DownloadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rollthecloudinc/content */ 644);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_1__);


class DownloadComponent {
    constructor(cpm) {
        this.cpm = cpm;
        console.log('download component constructor');
    }
    ngOnInit() { }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_1__.ContentPluginManager)); };
DownloadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["mfe1-download"]], decls: 4, vars: 0, consts: [[1, "task"], ["src", "https://d8em0358gicmm.cloudfront.net/assets/download.png"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 6401:
/*!**************************************************!*\
  !*** ./projects/mfe1/src/app/download.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadModule": () => (/* binding */ DownloadModule)
/* harmony export */ });
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.component */ 2836);
/* harmony import */ var _handlers_download_content_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/download-content.handler */ 3903);
/* harmony import */ var _app_factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.factories */ 9395);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 702);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rollthecloudinc/content */ 644);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_5__);







class DownloadModule {
    constructor(cpm, downloadHandler) {
        console.log('register mfe1 download content plugin');
        // @todo: lint not picking up register() because in plugin module base class.
        cpm.register((0,_app_factories__WEBPACK_IMPORTED_MODULE_2__.mfe1DownloadContentPluginFactory)({ handler: downloadHandler }));
    }
}
DownloadModule.ɵfac = function DownloadModule_Factory(t) { return new (t || DownloadModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_5__.ContentPluginManager), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_handlers_download_content_handler__WEBPACK_IMPORTED_MODULE_1__.DownloadContentHandler)); };
DownloadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DownloadModule });
DownloadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _handlers_download_content_handler__WEBPACK_IMPORTED_MODULE_1__.DownloadContentHandler
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DownloadModule, { declarations: [_download_component__WEBPACK_IMPORTED_MODULE_0__.DownloadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_download_component__WEBPACK_IMPORTED_MODULE_0__.DownloadComponent] }); })();


/***/ }),

/***/ 3903:
/*!********************************************************************!*\
  !*** ./projects/mfe1/src/app/handlers/download-content.handler.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadContentHandler": () => (/* binding */ DownloadContentHandler)
/* harmony export */ });
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rollthecloudinc/content */ 644);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class DownloadContentHandler {
    constructor() { }
    handleFile(file) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
    }
    handlesType(type) {
        return false;
    }
    implementsRendererOverride() {
        return false;
    }
    hasRendererOverride(settings) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
    }
    isDynamic(settings) {
        return false;
    }
    isData(settings) {
        return false;
    }
    getBindings(settings, type, metadata) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }
    fetchDynamicData(settings, metadata) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
    }
    buildDynamicItems(settings, metadata) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }
    stateDefinition(settings) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({});
    }
    editorOptions(settings) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(new _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__.ContentPluginEditorOptions({ fullscreen: true }));
    }
}
DownloadContentHandler.ɵfac = function DownloadContentHandler_Factory(t) { return new (t || DownloadContentHandler)(); };
DownloadContentHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DownloadContentHandler, factory: DownloadContentHandler.ɵfac });


/***/ }),

/***/ 379:
/*!***************************************************!*\
  !*** ./projects/mfe1/src/app/upload.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class UploadComponent {
    constructor() { }
    ngOnInit() { }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["mfe1-upload"]], decls: 4, vars: 0, consts: [[1, "task"], ["src", "https://d8em0358gicmm.cloudfront.net/assets/upload.png"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 9834:
/*!************************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/content/fesm2020/rollthecloudinc-content.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENT_PLUGIN": () => (/* binding */ CONTENT_PLUGIN),
/* harmony export */   "ContentBinding": () => (/* binding */ ContentBinding),
/* harmony export */   "ContentInstance": () => (/* binding */ ContentInstance),
/* harmony export */   "ContentModule": () => (/* binding */ ContentModule),
/* harmony export */   "ContentPlugin": () => (/* binding */ ContentPlugin),
/* harmony export */   "ContentPluginEditorOptions": () => (/* binding */ ContentPluginEditorOptions),
/* harmony export */   "ContentPluginManager": () => (/* binding */ ContentPluginManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 702);
/* harmony import */ var _rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rollthecloudinc/attributes */ 9545);
/* harmony import */ var _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rollthecloudinc/plugin */ 965);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5249);
/* harmony import */ var _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rollthecloudinc/utils */ 9367);








/*import { defaultPluginManagerFactory, pluginManagerToken } from '@rollthecloudinc/plugin';
import { ContentPlugin, ContentPluginDef } from './models/content.models';
import { ContentPluginManager } from './services/content-plugin-manager.service';*/

class ContentModule {}

ContentModule.ɵfac = function ContentModule_Factory(t) {
  return new (t || ContentModule)();
};

ContentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ContentModule
});
ContentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    }]
  }], null, null);
})();

class ContentPlugin extends _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin {
  constructor(data) {
    super(data);
    this.fileTypes = [];

    if (data) {
      this.name = this.id;
      this.handler = data.handler !== undefined ? data.handler : undefined;
      this.selectionComponent = data.selectionComponent ? data.selectionComponent : undefined;
      this.renderComponent = data.renderComponent ? data.renderComponent : undefined;
      this.editorComponent = data.editorComponent ? data.editorComponent : undefined;
    }
  }

}

class ContentBinding {
  constructor(data) {
    if (data) {
      this.type = data.type;
      this.id = data.id;
    }
  }

}

class ContentInstance {
  constructor(data) {
    this.settings = [];

    if (data) {
      this.pluginName = data.pluginName;

      if (data.settings) {
        this.settings = data.settings.map(s => new _rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_2__.AttributeValue(s));
      }
    }
  }

}
/*export class Snippet {
  content: string;
  contentType: string;
  jsFile?: string;
  jsScript?: string;
  constructor(data?: Snippet) {
    if(data) {
      this.content = data.content;
      this.contentType = data.contentType;
      if (data.jsFile && data.jsFile !== '') {
        this.jsFile = data.jsFile;
      }
      if (data.jsScript && data.jsScript !== '') {
        this.jsScript = data.jsScript;
      }
    }
  }
}*/


class ContentPluginEditorOptions {
  constructor(data) {
    this.fullscreen = false;

    if (data) {
      this.fullscreen = data.fullscreen;
    }
  }

}

const CONTENT_PLUGIN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ContentPlugin');

class ContentPluginManager extends _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.BasePluginManager {
  constructor(pcm, moduleLoader) {
    super(pcm, moduleLoader);
  }

  pluginDef() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(new _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.PluginDef({
      name: 'content'
    }));
  }

}

ContentPluginManager.ɵfac = function ContentPluginManager_Factory(t) {
  return new (t || ContentPluginManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.PluginConfigurationManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_4__.ModuleLoaderService));
};

ContentPluginManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ContentPluginManager,
  factory: ContentPluginManager.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPluginManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.PluginConfigurationManager
    }, {
      type: _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_4__.ModuleLoaderService
    }];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4304:
/*!**********************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/plugin/fesm2020/rollthecloudinc-plugin.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePluginManager": () => (/* binding */ BasePluginManager),
/* harmony export */   "ConfigDiscovery": () => (/* binding */ ConfigDiscovery),
/* harmony export */   "Plugin": () => (/* binding */ Plugin),
/* harmony export */   "PluginConfig": () => (/* binding */ PluginConfig),
/* harmony export */   "PluginConfigModule": () => (/* binding */ PluginConfigModule),
/* harmony export */   "PluginConfigurationManager": () => (/* binding */ PluginConfigurationManager),
/* harmony export */   "PluginDef": () => (/* binding */ PluginDef),
/* harmony export */   "PluginModule": () => (/* binding */ PluginModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rollthecloudinc/utils */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4366);







class PluginModule {}

PluginModule.ɵfac = function PluginModule_Factory(t) {
  return new (t || PluginModule)();
};

PluginModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: PluginModule
});
PluginModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.UtilsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.UtilsModule],
      exports: []
    }]
  }], null, null);
})();

class PluginConfigurationManager {
  constructor() {
    this.configs = [];
  }

  addConfig(cfg) {
    this.configs.push(cfg);
  }

  getConfigs() {
    return this.configs;
  }

}

PluginConfigurationManager.ɵfac = function PluginConfigurationManager_Factory(t) {
  return new (t || PluginConfigurationManager)();
};

PluginConfigurationManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PluginConfigurationManager,
  factory: PluginConfigurationManager.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginConfigurationManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class ConfigDiscovery {
  constructor(pcm, moduleLoader) {
    this.pcm = pcm;
    this.moduleLoader = moduleLoader;
  }

  loadPlugins(pluginDef, ids = []) {
    const configs = this.pcm.getConfigs();
    const len = configs.length;
    const loadModules$ = [];

    for (let i = 0; i < len; i++) {
      const len2 = configs[i].modules.length;

      for (let j = 0; j < len2; j++) {
        if (configs[i].modules[j].plugins.has(pluginDef.name) && (ids.length === 0 || ids.some(id => configs[i].modules[j].plugins.get(pluginDef.name).findIndex(p => p === id) > -1))) {
          loadModules$.push(this.moduleLoader.loadModule(configs[i].modules[j].module));
        }
      }
    }

    if (loadModules$.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(loadModules$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => true));
    }
  }

}

ConfigDiscovery.ɵfac = function ConfigDiscovery_Factory(t) {
  return new (t || ConfigDiscovery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PluginConfigurationManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.ModuleLoaderService));
};

ConfigDiscovery.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigDiscovery,
  factory: ConfigDiscovery.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigDiscovery, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: PluginConfigurationManager
    }, {
      type: _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.ModuleLoaderService
    }];
  }, null);
})(); // import { Injectable } from '@angular/core';
// @Injectable()


class BasePluginManager {
  constructor(pcm, moduleLoader) {
    this.pcm = pcm;
    this.moduleLoader = moduleLoader;
    this.pluginInstances = new Map();
    this.discoveryPipeline = [];
    this.discovery();
  }

  discovery() {
    this.discoveryPipeline.push(new ConfigDiscovery(this.pcm, this.moduleLoader));
  }

  addDiscovery(d) {
    this.discoveryPipeline.push(d);
  }

  register(plugin) {
    this.pluginInstances.set(plugin.id, plugin);
  }

  getPlugins(ids) {
    const newPlugins = ids ? ids.filter(id => !this.pluginInstances.has(id)) : [];

    if (ids && newPlugins.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(new Map(ids.map(id => [id, this.pluginInstances.get(id)])));
    } else {
      return this.pluginDef().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(def => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(this.discoveryPipeline.map(d => d.loadPlugins(def, newPlugins))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => ids ? new Map(ids.map(id => [id, this.pluginInstances.get(id)])) : this.pluginInstances))));
    }
  }

  getPlugin(id) {
    if (this.pluginInstances.has(id)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.pluginInstances.get(id));
    } else {
      return this.pluginDef().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(def => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(this.discoveryPipeline.map(d => d.loadPlugins(def, [id]))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.pluginInstances.get(id)))));
    }
  }

}

class PluginConfig {
  constructor(data) {
    this.modules = [];

    if (data) {
      if (data.modules) {
        this.modules = data.modules.map(m => new PluginConfigModule(m));
      }
    }
  }

}

class Plugin {
  constructor(data) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
    }
  }

}

class PluginDef {
  constructor(data) {
    if (data) {
      this.name = data.name;
    }
  }

}

class PluginConfigModule {
  constructor(data) {
    if (data) {
      this.module = data.module;

      if (data.plugins) {
        this.plugins = new Map([...data.plugins]);
      }
    }
  }

}
/*export class BasePlugin implements Plugin {
}*/

/*
 * Public API Surface of plugin
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}])
//# sourceMappingURL=common.js.map