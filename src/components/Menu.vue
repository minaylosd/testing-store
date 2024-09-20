<template>
  <div class="fixed inset-0 z-50 bg-white">
    <div
      class="relative z-100 flex flex-col items-center gap-5 p-5 mx-auto max-w-[360px]">
      <div @click="toggleMenu" class="self-end w-8 h-8"><CloseCross /></div>
      <div
        class="flex items-center justify-center w-full gap-1 text-xs font-bold tracking-wider uppercase font-wide text-txt">
        <span>52 400</span>
        <div class="w-6 h-6">
          <Coin />
        </div>
      </div>
      <div @click="toggleMenu" class="w-full">
        <router-link
          @click="toggleMenu"
          class="flex items-center justify-center p-2.5 text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary w-full"
          to="/balance"
          ><span class="px-2 py-1">История баланса</span><Wallet
        /></router-link>
      </div>

      <div @click="toggleMenu" class="w-full">
        <router-link
          class="flex items-center justify-center p-2.5 text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary w-full"
          to="/purchases"
          ><span class="px-2 py-1">История покупок</span><CartLogo
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import CloseCross from "./icons/CloseCross.vue";
import CartLogo from "./icons/CartLogo.vue";
import Wallet from "./icons/Wallet.vue";
import Coin from "./icons/Coin.vue";
import { inject } from "vue";

const toggleMenu = inject("toggleMenu");
</script>
