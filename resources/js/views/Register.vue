<template>
  <div
    class="
      bg-blue-50 bg-clip-padding
      h-screen
      justify-items-center
      lg:justify-items-center
    "
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 p-5">
      <div class="grid grid-cols-1 justify-items-center overflow-hidden h-auto">
        <img :src="bgImg" alt="Login Bg" />
      </div>
      <div class="grid grid-cols-1 justify-items-center w-auto md:w-full">
        <div class="grid overflow-hidden bg-white h-auto w-full p-3">
          <div class="ui-form p-10">
            <p class="text-blue-400 text-2xl mb-2">Create Account,</p>
            <p class="text-primary mt-2">Fill in your Sweet as requested...</p>
            <div class="form-control">
              <input
                type="text"
                placeholder="Full Names"
                class="input input-primary input-bordered mt-3"
                v-model="user.name"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder="email"
                class="input input-primary input-bordered mt-3"
                v-model="user.email"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password"
                class="input input-primary input-bordered mt-3"
                v-model="user.password"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password Confirmation"
                class="input input-primary input-bordered mt-3"
                v-model="user.confirmpassword"
              />
            </div>
            <br />
            <div class="form-control"></div>
            <button class="btn btn-primary btn-block">Submit Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registercat from "../assets/img/registercat.jpg";
export default {
  data() {
    return {
      bgImg: registercat,
      user: {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
