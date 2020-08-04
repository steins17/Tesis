(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/Nivel2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
        descripcion: "letras",
        subnivel: [{
          nombre: "subnivel 1",
          descripcion: "subnivel 1",
          foto: null,
          audio: null,
          preguntas: [{
            nombre: "uno",
            descripcion: "uno",
            foto: "imagenes/b.png",
            tipo_campo: 1,
            audio: null
          }, {
            nombre: "dos",
            descripcion: "dos",
            foto: "imagenes/d.png",
            tipo_campo: 2,
            audio: null
          }]
        }, {
          nombre: "subnivel 2",
          foto: null,
          audio: null,
          preguntas: [{
            nombre: "dos",
            descripcion: "dos",
            foto: "imagenes/p.png",
            tipo_campo: 2,
            audio: null
          }, {
            nombre: "dos",
            descripcion: "dos",
            foto: "imagenes/q.png",
            tipo_campo: 2,
            audio: null
          }]
        }]
      }, {
        nombre: "nivel 2",
        descripcion: "silabas",
        subnivel: [{
          nombre: "subnivel 1",
          descripcion: "subnivel 1",
          foto: null,
          audio: null,
          preguntas: [{
            nombre: "uno",
            descripcion: "uno",
            foto: "",
            tipo_campo: 1,
            audio: null
          }, {
            nombre: "dos",
            descripcion: "dos",
            foto: "",
            tipo_campo: 2,
            audio: null
          }]
        }, {
          nombre: "subnivel 2",
          foto: null,
          audio: null,
          preguntas: [{
            nombre: "uno",
            descripcion: "uno",
            foto: null,
            audio: null
          }, {
            nombre: "dos",
            descripcion: "dos",
            foto: null,
            audio: null
          }]
        }]
      }, {
        nombre: "nivel 3",
        descripcion: "oraciones",
        subnivel: [{
          nombre: "subnivel 1",
          descripcion: "separar oraciones",
          preguntas: [{
            nombre: "uno",
            descripcion: "uno",
            oraciones: "Miperroladramucho."
          }]
        }, {
          nombre: "subnivel 2",
          preguntas: [{
            nombre: "dos",
            descripcion: "dos",
            oraciones: "Borjatienepecas."
          }]
        }, {
          nombre: "subnivel 3",
          preguntas: [{
            nombre: "dos",
            descripcion: "dos",
            oraciones: "Lavacatienecuernos."
          }]
        }, {
          nombre: "subnivel 4",
          preguntas: [{
            nombre: "dos",
            descripcion: "dos",
            oraciones: "Misombreroesdecopa."
          }]
        }]
      }]
    };
  },
  methods: {
    llamarpreguntas: function llamarpreguntas() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/llamarpreguntas").then(function (_ref) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel2.vue?vue&type=template&id=5372c8a0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/Nivel2.vue?vue&type=template&id=5372c8a0& ***!
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
      _c(
        "vs-tabs",
        { attrs: { color: "black", alignment: "fixed" } },
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
                        [
                          _c("vs-button", {
                            staticClass: "center",
                            attrs: { type: "gradient", icon: "contactless" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { attrs: { "vs-justify": "center" } },
                        _vm._l(subnivel.preguntas, function(pregunta, index3) {
                          return _c(
                            "vs-col",
                            {
                              key: index3,
                              attrs: {
                                type: "flex",
                                "vs-justify": "center",
                                "vs-align": "center",
                                "vs-w": "2"
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
                                    [
                                      _c("h5", [
                                        _vm._v(_vm._s(pregunta.nombre))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  pregunta.tipo_campo == 1
                                    ? [
                                        pregunta.foto
                                          ? _c(
                                              "div",
                                              {
                                                attrs: { slot: "media" },
                                                slot: "media"
                                              },
                                              [
                                                _c("img", {
                                                  attrs: { src: pregunta.foto }
                                                })
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    : [
                                        pregunta.foto
                                          ? _c(
                                              "div",
                                              {
                                                attrs: { slot: "media" },
                                                slot: "media"
                                              },
                                              [
                                                _c("img", {
                                                  attrs: { src: pregunta.foto }
                                                })
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                  _vm._v(" "),
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        color: "primary",
                                        type: "gradient",
                                        icon: "contactless"
                                      }
                                    }),
                                    _vm._v(" "),
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
                                            ]),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("vs-input", {
                                              attrs: {
                                                success: true,
                                                "success-text":
                                                  "The text is valid",
                                                placeholder: "Put the text"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  _vm._v(" "),
                                  _c("div", {
                                    attrs: { slot: "footer" },
                                    slot: "footer"
                                  })
                                ],
                                2
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

/***/ "./resources/js/src/components/Nivel2.vue":
/*!************************************************!*\
  !*** ./resources/js/src/components/Nivel2.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nivel2_vue_vue_type_template_id_5372c8a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nivel2.vue?vue&type=template&id=5372c8a0& */ "./resources/js/src/components/Nivel2.vue?vue&type=template&id=5372c8a0&");
/* harmony import */ var _Nivel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nivel2.vue?vue&type=script&lang=js& */ "./resources/js/src/components/Nivel2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Nivel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nivel2_vue_vue_type_template_id_5372c8a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nivel2_vue_vue_type_template_id_5372c8a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/Nivel2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/Nivel2.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Nivel2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nivel2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/Nivel2.vue?vue&type=template&id=5372c8a0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/components/Nivel2.vue?vue&type=template&id=5372c8a0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel2_vue_vue_type_template_id_5372c8a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nivel2.vue?vue&type=template&id=5372c8a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/Nivel2.vue?vue&type=template&id=5372c8a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel2_vue_vue_type_template_id_5372c8a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nivel2_vue_vue_type_template_id_5372c8a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);