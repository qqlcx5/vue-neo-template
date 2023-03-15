<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <section class="neom-main">
        <router-view v-slot="{ Component, route }">
            <transition
                name="fade-transform"
                mode="out-in"
            >
                <div :key="route.name">
                    <component :is="Component" />
                </div>
            </transition>
        </router-view>
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

