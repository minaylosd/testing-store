<template>
  <div class="grid w-full grid-cols-12 gap-8">
    <div class="col-span-2">
      <DropdownFilter dropdown-type="operation type" />
    </div>

    <div
      class="flex items-center col-span-2 col-start-4 gap-1 p-3 text-sm font-medium font-compact text-txt"
    >
      Дата<img src="/icons/date-icon.svg" alt="" />
    </div>

    <div class="col-start-7 p-3 text-sm font-medium font-compact text-txt">
      Описание
    </div>
  </div>
</template>

<script setup>
import DropdownFilter from "./DropdownFilter.vue";
</script>
