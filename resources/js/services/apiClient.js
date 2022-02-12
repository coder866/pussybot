import axios from "axios";
import store from "../store";
import router from "../router";

export const apiClient = axios.create({
    baseURL: "http://pussybot.test",
    withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        //console.log('INTERCEPT HEADERS', error.response.headers)
        console.log("INTERCEPT ERR", error.response.data);
        if (error.response && [401, 419, 422].includes(error.response.status)) {
            store.dispatch("auth/setError", true);
            store.dispatch("auth/setMessages", error.response.data);
        }
        return Promise.reject(error.response.data);
        // return Promise.reject(error.response.data);
    }
);
