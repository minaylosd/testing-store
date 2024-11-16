<template>
  <button class="p-2 rounded-lg bg-tertiary">
    <img
      :src="isActive ? '/icons/stop-btn.svg' : '/icons/play-btn.svg'"
      alt=""
    />
  </button>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
</script>
