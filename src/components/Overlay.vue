<template>
  <div
    @click.self="handleOverlayClick"
    class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40"
  >
    <component
      :is="currentView"
      @proceedToCheckout="showCheckout"
      @close="handleOverlayClick"
      @returnToCart="showCart"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ShoppingCart from "./ShoppingCart.vue";
import CheckoutForm from "./CheckoutForm.vue";

const emit = defineEmits(["close"]);
const view = ref("ShoppingCart");

const handleOverlayClick = () => {
  emit("close");
};

const showCheckout = () => {
  view.value = "CheckoutForm";
};

const showCart = () => {
  view.value = "ShoppingCart";
};

const currentView = computed(() => {
  return view.value === "ShoppingCart" ? ShoppingCart : CheckoutForm;
});
</script>
