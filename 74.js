(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([[74],{

/***/ 8585:
/*!************************************************!*\
  !*** ./node_modules/number-string/dist/app.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.toClosest = exports.toMoney = exports.toClean = exports.toNumber = exports.toNumberString = void 0;
/**
 * Escape special RegExp characters in string
 */
function regexpEscape(s) {
    return s.replace(/[-[\]/{}()*+?.\\^$]/g, "\\$&");
}
/**
 * Convert value to number string
 */
function toNumberString(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.decimalMark, decimalMark = _c === void 0 ? "." : _c;
    if (typeof value === "number") {
        return value.toString();
    }
    if (typeof value !== "string") {
        return "NaN";
    }
    var regexpDecimalMark = regexpEscape(decimalMark);
    var n = value.trim();
    var negative = n.match(/^\(.*\)$|^-/); //negative if matches '(...)' or '-...'
    var getNumberRegexp = new RegExp("[^\\d" + regexpDecimalMark + "]|" + regexpDecimalMark + "(?=.*" + regexpDecimalMark + ")|^\\D*" + regexpDecimalMark + "\\D*$", "g");
    n = n.replace(getNumberRegexp, "").replace(decimalMark, "."); //remove all except digits and last dot
    if (n === "") {
        n = "NaN";
    }
    else if (negative) {
        n = "-" + n;
    }
    return n;
}
exports.toNumberString = toNumberString;
/**
 * Convert value to number
 */
function toNumber(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.decimalMark, decimalMark = _c === void 0 ? "." : _c;
    var s = toNumberString(value, { decimalMark: decimalMark });
    if (s === "NaN") {
        return NaN;
    }
    return Number(s);
}
exports.toNumber = toNumber;
/**
 * Like `toFixed` but removes trailing zeros
 */
function toClean(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.decimalMark, decimalMark = _c === void 0 ? "." : _c, _d = _b.thousandSeperator, thousandSeperator = _d === void 0 ? null : _d, _e = _b.thousandSeparator, thousandSeparator = _e === void 0 ? "," : _e, _f = _b.maxPrecision, maxPrecision = _f === void 0 ? 100 : _f, _g = _b.minPrecision, minPrecision = _g === void 0 ? 0 : _g;
    if (thousandSeperator) {
        thousandSeparator = thousandSeperator;
        console.error("`thousandSeperator` is deprecated use `thousandSeparator` instead.");
    }
    value = toNumberString(value);
    if (value === "NaN") {
        return "NaN";
    }
    if (maxPrecision < 0) {
        throw new Error("maxPrecision must be >= 0");
    }
    if (minPrecision < 0) {
        throw new Error("minPrecision must be >= 0");
    }
    if (maxPrecision > 100) {
        throw new Error("maxPrecision must be <= 100");
    }
    if (minPrecision > 100) {
        throw new Error("minPrecision must be <= 100");
    }
    if (minPrecision > maxPrecision) {
        throw new Error("minPrecision must be <= maxPrecision");
    }
    var s = value;
    // limit to maxPrecision
    var dotIndex = s.lastIndexOf(".");
    if (dotIndex > -1) {
        var integer = (dotIndex === 0 ? "0" : s.slice(0, dotIndex));
        var fraction = s.slice(dotIndex + 1, dotIndex + 1 + maxPrecision);
        var remainder = s.slice(dotIndex + 1 + maxPrecision);
        if (remainder.length > 0 && +remainder[0] > 4) {
            // round up
            var i = (BigInt(integer + fraction) + BigInt(1)).toString(10);
            integer = i.slice(0, i.length - fraction.length);
            fraction = i.slice(i.length - fraction.length);
        }
        s = integer + decimalMark + fraction;
    }
    else {
        s += decimalMark;
    }
    // remove trailing 0s
    var rmLen = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] !== "0") {
            break;
        }
        rmLen++;
    }
    s = s.slice(0, s.length - rmLen);
    // limit to minPrecision
    if (minPrecision > 0) {
        var numZeros = void 0;
        if (dotIndex > -1) {
            numZeros = minPrecision - (s.length - dotIndex - 1);
        }
        else {
            numZeros = minPrecision;
        }
        for (var i = 0; i < numZeros; i++) {
            s += "0";
        }
    }
    var regexpDecimalMark = regexpEscape(decimalMark);
    var thousandSeparatorRegexp = new RegExp("\\d(?=(\\d{3})+" + regexpDecimalMark + ")", "g");
    var trimRegexp = new RegExp(regexpDecimalMark + "$");
    s = s.replace(thousandSeparatorRegexp, "$&" + thousandSeparator).replace(trimRegexp, "");
    return s;
}
exports.toClean = toClean;
/**
 * Convert string or number to currency string
 * modified from http://stackoverflow.com/a/149099/806777\
 */
function toMoney(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.decimalMark, decimalMark = _c === void 0 ? "." : _c, _d = _b.thousandSeperator, thousandSeperator = _d === void 0 ? null : _d, _e = _b.thousandSeparator, thousandSeparator = _e === void 0 ? "," : _e, _f = _b.maxPrecision, maxPrecision = _f === void 0 ? 2 : _f, _g = _b.minPrecision, minPrecision = _g === void 0 ? 2 : _g, _h = _b.symbol, symbol = _h === void 0 ? "$" : _h, _j = _b.symbolBehind, symbolBehind = _j === void 0 ? false : _j, _k = _b.useParens, useParens = _k === void 0 ? true : _k;
    if (thousandSeperator) {
        thousandSeparator = thousandSeperator;
        console.error("`thousandSeperator` is deprecated use `thousandSeparator` instead.");
    }
    var n = (typeof value === "number"
        ? value
        : toNumber(value, {
            decimalMark: decimalMark
        }));
    var s = toNumberString(value, {
        decimalMark: decimalMark
    });
    if (isNaN(n)) {
        return "NaN";
    }
    if (n === Infinity) {
        return "Infinity";
    }
    if (n === -Infinity) {
        return (useParens ? "(Infinity)" : "-Infinity");
    }
    if (maxPrecision < 2 && typeof arguments[1].minPrecision === "undefined") {
        minPrecision = maxPrecision;
    }
    if (minPrecision > 2 && typeof arguments[1].maxPrecision === "undefined") {
        maxPrecision = minPrecision;
    }
    var negative = n < 0;
    s = toClean(negative ? s.slice(1) : s, {
        decimalMark: decimalMark,
        thousandSeparator: thousandSeparator,
        maxPrecision: maxPrecision,
        minPrecision: minPrecision
    });
    s = (symbolBehind ? s + " " + symbol : symbol + s);
    if (negative) {
        s = (useParens ? "(" + s + ")" : "-" + s);
    }
    return s;
}
exports.toMoney = toMoney;
/**
 * Round number to closest multiple of number
 */
function toClosest(value, roundTo) {
    if (roundTo === void 0) { roundTo = 1; }
    if (typeof value !== "number") {
        value = toNumber(value);
    }
    if (isNaN(value)) {
        return NaN;
    }
    if (value === Infinity || value === -Infinity) {
        return value;
    }
    if (typeof roundTo !== "number") {
        roundTo = toNumber(roundTo);
    }
    if (isNaN(roundTo)) {
        throw Error("roundTo must be a number");
    }
    if (roundTo === Infinity || roundTo === -Infinity) {
        return roundTo;
    }
    var n = Math.round(value / roundTo) * roundTo;
    var maxPrecision = 0;
    while (!Number.isInteger(roundTo)) {
        roundTo *= 10;
        maxPrecision++;
    }
    n = +n.toFixed(maxPrecision);
    return n;
}
exports.toClosest = toClosest;


/***/ }),

