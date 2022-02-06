"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_registercat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/registercat.jpg */ "./resources/js/assets/img/registercat.jpg");
/* harmony import */ var _services_Authservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Authservice */ "./resources/js/services/Authservice.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      bgImg: _assets_img_registercat_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      error: null,
      errorMsg: {}
    };
  },
  mounted: function mounted() {
    console.log("MOUNTED", this.$store.getters["auth/loggedIn"]);
  },
  methods: {
    registerUser: function registerUser() {
      var _this = this;

      this.$refs.registrationValidation.validate().then(function (success) {
        if (success) {
          _this.$store.dispatch("auth/registerUser", _this.user).then(function () {
            if (_this.$store.getters["auth/error"]) {
              _this.error = _this.$store.getters["auth/getMessages"];
              var keys = Object.keys(_this.error.errors);
              _this.errorMsg = {};
              keys.forEach(function (key, index) {
                _this.errorMsg[key] = _this.error.errors[key];
              });

              _this.$refs.registrationValidation.setErrors(_this.errorMsg);
            } // store.dispatch("auth/getAuthUser");


            _this.$swal("", _this.$store.getters["auth/getMessages"].message, _this.error ? "error" : "success"); // this.$router.push('/');

          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/assets/img/registercat.jpg":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/registercat.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/registercat.jpg?991de89da2d9e36d968e4c13b2abcfbd");

/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c&scoped=true& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3563ad7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-blue-50 bg-clip-padding h-screen justify-items-center lg:justify-items-center",
    },
    [
      _c("div", { staticClass: "grid grid-cols-1 lg:grid-cols-2 gap-0 p-5" }, [
        _c("div", {
          staticClass:
            "grid grid-cols-1 justify-items-center overflow-hidden h-auto",
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "grid grid-cols-1 justify-items-center w-auto md:w-full",
          },
          [
            _c(
              "div",
              {
                staticClass: "grid overflow-hidden bg-white h-auto w-full p-3",
              },
              [
                _c(
                  "div",
                  { staticClass: "ui-form p-10" },
                  [
                    _c("p", { staticClass: "text-blue-400 text-2xl mb-2" }, [
                      _vm._v(
                        "\n                        Create Account,\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-primary mt-2" }, [
                      _vm._v(
                        "\n                        Fill in your Sweet as requested...\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("ValidationObserver", {
                      ref: "registrationValidation",
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function (ref) {
                            var invalid = ref.invalid
                            return [
                              _c(
                                "form",
                                {
                                  staticClass: "registration-form",
                                  on: {
                                    submit: function ($event) {
                                      $event.preventDefault()
                                      return _vm.registerUser.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "name",
                                      rules: "required|min:3",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "div",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.user.name,
                                                        expression: "user.name",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "input input-primary input-bordered mt-3",
                                                    attrs: {
                                                      type: "text",
                                                      placeholder: "Full Names",
                                                    },
                                                    domProps: {
                                                      value: _vm.user.name,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.user,
                                                          "name",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "text-error",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "email",
                                      rules: "required|email",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "div",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.user.email,
                                                        expression:
                                                          "user.email",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "input input-primary input-bordered mt-3",
                                                    attrs: {
                                                      type: "email",
                                                      placeholder: "email",
                                                    },
                                                    domProps: {
                                                      value: _vm.user.email,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.user,
                                                          "email",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "text-error",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "password",
                                      rules: "required|min:6|max:12",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "div",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.user.password,
                                                        expression:
                                                          "user.password",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "input input-primary input-bordered mt-3",
                                                    attrs: {
                                                      type: "password",
                                                      placeholder: "Password",
                                                    },
                                                    domProps: {
                                                      value: _vm.user.password,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.user,
                                                          "password",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "text-error",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "Confirm Password",
                                      rules: "required|confirmed:password",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "div",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.user
                                                            .password_confirmation,
                                                        expression:
                                                          "user.password_confirmation",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "input input-primary input-bordered mt-3",
                                                    attrs: {
                                                      type: "password",
                                                      placeholder:
                                                        "Password Confirmation",
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.user
                                                          .password_confirmation,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.user,
                                                          "password_confirmation",
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "text-error",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-control" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary btn-block",
                                        attrs: { type: "submit" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Submit Details\n                                "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-error" }),
              ]
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);