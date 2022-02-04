import authService from "../../services/Authservice";
import router from "../../router";
export const namespaced = true;

export const state = {
    user: null,
    loading: false,
    error: null,
    messages: null,
};
export const mutations = {
    SET_USER(state, user) {
        console.log("SETTING user", user);
        state.user = user;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_MESSAGE(state, message) {
        state.message = message;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    logout({ commit }) {
        console.log("DISPATCHED");
        return authService
            .logout()
            .then(() => {
                commit("SET_USER", null);
                router.push({ name: "login" });
            })
            .catch((error) => {
                commit("SET_ERROR", error);
            });
    },
    getAuthUser({ commit }) {
        console.log("DISPATCHED getUser");
        commit("SET_LOADING", true);
        return authService
            .getAuthUser()
            .then((response) => {
                console.log("DISP-RESP", response.data.data.user);
                commit("SET_USER", response.data.data.user);
                commit("SET_LOADING", false);
                console.log("ST-USER", state);
            })
            .catch((error) => {
                console.log("ERROR", error);
                commit("SET_LOADING", false);
                commit("SET_USER", null);
                commit("SET_USER_ROLES", null);
                commit("SET_ERROR", error);
            });
    },
    setMessages({ commit }, payload) {
        commit("SET_MESSAGE", payload);
    },
};
export const getters = {
    authUser: (state) => {
        console.log("AUTHUSER==STATE==", state.user);
        return state.user;
    },
    authUserRoles: (state) => {
        return state.roles;
    },
    isAdmin: (state) => {
        return state.user ? state.user.isAdmin : false;
    },
    error: (state) => {
        return state.error;
    },
    loading: (state) => {
        return state.loading;
    },
    loggedIn: (state) => {
        console.log("LOGGEDIN GETTER", state.user);
        return !!state.user;
    },
    messages: (state) => {
        return state.message;
    },
};
