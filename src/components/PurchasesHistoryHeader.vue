<template>
  <div class="grid w-full gap-6 grid-cols-purchases">
    <div class="p-3 text-sm font-medium font-compact text-txt">ID заказа</div>

    <div class="p-3 text-sm font-medium font-compact text-txt">Товары</div>

    <div class="p-3 text-sm font-medium font-compact text-txt">Стоимость</div>

    <div class="p-3 text-sm font-medium font-compact text-txt">
      Адрес доставки
    </div>

    <div
      class="flex items-center gap-1 p-3 text-sm font-medium font-compact text-txt"
    >
      Дата<img src="/icons/date-icon.svg" alt="" />
    </div>

    <DropdownFilter dropdown-type="status" />
  </div>
</template>

<script setup>
import DropdownFilter from "./DropdownFilter.vue";
</script>
