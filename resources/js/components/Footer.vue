<template>
    <div>
        <footer class="block py-4">
            <div class="container mx-auto px-4">
                <hr class="mb-4 border-b-1 border-blueGray-200" />
                <div
                    class="flex flex-wrap items-center md:justify-between justify-center"
                >
                    <div
                        class="flex flex-wrap w-full md:w-4/12 md:justify-between justify-end"
                    >
                        <div
                            class="text-sm text-blueGray-500 font-semibold py-1 px-10"
                        >
                            <a
                                href="https://www.creative-tim.com"
                                class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                            >
                            </a>
                        </div>
                    </div>
                    <div class="w-full md:w-8/12 px-4">
                        <ul
                            class="flex flex-wrap list-none md:justify-end justify-center"
                        >
                            <li>
                                <a
                                    href="https://www.creative-tim.com"
                                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                >
                                    Copyright © {{ copyear }}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.creative-tim.com"
                                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                >
                                    {{ appname }}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.creative-tim.com/presentation"
                                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://blog.creative-tim.com"
                                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                >
                                    MIT License
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
    data() {
        return {
            copyear: moment().format("YYYY"),
        };
    },
    computed: {
        ...mapGetters({ appname: "appName" }),
    },
};
</script>

<style scoped></style>
