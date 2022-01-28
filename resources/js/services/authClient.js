import axios from "axios";
import store from "@/store";

export const authClient = axios.create({
    baseURL: "http://pussybot.test",
    withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
    (response) => {
        console.log("INTERCEPT RES", response.headers["set-cookie"]);
        return response;
    },
    (error) => {
        //console.log('INTERCEPT HEADERS', error.response.headers)
        console.log("INTERCEPT ERR", error.response);
        if (
            error.response &&
            [401, 419].includes(error.response.status) &&
            store.getters["authUser"]
        ) {
            store.dispatch("logout");
        }
        return Promise.reject(error);
    }
);
