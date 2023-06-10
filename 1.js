(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([[1],{

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
  var _b = _a === void 0 ? {} : _a,
    _c = _b.decimalMark,
    decimalMark = _c === void 0 ? "." : _c;
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
  } else if (negative) {
    n = "-" + n;
  }
  return n;
}
exports.toNumberString = toNumberString;
/**
 * Convert value to number
 */
function toNumber(value, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.decimalMark,
    decimalMark = _c === void 0 ? "." : _c;
  var s = toNumberString(value, {
    decimalMark: decimalMark
  });
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
  var _b = _a === void 0 ? {} : _a,
    _c = _b.decimalMark,
    decimalMark = _c === void 0 ? "." : _c,
    _d = _b.thousandSeperator,
    thousandSeperator = _d === void 0 ? null : _d,
    _e = _b.thousandSeparator,
    thousandSeparator = _e === void 0 ? "," : _e,
    _f = _b.maxPrecision,
    maxPrecision = _f === void 0 ? 100 : _f,
    _g = _b.minPrecision,
    minPrecision = _g === void 0 ? 0 : _g;
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
    var integer = dotIndex === 0 ? "0" : s.slice(0, dotIndex);
    var fraction = s.slice(dotIndex + 1, dotIndex + 1 + maxPrecision);
    var remainder = s.slice(dotIndex + 1 + maxPrecision);
    if (remainder.length > 0 && +remainder[0] > 4) {
      // round up
      var i = (BigInt(integer + fraction) + BigInt(1)).toString(10);
      integer = i.slice(0, i.length - fraction.length);
      fraction = i.slice(i.length - fraction.length);
    }
    s = integer + decimalMark + fraction;
  } else {
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
    } else {
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
  var _b = _a === void 0 ? {} : _a,
    _c = _b.decimalMark,
    decimalMark = _c === void 0 ? "." : _c,
    _d = _b.thousandSeperator,
    thousandSeperator = _d === void 0 ? null : _d,
    _e = _b.thousandSeparator,
    thousandSeparator = _e === void 0 ? "," : _e,
    _f = _b.maxPrecision,
    maxPrecision = _f === void 0 ? 2 : _f,
    _g = _b.minPrecision,
    minPrecision = _g === void 0 ? 2 : _g,
    _h = _b.symbol,
    symbol = _h === void 0 ? "$" : _h,
    _j = _b.symbolBehind,
    symbolBehind = _j === void 0 ? false : _j,
    _k = _b.useParens,
    useParens = _k === void 0 ? true : _k;
  if (thousandSeperator) {
    thousandSeparator = thousandSeperator;
    console.error("`thousandSeperator` is deprecated use `thousandSeparator` instead.");
  }
  var n = typeof value === "number" ? value : toNumber(value, {
    decimalMark: decimalMark
  });
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
    return useParens ? "(Infinity)" : "-Infinity";
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
  s = symbolBehind ? s + " " + symbol : symbol + s;
  if (negative) {
    s = useParens ? "(" + s + ")" : "-" + s;
  }
  return s;
}
exports.toMoney = toMoney;
/**
 * Round number to closest multiple of number
 */
function toClosest(value, roundTo) {
  if (roundTo === void 0) {
    roundTo = 1;
  }
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

/***/ 8001:
/*!******************************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/attributes/fesm2022/rollthecloudinc-attributes.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTE_WIDGET": () => (/* binding */ ATTRIBUTE_WIDGET),
/* harmony export */   "Attribute": () => (/* binding */ Attribute),
/* harmony export */   "AttributeMatcherService": () => (/* binding */ AttributeMatcherService),
/* harmony export */   "AttributePipe": () => (/* binding */ AttributePipe),
/* harmony export */   "AttributeSerializerService": () => (/* binding */ AttributeSerializerService),
/* harmony export */   "AttributeTypes": () => (/* binding */ AttributeTypes),
/* harmony export */   "AttributeValue": () => (/* binding */ AttributeValue),
/* harmony export */   "AttributeWidget": () => (/* binding */ AttributeWidget),
/* harmony export */   "AttributeWidgetComponent": () => (/* binding */ AttributeWidgetComponent),
/* harmony export */   "AttributesBuilderComponent": () => (/* binding */ AttributesBuilderComponent),
/* harmony export */   "AttributesModule": () => (/* binding */ AttributesModule),
/* harmony export */   "ValueComputerService": () => (/* binding */ ValueComputerService),
/* harmony export */   "WidgetPluginManager": () => (/* binding */ WidgetPluginManager),
/* harmony export */   "WidgetsService": () => (/* binding */ WidgetsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4055);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4747);
/* harmony import */ var _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rollthecloudinc/material */ 2474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5249);
/* harmony import */ var _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rollthecloudinc/plugin */ 2008);
/* harmony import */ var _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rollthecloudinc/utils */ 8270);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7676);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-input */ 7510);
/* harmony import */ var number_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! number-string */ 8585);















