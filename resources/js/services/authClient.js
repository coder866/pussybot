import axios from "axios";
import store from "../store";
import router from "../router";

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

        if (response.status == 201) {
            store.dispatch("auth/setError", false);
            // store.dispatch("auth/getAuthUser");
            router.push("/login");
        }
        if (response.status == 200) {
            // store.dispatch("auth/setError", {
            //     message: "User Logged In",
            //     errors: null,
            // });
            // store.dispatch("auth/getAuthUser", "", { root: true });
            //router.push("/");
        }

        return response;
    },
    (error) => {
        //console.log('INTERCEPT HEADERS', error.response.headers)
        console.log("INTERCEPT ERR", error.response.data);
        if (error.response && [401, 419].includes(error.response.status)) {
            store.dispatch("auth/setError", true);
            store.dispatch("auth/setMessages", error.response.data);
        }
        return Promise.reject(error.response.data);
        // return Promise.reject(error.response.data);
    }
);
