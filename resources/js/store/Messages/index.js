export const namespaced = true;

export const state = {
    messages: [],
};

export const mutations = {
    SET_MESSAGE(state, messages) {
        state.messages = messages;
    },
};

export const actions = {
    setMessages({ commit }, msgPlayload) {
        commit("SET_LOADING", true);
        commit("SET_MESSAGE", msgPlayload);
    },
};

export const getters = {
    messages: (state) => {
        return state.messages;
    },
};