/***/ 6074:
/*!********************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/utils/fesm2020/rollthecloudinc-utils.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncApiCallHelperService": () => (/* binding */ AsyncApiCallHelperService),
/* harmony export */   "DynamicContentViewer": () => (/* binding */ DynamicContentViewer),
/* harmony export */   "EMBEDDABLE_COMPONENT": () => (/* binding */ EMBEDDABLE_COMPONENT),
/* harmony export */   "ForDirective": () => (/* binding */ ForDirective),
/* harmony export */   "HOST_NAME": () => (/* binding */ HOST_NAME),
/* harmony export */   "ModuleLoaderService": () => (/* binding */ ModuleLoaderService),
/* harmony export */   "MyAsyncTaskProcessor": () => (/* binding */ MyAsyncTaskProcessor),
/* harmony export */   "NoopDataService": () => (/* binding */ NoopDataService),
/* harmony export */   "NotAvailablePipe": () => (/* binding */ NotAvailablePipe),
/* harmony export */   "NumeralPipe": () => (/* binding */ NumeralPipe),
/* harmony export */   "PROTOCOL": () => (/* binding */ PROTOCOL),
/* harmony export */   "SITE_NAME": () => (/* binding */ SITE_NAME),
/* harmony export */   "StyleLoaderService": () => (/* binding */ StyleLoaderService),
/* harmony export */   "UtilsModule": () => (/* binding */ UtilsModule),
/* harmony export */   "ZoneMacroTaskWrapper": () => (/* binding */ ZoneMacroTaskWrapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 702);
/* harmony import */ var number_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! number-string */ 8585);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5249);






