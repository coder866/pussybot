<template>
    <div
        class="bg-blue-50 bg-clip-padding h-screen justify-items-center lg:justify-items-center"
    >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 p-5">
            <div
                class="grid grid-cols-1 justify-items-center overflow-hidden h-auto"
            >
                <img :src="bgImg" alt="Login Bg" />
            </div>
            <div class="grid grid-cols-1 justify-items-center w-auto md:w-full">
                <div class="grid overflow-hidden bg-white h-auto w-full p-3">
                    <div class="ui-form p-10">
                        <p class="text-blue-400 text-2xl mb-2">
                            Create Account,
                        </p>
                        <p class="text-primary mt-2">
                            Fill in your Sweet as requested...
                        </p>
                        <ValidationObserver
                            v-slot="{ invalid }"
                            ref="registrationValidation"
                        >
                            <form
                                class="registration-form"
                                @submit.prevent="registerUser"
                            >
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="Name"
                                    rules="required|min:3"
                                >
                                    <div class="form-control">
                                        <input
                                            type="text"
                                            placeholder="Full Names"
                                            class="input input-primary input-bordered mt-3"
                                            v-model="user.name"
                                        />
                                        <small class="text-error">{{
                                            errors[0]
                                        }}</small>
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="Email"
                                    rules="required|email"
                                >
                                    <div class="form-control">
                                        <input
                                            type="text"
                                            placeholder="email"
                                            class="input input-primary input-bordered mt-3"
                                            v-model="user.email"
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
                                            class="input input-primary input-bordered mt-3"
                                            v-model="user.password"
                                        />

                                        <small class="text-error">{{
                                            errors[0]
                                        }}</small>
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="Confirm Password"
                                    rules="required|confirmed:Password"
                                >
                                    <div class="form-control">
                                        <input
                                            type="password"
                                            placeholder="Password Confirmation"
                                            class="input input-primary input-bordered mt-3"
                                            v-model="user.password_confirmation"
                                        />
                                        <small class="text-error">{{
                                            errors[0]
                                        }}</small>
                                    </div>
                                </ValidationProvider>
                                <br />
                                <div class="form-control">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-block"
                                    >
                                        Submit Details
                                    </button>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import registercat from "../assets/img/registercat.jpg";
import authservice from "../services/Authservice";
import store from "../store";
export default {
    components: {},
    data() {
        return {
            bgImg: registercat,
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
        };
    },
    methods: {
        registerUser() {
            this.$refs.registrationValidation.validate().then((success) => {
                if (success) {
                    this.$store.dispatch("auth/registerUser", this.user).then(()=>{
                        console.log("ERRRRROR::",this.$store.getters['auth/error']);
                        console.log("Message::",this.$store.getters['auth/getMessages']);
                    });



                    // authservice.registerUser(this.user)
                    //     .then((resp) => {
                    //         console.log("Message::",this.$store.getters['auth/getMessages']);
                    //     })
                    //     .catch((error) => {
                    //         console.log(error);
                    //     });


                }
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