function AttributeWidgetComponent_ng_template_1_Template(rf, ctx) {}
function AttributesBuilderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "classifieds-ui-attribute-widget", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attribute", ctx_r0.attributes[i_r3])("widget", ctx_r0.discoverWidget(ctx_r0.attributes[i_r3].widget))("appearance", ctx_r0.appearance);
  }
}
function AttributesBuilderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No attributes available for ad type. Click next to continue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
const ATTRIBUTE_WIDGET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('AttributeWidget');
class WidgetsService {
  constructor(widgets) {
    this.widgets = widgets;
  }
  get(widget) {
    return this.widgets.find(w => w.name === widget);
  }
  static #_ = this.ɵfac = function WidgetsService_Factory(t) {
    return new (t || WidgetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ATTRIBUTE_WIDGET));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: WidgetsService,
    factory: WidgetsService.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [ATTRIBUTE_WIDGET]
      }]
    }];
  }, null);
})();
class WidgetPluginManager extends _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_4__.BasePluginManager {
  constructor(pcm, moduleLoader) {
    super(pcm, moduleLoader);
  }
  pluginDef() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_4__.PluginDef({
      name: 'widget'
    }));
  }
  static #_ = this.ɵfac = function WidgetPluginManager_Factory(t) {
    return new (t || WidgetPluginManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_4__.PluginConfigurationManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_5__.ModuleLoaderService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: WidgetPluginManager,
    factory: WidgetPluginManager.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetPluginManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_4__.PluginConfigurationManager
    }, {
      type: _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_5__.ModuleLoaderService
    }];
  }, null);
})();
class AttributeWidgetDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static #_ = this.ɵfac = function AttributeWidgetDirective_Factory(t) {
    return new (t || AttributeWidgetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AttributeWidgetDirective,
    selectors: [["", "classifiedsUiWidgetHost", ""]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeWidgetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[classifiedsUiWidgetHost]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, null);
})();
class AttributeWidgetComponent {
  constructor(componentFactoryResolver, controlContainer) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.controlContainer = controlContainer;
    this.appearance = "legacy";
  }
  ngOnInit() {
    this.widget.subscribe(widget => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
      const viewContainerRef = this.widgetHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.attribute = this.attribute;
      componentRef.instance.appearance = this.appearance;
    });
  }
  static #_ = this.ɵfac = function AttributeWidgetComponent_Factory(t) {
    return new (t || AttributeWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AttributeWidgetComponent,
    selectors: [["classifieds-ui-attribute-widget"]],
    viewQuery: function AttributeWidgetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](AttributeWidgetDirective, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.widgetHost = _t.first);
      }
    },
    inputs: {
      widget: "widget",
      attribute: "attribute",
      appearance: "appearance"
    },
    decls: 2,
    vars: 1,
    consts: [[3, "formGroup"], ["classifiedsUiWidgetHost", ""]],
    template: function AttributeWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributeWidgetComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.controlContainer.control);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, AttributeWidgetDirective]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeWidgetComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'classifieds-ui-attribute-widget',
      template: `<ng-container [formGroup]="controlContainer.control"><ng-template classifiedsUiWidgetHost></ng-template></ng-container>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer
    }];
  }, {
    widget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    attribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    widgetHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [AttributeWidgetDirective, {
        static: true
      }]
    }]
  });
})();
class AttributesBuilderComponent {
  set attributeValues(attributeValues) {
    this._attributeValues = attributeValues;
    this.applyValues();
  }
  get attributeValues() {
    return this._attributeValues;
  }
  get attributesArray() {
    return this.attributesForm.get('attributes');
  }
  constructor(widgetsService, wpm) {
    this.widgetsService = widgetsService;
    this.wpm = wpm;
    this.attributes = [];
    this.appearance = 'legacy';
    this.attributesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormArray([])
    });
    this._attributeValues = [];
    this.onTouched = () => {};
  }
  ngOnChanges(changes) {
    if (changes.attributes && (!changes.attributes.previousValue || changes.attributes.previousValue !== changes.attributes.currentValue)) {
      while (this.attributesArray.length !== 0) {
        this.attributesArray.removeAt(0);
      }
      // @todo: Supports 2 levels of nesting currently (no recursion).
      this.attributes.forEach(attr => {
        this.attributesArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(attr.name, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(attr.type, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
          displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(attr.label, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
          value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', attr.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required : []),
          attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormArray(!attr.attributes ? [] : attr.attributes.map(attr2 => new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(attr2.name, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(attr2.type, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(attr2.label, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', attr2.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required : [])
          })))
        }));
      });
      this.applyValues();
    }
  }
  writeValue(val) {
    if (val) {
      console.log(`write value: ${val}`);
      this.attributesArray.setValue(val, {
        emitEvent: false
      });
    }
  }
  registerOnChange(fn) {
    this.attributesArray.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    if (isDisabled) {
      this.attributesArray.disable();
    } else {
      this.attributesArray.enable();
    }
  }
  validate(c) {
    return this.attributesForm.valid ? null : {
      invalidForm: {
        valid: false,
        message: "attributes are invalid"
      }
    };
  }
  discoverWidget(widget) {
    // return this.widgetsService.get(widget);
    return this.wpm.getPlugin(widget);
  }
  applyValues() {
    this.attributesArray.controls.forEach((c, index) => {
      const attrValue = this.attributeValues ? this.attributeValues.find(av => av.name === c.get('name').value) : undefined;
      if (attrValue !== undefined) {
        c.get('value').setValue(attrValue.value);
        c.updateValueAndValidity();
      }
      c.get('attributes').controls.forEach(c => {
        const attrValue = this.attributeValues && this.attributeValues[index] !== undefined ? this.attributeValues[index].attributes.find(av => av.name === c.get('name').value) : undefined;
        if (attrValue !== undefined) {
          c.get('value').setValue(attrValue.value);
          c.updateValueAndValidity();
        }
      });
    });
  }
  static #_ = this.ɵfac = function AttributesBuilderComponent_Factory(t) {
    return new (t || AttributesBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WidgetsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WidgetPluginManager));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AttributesBuilderComponent,
    selectors: [["classifieds-ui-attributes-builder"]],
    inputs: {
      attributes: "attributes",
      appearance: "appearance",
      attributeValues: "attributeValues"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([WidgetsService, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AttributesBuilderComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AttributesBuilderComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 3,
    consts: [[3, "formGroup"], ["formArrayName", "attributes", 1, "attribute-fields"], ["class", "attribute-field-container", 3, "formGroupName", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "attribute-field-container", 3, "formGroupName"], [3, "attribute", "widget", "appearance"]],
    template: function AttributesBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributesBuilderComponent_div_2_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributesBuilderComponent_div_3_Template, 3, 0, "div", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.attributesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributesArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attributes.length == 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, AttributeWidgetComponent]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesBuilderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'classifieds-ui-attributes-builder',
      providers: [WidgetsService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AttributesBuilderComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AttributesBuilderComponent),
        multi: true
      }],
      template: "<ng-container [formGroup]=\"attributesForm\">\n  <div formArrayName=\"attributes\" class=\"attribute-fields\">\n    <div *ngFor=\"let attribute of attributesArray.controls; let i=index\" formGroupName=\"{{i}}\" class=\"attribute-field-container\">\n      <classifieds-ui-attribute-widget [attribute]=\"attributes[i]\" [widget]=\"discoverWidget(attributes[i].widget)\" [appearance]=\"appearance\"></classifieds-ui-attribute-widget>\n    </div>\n  </div>\n</ng-container>\n<div *ngIf=\"attributes.length == 0\">\n  <p>No attributes available for ad type. Click next to continue.</p>\n</div>\n"
    }]
  }], function () {
    return [{
      type: WidgetsService
    }, {
      type: WidgetPluginManager
    }];
  }, {
    attributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    attributeValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class TextWidgetComponent {
  constructor(controlContainer) {
    this.controlContainer = controlContainer;
    this.appearance = "legacy";
  }
  static #_ = this.ɵfac = function TextWidgetComponent_Factory(t) {
    return new (t || TextWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TextWidgetComponent,
    selectors: [["classifieds-ui-text-widget"]],
    inputs: {
      attribute: "attribute",
      appearance: "appearance"
    },
    decls: 3,
    vars: 3,
    consts: [[3, "formGroup"], [3, "appearance"], ["matInput", "", "formControlName", "value", 3, "placeholder"]],
    template: function TextWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.controlContainer.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx.appearance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.attribute.label);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInput]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextWidgetComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'classifieds-ui-text-widget',
      template: "<ng-container [formGroup]=\"controlContainer.control\">\n  <mat-form-field [appearance]=\"appearance\">\n    <input matInput [placeholder]=\"attribute.label\" formControlName=\"value\">\n  </mat-form-field>\n</ng-container>\n"
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer
    }];
  }, {
    attribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MinMaxWidgetComponent {
  constructor(controlContainer) {
    this.controlContainer = controlContainer;
  }
  static #_ = this.ɵfac = function MinMaxWidgetComponent_Factory(t) {
    return new (t || MinMaxWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MinMaxWidgetComponent,
    selectors: [["classifieds-ui-min-max-widget"]],
    inputs: {
      attribute: "attribute"
    },
    decls: 8,
    vars: 4,
    consts: [[3, "formGroup"], ["formArrayName", "attributes"], ["formGroupName", "0"], ["matInput", "", "type", "number", "formControlName", "value", 3, "placeholder"], ["formGroupName", "1"]],
    template: function MinMaxWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.controlContainer.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attribute.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.attribute.attributes[0].label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.attribute.attributes[1].label);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInput]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinMaxWidgetComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'classifieds-ui-min-max-widget',
      template: "<ng-container [formGroup]=\"controlContainer.control\">\n  <label>{{ attribute.label }}</label>\n  <div formArrayName=\"attributes\">\n    <mat-form-field formGroupName=\"0\">\n      <input matInput type=\"number\" [placeholder]=\"attribute.attributes[0].label\" formControlName=\"value\">\n    </mat-form-field>\n    <mat-form-field formGroupName=\"1\">\n      <input matInput type=\"number\" [placeholder]=\"attribute.attributes[1].label\" formControlName=\"value\">\n    </mat-form-field>\n  </div>\n</ng-container>\n"
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer
    }];
  }, {
    attribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AttributeMatcherService {
  getComputedValue(attr, attributes) {
    const attribute = attributes && attributes.length > 0 && this.matchAttribute(attr, attributes);
    if (attribute) {
      return attribute.computedValue;
    } else {
      return;
    }
  }
  getValue(attr, attributes) {
    const attribute = attributes && attributes.length > 0 && this.matchAttribute(attr, attributes);
    if (attribute) {
      return attribute.value;
    } else {
      return;
    }
  }
  matchAttribute(attr, attributes) {
    const len = attributes.length;
    for (let i = 0; i < len; i++) {
      if (attributes[i].attributes && attributes[i].attributes.length > 0) {
        const value = this.matchAttribute(attr, attributes[i].attributes);
        if (value) {
          return attributes[i];
        } else {
          continue;
        }
      } else if (attr === attributes[i].name) {
        return attributes[i];
      } else {
        continue;
      }
    }
  }
  static #_ = this.ɵfac = function AttributeMatcherService_Factory(t) {
    return new (t || AttributeMatcherService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AttributeMatcherService,
    factory: AttributeMatcherService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeMatcherService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class AttributePipe {
  constructor(attributeMatcher) {
    this.attributeMatcher = attributeMatcher;
  }
  transform(attributes, attr) {
    const computedValue = this.attributeMatcher.getComputedValue(attr, attributes);
    if (computedValue) {
      return computedValue;
    } else {
      return '';
    }
  }
  static #_ = this.ɵfac = function AttributePipe_Factory(t) {
    return new (t || AttributePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AttributeMatcherService, 16));
  };
  static #_2 = this.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "attribute",
    type: AttributePipe,
    pure: true
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'attribute'
    }]
  }], function () {
    return [{
      type: AttributeMatcherService
    }];
  }, null);
})();
var AttributeTypes;
(function (AttributeTypes) {
  AttributeTypes[AttributeTypes["Number"] = 0] = "Number";
  AttributeTypes[AttributeTypes["Text"] = 1] = "Text";
  AttributeTypes[AttributeTypes["Complex"] = 2] = "Complex";
  AttributeTypes[AttributeTypes["Float"] = 3] = "Float";
  AttributeTypes[AttributeTypes["Array"] = 4] = "Array";
  AttributeTypes[AttributeTypes["Bool"] = 5] = "Bool";
  AttributeTypes[AttributeTypes["Date"] = 6] = "Date";
})(AttributeTypes || (AttributeTypes = {}));
class AttributeWidget extends _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin {
  constructor(data) {
    super(data);
    if (data) {
      this.name = this.id;
      this.schema = data.schema ? new Attribute(data.schema) : undefined;
      this.component = data.component;
    }
  }
}
class Attribute {
  constructor(data) {
    this.attributes = [];
    if (data) {
      this.name = data.name;
      this.widget = data.widget !== undefined ? data.widget : 'text';
      this.type = data.type;
      this.label = data.label;
      this.required = data.required;
      this.options = data.options;
      if (data.attributes) {
        this.attributes = data.attributes.map(a => new Attribute(a));
      }
    }
  }
}
class AttributeValue {
  constructor(data) {
    this.attributes = [];
    if (data) {
      this.name = data.name;
      this.displayName = data.displayName;
      this.type = data.type;
      this.value = data.value;
      this.intValue = data.intValue;
      this.computedValue = data.computedValue;
      if (data.attributes) {
        if (Array.isArray(data.attributes)) {
          this.attributes = data.attributes.reduce((p, a) => a._store === undefined || a._store ? [...p, new AttributeValue(a)] : p, []);
        } else if (data.attributes._store === undefined || data.attributes._store) {
          this.attributes = [data.attributes];
        }
      }
      if (data.value && typeof data.value === 'object') {
        this.value = undefined;
        this.type = AttributeTypes.Complex;
        data.value.attributes.reduce((p, a) => a._store === undefined || a._store ? [...p, new AttributeValue(a)] : p, []);
      } else {
        this.value = data.value;
      }
    }
  }
}

// import { YmmSelectorComponent } from './widgets/ymm-selector/ymm-selector.component';
// import { CitySelectorComponent } from './widgets/city-selector/city-selector.component';
const textFactory = () => {
  const schema = new Attribute({
    name: '',
    type: AttributeTypes.Text,
    label: '',
    required: false,
    widget: 'text',
    options: {},
    attributes: []
  });
  return new AttributeWidget({
    id: 'text',
    name: 'text',
    title: 'Text',
    component: TextWidgetComponent,
    schema
  });
};
const minmaxFactory = () => {
  return new AttributeWidget({
    id: 'minmax',
    name: 'minmax',
    title: 'MinMax',
    component: MinMaxWidgetComponent,
    schema: undefined
  });
};
/*export const ymmFactory = () => {
  const schema = new Attribute({
    name: '',
    type: AttributeTypes.Complex,
    label: '',
    required: false,
    widget: 'ymm_selector',
    options: {},
    attributes: [
      new Attribute({
        name: 'year',
        type: AttributeTypes.Number,
        label: 'Year',
        required: false,
        widget: '',
        options: {},
        attributes: []
      }),
      new Attribute({
        name: 'make',
        type: AttributeTypes.Text,
        label: 'Make',
        required: false,
        widget: '',
        options: {},
        attributes: []
      }),
      new Attribute({
        name: 'model',
        type: AttributeTypes.Text,
        label: 'Model',
        required: false,
        widget: '',
        options: {},
        attributes: []
      })
    ]
  });
  return new AttributeWidget({ name: 'ymm_selector', component: YmmSelectorComponent, schema });
};*/
/*export const cityFactory = () => {
  const schema = new Attribute({
    name: '',
    type: AttributeTypes.Complex,
    label: '',
    required: false,
    widget: 'city_selector',
    options: {},
    attributes: []
  });
  return new AttributeWidget({ name: 'city_selector', component: CitySelectorComponent, schema });
};*/

class AttributesModule {
  constructor(widgetPlugins, wpm) {
    widgetPlugins.forEach(p => wpm.register(p));
  }
  static #_ = this.ɵfac = function AttributesModule_Factory(t) {
    return new (t || AttributesModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ATTRIBUTE_WIDGET), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WidgetPluginManager));
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AttributesModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: ATTRIBUTE_WIDGET,
      useFactory: textFactory,
      multi: true
    }, {
      provide: ATTRIBUTE_WIDGET,
      useFactory: minmaxFactory,
      multi: true
    }
    /*{
      provide: ATTRIBUTE_WIDGET,
      useFactory: attrFactories.ymmFactory,
      multi: true
    },
    {
      provide: ATTRIBUTE_WIDGET,
      useFactory: attrFactories.cityFactory,
      multi: true
    }*/],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, /*HttpClientModule,*/_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientJsonpModule /*, CitiesModule */]
  });
}

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, /*HttpClientModule,*/_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientJsonpModule /*, CitiesModule */],
      declarations: [AttributesBuilderComponent, AttributeWidgetComponent, AttributeWidgetDirective, TextWidgetComponent, MinMaxWidgetComponent, AttributePipe
      /*, YmmSelectorComponent, CitySelectorComponent*/],

      exports: [AttributesBuilderComponent, AttributePipe, AttributeWidgetComponent],
      providers: [{
        provide: ATTRIBUTE_WIDGET,
        useFactory: textFactory,
        multi: true
      }, {
        provide: ATTRIBUTE_WIDGET,
        useFactory: minmaxFactory,
        multi: true
      }
      /*{
        provide: ATTRIBUTE_WIDGET,
        useFactory: attrFactories.ymmFactory,
        multi: true
      },
      {
        provide: ATTRIBUTE_WIDGET,
        useFactory: attrFactories.cityFactory,
        multi: true
      }*/]
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [ATTRIBUTE_WIDGET]
      }]
    }, {
      type: WidgetPluginManager
    }];
  }, null);
})();
class ValueComputerService {
  constructor() {}
  compute(attributes) {
    const computedAttributes = [];
    attributes.forEach(a => computedAttributes.push(this.computeAttribute(a)));
    return computedAttributes;
  }
  computeAttribute(attribute) {
    const computedValue = this.resolveComputedValue(attribute.value, attribute.type);
    if (attribute.attributes && attribute.attributes.length > 0) {
      return new AttributeValue({
        ...attribute,
        computedValue,
        attributes: this.compute(attribute.attributes)
      });
    } else {
      return new AttributeValue({
        ...attribute,
        computedValue
      });
    }
  }
  /**
   * @todo: Support below strings.
   * beds: 1.5
   * beds: 1 1/2
   * price: $1,000
   * price: 1,000
   * price $1,000,000.00
   * baths: one
   */
  resolveComputedValue(value, type) {
    let computedValue;
    if (type === AttributeTypes.Number) {
      computedValue = (0,number_string__WEBPACK_IMPORTED_MODULE_6__.toNumber)(value.trim());
      if (computedValue && isNaN(computedValue)) {
        computedValue = undefined;
      }
    } else {
      computedValue = value.trim();
    }
    return computedValue === undefined ? computedValue : `${computedValue}`;
  }
  static #_ = this.ɵfac = function ValueComputerService_Factory(t) {
    return new (t || ValueComputerService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ValueComputerService,
    factory: ValueComputerService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueComputerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class AttributeSerializerService {
  constructor(valueComputer) {
    this.valueComputer = valueComputer;
  }
  serialize(obj, prop) {
    const type = typeof obj;
    if (type !== 'object') {
      return new AttributeValue({
        name: prop,
        type: type !== 'string' ? type !== 'boolean' ? AttributeTypes.Number : AttributeTypes.Bool : AttributeTypes.Text,
        displayName: prop,
        value: `${obj}`,
        intValue: undefined,
        computedValue: this.valueComputer.resolveComputedValue(`${obj}`, type !== 'string' ? type !== 'boolean' ? AttributeTypes.Number : AttributeTypes.Bool : AttributeTypes.Text),
        attributes: []
      });
    } else if (Array.isArray(obj) && (prop === 'attributes' || prop === 'settings')) {
      return new AttributeValue({
        name: prop,
        type: AttributeTypes.Complex,
        displayName: prop,
        value: undefined,
        intValue: undefined,
        computedValue: undefined,
        attributes: obj
      });
    } else if (Array.isArray(obj)) {
      const len = obj.length;
      const attrValues = [];
      for (let i = 0; i < len; i++) {
        if (typeof obj[i] !== 'object') {
          // attrValues.push(this.serialize({ value: obj[i] }, `${i}`));
          attrValues.push(this.serialize(obj[i], `${i}`));
        } else {
          attrValues.push(this.serialize(obj[i], `${i}`));
        }
      }
      return new AttributeValue({
        name: prop,
        type: AttributeTypes.Array,
        displayName: prop,
        value: undefined,
        intValue: undefined,
        computedValue: undefined,
        attributes: attrValues
      });
    } else if (obj instanceof Date) {
      // store as string for now.
      return new AttributeValue({
        name: prop,
        type: AttributeTypes.Date,
        displayName: prop,
        value: obj.toJSON(),
        intValue: undefined,
        computedValue: obj.toJSON(),
        attributes: []
      });
    } else {
      const attrValues = [];
      for (const p in obj) {
        attrValues.push(this.serialize(obj[p], p));
      }
      return new AttributeValue({
        name: prop,
        type: AttributeTypes.Complex,
        displayName: prop,
        value: undefined,
        intValue: undefined,
        computedValue: undefined,
        attributes: attrValues
      });
    }
  }
  deserializeAsObject(attrValues, ignoreAttributes = false) {
    return this.deserialize(new AttributeValue({
      name: 'root',
      type: AttributeTypes.Complex,
      displayName: 'root',
      value: undefined,
      computedValue: undefined,
      intValue: 0,
      attributes: attrValues
    }), ignoreAttributes);
  }
  deserialize(attrValue, ignoreAttributes = false) {
    let obj;
    let len;
    switch (attrValue.type) {
      case AttributeTypes.Complex:
        if (!ignoreAttributes && (attrValue.name === 'attributes' || attrValue.name === 'settings')) {
          obj = attrValue.attributes.map(a => new AttributeValue(a));
        } else {
          len = attrValue.attributes.length;
          for (let i = 0; i < len; i++) {
            obj = {
              ...obj,
              [attrValue.attributes[i].name]: this.deserialize(attrValue.attributes[i])
            };
          }
        }
        break;
      case AttributeTypes.Bool:
        obj = attrValue.value !== undefined ? ['1', 'true', 'on'].findIndex(b => b === attrValue.value) > -1 : undefined;
        break;
      case AttributeTypes.Number:
      case AttributeTypes.Float:
        obj = attrValue.value !== undefined && attrValue.value !== '' && attrValue.value !== 'undefined' ? attrValue.value !== '0' ? (0,number_string__WEBPACK_IMPORTED_MODULE_6__.toNumber)(attrValue.value.trim()) : 0 : undefined;
        break;
      case AttributeTypes.Text:
        obj = attrValue.value;
        break;
      case AttributeTypes.Array:
        if (!ignoreAttributes && (attrValue.name === 'attributes' || attrValue.name === 'settings')) {
          obj = attrValue.attributes.map(a => new AttributeValue(a));
        } else {
          len = attrValue.attributes.length;
          obj = [];
          for (let i = 0; i < len; i++) {
            obj = [...obj, this.deserialize(attrValue.attributes[i])];
          }
        }
        break;
      case AttributeTypes.Date:
        obj = attrValue.value !== undefined && attrValue.value !== '' ? new Date(attrValue.value) : undefined;
        break;
      default:
    }
    return obj;
  }
  convertToGroup(setting) {
    const fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(setting.name, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(setting.type, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(setting.displayName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(setting.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      computedValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(setting.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormArray([])
    });
    if (setting.attributes && setting.attributes.length > 0) {
      setting.attributes.forEach(s => {
        fg.get('attributes').push(this.convertToGroup(s));
      });
    }
    return fg;
  }
  static #_ = this.ɵfac = function AttributeSerializerService_Factory(t) {
    return new (t || AttributeSerializerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ValueComputerService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AttributeSerializerService,
    factory: AttributeSerializerService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeSerializerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: ValueComputerService
    }];
  }, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=1.js.map