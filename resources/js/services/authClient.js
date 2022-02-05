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
       if(response.status==200) {store.dispatch("auth/setMessages", response.data.error)}

        return response;
    },
    (error) => {
        //console.log('INTERCEPT HEADERS', error.response.headers)
        console.log("INTERCEPT ERR", error.response);
        if (error.response && [401, 419, 422].includes(error.response.status)) {
            store.dispatch("auth/setMessages", error.response.data.message);
        }
        return Promise.reject(error);
    }
);
