<template>
  <div v-if="stage == 'start'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl">
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Начало
      </p>
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="flex flex-col items-center justify-center h-full grow max-w-[608px]">
      <h1 class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide">
        Отсортируйте каждую карточку в категорию, которая вам кается наиболее
        подходящей
      </h1>

      <p class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt">
        Отсортируйте все карточки по предложенным категориям справа на странице.
      </p>
      <p class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt">
        В этом задании нет правильных или неправильных ответов — расположите карточки по вашему усмотрению.
      </p>
      <p class="mb-6 font-normal leading-6 font-compact text-17 text-txt">
        Время прохождения: <span class="text-brand">1:00 мин</span>
      </p>

      <img class="mb-8" src="/sort-img.svg" alt="" />

      <button @click="startTest"
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand">
        Начать
      </button>
    </div>
  </div>
  <SortDragDrop v-else-if="stage == 'question'" />
</template>

<script setup>
import { ref } from "vue";
import SortDragDrop from "./SortDragDrop.vue";

const stage = ref("start");
const openType = ref(true);
const timer = ref(60000);

const isTestCompleted = ref(false);
const startTest = () => {
  stage.value = "question";
};
</script>
