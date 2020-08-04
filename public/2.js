(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/plantillas/Principal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/plantillas/Principal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      active: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/plantillas/Principal.vue?vue&type=template&id=2859546f&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/plantillas/Principal.vue?vue&type=template&id=2859546f& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        { ref: "parentSidebar", attrs: { id: "parentx" } },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "filled", icon: "list" },
              on: {
                click: function($event) {
                  _vm.active = !_vm.active
                }
              }
            },
            [_vm._v("Open")]
          ),
          _vm._v(" "),
          _c(
            "vs-sidebar",
            {
              staticClass: "sidebarx",
              attrs: {
                parent: _vm.$refs.parentSidebar,
                "default-index": "1",
                color: "primary",
                spacer: ""
              },
              model: {
                value: _vm.active,
                callback: function($$v) {
                  _vm.active = $$v
                },
                expression: "active"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "header-sidebar",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c("vs-avatar", {
                    attrs: { size: "70px", icon: "emoji_people" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Bienvenido")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "1", icon: "home" } },
                [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Inicio")])],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "2", icon: "hearing" } },
                [
                  _c("router-link", { attrs: { to: "/Nivel1" } }, [
                    _vm._v("Nivel1")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { icon: "games" } },
                [
                  _c("router-link", { attrs: { to: "/Nivel2" } }, [
                    _vm._v("Nivel2")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "3", icon: "chat" } },
                [
                  _c("router-link", { attrs: { to: "/Nivel3" } }, [
                    _vm._v("Nivel3")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "4", icon: "insert_emoticon" } },
                [
                  _c("router-link", { attrs: { to: "/Nivel4" } }, [
                    _vm._v("Nivel4")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { icon: "person", position: "left" } }),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "5", icon: "account_box" } },
                [
                  _vm._v("Profile "),
                  _c("router-link", { attrs: { to: "/Prolife" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "footer-sidebar",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "vs-button",
                    { attrs: { icon: "reply", color: "danger", type: "flat" } },
                    [_vm._v("log out")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/plantillas/Principal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/plantillas/Principal.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Principal_vue_vue_type_template_id_2859546f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Principal.vue?vue&type=template&id=2859546f& */ "./resources/js/src/components/plantillas/Principal.vue?vue&type=template&id=2859546f&");
/* harmony import */ var _Principal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Principal.vue?vue&type=script&lang=js& */ "./resources/js/src/components/plantillas/Principal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Principal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Principal_vue_vue_type_template_id_2859546f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Principal_vue_vue_type_template_id_2859546f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/plantillas/Principal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/plantillas/Principal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/plantillas/Principal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Principal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Principal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/plantillas/Principal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Principal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/plantillas/Principal.vue?vue&type=template&id=2859546f&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/components/plantillas/Principal.vue?vue&type=template&id=2859546f& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Principal_vue_vue_type_template_id_2859546f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Principal.vue?vue&type=template&id=2859546f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/plantillas/Principal.vue?vue&type=template&id=2859546f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Principal_vue_vue_type_template_id_2859546f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Principal_vue_vue_type_template_id_2859546f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);