class NumeralPipe {
  transform(value, format) {
    if (value === undefined || value === '') {
      return;
    } // @todo: reimplment format.
    // return toNumber(`${value}`).format(format);


    return (0,number_string__WEBPACK_IMPORTED_MODULE_2__.toNumber)(`${value}`);
  }

}

NumeralPipe.ɵfac = function NumeralPipe_Factory(t) {
  return new (t || NumeralPipe)();
};

NumeralPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "numeral",
  type: NumeralPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumeralPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'numeral'
    }]
  }], null, null);
})();

class NotAvailablePipe {
  transform(value, defaultValue) {
    return !value || value === '' ? defaultValue : value;
  }

}

NotAvailablePipe.ɵfac = function NotAvailablePipe_Factory(t) {
  return new (t || NotAvailablePipe)();
};

NotAvailablePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "na",
  type: NotAvailablePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAvailablePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'na'
    }]
  }], null, null);
})();

const EMBEDDABLE_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('EmbeddableComponent');
const SITE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Site Name');
const HOST_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Host Name');
const PROTOCOL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Request Protocol');

class DynamicContentViewer {
  constructor(componentFactoryResolver, elementRef, embeddedComponents, injector) {
    this.injector = injector;
    this.embeddedComponentFactories = new Map();
    this.embeddedComponents = [];
    this.docRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.hostElement = elementRef.nativeElement;
    embeddedComponents.forEach(component => {
      const factory = componentFactoryResolver.resolveComponentFactory(component);
      this.embeddedComponentFactories.set(factory.selector, factory);
    });
  }

  set content(content) {
    this.ngOnDestroy();

    if (content) {
      this.build(content);
      this.docRendered.emit();
    }
  }

  build(content) {
    this.hostElement.innerHTML = content || '';

    if (!content) {
      return;
    }

    this.embeddedComponentFactories.forEach((factory, selector) => {
      const embeddedComponentElements = this.hostElement.querySelectorAll(selector);
      embeddedComponentElements.forEach(element => {
        //convert NodeList into an array, since Angular dosen't like having a NodeList passed
        //for projectableNodes
        const projectableNodes = [Array.prototype.slice.call(element.childNodes)];
        const embeddedComponent = factory.create(this.injector, projectableNodes, element); //apply inputs into the dynamic component
        //only static ones work here since this is the only time they're set

        for (const attr of element.attributes) {
          embeddedComponent.instance[attr.nodeName] = attr.nodeValue;
        }

        this.embeddedComponents.push(embeddedComponent);
      });
    });
  }

