import Vue from "vue";
import Vuex from "vuex";

import * as auth from "./Auth";
import * as app from "./App";
import * as tags from "./Tags";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        auth,
        app,
        tags,
    },
    strict: process.env.DEV,
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            //{
            // getItem: (key) => Cookies.get(key),
            // setItem: (key, value) =>
            //     Cookies.set(key, value, { expires: 3, secure: false }),
            // removeItem: (key) => Cookies.remove(key),
            //},
        }),
    ],
});
