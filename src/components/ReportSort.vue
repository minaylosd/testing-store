<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="bg-white rounded-2xl py-3 px-4 flex flex-col gap-2.5">
      <SortDropdown />
      <p class="font-medium leading-6 font-compact text-17 text-brand">
        20%(3)
      </p>
    </div>

    <div class="bg-white rounded-2xl py-3 px-4 flex flex-col gap-2.5">
      <SortDropdown />
      <p class="font-medium leading-6 font-compact text-17 text-brand">
        20%(3)
      </p>
    </div>

    <div class="bg-white rounded-2xl py-3 px-4 flex flex-col gap-2.5">
      <SortDropdown />
      <p class="font-medium leading-6 font-compact text-17 text-brand">
        20%(3)
      </p>
    </div>
  </div>
</template>

<script setup>
import SortDropdown from "./SortDropdown.vue";
</script>
