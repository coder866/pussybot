import authService from "../../services/Authservice";
import router from "../../router";
export const namespaced = true;

export const state = {
    user: {
        data: {},
        message: null,
        success: false,
    },
    loading: false,
    error: false,
    messages: {
        message: null,
        errors: null,
    },
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
        state.messages = message;
    },
    SET_ERROR(state, errorState = false) {
        state.error = errorState;
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
                commit("SET_ERROR", true);
                commit("SET_MESSAGE", error);
            });
    },
    async loginUser({ commit, dispatch }, payload) {
        console.log("DISPATCHED Login User");
        commit("SET_LOADING", true);
        return authService
            .login(payload)
            .then((response) => {
                console.log("LOGIN-RESP", response);
                // commit("SET_LOADING", false);
                // console.log("ST-USER", state);
                // commit("SET_ERROR", false);
                // commit("SET_MESSAGE", {
                //     message: "User Logged In Successfully",
                //     errors: null,
                // });
            })
            .catch((err) => {
                console.log("ERROR", err);
                // commit("SET_LOADING", false);
                // commit("SET_USER", null);
                // // commit("SET_USER_ROLES", null);
                // commit("SET_ERROR", 1);
                // commit("SET_MESSAGE", {
                //     message: err.message,
                //     errors: err.errors,
                // });
            });
    },
    async registerUser({ commit, dispatch }, payload) {
        console.log("DISPATCHED register");
        commit("SET_LOADING", true);
        return authService
            .registerUser(payload)
            .then((response) => {
                console.log("DISP-RESP", response.data);
                commit("SET_LOADING", false);
                console.log("ST-USER", state);
                commit("SET_ERROR", false);
                commit("SET_MESSAGE", {
                    message: "User Registered Successfully",
                    errors: null,
                });
                // dispatch("getAuthUser", "", { root: false });
            })
            .catch((err) => {
                console.log("ERROR", err);
                commit("SET_LOADING", false);
                commit("SET_USER", null);
                // commit("SET_USER_ROLES", null);
                commit("SET_ERROR", 1);
                commit("SET_MESSAGE", {
                    message: err.message,
                    errors: err.errors,
                });
            });
    },
    getAuthUser({ commit }) {
        console.log("DISPATCHED getUser");
        commit("SET_LOADING", true);
        return authService
            .getAuthUser()
            .then((response) => {
                console.log("DISP-getUSSER-RESP", response);
                // commit("SET_USER", response.data);
                // commit("SET_LOADING", false);
                // console.log("ST-USER", state);
            })
            .catch((err) => {
                console.log("ERROR-get-USER-ERRR", err);
                // commit("SET_LOADING", false);
                // commit("SET_USER", null);
                // // commit("SET_USER_ROLES", null);
                // commit("SET_ERROR", 1);
                // commit("SET_MESSAGE", {
                //     message: err.message,
                //     errors: err.errors,
                // });
            });
    },
    setMessages({ commit }, payload) {
        console.log("BAYLOAD", payload);
        commit("SET_MESSAGE", payload);
    },
    setError({ commit }, payload) {
        commit("SET_ERROR", payload);
    },
    setUserInfo({ commit }, payload) {
        commit("SET_USER", payload);
    },
};
export const getters = {
    authUser: (state) => {
        console.log("AUTHUSER==STATE==", state.user);
        return state.user.data;
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
        console.log("LOGGEDIN GETTER", state);
        return !!state.user.success;
    },
    getMessages: (state) => {
        console.log("MEEEEESAGEEE", state.messages);
        return state.messages;
    },
};
