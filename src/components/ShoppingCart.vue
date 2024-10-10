<template>
  <div
    class="md:w-[440px] max-w-[320px] md:max-w-[440px] px-5 pt-8 pb-5 bg-white shadow-lg rounded-4xl flex flex-col gap-8"
  >
    <h2
      class="px-4 text-xl font-medium leading-6 text-center font-wide text-txt"
    >
      Корзина
    </h2>
    <ul class="overflow-y-auto max-h-100">
      <li
        v-for="item in cart.items"
        :key="item.product.id"
        class="flex flex-wrap items-start justify-between py-4 border-b md:flex-nowrap border-divider gap-y-4"
      >
        <div
          class="relative overflow-hidden rounded-lg w-11 h-11 order-1 md:order-[0]"
        >
          <img
            :src="`/${item.product.imgSrc}`"
            alt=""
            class="absolute z-10 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        <div class="w-[150px] order-2 md:order-[0]">
          <h3 class="mb-1 font-medium leading-6 text-17 font-compact">
            {{ item.product.name }}
          </h3>
          <p
            v-if="item.product.size !== false"
            class="flex items-center justify-center w-6 h-6 text-xs font-normal leading-6 uppercase rounded-lg cursor-pointer bg-tertiary font-compact text-txt"
          >
            {{ item.product.size }}
          </p>
        </div>
        <div class="flex items-center gap-2 order-4 md:order-[0]">
          <button @click="decreaseQuantity(item.product.id)" class="p-1">
            <img src="/icons/minus.svg" alt="Minus button" />
          </button>
          <div class="font-normal leading-6 font-compact text-17 text-txt">
            {{ item.quantity }}
          </div>
          <button @click="increaseQuantity(item.product.id)" class="p-1">
            <img src="/icons/plus.svg" alt="Plus button" />
          </button>
        </div>
        <div
          class="flex items-center gap-1 font-medium leading-6 font-compact text-txt text-17 order-5 md:order-[0]"
        >
          {{ item.product.price }}
          <div class="w-6 h-6"><Coin /></div>
        </div>
        <button
          class="order-3 md:order-[0]"
          @click="removeFromCart(item.product.id)"
        >
          <img src="/icons/delete.svg" alt="Delete button" />
        </button>
      </li>
    </ul>
    <div
      class="flex items-center gap-1 font-medium leading-6 text-center text-17 font-compact text-txt"
    >
      К списанию: {{ total }}
      <div class="w-6 h-6"><Coin /></div>
    </div>
    <button
      @click="proceedToCheckout"
      class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
    >
      Далее
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Coin from "./icons/Coin.vue";
import cartStore from "@/store/cart.js";

const cart = cartStore.cart;
const total = computed(() => cartStore.getCartTotal());

const increaseQuantity = (productId) => {
  cartStore.updateQuantity(
    productId,
    cart.items.find((item) => item.product.id === productId).quantity + 1
  );
};

const decreaseQuantity = (productId) => {
  const currentQuantity = cart.items.find(
    (item) => item.product.id === productId
  ).quantity;
  if (currentQuantity > 1) {
    cartStore.updateQuantity(productId, currentQuantity - 1);
  } else {
    cartStore.removeFromCart(productId);
  }
};

const emit = defineEmits("proceedToCheckout");

const proceedToCheckout = () => {
  emit("proceedToCheckout");
};

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};
</script>
