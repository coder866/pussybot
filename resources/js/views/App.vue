<template>
    <div class="bg-blue-50 flex flex-col h-screen justify-between">
        <sidebar-component></sidebar-component>
        <div class="relative md:ml-64">
            <navbar-component></navbar-component>
            <div class="px-4 md:px-10 mx-auto w-full mt-2">
                <router-view></router-view>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
import Footer from "../components/Footer";
export default {
    components: {
        Footer,
        NavbarComponent,
        SidebarComponent,
    },
};
</script>

<style lang="scss" scoped></style>
