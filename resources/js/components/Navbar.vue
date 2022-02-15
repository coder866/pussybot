<template>
    <!-- Navbar -->
    <nav
        class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3"
    >
        <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
            <div
                class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
            >
                <a
                    class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#pablo"
                >
                    Welcome {{ user.name }}
                </a>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                >
                    <span
                        class="block relative w-6 h-px rounded-sm bg-white"
                    ></span>
                    <span
                        class="block relative w-6 h-px rounded-sm bg-white mt-1"
                    ></span>
                    <span
                        class="block relative w-6 h-px rounded-sm bg-white mt-1"
                    ></span>
                </button>
            </div>
            <div
                class="lg:flex flex-grow items-center"
                id="example-navbar-warning"
            >
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <a
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                            <i
                                class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"
                            />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                            <i
                                class="fab fa-twitter text-lg leading-lg text-white opacity-75"
                            />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                            <i
                                class="fab fa-instagram text-lg leading-lg text-white opacity-75"
                            />
                        </a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown dropdown-hover dropdown-end">
                            <a
                                class="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <i
                                    class="fab fa-github text-lg leading-lg text-white opacity-75"
                                />
                            </a>
                            <ul
                                tabindex="0"
                                class="p-0.5 shadow menu dropdown-content bg-base-100"
                            >
                                <li>
                                    <a
                                        @click="logout"
                                        class="text-blue-500 text-lg py-0.5 px-1"
                                        ><i
                                            class="fa fa-lock text-lg text-blue-500 px-0.5"
                                        />
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- End Navbar -->
</template>
<script>
import UserDropdownComponent from "./UserDropdown.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        UserDropdownComponent,
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout");
        },
    },
    computed: {
        ...mapGetters({ user: "auth/authUser" }),
    },
};
</script>
