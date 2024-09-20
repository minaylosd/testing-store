<template>
  <header
    class="fixed top-0 left-0 z-30 w-full bg-white lg:shadow-shadow py-[9px]"
  >
    <div
      class="flex items-center justify-between px-5 mx-auto lg:px-20 2xl:px-9 max-w-[360px] md:max-w-388"
    >
      <router-link
        class="flex items-center gap-2.5 font-compact text-xl leading-6 text-txt font-normal"
        to="/"
        ><div class="w-9 h-9 lg:w-[50px] lg:h-[50px]">
          <HeaderLogo />
        </div>
        Тестирование</router-link
      >
      <div class="flex items-center gap-4">
        <div
          class="items-center hidden gap-1 text-xs font-bold tracking-wider uppercase lg:flex font-wide text-txt"
        >
          <span>52 400</span>
          <div class="w-6 h-6">
            <Coin />
          </div>
        </div>
        <router-link
          class="lg:flex hidden items-center p-2.5 text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
          to="/balance"
          ><span class="px-2 py-1">История баланса</span><Wallet
        /></router-link>
        <router-link
          class="lg:flex hidden items-center p-2.5 text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
          to="/purchases"
          ><span class="px-2 py-1">История покупок</span><CartLogo
        /></router-link>
        <div class="relative w-6 h-6 cursor-pointer" @click="handleCartClick">
          <CartLogo />
          <div
            v-if="cart.items.length != 0"
            class="rounded-full absolute -top-[3px] -right-1.5 w-4 h-4 bg-brand"
          >
            <div class="relative w-full h-full">
              <span
                class="absolute font-sans text-xs font-medium text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                >{{ cart.items.length }}</span
              >
            </div>
          </div>
        </div>
        <div @click="toggleMenu" class="block w-8 h-8 lg:hidden">
          <MenuBurger />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderLogo from "./icons/HeaderLogo.vue";
import Coin from "./icons/Coin.vue";
import Wallet from "./icons/Wallet.vue";
import CartLogo from "./icons/CartLogo.vue";
import cartStore from "@/store/cart.js";
import MenuBurger from "./icons/MenuBurger.vue";
import { inject } from "vue";

const toggleMenu = inject("toggleMenu");

const cart = cartStore.cart;

const props = defineProps({
  overlayVisible: Boolean,
});

const emit = defineEmits(["toggle-overlay"]);

const handleCartClick = () => {
  emit("toggle-overlay");
};
</script>
