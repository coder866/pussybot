import router from "../../router";
import * as $ from "alga-js";
import apiService from "../../services/ApiService";
import store from "../index";
export const namespaced = true;

export const state = {
    tags: [],
};
export const mutations = {
    SET_TAGS(state, payload) {
        state.tags = payload;
    },
    DELETE_TAG(state, pay) {},
};
export const actions = {
    getTags({ commit }, state) {
        apiService
            .listTags()
            .then((response) => {
                commit("SET_TAGS", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    getUserTags({ commit }) {
        let userid = {
            id: store.getters["auth/authUser"].id,
        };
        console.log("UserID", userid);
        apiService
            .listUserTags(userid)
            .then((response) => {
                console.log("TagsRES", response);

                commit("SET_TAGS", response.data.data);
            })
            .catch((error) => {
                console.log("TagsERR", error);
            });
    },
};
export const getters = {
    taglist: (state) => state.tags,
    filteredtag: (state) => (id) => $.array.filter(state.tags, { id: id }),
};
