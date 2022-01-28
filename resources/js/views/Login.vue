<template>
    <div
        class="flex bg-blue-50 bg-clip-padding h-screen justify-items-center lg:justify-items-center lg:items-center"
    >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 p-5">
            <div
                class="grid grid-cols-1 justify-items-center overflow-hidden border  h-auto"
            >
                <img :src="bgImg" alt="Login Bg" />
            </div>
            <div class="grid grid-cols-1 justify-items-center md:w-full">
                <div class="grid overflow-hidden bg-white h-auto w-full p-3">
                    <div class="ui-form p-10  ">
                        <span class="text-blue-400 text-2xl"
                            >Welcome Back,</span
                        >
                        <p class="text-primary m-2">
                            Please LogIn to explore..
                        </p>

                            <div class="form-control">
                                <!-- <label class="label">
                                    <span class="label-text">Username</span>
                                </label> -->
                                <input
                                    type="text"
                                    placeholder="username"
                                    class="input input-primary input-bordered mt-2"
                                    v-model="user.username"
                                />
                            </div>
                            <div class="form-control">
                                <!-- <label class="label">
                                    <span class="label-text">Password</span>
                                </label> -->
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="input input-primary input-bordered mt-4"
                                    v-model="user.password"
                                />
                            </div>
                            <br />
                            <div class="form-control"></div>
                            <button class="btn btn-primary btn-block mb-4">
                                Login
                            </button>

                            <span href="#" class="text-md text-gray-500 mt-20 justify-center"
                                >Don't have an account? <router-link to="/register" class="font-bold">
                                <span class="text-purple-900" >Register</span></router-link>
                                </span>
                            </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import logincat from "../assets/img/logincat.jpeg";
export default {
  data() {
    return {
      bgImg: logincat,
      user: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
