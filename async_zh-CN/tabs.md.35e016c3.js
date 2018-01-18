webpackJsonp([20],{

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94900cc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tabs_md__ = __webpack_require__(395);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94900cc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tabs_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Tabs 标签页")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { VTabs } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { VTabPane } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(VTabs.name, VTabs);\nVue.component(VTabPane.name, VTabPane)\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Toast } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'packages'")]),_vm._v(";\n")])]),_vm._v(" "),_c('h4',[_vm._v("基本用法")]),_vm._v(" "),_c('p',[_vm._v("默认情况下启用第一个 tab，可以通过value属性激活对应特定索引的 tab,\nvalue 与 TabPane 的 name 对应, 默认激活第一项。")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tabs")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("First"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"second page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"second\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("Second"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"third page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"third\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("Third"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tabs")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("paneStyle")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);\"")]),_vm._v("\n      }\n    }\n  }\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("无动画")]),_vm._v(" "),_c('p',[_vm._v("通过设置属性 animated 为 false 可以禁用动画")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tabs")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":animated")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("First"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"second page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"second\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("Second"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"third page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"third\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("Third"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tabs")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("设置样式")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tabs")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":tab-bar-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"style\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"handleTabClick\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"first\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("First"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"second page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"second\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("Second"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"third page\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"third\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":pane-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"paneStyle\"")]),_vm._v(">")]),_vm._v("Third"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tab-pane")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-tabs")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("paneStyle")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);\"")]),_vm._v("，\n        style: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'background-color: pink;'")]),_vm._v("\n      }\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n      handleTabClick(tab, event) {\n        Toast.info(tab);\n      }\n    }\n  }\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('h4',[_vm._v("Tabs props")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("value")]),_vm._v(" "),_c('td',[_vm._v("绑定值，选中选项卡的 name")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("默认为第一项的 name")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("tab-bar-style")]),_vm._v(" "),_c('td',[_vm._v("选项卡样式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("animated")]),_vm._v(" "),_c('td',[_vm._v("是否使用 CSS3 动画")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_vm._v("true")]),_vm._v(" "),_c('td',[_vm._v("-")])])])]),_vm._v(" "),_c('h4',[_vm._v("Tabs events")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("事件名")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("参数")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("click")]),_vm._v(" "),_c('td',[_vm._v("tab点击事件")]),_vm._v(" "),_c('td',[_vm._v("tab: 点击的tab的name")])])])]),_vm._v(" "),_c('h4',[_vm._v("Tab-pane Attributes")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("label")]),_vm._v(" "),_c('td',[_vm._v("选项卡标题")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("name")]),_vm._v(" "),_c('td',[_vm._v("绑定值，表示选项卡别名")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("pane-style")]),_vm._v(" "),_c('td',[_vm._v("选项卡样式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});