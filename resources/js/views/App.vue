<template>
    <div class="bg-blue-50 flex flex-col h-screen justify-between">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
const LayoutFull = () => import("../views/Layouts/Full.vue");
const LayoutMain = () => import("../views/Layouts/LayoutMain.vue");
export default {
    components: {
        LayoutFull,
        LayoutMain,
    },
    computed: {
        layout() {
            return this.$route.meta.layout === "full"
                ? "layout-full"
                : "layout-main";
        },
    },
};
</script>

<style lang="scss" scoped></style>
