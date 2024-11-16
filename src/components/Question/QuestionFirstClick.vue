<template>
  <div
    v-if="stage == 'start'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Начало
      </p>
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div
      class="flex flex-col items-center justify-center h-full grow max-w-128"
    >
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Инструкция
      </h1>

      <p
        class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt"
      >
        Внимательно посмотрите на изображение и выберите область клика
      </p>

      <button
        @click="startTest"
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Начать
      </button>
    </div>
  </div>

  <div
    v-else-if="stage == 'question'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Первый клик
      </p>

      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="relative w-full">
      <img
        class="object-cover w-full h-auto rounded-3xl"
        src="/click.jpg"
        alt=""
      />
      <div class="absolute flex gap-3 -translate-x-1/2 top-48 left-1/2">
        <button class="bg-white p-2.5 rounded-2xl">
          <img src="/icons/click-cross.svg" alt="" />
        </button>

        <button class="bg-brand p-2.5 rounded-2xl">
          <img src="/icons/click-checkmark.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stage = ref("start");

const startTest = () => {
  stage.value = "question";
};
</script>
