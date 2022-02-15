<template>
    <layout-full>
        <router-view />
    </layout-full>
</template>

<script>
import LayoutFull from "../../components/Layouts/FullLayout.vue";

export default {
    components: {
        LayoutFull,
    },
};
</script>