  ngDoCheck() {
    this.embeddedComponents.forEach(comp => comp.changeDetectorRef.detectChanges());
  }

  ngOnDestroy() {
    // destroy these components else there will be memory leaks
    this.embeddedComponents.forEach(comp => comp.destroy());
    this.embeddedComponents.length = 0;
  }

}

DynamicContentViewer.ɵfac = function DynamicContentViewer_Factory(t) {
  return new (t || DynamicContentViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EMBEDDABLE_COMPONENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};

DynamicContentViewer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DynamicContentViewer,
  selectors: [["classifieds-ui-dynamic-content-viewer"]],
  inputs: {
    data: "data",
    content: "content"
  },
  outputs: {
    docRendered: "docRendered"
  },
  decls: 0,
  vars: 0,
  template: function DynamicContentViewer_Template(rf, ctx) {},
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicContentViewer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'classifieds-ui-dynamic-content-viewer',
      template: ''
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [EMBEDDABLE_COMPONENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    docRendered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class Context {
  constructor(index, length) {
    this.index = index;
    this.length = length;
  }

  get even() {
    return this.index % 2 === 0;
  }

  get odd() {
    return this.index % 2 === 1;
  }

  get first() {
    return this.index === 0;
  }

  get last() {
    return this.index === this.length - 1;
  }

}

class ForDirective {
  constructor(templateRef, viewContainer) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }

  set loop(num) {
    this.viewContainer.clear();

    for (var i = 0; i < num; i++) this.viewContainer.createEmbeddedView(this.templateRef, new Context(i, num));
  }

}

ForDirective.ɵfac = function ForDirective_Factory(t) {
  return new (t || ForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};

ForDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ForDirective,
  selectors: [["", "for", "", 5, "label"]],
  inputs: {
    loop: ["for", "loop"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[for]:not(label)'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    loop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['for']
    }]
  });
})();

class UtilsModule {}

UtilsModule.ɵfac = function UtilsModule_Factory(t) {
  return new (t || UtilsModule)();
};

UtilsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: UtilsModule
});
UtilsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [NumeralPipe, NotAvailablePipe, DynamicContentViewer, ForDirective],
      exports: [NumeralPipe, NotAvailablePipe, DynamicContentViewer, ForDirective]
    }]
  }], null, null);
})();

class ModuleLoaderService {
  constructor(compiler, injector) {
    this.compiler = compiler;
    this.injector = injector;
    this.loadedModules = [];
  }

  loadModule(module) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(obs => {
      module().then(m => {
        if (this.loadedModules.indexOf(name => name == m.name) !== -1) {
          throw '';
        } else {
          this.loadedModules.push(m.name);
          return m;
        }
      }).then(m => this.compiler.compileModuleAndAllComponentsAsync(m)).then(mf => {
        const moduleRef = mf.ngModuleFactory.create(this.injector); // moduleRef.componentFactoryResolver.resolveComponentFactory(LazyComponent);

        obs.next(true);
        obs.complete();
      }).catch(() => {
        obs.next(true);
        obs.complete();
      });
    });
    /*mport(module)module().then(m => {
      this.compiler.compileModuleAndAllComponentsAsync(m);
      console.log(`module imported: ${module}`);
    });*/

    /*import('./carousel/carousel.module').then(({ CarouselModule }) => {
      const injector = createInjector(CarouselModule, this.injector);
      const carouselModule = injector.get(CarouselModule);
      const componentFactory = carouselModule.resolveCarouselComponentFactory();
    });*/
  }

}

