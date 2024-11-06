<template>
  <div>
    <div class="flex items-center justify-between w-full mb-8">
      <h1 class="font-medium leading-none text-black font-wide text-heading">
        Запуск быстрых UX/UI тестов
      </h1>
      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Создать
      </button>
    </div>

    <div class="flex flex-col px-6 py-3 bg-white rounded-3xl">
      <div class="grid grid-cols-[4fr_5fr_3fr] items-center py-3">
        <div class="text-sm font-medium font-compact text-txt">Название</div>
        <div class="text-sm font-medium font-compact text-txt">Описание</div>
        <div class="text-sm font-medium font-compact text-txt">Статус</div>
      </div>
      <StatusItem
        v-for="(item, index) in props.list"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import StatusItem from "@/components/launch-tests/StatusItem.vue";
const props = defineProps({
  list: Array,
});
</script>
