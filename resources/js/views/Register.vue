<template>
    <div
        class="bg-blue-50 bg-clip-padding h-full justify-items-center lg:justify-items-center"
    >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 p-5">
            <div
                class="grid grid-cols-1 justify-items-center overflow-hidden border border-gray-500 h-auto"
            >
                <img :src="bgImg" alt="Login Bg" />
            </div>
            <div class="grid grid-cols-1 justify-items-center w-auto md:w-full">
                <div class="grid overflow-hidden bg-white h-auto w-full p-3">
                    <div class="ui-form p-10">
                        <span class="text-blue-400 text-2xl"
                            >Create Account,</span
                        >
                        <p class="text-primary m-2">
                            Fill in your Sweet as requested...
                        </p>
                        <form>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Names"
                                    class="input input-primary input-bordered"
                                    v-model="user.name"
                                />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    class="input input-primary input-bordered"
                                    v-model="user.email"
                                />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="input input-primary input-bordered"
                                    v-model="user.password"
                                />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"
                                        >Confirm Password</span
                                    >
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password Confirmation"
                                    class="input input-primary input-bordered"
                                    v-model="user.password"
                                />
                            </div>
                            <br />
                            <button class="btn btn-primary btn-wide">
                                Submit Details
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <pre>
                    {{ user }}
                  </pre
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logincat from "../assets/img/logincat.jpg";
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
