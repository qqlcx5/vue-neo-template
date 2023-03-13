<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <section class="neom-main">
        <transition name="fade-transform" mode="out-in">
            <RouterView :key="key" />
        </transition>
    </section>
</template>
<style scoped>
.neom-main {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>

