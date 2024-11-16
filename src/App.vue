<template>
  <div id="app" class="flex flex-col min-h-lvh">
    <AppHeader
      :overlayVisible="overlayVisible"
      @toggle-overlay="toggleOverlayVisibility"
    />
    <Menu v-if="isMenuOpen == true" />
    <Overlay v-if="overlayVisible" @close="toggleOverlayVisibility" />
    <router-view class="grow" />
    <!-- <AppFooter /> -->
    <SmallFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Overlay from "./components/Overlay.vue";
import Menu from "./components/Menu.vue";
import SmallFooter from "./components/SmallFooter.vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  if (isMenuOpen.value == false) {
    isMenuOpen.value = true;
  } else {
    isMenuOpen.value = false;
  }
};

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
provide("toggleMenu", toggleMenu);

const overlayVisible = ref(false);

const toggleOverlayVisibility = () => {
  overlayVisible.value = !overlayVisible.value;
};
</script>
