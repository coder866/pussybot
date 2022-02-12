<template>
    <div>
        <div class="flex flex-col">
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div
                    class="finline-block min-w-full align-middle dark:bg-gray-800 bg-white"
                >
                    <div
                        class="flex flex-row justify-between min-w-full align-middle dark:bg-gray-800 bg-white"
                    >
                        <div class="p-4">
                            <button
                                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                                data-modal-toggle="defaultModal"
                                @click="$router.push('/create-hashtag')"
                            >
                                Add HashTag
                            </button>
                        </div>
                        <div class="p-4">
                            <label for="table-search" class="sr-only"
                                >Search</label
                            >
                            <div class="relative mt-1">
                                <div
                                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                                >
                                    <svg
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table w-full table-compact">
                            <thead>
                                <tr class="text-blue-500">
                                    <th></th>
                                    <th>Day of Week</th>
                                    <th>HashTags</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tag, idx) in tags" :key="idx">
                                    <th class="pl-5">{{ idx + 1 }}</th>
                                    <td>{{ tag.weekday }}</td>
                                    <td>{{ tag.tags }}</td>
                                    <td v-if="tag.status">Active</td>
                                    <td v-else>Inactive</td>
                                    <td>
                                        <div class="dropdown dropdown-hover">
                                            <div
                                                tabindex="0"
                                                class="m-1 btn btn-xs btn-info text-xs"
                                            >
                                                Actions
                                            </div>
                                            <ul
                                                tabindex="0"
                                                class="p-0.5 shadow menu dropdown-content bg-base-100"
                                            >
                                                <li>
                                                    <router-link
                                                        :to="{
                                                            name: 'edit-tag',
                                                            params: {
                                                                id: tag.id,
                                                            },
                                                        }"
                                                        class="text-primary"
                                                        >Edit</router-link
                                                    >
                                                </li>
                                                <li>
                                                    <a class="text-warning"
                                                        >De-Activate</a
                                                    >
                                                </li>
                                                <li>
                                                    <a class="text-red-600"
                                                        >Delete</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apiService from "../../services/ApiService";

export default {
    components: {},
    data() {
        return {
            tags: [],
        };
    },
    mounted() {
        this.tags = this.$store.getters["tags/taglist"];
    },
    methods: {
        getTags() {
            apiService
                .listTags()
                .then((response) => {
                    console.log("REZX", response);
                    this.tags = response.data;
                })
                .catch((err) => {
                    console.log("ERRR", err);
                });
        },
    },
};
</script>

<style scoped></style>
