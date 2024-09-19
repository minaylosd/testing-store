<template>
  <div id="app" class="flex flex-col">
    <AppHeader
      :overlayVisible="overlayVisible"
      @toggle-overlay="toggleOverlayVisibility"
    />
    <Overlay v-if="overlayVisible" @close="toggleOverlayVisibility" />
    <router-view />
    <!-- <AppFooter /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Overlay from "./components/Overlay.vue";

const isMobile = ref();
let resizeTimeout;

const checkMobile = () => {
  isMobile.value = window.innerWidth < 640;
};

const debouncedResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    checkMobile();
  }, 300);
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", debouncedResize);
});

provide("isMobile", isMobile);

const overlayVisible = ref(false);

const toggleOverlayVisibility = () => {
  overlayVisible.value = !overlayVisible.value;
};
</script>
