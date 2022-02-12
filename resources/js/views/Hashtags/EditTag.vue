<template>
    <div>
        <div class="justify-items-center md:max-w-2xl">
            <div class="overflow-hidden bg-white h-auto w-full">
                <div class="ui-form p-10">
                    <span class="header-text mb-2">
                        <p class="text-blue-400 text-2xl">Create HashTag</p>
                    </span>
                    <ValidationObserver
                        v-slot="{ invalid }"
                        ref="tagValidation"
                    >
                        <form @submit.prevent="createtags">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="weekday"
                                rules="required"
                            >
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text"
                                            >Day of Week</span
                                        >
                                    </label>
                                    <select
                                        name="weekday"
                                        class="select select-bordered select-info w-full max-w-xs"
                                        v-model="hashtag.weekday"
                                    >
                                        <option
                                            disabled="disabled"
                                            selected="selected"
                                        >
                                            Choose Day Of Week
                                        </option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">
                                            Wednesday
                                        </option>
                                        <option value="thursday">
                                            Thursday
                                        </option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">
                                            Saturday
                                        </option>
                                    </select>
                                    <small class="text-error">{{
                                        errors[0]
                                    }}</small>
                                </div>
                            </ValidationProvider>
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="hashtags"
                                rules="required|min:3"
                            >
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text"
                                            >Hash Tags (Should be comma
                                            seperated)</span
                                        >
                                    </label>
                                    <textarea
                                        class="textarea h-24 textarea-bordered textarea-primary"
                                        name="hashtags"
                                        placeholder="Hastags like #MotivationMonday,#CatsofTwitter"
                                        v-model="hashtag.tags"
                                    ></textarea>

                                    <small class="text-error">{{
                                        errors[0]
                                    }}</small>
                                </div>
                            </ValidationProvider>

                            <div class="form-control mt-3">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block mb-4"
                                >
                                    Update HashTags
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import apiService from "../../services/ApiService";

export default {
    props: {
        id: { required: true },
    },
    data() {
        return {
            hashtag: {
                weekday: "",
                tags: "",
                status: 1,
                user_id: "",
                tagid: "",
            },
            //filteredtag: "",
            errorMsg: "",
        };
    },
    mounted() {
        //4211 2100 0074 4476
        //console.log("param id", this.id);

        // this.hashtag = this.filteredtag[0];
        // this.hashtag.id = this.id;
        this.hashtag.user_id = this.$store.getters["auth/authUser"].id;
    },
    computed: {
        filteredtag() {
            let filteredtag = this.$store.getters["tags/filteredtag"](this.id);

            console.log("FILTERED id", filteredtag);
            return filteredtag;
        },
    },
    methods: {
        createtags() {
            this.$refs.tagValidation.validate().then((success) => {
                if (success) {
                    apiService
                        .updateTag(this.hashtag, this.id)
                        .then((response) => {
                            console.log("UPDATE-RESS", response.data.message);

                            this.$swal(
                                "success",
                                response.data.message,
                                "success"
                            ).then((res) => {
                                if (res.value) {
                                    location.reload();
                                }
                            });
                        })
                        .catch((error) => {
                            const keys = Object.keys(error.message);
                            this.errorMsg = {};
                            keys.forEach((key, index) => {
                                this.errorMsg[key] = error.message[key];
                            });
                            console.log(this.errorMsg);
                            this.$refs.tagValidation.setErrors(this.errorMsg);
                        });
                }
            });
        },
    },
};
</script>

<style scoped></style>
