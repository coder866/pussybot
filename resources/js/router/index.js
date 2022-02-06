import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store';
import {isAuthentcated} from '../services/helper'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("../views/Dashboard.vue"),
        meta: {
            requiresAuth: true,
        },
        //beforeEnter: routeGuard,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
        meta: {
            redirectAfterAuth: true,
            public: true,
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
        meta: {
            redirectAfterAuth: true,
            public: true,
        },
    },
    {
        path: "/not-found",
        name: "error-404",
        component: () => import("../views/NotFound.vue"),
    },
    {
        path: "*",
        redirect: "/not-found",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    console.log("HELPER STATE",isAuthentcated());
    var isAuthenticated = store.getters['auth/loggedIn'];
    console.log("LOGGED IN",isAuthenticated);
    if (!isAuthenticated && !to.meta.public) {
        next("/login");
    } else {
        next();
    }
});

// function routeGuard(to, from, next) {
//     var isAuthenticated = false;
//     //this is just an example. You will have to find a better or
//     // centralised way to handle you localstorage data handling
//     // if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
//     // else isAuthenticated = false;

//     if (isAuthenticated) {
//         next(); // allow to enter route
//     } else {
//         next("/login"); // go to '/login';
//     }
// }
export default router;
