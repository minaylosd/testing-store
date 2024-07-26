<template>
  <div id="app" class="flex flex-col">
    <AppHeader :cartVisible="cartVisible" @toggle-cart="toggleCartVisibility" />
    <ShoppingCart v-if="cartVisible" @close="toggleCartVisibility" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

const cartVisible = ref(false);

const toggleCartVisibility = () => {
  cartVisible.value = !cartVisible.value;
};
</script>
