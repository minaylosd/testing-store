<template>
  <div class="w-full overflow-hidden min-w-[280px] rounded-3xl shadow-shadow">
    <div class="relative w-full overflow-hidden h-80">
      <img
        class="absolute z-10 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        :src="`/${product.imgSrc}`"
        :alt="product.name"
      />
      <img
        @click="showDetails(product)"
        src="/icons/search-icon.svg"
        class="absolute z-20 cursor-pointer bottom-4 right-4"
        alt=""
      />
    </div>
    <div class="p-4 bg-white">
      <div class="mb-4 min-h-29">
        <h3 class="mb-3 text-2xl font-medium leading-7 font-wide text-txt">
          {{ product.name }}
        </h3>
        <p class="mb-3 text-sm font-normal font-compact text-greytxt">
          {{ product.description }}
        </p>
        <ul v-if="product.size" class="flex gap-2">
          <li v-for="size in ['s', 'm', 'xl']" :key="size">
            <input
              type="radio"
              :name="`size-${product.id}`"
              :id="`size-${size}-${product.id}`"
              v-model="selectedSize"
              :value="size"
              class="custom-radio"
            />
            <label
              :for="`size-${size}-${product.id}`"
              class="flex items-center justify-center font-normal leading-6 uppercase transition-colors cursor-pointer w-11 h-11 bg-tertiary font-compact text-17 text-txt rounded-2xl"
            >
              {{ size.toUpperCase() }}
            </label>
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-2 mb-3">
        <span class="text-2xl font-medium leading-7 font-wide text-txt">
          {{ product.price }}
        </span>
        <div class="w-6 h-6"><Coin /></div>
      </div>
      <button
        :disabled="!selectedSize && product.size"
        @click="addToCart"
        class="flex items-center justify-center w-full py-2.5 text-2.5 leading-3 font-bold tracking-wider uppercase font-wide text-white rounded-xl bg-brand"
      >
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Coin from "./icons/Coin.vue";
import cartStore from "@/store/cart.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["open-details"]);

const showDetails = (product) => {
  emit("open-details", product);
};

const selectedSize = ref(false); // Default to no size selected

const addToCart = () => {
  // Ensure product has the selected size
  const productWithSize = {
    ...props.product,
    size: selectedSize.value || false, // If size is not selected, set it to false
  };
  cartStore.addToCart(productWithSize);
};
</script>

<style scoped>
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-radio:checked + label {
  background-color: #fff;
}
</style>
