import Vue from "vue";
import Vuex from "vuex";

import * as auth from "./Auth";
import * as messages from "./Messages";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        messages,
    },
});
