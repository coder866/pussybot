"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_logincat_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/logincat.jpeg */ "./resources/js/assets/img/logincat.jpeg");
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      bgImg: _assets_img_logincat_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"],
      user: {
        email: "",
        password: ""
      },
      errMsg: {}
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.$refs.loginValidation.validate().then(function (success) {
        if (success) {
          console.log("Login Hittt");
          _services_Authservice__WEBPACK_IMPORTED_MODULE_1__["default"].login(_this.user).then(function (response) {
            _this.$store.dispatch("auth/setUserInfo", response.data);

            _this.$store.dispatch("tags/getUserTags");

            _this.$router.push({
              name: "dashboard"
            })["catch"](function (error) {
              if (error.name !== "NavigationDuplicated" && !error.message.includes("Avoided redundant navigation to current location")) {
                console.log(error);
              }
            });
          })["catch"](function (error) {
            /*map the errors to vee-validate*/
            var keys = Object.keys(error.errors);
            _this.errorMsg = {};
            keys.forEach(function (key, index) {
              _this.errorMsg[key] = error.errors[key];
            });

            _this.$refs.loginValidation.setErrors(_this.errorMsg);

            console.log("Something went worong", error);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/assets/img/logincat.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/logincat.jpeg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logincat.jpeg?a1ca6db6e90a978d838054981c8de34a");

/***/ }),

/***/ "./resources/js/views/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_12f5395a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=12f5395a&scoped=true& */ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_12f5395a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_12f5395a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12f5395a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=template&id=12f5395a&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=12f5395a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        "flex bg-blue-50 bg-clip-padding h-screen justify-items-center lg:justify-items-center lg:items-center",
    },
    [
      _c("div", { staticClass: "grid grid-cols-1 lg:grid-cols-2 gap-0 p-5" }, [
        _c(
          "div",
          {
            staticClass:
              "grid grid-cols-1 justify-items-center overflow-hidden border h-auto",
          },
          [_c("img", { attrs: { src: _vm.bgImg, alt: "Login Bg" } })]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "grid grid-cols-1 justify-items-center md:w-full" },
          [
            _c(
              "div",
              { staticClass: "grid overflow-hidden bg-white h-auto w-full" },
              [
                _c(
                  "div",
                  { staticClass: "ui-form p-10" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("ValidationObserver", {
                      ref: "loginValidation",
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function (ref) {
                            var invalid = ref.invalid
                            return [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function ($event) {
                                      $event.preventDefault()
                                      return _vm.login.apply(null, arguments)
                                    },
                                  },
                                },
                                [
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
                                                      "input input-primary input-bordered mt-2 w-full",
                                                    attrs: {
                                                      type: "email",
                                                      name: "email",
                                                      placeholder:
                                                        "Username/Email",
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
                                                      "input input-primary input-bordered mt-4 w-full",
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
                                  _c(
                                    "div",
                                    { staticClass: "form-control mt-3" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary btn-block mb-4",
                                          attrs: { type: "submit" },
                                          on: { click: _vm.login },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Login\n                                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          },
                        },
                      ]),
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "text-md text-gray-500 mt-20 justify-center",
                        attrs: { href: "#" },
                      },
                      [
                        _vm._v(
                          "Don't have an account?\n                        "
                        ),
                        _c(
                          "router-link",
                          {
                            staticClass: "font-bold",
                            attrs: { to: "/register" },
                          },
                          [
                            _c("span", { staticClass: "text-purple-900" }, [
                              _vm._v("Register"),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "header-text" }, [
      _c("p", { staticClass: "text-blue-400 text-2xl" }, [
        _vm._v("Welcome Back,"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-primary m-2" }, [
        _vm._v(
          "\n                            Please LogIn to explore..\n                        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);