<template>
    <div
        class="flex bg-blue-50 bg-clip-padding h-screen justify-items-center lg:justify-items-center lg:items-center"
    >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 p-5">
            <div
                class="grid grid-cols-1 justify-items-center overflow-hidden border h-auto"
            >
                <img :src="bgImg" alt="Login Bg" />
            </div>
            <div class="grid grid-cols-1 justify-items-center md:w-full">
                <div class="grid overflow-hidden bg-white h-auto w-full">
                    <div class="ui-form p-10">
                        <span class="header-text">
                            <p class="text-blue-400 text-2xl">Welcome Back,</p>
                            <p class="text-primary m-2">
                                Please LogIn to explore..
                            </p>
                        </span>
                        <ValidationObserver
                            v-slot="{ invalid }"
                            ref="loginValidation"
                        >
                            <form @submit.prevent="login">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="Email"
                                    rules="required|email"
                                >
                                    <div class="form-control">
                                        <input
                                            type="text"
                                            placeholder="username"
                                            class="input input-primary input-bordered mt-2 w-full"
                                            v-model="user.username"
                                        />
                                        <small class="text-error">{{
                                            errors[0]
                                        }}</small>
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="Password"
                                    rules="required|min:6|max:12"
                                >
                                    <div class="form-control">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            class="input input-primary input-bordered mt-4 w-full"
                                            v-model="user.password"
                                        />
                                        <small class="text-error">{{
                                            errors[0]
                                        }}</small>
                                    </div>
                                </ValidationProvider>
                                <div class="form-control mt-3">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-block mb-4"
                                        @click="login"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </ValidationObserver>
                        <span
                            href="#"
                            class="text-md text-gray-500 mt-20 justify-center"
                            >Don't have an account?
                            <router-link to="/register" class="font-bold">
                                <span class="text-purple-900"
                                    >Register</span
                                ></router-link
                            >
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logincat from "../assets/img/logincat.jpeg";
import authService from "../services/Authservice";
export default {
    components: {},
    data() {
        return {
            bgImg: logincat,
            user: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            this.$refs.loginValidation.validate().then((success) => {
                if (success) {
                    authService
                        .login(this.user)
                        .then((response) => {
                            console.log("response=", response);
                        })
                        .catch((error) => {
                            console.log("error", error);
                            this.$swal(
                                "error",
                                this.$store.getters["auth/messages"],
                                "error"
                            );
                        });
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
