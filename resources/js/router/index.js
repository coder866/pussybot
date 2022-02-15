import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { isAuthentcated } from "../services/helper";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("../views/Dashboard.vue"),
        meta: {
            requiresAuth: true,
            public: false,
        },
        //beforeEnter: routeGuard,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
        meta: {
            layout: "full",
            redirectAfterAuth: true,
            public: true,
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
        meta: {
            layout: "full",
            redirectAfterAuth: true,
            public: true,
        },
    },
    {
        path: "/create-hashtag",
        name: "create-hashtag",
        component: () => import("../views/Hashtags/CreateTag.vue"),
        meta: {
            redirectAfterAuth: true,
            public: true,
        },
    },

    {
        path: "/tagslist/edit/:id",
        name: "edit-tag",
        component: () => import("../views/Hashtags/EditTag.vue"),
        props: true,
        meta: {
            redirectAfterAuth: true,
            public: true,
        },
    },
    {
        path: "/tagslist",
        name: "hash-tags",
        component: () => import("../views/Hashtags/TagList.vue"),
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

// router.beforeEach((to, from, next) => {
//     console.log("HELPER STATE", isAuthentcated());
//R018980,R012020,R010523,R009956
//     var isAuthenticated = isAuthentcated();
//     console.log("LOGGED IN", isAuthenticated);
//     if (!isAuthenticated && !to.meta.public) {
//         next("/login");
//     } else {
//         next();
//     }
// });
router.beforeEach(async (to, from, next) => {
    await store.restored;
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/login", "/register"];
    const authRequired = !publicPages.includes(to.path);
    console.log("isAuthentcated", isAuthentcated());
    const isAuthenticated = isAuthentcated();

    if (authRequired && !isAuthenticated) {
        return next("/login");
    }
    next();
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
