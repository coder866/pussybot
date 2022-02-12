import store from "../store/index.js";
export const isAuthentcated = () => {
    return store.getters["auth/loggedIn"];
};
