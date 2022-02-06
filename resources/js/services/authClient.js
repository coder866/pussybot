import axios from "axios";
import store from "../store";

export const authClient = axios.create({
    baseURL: "http://pussybot.test",
    withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
    (response) => {
        console.log("INTERCEPT RES", response);
        //if(response.status==201) {store.dispatch("auth/setError", false);store.dispatch("auth/getAuthUser")}

        return response;
    },
    (error) => {
        //console.log('INTERCEPT HEADERS', error.response.headers)
        console.log("INTERCEPT ERR", error.response.data);
        if (error.response && [401, 419,].includes(error.response.status)) {
            store.dispatch("auth/setError", true);
            store.dispatch("auth/setMessages", error.response.data);
        }
        return Promise.reject(error);
    }
);
