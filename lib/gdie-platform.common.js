module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9a33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9e60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f0102a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a33");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f0102a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f0102a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/index.vue?vue&type=template&id=6880f900&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog-fade"},on:{"after-enter":_vm.afterEnter,"after-leave":_vm.afterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"dialog",class:['gd-dialog', _vm.customClass],style:(_vm.style)},[_c('div',{staticClass:"gd-dialog__header"},[_vm._t("title",function(){return [_c('span',{staticClass:"gd-dialog__title"},[_vm._v(_vm._s(_vm.title))])]}),(_vm.showClose)?_c('span',{staticClass:"gd-dialog__headerbtn",attrs:{"type":"button"},on:{"click":_vm.handleClose}},[_c('i',{staticClass:"el-icon el-icon-close"})]):_vm._e()],2),_c('div',{staticClass:"gd-dialog__body"},[_vm._t("default")],2),_c('div',{staticClass:"gd-dialog__footer"},[_vm._t("footer")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/dialog/src/index.vue?vue&type=template&id=6880f900&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
    name: "GdDialog",
    props: {
        visible: Boolean,
        top: {
            type: String,
        },
        left: {
            type: String,
        },
        right: {
            type: String
        },
        bottom: {
            type: String
        },
        title: {
            type: String,
        },
        width: {
            type: String,
            default: "50%",
        },
        customClass: {
            type: String,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        style() {
            let style = {
                position: 'absolute'
            };
            style.width = this.width;
            style.top = this.top
            style.left = this.left
            style.bottom = this.bottom
            style.right = this.right
            return style;
        },
    },
    methods: {
        afterEnter() {
            this.$emit("opened");
        },
        afterLeave() {
            this.$emit("closed");
        },
        handleClose() {
            this.$emit("update:visible", false);
        },
    },
});

// CONCATENATED MODULE: ./packages/dialog/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialog_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/dialog/src/index.vue





/* normalize component */

var component = normalizeComponent(
  dialog_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialog_src = (component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js


dialog_src.install = function (Vue) {
  Vue.component(dialog_src.name, dialog_src)
}

/* harmony default export */ var dialog = (dialog_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/svg-icon/src/index.vue?vue&type=template&id=34f0102a&scoped=true&
var srcvue_type_template_id_34f0102a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{ref:"svg",class:_vm.classObj,style:(_vm.styleObj),attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":_vm.icon}})])}
var srcvue_type_template_id_34f0102a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/svg-icon/src/index.vue?vue&type=template&id=34f0102a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/svg-icon/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var svg_icon_srcvue_type_script_lang_js_ = ({
    name: "SvgIcon",
    props: {
        fileId: String,
        getSvgText: Function,
        color: String,
        size: String,
        iconName: String,
        className: String,
    },
    data() {
        return {
            svgText: ''
        }
    },
    computed: {
        classObj() {
            if (this.className) {
                return `svg-icon ${this.className}`;
            } else {
                return "svg-icon";
            }
        },
        icon() {
            return `#icon-${this.iconName}`;
        },
        styleObj() {
            return {
                color: this.color,
                "font-size": this.size + "px",
            };
        },
    },
    mounted() {
        if (this.fileId && this.getSvgText) {
            this.getSvgText(this.fileId).then(res => {
                this.svgText = res.data.data
                this.$refs.svg.innerHtml = res.data.data
            })
        }
    },
});

// CONCATENATED MODULE: ./packages/svg-icon/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_svg_icon_srcvue_type_script_lang_js_ = (svg_icon_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/svg-icon/src/index.vue?vue&type=style&index=0&id=34f0102a&scoped=true&lang=css&
var srcvue_type_style_index_0_id_34f0102a_scoped_true_lang_css_ = __webpack_require__("9e60");

// CONCATENATED MODULE: ./packages/svg-icon/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_svg_icon_srcvue_type_script_lang_js_,
  srcvue_type_template_id_34f0102a_scoped_true_render,
  srcvue_type_template_id_34f0102a_scoped_true_staticRenderFns,
  false,
  null,
  "34f0102a",
  null
  
)

/* harmony default export */ var svg_icon_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/svg-icon/index.js


svg_icon_src.install = function (Vue) {
  Vue.component(svg_icon_src.name, svg_icon_src)
}

/* harmony default export */ var svg_icon = (svg_icon_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/side-menu/src/index.vue?vue&type=template&id=7401942e&
var srcvue_type_template_id_7401942e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({ width: _vm.isCollapse ? 'auto' : '240px' }),attrs:{"id":"app-menu"}},[_vm._t("menu-head",function(){return [_c('div',{staticClass:"app-menu-head"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCollapse),expression:"!isCollapse"}]},[_vm._v(_vm._s(_vm.menuHeadTitle))]),_c('span',{on:{"click":_vm.handleCollapse}},[_c('svg-icon',{attrs:{"iconName":"collapse"}})],1)])]}),_c('el-scrollbar',{staticClass:"menu-wrap"},[_c('el-menu',{ref:"elMenu",attrs:{"collapse":_vm.isCollapse,"collapse-transition":false,"default-active":_vm.activeMenuIndex,"unique-opened":_vm.uniqueOpened}},_vm._l((_vm.menus),function(menu){return _c('side-menu-item',{key:menu[_vm.menuKey],attrs:{"item":menu}})}),1)],1)],2)}
var srcvue_type_template_id_7401942e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/side-menu/src/index.vue?vue&type=template&id=7401942e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/side-menu/src/SideMenuItem.vue?vue&type=template&id=5a460f21&
var SideMenuItemvue_type_template_id_5a460f21_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sideMenuItem"},[(!_vm.hasChildren(_vm.item))?[_c('el-menu-item',{attrs:{"index":_vm.item[_vm.elMenu.menuKey]},on:{"click":function($event){return _vm.elMenu.handleMenuItemClick(_vm.item)}}},[_c('span',{staticClass:"circle-dot"}),_c('svg-icon',{attrs:{"size":"24","iconName":_vm.item.icon}}),_c('span',{staticClass:"menu-name",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.item.name))])],1)]:_c('el-submenu',{ref:"subMenu",attrs:{"index":_vm.item[_vm.elMenu.menuKey],"popper-append-to-body":""}},[_c('template',{slot:"title"},[_c('svg-icon',{attrs:{"size":"24","iconName":_vm.item.icon}}),_c('span',{staticClass:"sidebar-menu-title",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.item.name))])],1),_vm._l((_vm.item.children),function(child){return _c('side-menu-item',{key:child.code,attrs:{"item":child}})})],2)],2)}
var SideMenuItemvue_type_template_id_5a460f21_staticRenderFns = []


