<template>
  <div
    class="px-6 pt-4 pb-6 mb-6 rounded-3xl bg-tertiary lg:grid flex flex-col gap-[5%] grid-cols-[50%_45%]"
  >
    <div class="w-full">
      <div class="mb-8">
        <p
          class="inline-block font-medium leading-6 text-black text-17 font-compact"
        >
          Стоимость выполнения всех заданий:
          <span class="items-center inline-block gap-2"
            >570 <span class="inline-block w-6 h-6"> <Coin /></span
          ></span>
        </p>
      </div>
      <div class="mb-3">
        <p class="mb-3 font-medium leading-6 text-black text-17 font-compact">
          Файлы для загрузки
        </p>
        <div class="flex items-center gap-3">
          <button
            class="py-[14px] px-3 md:px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
          >
            <span class="px-2">Инструкция</span>
          </button>

          <button
            class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
          >
            <span class="px-2">Правила</span>
          </button>
        </div>
      </div>
      <div class="mb-3">
        <div class="py-[14px]">
          <div
            class="relative flex w-full h-1 overflow-hidden rounded-sm bg-divider/50"
          >
            <div
              class="absolute left-0 top-0 h-1 w-[10%] bg-brand rounded-sm"
            ></div>
          </div>
        </div>
        <p class="text-xs font-normal text-greytxt font-compact">
          Уже тестируют: 10/100
        </p>
        <p class="mb-3 font-medium leading-6 text-black text-17 font-compact">
          Найдено ошибок: 4
        </p>
        <p
          class="font-normal leading-6 text-17 text-greytxt font-text max-w-100"
        >
          Критичность определяется командой портала после анализа итогов
          тестирования
        </p>
      </div>
    </div>
    <div class="w-full">
      <BarChart :data="chartData" />
    </div>
  </div>
</template>

<script setup>
import Coin from "./icons/Coin.vue";
import BarChart from "./BarChart.vue";

const props = defineProps({
  chartData: Object,
});
</script>