ModuleLoaderService.ɵfac = function ModuleLoaderService_Factory(t) {
  return new (t || ModuleLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Compiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};

ModuleLoaderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ModuleLoaderService,
  factory: ModuleLoaderService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Compiler
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, null);
})();

class StyleLoaderService {
  constructor(document) {
    this.document = document;
  }

  loadStyle(styleName) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById('client-theme');

    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;
      head.appendChild(style);
    }
  }

}

StyleLoaderService.ɵfac = function StyleLoaderService_Factory(t) {
  return new (t || StyleLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

StyleLoaderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: StyleLoaderService,
  factory: StyleLoaderService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();

class NoopDataService {
  constructor(name) {
    this.entities = new Map();
    this.name = name;
  }

  add(entity) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(entity);
  }

  delete(id) {
    this.entities.delete(id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(id);
  }

  getAll() {
    const flat = [];
    this.entities.forEach(v => {
      flat.push(v);
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(flat);
  }

  getById(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.entities.get(id));
  }

  getWithQuery(params) {
    const flat = [];
    this.entities.forEach(v => {
      flat.push(v);
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(flat);
  }

  update(update) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(undefined);
  }

  upsert(entity) {
    //this.entities.set(entity.id, entity);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(entity);
  }

}

class AsyncApiCallHelperService {
  constructor() {
    this.taskProcessor = new MyAsyncTaskProcessor();
  }

  doTask(promise) {
    return this.taskProcessor.doTask(promise);
  }

}

AsyncApiCallHelperService.ɵfac = function AsyncApiCallHelperService_Factory(t) {
  return new (t || AsyncApiCallHelperService)();
};

AsyncApiCallHelperService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AsyncApiCallHelperService,
  factory: AsyncApiCallHelperService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsyncApiCallHelperService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

class ZoneMacroTaskWrapper {
  wrap(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      let task;
      let scheduled = false;
      let sub = null;
      let savedResult = null;
      let savedError = null; // tslint:disable-next-line:no-shadowed-variable

      const scheduleTask = _task => {
        task = _task;
        scheduled = true;
        const delegate = this.delegate(request);
        sub = delegate.subscribe(res => savedResult = res, err => {
          if (!scheduled) {
            throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
          }

          savedError = err;
          scheduled = false;
          task.invoke();
        }, () => {
          if (!scheduled) {
            throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
          }

          scheduled = false;
          task.invoke();
        });
      }; // tslint:disable-next-line:no-shadowed-variable


      const cancelTask = _task => {
        if (!scheduled) {
          return;
        }

        scheduled = false;

        if (sub) {
          sub.unsubscribe();
          sub = null;
        }
      };

      const onComplete = () => {
        if (savedError !== null) {
          observer.error(savedError);
        } else {
          observer.next(savedResult);
          observer.complete();
        }
      }; // MockBackend for Http is synchronous, which means that if scheduleTask is by
      // scheduleMacroTask, the request will hit MockBackend and the response will be
      // sent, causing task.invoke() to be called.


      const _task = Zone.current.scheduleMacroTask('ZoneMacroTaskWrapper.subscribe', onComplete, {}, () => null, cancelTask);

      scheduleTask(_task);
      return () => {
        if (scheduled && task) {
          task.zone.cancelTask(task);
          scheduled = false;
        }

        if (sub) {
          sub.unsubscribe();
          sub = null;
        }
      };
    });
  }

}

class MyAsyncTaskProcessor extends ZoneMacroTaskWrapper {
  constructor() {
    super();
  } // your public task invocation method signature


  doTask(request) {
    // call via ZoneMacroTaskWrapper
    return this.wrap(request);
  } // delegated raw implementation that will be called by ZoneMacroTaskWrapper


  delegate(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      // calling observer.next / complete / error
      request.then(result => {
        observer.next(result);
        observer.complete();
      }).catch(error => observer.error(error));
    });
  }

}
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}])
//# sourceMappingURL=74.js.map