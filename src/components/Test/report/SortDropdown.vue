<template>
  <div>
    <div
      @click="toggleDropdown"
      class="flex items-center justify-between w-full"
    >
      <span class="font-medium leading-6 font-compact text-17 text-txt"
        >Животные</span
      >
      <ChevronDown />
    </div>
    <div v-if="isDropdownOpen" class="flex flex-col gap-3 mt-3">
      <p class="leading-6 font-regular font-compact text-17 text-txt">
        Котенок
      </p>
      <p class="leading-6 font-regular font-compact text-17 text-txt">Щенок</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChevronDown from "@/components/icons/ChevronDown.vue";

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
