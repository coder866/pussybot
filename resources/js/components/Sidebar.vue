<template>
    <nav
        class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
    >
        <div
            class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
        >
            <!-- Toggler -->
            <button
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                type="button"
                v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
            >
                <i class="fas fa-bars"></i>
            </button>
            <!-- Brand -->
            <a
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                href="javascript:void(0)"
            >
                Pussy Bot
            </a>
            <!-- User -->
            <ul class="md:hidden items-center flex flex-wrap list-none">
                <li class="inline-block relative">
                    <notification-dropdown-component></notification-dropdown-component>
                </li>
                <li class="inline-block relative">
                    <!--                    <user-dropdown-component></user-dropdown-component>-->
                    <ul
                        class="menu w-64 p-3 border bg-base-100 rounded-box text-white"
                    >
                        <li class="menu-title">
                            <span class="text-white text-2xl">
                                Menu Title
                            </span>
                        </li>
                        <li>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="inline-block w-5 h-5 mr-2 stroke-current"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    ></path>
                                </svg>
                                Item with icon
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="inline-block w-5 h-5 mr-2 stroke-current"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    ></path>
                                </svg>
                                Item with icon
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="inline-block w-5 h-5 mr-2 stroke-current"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                    ></path>
                                </svg>
                                Item with icon
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Collapse -->
            <div
                class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
                v-bind:class="collapseShow"
            >
                <!-- Collapse header -->
                <div
                    class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
                >
                    <div class="flex flex-wrap">
                        <div class="w-6/12">
                            <a
                                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                href="javascript:void(0)"
                            >
                                Tailwind Starter Kit
                            </a>
                        </div>
                        <div class="w-6/12 flex justify-end">
                            <button
                                type="button"
                                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                v-on:click="toggleCollapseShow('hidden')"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Form -->
                <form class="mt-6 mb-4 md:hidden">
                    <div class="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Search"
                            class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                        />
                    </div>
                </form>
                <!-- Navigation -->
                <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                    <li class="items-center">
                        <router-link
                            class="text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                            to="/"
                            ><i class="fas fa-tv opacity-75 mr-2 text-sm"></i>
                            Dashboard</router-link
                        >
                    </li>
                    <li class="items-center">
                        <router-link
                            to="/create-hashtag"
                            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                        >
                            <i
                                class="fas fa-newspaper text-blueGray-400 mr-2 text-sm"
                            ></i>
                            Create New HashTag</router-link
                        >
                    </li>
                    <li class="items-center">
                        <router-link
                            to="/tagslist"
                            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                        >
                            <i
                                class="fas fa-newspaper text-blueGray-400 mr-2 text-sm"
                            ></i>
                            Hashtags List</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import NotificationDropdownComponent from "./NotificationDropdown.vue";
import UserDropdownComponent from "./UserDropdown.vue";
export default {
    data() {
        return {
            collapseShow: "hidden",
        };
    },
    methods: {
        toggleCollapseShow: function (classes) {
            this.collapseShow = classes;
        },
    },
    components: {
        NotificationDropdownComponent,
        UserDropdownComponent,
    },
};
</script>
