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
      @completeCheckout="showStatus"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ShoppingCart from "./ShoppingCart.vue";
import CheckoutForm from "./CheckoutForm.vue";
import CheckoutStatus from "./CheckoutStatus.vue";

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

const showStatus = () => {
  view.value = "CheckoutStatus";
};

const currentView = computed(() => {
  switch (view.value) {
    case "ShoppingCart":
      return ShoppingCart;
    case "CheckoutForm":
      return CheckoutForm;
    case "CheckoutStatus":
      return CheckoutStatus;
    default:
      return ShoppingCart;
  }
});
</script>
