<template>
  <div id="app" class="flex flex-col">
    <AppHeader
      :overlayVisible="overlayVisible"
      @toggle-overlay="toggleOverlayVisibility"
    />
    <Overlay v-if="overlayVisible" @close="toggleOverlayVisibility" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Overlay from "./components/Overlay.vue";

const overlayVisible = ref(false);

const toggleOverlayVisibility = () => {
  overlayVisible.value = !overlayVisible.value;
};
</script>