// CONCATENATED MODULE: ./packages/side-menu/src/SideMenuItem.vue?vue&type=template&id=5a460f21&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/side-menu/src/SideMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SideMenuItemvue_type_script_lang_js_ = ({
    name: "SideMenuItem",
    props: {
        item: Object,
    },
    inject: ["elMenu"],
    methods: {
        hasChildren(item) {
            return item.children && item.children.length > 0;
        },
    },
});

// CONCATENATED MODULE: ./packages/side-menu/src/SideMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_SideMenuItemvue_type_script_lang_js_ = (SideMenuItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/side-menu/src/SideMenuItem.vue





/* normalize component */

var SideMenuItem_component = normalizeComponent(
  src_SideMenuItemvue_type_script_lang_js_,
  SideMenuItemvue_type_template_id_5a460f21_render,
  SideMenuItemvue_type_template_id_5a460f21_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SideMenuItem = (SideMenuItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/side-menu/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var side_menu_srcvue_type_script_lang_js_ = ({
    name: "side-menu",
    props: {
        menuHeadTitle: String,
        menus: Array,
        menuKey: {
            type: String,
            default: "code",
        },
        activeMenuIndex: String,
        uniqueOpened: Boolean,
    },
    provide() {
        return {
            elMenu: this,
        };
    },
    components: {
        SideMenuItem: SideMenuItem,
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleCollapse() {
            this.isCollapse = !this.isCollapse
            this.$emit('collapse', this.isCollapse)
        },
        handleMenuItemClick(item) {
            this.$emit("menu-item-click", item);
        },
    },
});

// CONCATENATED MODULE: ./packages/side-menu/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_side_menu_srcvue_type_script_lang_js_ = (side_menu_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/side-menu/src/index.vue





/* normalize component */

var side_menu_src_component = normalizeComponent(
  packages_side_menu_srcvue_type_script_lang_js_,
  srcvue_type_template_id_7401942e_render,
  srcvue_type_template_id_7401942e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var side_menu_src = (side_menu_src_component.exports);
// CONCATENATED MODULE: ./packages/side-menu/index.js


side_menu_src.install = function (Vue) {
  Vue.component(side_menu_src.name, side_menu_src)
}

/* harmony default export */ var side_menu = (side_menu_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/src/index.vue?vue&type=template&id=4b0138ac&
var srcvue_type_template_id_4b0138ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabbar"},[_c(_vm.styleType,{tag:"components"})],1)}
var srcvue_type_template_id_4b0138ac_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tabbar/src/index.vue?vue&type=template&id=4b0138ac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/src/style1.vue?vue&type=template&id=60aef0ce&
var style1vue_type_template_id_60aef0ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("left"),_c('div',{staticClass:"tags-wrap"},[_c('div',{ref:"tags-box"},_vm._l((_vm.tags),function(item){return _c('el-tag',{key:item.code,staticClass:"tag",class:{ activeTag: item.code == _vm.activeTag.code },attrs:{"closable":""},on:{"click":function($event){return _vm.$emit('tag-click', item)},"close":function($event){return _vm.$emit('tag-close', 'one', item)}}},[_c('el-tooltip',{staticClass:"tag-item",attrs:{"effect":"dark","content":item.appName,"placement":"bottom"}},[_c('i',{staticClass:"cireMark"}),_c('span',[_vm._v(_vm._s(item.name))])])],1)}),1)]),_vm._t("right"),_c('div',{staticClass:"tags-close-menu"},[_vm._v(" 关闭操作 "),_c('ul',[_c('li',{on:{"click":function($event){return _vm.$emit('tag-close', 'other')}}},[_vm._v("关闭其他标签")]),_c('li',{on:{"click":function($event){return _vm.$emit('tag-close', 'left')}}},[_vm._v("关闭左侧标签")]),_c('li',{on:{"click":function($event){return _vm.$emit('tag-close', 'right')}}},[_vm._v("关闭右侧标签")])])])],2)}
var style1vue_type_template_id_60aef0ce_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tabbar/src/style1.vue?vue&type=template&id=60aef0ce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/src/style1.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var style1vue_type_script_lang_js_ = ({
  inject: ['tabbar'],
  computed: {
    activeTag() {
      return this.tabbar.activeTag
    },
    tags() {
      return this.tabbar.tags
    }
  }
});

// CONCATENATED MODULE: ./packages/tabbar/src/style1.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_style1vue_type_script_lang_js_ = (style1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabbar/src/style1.vue





/* normalize component */

var style1_component = normalizeComponent(
  src_style1vue_type_script_lang_js_,
  style1vue_type_template_id_60aef0ce_render,
  style1vue_type_template_id_60aef0ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var style1 = (style1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"181dde2e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/src/style2.vue?vue&type=template&id=a86312ac&
var style2vue_type_template_id_a86312ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var style2vue_type_template_id_a86312ac_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tabbar/src/style2.vue?vue&type=template&id=a86312ac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/src/style2.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var style2vue_type_script_lang_js_ = ({

});

// CONCATENATED MODULE: ./packages/tabbar/src/style2.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_style2vue_type_script_lang_js_ = (style2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabbar/src/style2.vue





/* normalize component */

var style2_component = normalizeComponent(
  src_style2vue_type_script_lang_js_,
  style2vue_type_template_id_a86312ac_render,
  style2vue_type_template_id_a86312ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var style2 = (style2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//




/* harmony default export */ var tabbar_srcvue_type_script_lang_js_ = ({
    name: "tabbar",
    props: {
        styleType: {
            type: String,
            default: 'style1'
        },
        validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['style1', 'style2'].indexOf(value) !== -1
        }
    },
    components: {
        style1: style1,
        style2: style2
    },
    provide() {
        return {
            tabbar: this
        }
    }
});

// CONCATENATED MODULE: ./packages/tabbar/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_tabbar_srcvue_type_script_lang_js_ = (tabbar_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabbar/src/index.vue





/* normalize component */

var tabbar_src_component = normalizeComponent(
  packages_tabbar_srcvue_type_script_lang_js_,
  srcvue_type_template_id_4b0138ac_render,
  srcvue_type_template_id_4b0138ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabbar_src = (tabbar_src_component.exports);
// CONCATENATED MODULE: ./packages/tabbar/index.js


tabbar_src.install = function (Vue) {
  Vue.component(tabbar_src.name, tabbar_src)
}

/* harmony default export */ var tabbar = (tabbar_src);

// CONCATENATED MODULE: ./packages/index.js





const components = [
  dialog,
  svg_icon,
  side_menu,
  tabbar
]

// 全局注册
function bindComponents(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  bindComponents(Vue)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install,
  SvgIcon: svg_icon
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=gdie-platform.common.js.map