<template>
  <div class="grid w-full grid-cols-12 gap-6">
    <div
      class="p-3 text-sm font-medium font-compact text-txt whitespace-nowrap"
    >
      ID заказа
    </div>

    <div class="col-span-3 p-3 text-sm font-medium font-compact text-txt">
      Товары
    </div>

    <div class="col-span-2 p-3 text-sm font-medium font-compact text-txt">
      Стоимость
    </div>

    <div class="col-span-3 p-3 text-sm font-medium font-compact text-txt">
      Адрес доставки
    </div>

    <div
      class="flex items-center gap-1 p-3 text-sm font-medium font-compact text-txt"
    >
      Дата<img src="/icons/date-icon.svg" alt="" />
    </div>

    <div class="flex justify-center col-span-2">
      <DropdownFilter dropdown-type="status" />
    </div>
  </div>
</template>

<script setup>
import DropdownFilter from "./DropdownFilter.vue";
</script>
