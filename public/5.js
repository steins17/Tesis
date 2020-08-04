(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel4.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/Nivel4.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      preguntas: [{
        nombre: "nivel 1",
        descripcion: "oraciones",
        subnivel: [{
          nombre: "subnivel 1",
          descripcion: "subnivel 1",
          audio: null,
          preguntas: [{
            nombre: "Repite en voz alta",
            descripcion: "Repite en voz alta",
            oraciones: "Yo abrí la boca para que el odontólogo la revisara.",
            tipo_campo: 1
          }]
        }, {
          nombre: "subnivel 2",
          descripcion: "subnivel 2",
          audio: null,
          preguntas: [{
            nombre: "Repite en voz alta",
            descripcion: "Repite en voz alta",
            oraciones: "Bárbara bendita, eres mujer entre las santas.",
            tipo_campo: 1
          }]
        }, {
          nombre: "subnivel 3",
          descripcion: "subnivel 3",
          audio: null,
          preguntas: [{
            nombre: "Repite en voz alta",
            descripcion: "Repite en voz alta",
            oraciones: "La Barbacoa estaba deliciosa.",
            tipo_campo: 1
          }]
        }]
      }, {
        nombre: "nivel 2",
        descripcion: "frases",
        subnivel: [{
          nombre: "subnivel 1",
          descripcion: "subnivel 1",
          audio: null,
          preguntas: [{
            nombre: "Repite en voz alta",
            descripcion: "Repite en voz alta",
            oraciones: "En la casa de la señora sofía, a la sombra de un peral me comí un pastel. Por la ventana apareció su sobrino, el de la cara redonda y le mandó un saludo para mi tia.",
            tipo_campo: 1
          }]
        }]
      }]
    };
  },
  methods: {
    llamarpreguntas: function llamarpreguntas() {
      var _this = this;

      axios.get("/api/llamarpreguntas").then(function (_ref) {
        var data = _ref.data;
        _this.preguntas = data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {//this.llamarpreguntas();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel4.vue?vue&type=template&id=533a6a9c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/Nivel4.vue?vue&type=template&id=533a6a9c& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("br"),
      _vm._v(" "),
      _c(
        "vs-tabs",
        { attrs: { alignment: "fixed" } },
        _vm._l(_vm.preguntas, function(nivel, index1) {
          return _c(
            "vs-tab",
            {
              key: index1,
              attrs: { label: nivel.nombre },
              on: {
                click: function($event) {
                  _vm.colorx = "#8B0000"
                }
              }
            },
            _vm._l(nivel.subnivel, function(subnivel, index2) {
              return _c(
                "vs-collapse",
                { key: index2 },
                [
                  _c(
                    "vs-collapse-item",
                    { attrs: { "icon-arrow": "label" } },
                    [
                      _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                        _vm._v(_vm._s(subnivel.nombre))
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { attrs: { "vs-justify": "center" } },
                        _vm._l(subnivel.preguntas, function(pregunta, index1) {
                          return _c(
                            "vs-col",
                            {
                              key: index1,
                              attrs: {
                                type: "flex",
                                "vs-justify": "center",
                                "vs-align": "center",
                                "vs-w": "6"
                              }
                            },
                            [
                              _c(
                                "vs-card",
                                {
                                  staticClass: "cardx",
                                  attrs: { actionable: "" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "header" },
                                      slot: "header"
                                    },
                                    [_vm._v(_vm._s(pregunta.nombre))]
                                  ),
                                  _vm._v(" "),
                                  [
                                    pregunta.oraciones
                                      ? _c(
                                          "div",
                                          {
                                            attrs: { slot: "media" },
                                            slot: "media"
                                          },
                                          [
                                            _c("center", [
                                              _vm._v(_vm._s(pregunta.oraciones))
                                            ])
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("vs-button", {
                                      attrs: {
                                        color: "primary",
                                        type: "gradient",
                                        icon: "contactless"
                                      }
                                    })
                                  ]
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                { attrs: { "vs-justify": "center" } },
                                [
                                  _c("vs-input", {
                                    attrs: {
                                      success: true,
                                      "success-text": "The text is valid",
                                      placeholder: "Text"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/Nivel4.vue":
/*!************************************************!*\
  !*** ./resources/js/src/components/Nivel4.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nivel4_vue_vue_type_template_id_533a6a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nivel4.vue?vue&type=template&id=533a6a9c& */ "./resources/js/src/components/Nivel4.vue?vue&type=template&id=533a6a9c&");
/* harmony import */ var _Nivel4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nivel4.vue?vue&type=script&lang=js& */ "./resources/js/src/components/Nivel4.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Nivel4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Nivel4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Nivel4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nivel4_vue_vue_type_template_id_533a6a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nivel4_vue_vue_type_template_id_533a6a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/Nivel4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/Nivel4.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Nivel4.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nivel4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/Nivel4.vue?vue&type=template&id=533a6a9c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/components/Nivel4.vue?vue&type=template&id=533a6a9c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel4_vue_vue_type_template_id_533a6a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nivel4.vue?vue&type=template&id=533a6a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel4.vue?vue&type=template&id=533a6a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel4_vue_vue_type_template_id_533a6a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel4_vue_vue_type_template_id_533a6a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);